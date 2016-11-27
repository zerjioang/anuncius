package com.spidlinq.optimus.ui.activities;

import android.content.Context;
import android.content.Intent;
import android.content.res.Resources;
import android.graphics.drawable.ColorDrawable;
import android.os.AsyncTask;
import android.os.Build;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.design.widget.Snackbar;
import android.support.v7.app.ActionBar;
import android.support.v7.app.AppCompatActivity;
import android.text.Spannable;
import android.text.SpannableString;
import android.text.style.ForegroundColorSpan;
import android.view.LayoutInflater;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;

import com.spidlinq.optimus.base.controller.AbstractController;
import com.spidlinq.optimus.exception.NullIntegrityCheckFailedException;
import com.spidlinq.optimus.tools.font.OptimusFontCache;
import com.spidlinq.optimus.ui.helper.OptimusViewCallback;

/**
 * Created by sergio on 2/6/16.
 */
public abstract class OptimusActivity extends AppCompatActivity {

    public static final int NO_ACTIVITY_MENU = -1;
    public static final int NO_LOGO = -1;
    public static boolean CLOSE_CURRENT_ACTIVITY = true;
    protected static boolean NO_CLOSE_CURRENT_ACTIVITY = false;

    //singleton handlers
    protected static final OptimusFontCache fontCache = OptimusFontCache.getInstance();

    protected AbstractController controller;
    protected Resources resources;
    private ActionBar actionBar;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        //call super
        super.onCreate(savedInstanceState);
        //load class variables
        resources = getResources();
        //get user interface interesting objects
        actionBar = getSupportActionBar();
        beforeOnCreate();
        //set initial view
        setContentView(getLayout());

        //load interface on separate thread
        AsyncTask<Void, Void, Void> loadInterfaceTask = new AsyncTask<Void, Void, Void>() {

            @Override
            protected Void doInBackground(Void... voids) {
                //link UI elements
                //set controller
                try {
                    controller = getAbstractController();
                } catch (NullIntegrityCheckFailedException e) {
                    e.printStackTrace();
                    //TODO informar por pantalla al usuario de un fallo critico
                }
                return null;
            }

            @Override
            protected void onPostExecute(Void aVoid) {
                super.onPostExecute(aVoid);
                //Todo check threats UI
                //refresh user interface in its ui thread
                getActivity().runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        loadUIElements();
                        afterOnCreate();
                    }
                });
            }
        };
        loadInterfaceTask.execute();
    }

    private void loadUIElements() {
        //set menu if enabled
        if(controller!=null){
            controller.loadUIElements();
        }
    }

    protected abstract int getLayout();

    protected abstract int getMenuLayout();

    public void openActivity(Class c, boolean closeCaller) {
        Intent t = new Intent(this, c);
        this.startActivity(t);
        if (closeCaller == CLOSE_CURRENT_ACTIVITY) {
            this.finish();
        }
    }

    public void openActivity(Class c) {
        Intent t = new Intent(this, c);
        this.startActivity(t);
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        int menuValue = getMenuLayout();
        if (menuValue != NO_ACTIVITY_MENU) {
            MenuInflater inflater = getMenuInflater();
            inflater.inflate(menuValue, menu);
            return true;
        }
        return false;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        if (controller != null)
            return controller.onOptionsItemSelected(item);
        return false;
    }

    @Override
    protected void onResume() {
        super.onResume();
        if(controller!=null) {
            controller.onResume();
        }
    }

    @Override
    protected void onPause() {
        super.onPause();
        if(controller!=null) {
            controller.onPause();
        }
    }

    protected abstract void afterOnCreate();

    protected abstract void beforeOnCreate();

    protected abstract AbstractController getAbstractController() throws NullIntegrityCheckFailedException;

    protected abstract <T> T getThisController();

    protected View loadView(int layoutId) {
        return LayoutInflater.from(this).inflate(layoutId, null, false);
    }

    public abstract int getLogoId();

    public abstract int getLogoSize();

    public abstract boolean showLogoOnHeadBar();

    public abstract String getTag();

    //helper methods

    protected void visualLog(View view, String str) {
        if (view != null && str != null) {
            Snackbar.make(view, str, Snackbar.LENGTH_LONG).show();
        }
    }

    protected void setStatusBarColor(int color) {
        // finally change the color
        if(Build.VERSION.SDK_INT >= 21){
            Window window = this.getWindow();
            // clear FLAG_TRANSLUCENT_STATUS flag:
            window.clearFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS);
            // add FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS flag to the window
            window.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
            window.setStatusBarColor(color);
        }
    }

    protected void setActionBarTextColor(int color) {
        if(actionBar!=null){
            CharSequence title = actionBar.getTitle();
            if(title==null) {
                title = "";
            }
            Spannable text = new SpannableString(title);
            text.setSpan(new ForegroundColorSpan(color), 0, text.length(), Spannable.SPAN_INCLUSIVE_INCLUSIVE);
            actionBar.setTitle(text);
        }
    }

    protected void setActionBarColor(int color) {
        if(actionBar!=null){
            actionBar.setBackgroundDrawable(new ColorDrawable(color));
        }
    }

    protected void setCustomActionBar(int layout, OptimusViewCallback viewCallback) {
        if(layout!=-1 && actionBar!=null){
            actionBar.setDisplayShowCustomEnabled(true);
            actionBar.setDisplayShowTitleEnabled(false);

            LayoutInflater inflator = (LayoutInflater) this .getSystemService(Context.LAYOUT_INFLATER_SERVICE);
            View v = inflator.inflate(layout, null);

            viewCallback.render(v);

            actionBar.setCustomView(v);
        }
    }

    protected OptimusActivity getActivity(){
        return this;
    }

    public void stop(int millis) {
        //add lag
        try {
            Thread.sleep(millis);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public View getRootView() {
        return findViewById(android.R.id.content);
    }
}
