package com.spidlinq.optimus.ui.helper;

import android.view.View;

/**
 * Created by sergio on 3/11/16.
 */

public abstract class OptimusViewCallback {

    public void render(View v){
        if(v!=null){
            renderView(v);
        }
    }
    protected abstract void renderView(View v);
}
