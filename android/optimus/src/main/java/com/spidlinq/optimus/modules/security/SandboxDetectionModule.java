package com.spidlinq.optimus.modules.security;

import android.app.Activity;
import android.content.Context;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.pm.Signature;
import android.telephony.TelephonyManager;
import android.util.Base64;
import android.util.Log;

import com.google.android.gms.common.ConnectionResult;
import com.google.android.gms.common.GoogleApiAvailability;

import java.io.DataOutputStream;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.security.MessageDigest;

/**
 * Created by sergio on 18/7/16.
 */
public class SandboxDetectionModule {

    public static final int PLAYS_SERVICES_RESOLUTION = 1234;
    private static final int VALID = 0;
    private static final int INVALID = 1;
    private static final String PLAY_STORE_APP_ID = "com.android.vending";
    private static final int BUFF_LEN = 1024;
    private static final String SIGNATURE = "";
    private static final SandboxDetectionModule instance = new SandboxDetectionModule();
    private static String TAG = SandboxDetectionModule.class.getName();

    private SandboxDetectionModule() {
    }

    public static SandboxDetectionModule getInstance() {
        return instance;
    }

    public String hasGooglePlayServicesInstalled(Activity activity) {

        //return failed result if params are not valid
        if (activity == null) {
            return null;
        }

        GoogleApiAvailability instance = GoogleApiAvailability.getInstance();
        int resultCode = instance.isGooglePlayServicesAvailable(activity);
        if (resultCode != ConnectionResult.SUCCESS) {
            if (instance.isUserResolvableError(resultCode)) {
                return instance.getErrorString(resultCode);
            } else {
                Log.i(TAG, "This device does not support google play services");
                return "This device does not support google play services";
            }
        }
        return null;
    }

    public boolean isVirtualEnvironment(Context c) {
        //check blacklisted imeis
        String imei = getIMEI(c);
        if (imei.equals("000000000000000")) {
            return false;
        }
        boolean a = checkEmulator();
        return a;
    }

    public boolean isRootEnvironment(Context c) {
        return isSuperApkInstalled() || isSuAvailable();
    }

    public boolean isAppTamperedEnvironment(Context c) {
        //Verifying your app's signing certificate at runtime
        boolean a = checkAppSignature(c) == INVALID;
        //Verifying the installer
        boolean b = isPlayStoreInstaller(c);
        boolean d = isDebuggable(c);
        return a && b && d;
    }

    public boolean isSecureEnvironment(Context c) {
        //check for ro.debuggable=1 or ro.secure=0
        try {
            String xposedInstaller = "de.robv.android.xposed.installer";
            boolean installed = isPackageInstalled(xposedInstaller, c);
            return !installed;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }

    private String getIMEI(Context c) {
        TelephonyManager telephonyManager = (TelephonyManager) c.getSystemService(Context.TELEPHONY_SERVICE);
        String imei = telephonyManager.getDeviceId();
        return imei;
    }

    private boolean isSuperApkInstalled() {
        File file = new File("/system/app/Superuser.apk");
        return file.exists();
    }

    private boolean isSuAvailable() {
        String result = runCommand("id");
        System.out.println(result);
        return result.contains("(root)");
    }

    private String runCommand(String... args) throws IllegalArgumentException {
        Process p = null;
        try {
            p = Runtime.getRuntime().exec(args);
            DataOutputStream stdin = new DataOutputStream(p.getOutputStream());
            //from here all commands are executed with su permissions
            //stdin.writeBytes("ls /data\n"); // \n executes the command
            InputStream stdout = p.getInputStream();
            byte[] buffer = new byte[BUFF_LEN];
            int read;
            String out = new String();
            //read method will wait forever if there is nothing in the stream
            //so we need to read it in another way than while((read=stdout.read(buffer))>0)
            while (true) {
                read = stdout.read(buffer);
                out += new String(buffer, 0, read);
                if (read < BUFF_LEN) {
                    //we have read everything
                    break;
                }
            }
            //do something with the output
            return out;
        } catch (IOException e) {
            e.printStackTrace();
        }
        throw new IllegalArgumentException("No command output");
    }

    private boolean isPackageInstalled(String packagename, Context context) {
        PackageManager pm = context.getPackageManager();
        try {
            pm.getPackageInfo(packagename, PackageManager.GET_ACTIVITIES);
            return true;
        } catch (PackageManager.NameNotFoundException e) {
            return false;
        }
    }

    public int checkAppSignature(Context context) {
        try {
            PackageInfo packageInfo = context.getPackageManager().getPackageInfo(
                    context.getPackageName(),
                    PackageManager.GET_SIGNATURES
            );
            for (Signature signature : packageInfo.signatures) {
                byte[] signatureBytes = signature.toByteArray();
                MessageDigest md = MessageDigest.getInstance("SHA");
                md.update(signature.toByteArray());
                final String currentSignature = Base64.encodeToString(md.digest(), Base64.DEFAULT);
                Log.d("REMOVE_ME", "Include this string as a value for SIGNATURE:" + currentSignature);
                //compare signatures
                if (SIGNATURE.equals(currentSignature)) {
                    return VALID;
                }
            }
        } catch (Exception e) {
            //assumes an issue in checking signature., but we let the caller decide on what to do.
        }
        return INVALID;
    }

    public boolean isPlayStoreInstaller(final Context context) {
        final String installer = context.getPackageManager().getInstallerPackageName(context.getPackageName());
        return installer != null && installer.startsWith(PLAY_STORE_APP_ID);
    }

    private String getSystemProperty(String name) throws Exception {
        Class systemPropertyClazz = Class.forName("android.os.SystemProperties");
        return (String) systemPropertyClazz.getMethod(
                "get",
                new Class[]{String.class}).invoke(systemPropertyClazz, name);
    }

    private boolean checkEmulator() {
        try {
            boolean goldfish = getSystemProperty("ro.hardware").contains("goldfish");
            boolean emu = getSystemProperty("ro.kernel.qemu").length() > 0;
            boolean sdk = getSystemProperty("ro.product.model").equals("sdk");
            if (emu || goldfish || sdk) {
                return true;
            }
        } catch (Exception e) {
        }
        return false;
    }

    public boolean isDebuggable(Context context) {
        return (context.getApplicationInfo().flags & ApplicationInfo.FLAG_DEBUGGABLE) != 0;
    }
}
