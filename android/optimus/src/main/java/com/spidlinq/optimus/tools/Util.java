package com.spidlinq.optimus.tools;

import android.app.Activity;
import android.content.Context;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.net.wifi.WifiInfo;
import android.net.wifi.WifiManager;
import android.os.Build;
import android.provider.Settings;
import android.telephony.TelephonyManager;
import android.util.Log;

/**
 * Created by sergio on 2/6/16.
 */
public class Util {

    public static boolean detectEmulatorPresence(Context c) {
        return
                Build.FINGERPRINT.startsWith("generic") ||
                        "google_sdk".equals(Build.PRODUCT) ||
                        "sdk".equals(Build.PRODUCT) ||
                        "sdk_x86".equals(Build.PRODUCT) ||
                        "vbox86p".equals(Build.PRODUCT) ||
                        "goldfish".equals(Build.HARDWARE) || checkCarrier(c);
    }

    private static boolean checkCarrier(Context c) {
        TelephonyManager tm = (TelephonyManager) c.getSystemService(Context.TELEPHONY_SERVICE);
        String networkOperator = tm.getNetworkOperatorName();
        return "Android".equals(networkOperator);
    }

    public static String getUUIDMAC(Context c) {
        String id;
        TelephonyManager tManager = (TelephonyManager) c.getSystemService(Context.TELEPHONY_SERVICE);
        String uuid = tManager.getDeviceId();
        WifiManager manager = (WifiManager) c.getSystemService(Context.WIFI_SERVICE);
        WifiInfo info = manager.getConnectionInfo();
        String macAddress = info.getMacAddress();
        id = uuid + " " + macAddress;
        Log.i("Device identifier: ", id);
        return id;
    }

    public static String getUUIDMAC(Activity mainActivity) {
        return getUUIDMAC(mainActivity.getApplicationContext());
    }

    public static boolean checkSDExists() {
        return android.os.Environment.getExternalStorageState().equals(android.os.Environment.MEDIA_MOUNTED);
    }

    public static String getDeviceId(Activity activity) {
        return Settings.Secure.getString(activity.getBaseContext().getContentResolver(), Settings.Secure.ANDROID_ID);
    }

    public static boolean isWifior4G(Activity activity) {

        ConnectivityManager connectivityManager =
                (ConnectivityManager) activity.getSystemService(Context.CONNECTIVITY_SERVICE);

        NetworkInfo wifiInfo = connectivityManager.getNetworkInfo(ConnectivityManager.TYPE_WIFI);
        NetworkInfo mobileInfo = connectivityManager.getNetworkInfo(ConnectivityManager.TYPE_MOBILE);
        boolean wifiConnected = wifiInfo.getState() == NetworkInfo.State.CONNECTED;
        boolean mobileConnected = mobileInfo.getState() == NetworkInfo.State.CONNECTED;
        return wifiConnected || mobileConnected;
    }

    public static String getCarrierName(Context c) {
        TelephonyManager manager = (TelephonyManager) c.getSystemService(Context.TELEPHONY_SERVICE);
        return manager.getNetworkOperatorName();
    }

    public static boolean hasValidCarrier(Context c) {
        return getCarrierName(c) != null && getCarrierName(c).trim().length() > 0;
    }

    public static String obtenerIMEI(Context c) {
        TelephonyManager telephonyManager = (TelephonyManager) c.getSystemService(Context.TELEPHONY_SERVICE);
        return telephonyManager.getDeviceId();
    }

    public static String obtenerIMSI(Context c) {
        TelephonyManager telephonyManager = (TelephonyManager) c.getSystemService(Context.TELEPHONY_SERVICE);
        return telephonyManager.getSimSerialNumber();
    }

    public boolean isWifiConnected(Context context) {
        return ((ConnectivityManager) context.getSystemService(Context.CONNECTIVITY_SERVICE)).getNetworkInfo(1).isConnected();
    }
}
