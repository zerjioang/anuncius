package com.spidlinq.optimus.tools;

import android.app.Activity;
import android.content.Context;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.os.Build;
import android.support.v4.app.ActivityCompat;

import com.spidlinq.optimus.exception.IntegerValueNotInRangeException;
import com.spidlinq.optimus.exception.NullIntegrityCheckFailedException;

/**
 * Created by sergio on 2/6/16.
 */
public final class OptimusSecurity {

    public static final int ANDROID_M = 23;

    private static final boolean NULL_CHECK_FAILED = false;
    private static final boolean NULL_CHECK_PASSED = true;

    public static boolean checkForNullValue(Object... data) throws NullIntegrityCheckFailedException {
        boolean count = true;
        for (Object o : data)
            count &= checkForNullValue(o);
        if (count == NULL_CHECK_FAILED)
            throw new NullIntegrityCheckFailedException("One or more elements are null");
        return NULL_CHECK_PASSED;
    }

    public static boolean checkForNullValue(Object data) throws NullIntegrityCheckFailedException {
        boolean value = data != null;
        if (value == NULL_CHECK_FAILED)
            throw new NullIntegrityCheckFailedException("Element is null");
        return NULL_CHECK_PASSED;
    }

    public static void checkIntegerValueBiggerThan(int valueToCheck, int minvalue) throws IntegerValueNotInRangeException {
        if(!(valueToCheck>minvalue)){
            throw new IntegerValueNotInRangeException("Required value must be bigger than "+minvalue);
        }
    }

    public static void checkIntegerValueLessThan(int valueToCheck, int maxvalue) throws IntegerValueNotInRangeException {
        if(!(valueToCheck<=maxvalue)){
            throw new IntegerValueNotInRangeException("Required value must be less than "+maxvalue);
        }
    }

    public static void checkIntegerValueBiggerOrEqualsThan(int valueToCheck, int minvalue) throws IntegerValueNotInRangeException {
        if(!(valueToCheck>=minvalue)){
            throw new IntegerValueNotInRangeException("Required value must be bigger or equals than "+minvalue);
        }
    }

    public static void checkIntegerValueLessOrEqualsThan(int valueToCheck, int maxvalue) throws IntegerValueNotInRangeException {
        if(!(valueToCheck<=maxvalue)){
            throw new IntegerValueNotInRangeException("Required value must be less or equals than "+maxvalue);
        }
    }

    public static void checkIntegerValueEquals(int valueToCheck, int value) throws IntegerValueNotInRangeException {
        if(valueToCheck!=value){
            throw new IntegerValueNotInRangeException("Required value must be "+value);
        }
    }

    public static boolean checkManifestPermission(Context context, String permissionName) {
        final String packageName = context.getPackageName();
        try {
            final PackageInfo packageInfo = context.getPackageManager()
                    .getPackageInfo(packageName, PackageManager.GET_PERMISSIONS);
            final String[] declaredPermisisons = packageInfo.requestedPermissions;
            if (declaredPermisisons != null && declaredPermisisons.length > 0) {
                for (String p : declaredPermisisons) {
                    if (p.equals(permissionName)) {
                        return true;
                    }
                }
            }
        } catch (PackageManager.NameNotFoundException e) {
            //error;
        }
        return false;
    }

    public static void requestRuntimePermission(Activity activity, String permission, int code) {
        ActivityCompat.requestPermissions(
                activity,
                new String[]{permission},
                code
        );
    }

    public static boolean checkRuntimePermission(Activity activity, String permission) {
        if(Build.VERSION.SDK_INT >= ANDROID_M)
            return activity.shouldShowRequestPermissionRationale(permission);
        return false;
    }
}
