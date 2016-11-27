package com.spidlinq.ebengrid.ui.camera;

import android.graphics.Bitmap;
import android.net.Uri;

import com.spidlinq.ebengrid.R;
import com.spidlinq.optimus.base.controller.AbstractController;
import com.spidlinq.optimus.exception.NullIntegrityCheckFailedException;
import com.spidlinq.optimus.ui.activities.camera.OptimusCameraActivity;

import java.io.File;

/**
 * Created by sergio on 3/11/16.
 */

public class EbenGridIntentCameraActivity extends OptimusCameraActivity {

    public static final int CAMERA_PIC_REQUEST = 200;
    public static final int SELECT_FILE1 = 100;

    private File destination;
    private Uri selectedImage;
    public static String selectedPath1 = "NONE";
    public static Bitmap bmpScale;
    public static String imagePath;

    @Override
    protected int getLayout() {
        return R.layout.activity_camera;
    }

    @Override
    protected int getMenuLayout() {
        return NO_ACTIVITY_MENU;
    }

    /*
    @Override
    protected void afterOnCreate() {
        mcamera = (Button) findViewById(R.id.button1);
        mcamera.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {
                String name = "test";
                destination = new File(Environment
                        .getExternalStorageDirectory(), name + ".jpg");

                Intent intent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
                intent.putExtra(MediaStore.EXTRA_OUTPUT,
                        Uri.fromFile(destination));
                startActivityForResult(intent, PICK_Camera_IMAGE);

            }
        });

        mgallery = (Button) findViewById(R.id.button2);
        mgallery.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {
                // TODO Auto-generated method stub
                openGallery(SELECT_FILE1);
            }
        });
    }
    */

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
