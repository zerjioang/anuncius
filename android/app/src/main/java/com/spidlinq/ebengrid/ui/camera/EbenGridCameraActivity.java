package com.spidlinq.ebengrid.ui.camera;

import com.spidlinq.ebengrid.R;
import com.spidlinq.optimus.base.controller.AbstractController;
import com.spidlinq.optimus.exception.NullIntegrityCheckFailedException;
import com.spidlinq.optimus.ui.activities.camera.OptimusCameraActivity;

/**
 * Created by sergio on 3/11/16.
 */

public class EbenGridCameraActivity extends OptimusCameraActivity {

    @Override
    protected int getLayout() {
        return R.layout.activity_camera;
    }

    @Override
    protected int getMenuLayout() {
        return NO_ACTIVITY_MENU;
    }

    @Override
    protected void afterOnCreate() {

    }

    @Override
    protected void beforeOnCreate() {

    }

    @Override
    protected AbstractController getAbstractController() throws NullIntegrityCheckFailedException {
        return null;
    }

    @Override
    protected <T> T getThisController() {
        return null;
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
}
