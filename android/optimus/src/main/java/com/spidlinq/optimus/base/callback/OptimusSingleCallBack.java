package com.spidlinq.optimus.base.callback;

/**
 * Created by sergio on 2/6/16.
 */
public abstract class OptimusSingleCallBack extends AbstractOptimusCallback {

    public void execute(boolean condition) {
        if (condition) {
            onCondition();
        }
    }

    public abstract void onCondition();
}
