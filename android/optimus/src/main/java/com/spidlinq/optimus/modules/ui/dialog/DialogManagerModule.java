package com.spidlinq.optimus.modules.ui.dialog;

import android.app.Activity;
import android.app.ProgressDialog;
import android.content.DialogInterface;
import android.support.v7.app.AlertDialog;

/**
 * Created by .local on 20/07/2016.
 */
public class DialogManagerModule {

    private static DialogManagerModule ourInstance = new DialogManagerModule();

    private DialogManagerModule() {
    }

    public static DialogManagerModule getInstance() {
        return ourInstance;
    }

    public static ProgressDialog simpleIndeterminateDialog(Activity activity, String title, String message) {
        ProgressDialog pd = new ProgressDialog(activity);
        if (title != null) {
            pd.setTitle(title);
        }
        if (message != null) {
            pd.setMessage(message);
        }
        pd.setCancelable(true);
        pd.setIndeterminate(true);
        return pd;
    }

    public AlertDialog showDialog(Activity activity, String title, String message, final DialogOptions options) {
        final AlertDialog.Builder builder = new AlertDialog.Builder(activity);

        if (message != null) {
            builder.setMessage(message);
        }
        if (title != null) {
            builder.setTitle(title);
        }

        if (options.isPositiveButton()) {
            builder.setPositiveButton(options.getPositiveButtonText(), new DialogInterface.OnClickListener() {
                public void onClick(DialogInterface dialog, int id) {
                    options.callPositiveButtonAction(dialog, id);
                }
            });
        }
        if (options.isNegativeButton()) {
            builder.setNegativeButton(options.getNegativeButtonText(), new DialogInterface.OnClickListener() {
                public void onClick(DialogInterface dialog, int id) {
                    options.callNegativeButtonAction(dialog, id);
                }
            });
        }
        // Create the AlertDialog object and return it
        return builder.create();
    }

    public AlertDialog showSimpleDialog(final Activity activity, String title, String message, final DialogBehaviour action) {
        final AlertDialog.Builder builder = new AlertDialog.Builder(activity);
        if (message != null) {
            builder.setMessage(message);
        }
        if (title != null) {
            builder.setTitle(title);
        }
        //dismiss button
        builder.setPositiveButton(android.R.string.ok, new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface dialog, int id) {
                action.callback(activity, dialog, id);
            }
        });
        // Create the AlertDialog object and return it
        return builder.create();
    }

    public AlertDialog showSimpleDialog(Activity activity, String title, String message) {
        return showSimpleDialog(activity, title, message, DialogBehaviour.DO_NOTHING);
    }
}
