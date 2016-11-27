package com.spidlinq.optimus.modules.security;

import android.content.Context;

import java.io.File;


/**
 * Created by sergio on 23/2/15
 */
public class RootCheckModule {

    private static RootCheckModule rcm;
    private Context context;

    private RootCheckModule(Context context) {
        this.context = context;
    }

    public static RootCheckModule getInstance(Context context) {
        if (rcm == null) {
            rcm = new RootCheckModule(context);
        }
        return rcm;
    }

    //metodos de la clase;

    /**
     * Checks if the device is rooted.
     *
     * @return <code>true</code> if the device is rooted, <code>false</code> otherwise.
     */
    public boolean isRooted() {


        // get from build info
        String buildTags = android.os.Build.TAGS;
        if (buildTags != null && buildTags.contains("test-keys")) {
            return true;
        }

        // try executing commands
        return isRootedDevice();
    }

    private boolean findBinary(String binaryName) {
        boolean found = false;

        String[] places = {"/sbin/", "/system/bin/", "/system/xbin/",
                "/data/local/xbin/", "/data/local/bin/",
                "/system/sd/xbin/", "/system/bin/failsafe/", "/data/local/"};
        for (String where : places) {
            if (new File(where + binaryName).exists()) {
                found = true;
                break;
            }
        }

        return found;
    }

    public boolean isRootedDevice() {
        return findBinary("su");
    }

}
