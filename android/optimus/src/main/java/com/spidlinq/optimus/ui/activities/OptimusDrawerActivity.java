package com.spidlinq.optimus.ui.activities;

import android.support.design.widget.NavigationView;
import android.support.v4.widget.DrawerLayout;

/**
 * Created by sergio on 2/6/16.
 */
public abstract class OptimusDrawerActivity extends OptimusActivity implements NavigationView.OnNavigationItemSelectedListener {

    protected DrawerLayout mDrawerLayout;
    protected NavigationView navigationView;

    @Override
    protected void afterOnCreate() {
        //init navigation drawer
        // Create Navigation drawer and inflate layout
        navigationView = (NavigationView) findViewById(getNavigationViewId());
        mDrawerLayout = (DrawerLayout) findViewById(getDrawerLayoutId());
        if (mDrawerLayout != null) {
            // Set behavior of Navigation drawer
            if (navigationView != null) {
                navigationView.setNavigationItemSelectedListener(getNavigationItemListener());
            }
        }
    }

    protected abstract NavigationView.OnNavigationItemSelectedListener getNavigationItemListener();

    protected abstract int getNavigationViewId();

    protected abstract int getDrawerLayoutId();
}
