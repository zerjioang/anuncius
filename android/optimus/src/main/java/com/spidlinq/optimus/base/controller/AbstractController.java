package com.spidlinq.optimus.base.controller;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.drawable.BitmapDrawable;
import android.graphics.drawable.Drawable;
import android.support.v7.app.ActionBar;
import android.view.MenuItem;
import android.view.View;

import com.spidlinq.optimus.exception.NullIntegrityCheckFailedException;
import com.spidlinq.optimus.modules.security.SandboxDetectionModule;
import com.spidlinq.optimus.modules.ui.SnackBarManager;
import com.spidlinq.optimus.modules.ui.dialog.DialogManagerModule;
import com.spidlinq.optimus.tools.OptimusSecurity;
import com.spidlinq.optimus.ui.activities.OptimusActivity;

/**
 * Created by sergio on 2/6/16.
 */
public abstract class AbstractController {

    protected static final SandboxDetectionModule sandbox = SandboxDetectionModule.getInstance();
    protected static final DialogManagerModule dialogManager = DialogManagerModule.getInstance();
    protected static final SnackBarManager snackbarManager = SnackBarManager.getInstance();
    protected final OptimusActivity activity;

    public AbstractController(OptimusActivity activity) throws NullIntegrityCheckFailedException {
        OptimusSecurity.checkForNullValue(activity);
        this.activity = activity;
    }

    public OptimusActivity getThisActivity() {
        return activity;
    }

    public abstract String getActivityTag();

    public void closeActivity() {
        activity.finish();
    }

    public abstract void loadUIElements();

    public abstract void onResume();

    public abstract void onPause();

    public abstract boolean onOptionsItemSelected(MenuItem item);

    public void showAppIconOnActionBar() {
        ActionBar actionBar = activity.getSupportActionBar();
        if (actionBar != null) {
            Drawable logo = getLogoResized(activity.getLogoId(), activity.getLogoSize());
            actionBar.setLogo(logo);
            actionBar.setDisplayUseLogoEnabled(true);
            actionBar.setDisplayShowHomeEnabled(true);
        }
    }

    private Drawable getLogoResized(int logoId, int maxResolution) {
        //Converting drawable into bitmap
        Bitmap bmpSource = BitmapFactory.decodeResource(activity.getResources(), logoId);
        int iWidth = bmpSource.getWidth();
        int iHeight = bmpSource.getHeight();
        int newWidth = iWidth;
        int newHeight = iHeight;
        float rate = 0.0f;

        if (iWidth > iHeight) {
            if (maxResolution < iWidth) {
                rate = maxResolution / (float) iWidth;
                newHeight = (int) (iHeight * rate);
                newWidth = maxResolution;
            }
        } else {
            if (maxResolution < iHeight) {
                rate = maxResolution / (float) iHeight;
                newWidth = (int) (iWidth * rate);
                newHeight = maxResolution;
            }
        }

        Bitmap finalBitMap = Bitmap.createScaledBitmap(bmpSource, newWidth, newHeight, true);
        //Converting bitmap into drawable
        Drawable d = new BitmapDrawable(activity.getResources(), finalBitMap);
        return d;
    }

    //herlper methods

    protected View findViewById(int id) {
        return activity.findViewById(id);
    }

    protected AbstractController getThisController() {
        return this;
    }
}
