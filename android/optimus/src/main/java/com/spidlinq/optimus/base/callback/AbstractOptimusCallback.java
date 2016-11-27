package com.spidlinq.optimus.base.callback;

/**
 * Created by sergio on 2/6/16.
 */
public abstract class AbstractOptimusCallback {

    private boolean locked;

    public boolean isLocked() {
        return locked;
    }

    public void setLocked(boolean locked) {
        this.locked = locked;
    }

    public boolean continueFlow() {
        return !locked;
    }
}
