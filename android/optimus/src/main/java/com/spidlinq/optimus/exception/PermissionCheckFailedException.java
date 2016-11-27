package com.spidlinq.optimus.exception;

/**
 * Created by sergio on 2/6/16.
 */
public class PermissionCheckFailedException extends OptimusSecurityException {

    public PermissionCheckFailedException(String message) {
        super(message);
    }
}
