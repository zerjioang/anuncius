package com.spidlinq.optimus.ui.activities.launcher;

import android.os.AsyncTask;
import android.os.Bundle;
import android.support.annotation.Nullable;

import com.spidlinq.optimus.ui.activities.IPieceOfCode;
import com.spidlinq.optimus.ui.activities.OptimusActivity;

/**
 * Created by sergio on 22/4/16.
 */
public abstract class LauncherActivity extends OptimusActivity {

    protected abstract IPieceOfCode getInitialCode();

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        loadAppInitialData(getInitialCode());
    }

    private void loadAppInitialData(final IPieceOfCode code) {
        new AsyncTask<Void, Void, Void>() {
            @Override
            protected Void doInBackground(Void... params) {
                if (code != null)
                    code.doit();
                return null;
            }
        }.execute();
    }
}
