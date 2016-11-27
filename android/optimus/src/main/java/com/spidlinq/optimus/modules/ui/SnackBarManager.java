package com.spidlinq.optimus.modules.ui;

import android.support.design.widget.Snackbar;
import android.view.View;

/**
 * Created by sergio on 21/7/16.
 */
public class SnackBarManager {

    private final static SnackBarManager instance = new SnackBarManager();


    public SnackBarManager() {
    }

    public static SnackBarManager getInstance() {
        return instance;
    }

    public void simple(View view, String text) {
        Snackbar snackbar = Snackbar.make(view, text, Snackbar.LENGTH_LONG);
        snackbar.show();
    }
}
