package com.spidlinq.ebengrid.ui;

import android.graphics.Typeface;
import android.view.View;
import android.widget.TextView;

import com.spidlinq.ebengrid.R;
import com.spidlinq.optimus.ui.activities.OptimusActivity;
import com.spidlinq.optimus.ui.helper.OptimusViewCallback;

/**
 * Created by sergio on 3/11/16.
 */
public abstract class EbenGridActivity extends OptimusActivity {

    @Override
    protected void beforeOnCreate() {
        fontCache.setFontFolder("fonts");
        OptimusViewCallback renderCallback = new OptimusViewCallback() {
            @Override
            protected void renderView(View v) {
                TextView title = (TextView) v.findViewById(R.id.textViewActionBarTitle);
                Typeface font = fontCache.getTypeface("Righteous-Regular.ttf", getActivity());
                title.setTypeface(font);
            }
        };
        setCustomActionBar(R.layout.actionbar, renderCallback);
        setActionBarColor(resources.getColor(R.color.colorPrimary));
    }

    @Override
    public int getLogoId() {
        return R.mipmap.ic_launcher;
    }

    @Override
    public int getLogoSize() {
        return 100;
    }

    @Override
    public boolean showLogoOnHeadBar() {
        return true;
    }
}

