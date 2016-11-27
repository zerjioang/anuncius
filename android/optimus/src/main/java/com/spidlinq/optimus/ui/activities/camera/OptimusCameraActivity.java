package com.spidlinq.optimus.ui.activities.camera;

import android.content.Context;
import android.content.pm.PackageManager;
import android.hardware.Camera;

import com.spidlinq.optimus.ui.activities.OptimusActivity;

public abstract class OptimusCameraActivity extends OptimusActivity {

    private CameraHandler camerHandler;

    @Override
    protected void afterOnCreate() {
        camerHandler = new CameraHandler(this);
        camerHandler.safeCameraOpen(0);
    }

    @Override
    protected int getMenuLayout() {
        return NO_ACTIVITY_MENU;
    }

    @Override
    public int getLogoId() {
        return NO_LOGO;
    }

    @Override
    public int getLogoSize() {
        return 0;
    }

    @Override
    public boolean showLogoOnHeadBar() {
        return false;
    }

    @Override
    public String getTag() {
        return this.getClass().getName();
    }


    /**
     * Camera related methods
     */

    /** Check if this device has a camera */
    protected boolean checkCameraHardware(Context context) {
        return context.getPackageManager().hasSystemFeature(PackageManager.FEATURE_CAMERA);
    }

    /** A safe way to get an instance of the Camera object. */
    protected Camera getCameraInstance(){
        Camera c = null;
        try {
            c = Camera.open(); // attempt to get a Camera instance
        }
        catch (Exception e){
            // Camera is not available (in use or does not exist)
        }
        return c; // returns null if camera is unavailable
    }
}
