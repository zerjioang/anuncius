package com.spidlinq.optimus.base.callback;

/**
 * Created by sergio on 2/6/16.
 */
public abstract class OptimusBinaryCallBack extends AbstractOptimusCallback {

    public void execute(boolean condition) {
        if (condition) {
            onTrueCondition();
        } else {
            onFalseCondition();
        }
    }

    public abstract void onTrueCondition();

    public abstract void onFalseCondition();
}
