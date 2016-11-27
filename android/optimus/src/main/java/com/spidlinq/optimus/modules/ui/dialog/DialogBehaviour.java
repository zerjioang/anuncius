package com.spidlinq.optimus.modules.ui.dialog;

import android.app.Activity;
import android.content.DialogInterface;

/**
 * Created by sergio on 21/7/16.
 */
public enum DialogBehaviour {

    DO_NOTHING {
        @Override
        public void callback(Activity activity, DialogInterface dialog, int id) {
            dialog.dismiss();
        }
    }, CLOSE_ACTIVITY {
        @Override
        public void callback(Activity activity, DialogInterface dialog, int id) {
            dialog.dismiss();
            activity.finish();
        }
    }, CUSTOM_CALLBACK {
        @Override
        public void callback(Activity activity, DialogInterface dialog, int id) {
            //TODO implement custom callback
            dialog.dismiss();
        }
    };

    public abstract void callback(Activity activity, DialogInterface dialog, int id);
}
