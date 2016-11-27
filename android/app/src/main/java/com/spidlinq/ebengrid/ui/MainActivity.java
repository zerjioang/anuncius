package com.spidlinq.ebengrid.ui;

import android.Manifest;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.graphics.Bitmap;
import android.os.Build;
import android.provider.MediaStore;
import android.support.v7.app.AlertDialog;
import android.util.Log;
import android.view.MenuItem;

import com.spidlinq.ebengrid.R;
import com.spidlinq.ebengrid.ui.profile.EbenGridUserProfileActivity;
import com.spidlinq.optimus.base.controller.AbstractController;
import com.spidlinq.optimus.exception.NullIntegrityCheckFailedException;
import com.spidlinq.optimus.tools.OptimusSecurity;

import static com.spidlinq.ebengrid.ui.camera.EbenGridIntentCameraActivity.CAMERA_PIC_REQUEST;

public class MainActivity extends EbenGridActivity {

    private static final int REQUEST_PERMISSION_CODE = 12;

    @Override
    protected int getLayout() {
        return R.layout.activity_main;
    }

    @Override
    protected int getMenuLayout() {
        return R.menu.menu_main;
    }

    @Override
    protected void afterOnCreate() {
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
    public String getTag() {
        return "MainActivity";
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()) {
            case R.id.actionBarCamera:
                // User chose the "Settings" item, show the app settings UI...
                openCamera();
                return true;
            case R.id.actionBarProfile:
                // User chose the "Favorite" action, mark the current item
                // as a favorite...
                openProfile();
                return true;
            case R.id.actionBarSettings:
                openSettings();
                return true;
            default:
                // If we got here, the user's action was not recognized.
                // Invoke the superclass to handle it.
                return super.onOptionsItemSelected(item);

        }
    }

    private void openSettings() {
        openActivity(SettingsActivity.class);
    }

    private void openProfile() {
        openActivity(EbenGridUserProfileActivity.class);
    }

    private void openCamera() {
        if(Build.VERSION.SDK_INT >= OptimusSecurity.ANDROID_M){
            boolean allowed = OptimusSecurity.checkRuntimePermission(this, Manifest.permission.CAMERA);
            if(allowed){
                showMessageDialog("You still have to develop built in camera functionality :)");
            }
            else{
                //request
                OptimusSecurity.requestRuntimePermission(this, Manifest.permission.CAMERA, REQUEST_PERMISSION_CODE);
            }
        }
        else{
            boolean permissionGranted = OptimusSecurity.checkManifestPermission(this, Manifest.permission.CAMERA);
            if(permissionGranted){
                Intent takePictureIntent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
                startActivityForResult(takePictureIntent, CAMERA_PIC_REQUEST);
            }
            else{
                //no camera permission declared
                showMessageDialog("Access to device camera was revoked");
            }
        }
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String permissions[], int[] grantResults) {
        switch (requestCode) {
            case REQUEST_PERMISSION_CODE: {
                if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                    //access to camera granted
                    showMessageDialog("You still have to develop built in camera functionality :)");
                } else {
                    //access to camera revoked
                    showMessageDialog("Access to device camera was revoked");
                }
                break;
            }
        }
    }

    private void showMessageDialog(String message) {
        new AlertDialog.Builder(this)
                .setMessage(message)
                .setPositiveButton(android.R.string.ok, new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {
                        dialogInterface.dismiss();
                    }
                })
                .create()
                .show();
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode == CAMERA_PIC_REQUEST) {
            if (resultCode == RESULT_OK) {
                Log.d("capture", "result ok");
                Bitmap imageData = (Bitmap) data.getExtras().get("data");
                //ImageView image = (ImageView) findViewById(R.id.imageView1);
                //image.setImageBitmap(imageData);
            } else if (resultCode == RESULT_CANCELED){
                Log.d("capture", "result cancelled");
            }
        }
    }
}
