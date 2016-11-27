package com.spidlinq.optimus.tools;

import android.content.Context;
import android.content.pm.PackageManager;

import com.spidlinq.optimus.exception.NullIntegrityCheckFailedException;
import com.spidlinq.optimus.exception.PermissionCheckFailedException;

/**
 * Created by sergio on 2/6/16.
 */
public final class PermissionTool {

    public static boolean checkPermissionStatus(final String permission, final Context context) throws PermissionCheckFailedException {
        try {
            OptimusSecurity.checkForNullValue(permission, context);
            int res = context.checkCallingOrSelfPermission(permission);
            return (res == PackageManager.PERMISSION_GRANTED);
        } catch (NullIntegrityCheckFailedException e) {
            throw new PermissionCheckFailedException(e.getMessage());
        }
    }
}
