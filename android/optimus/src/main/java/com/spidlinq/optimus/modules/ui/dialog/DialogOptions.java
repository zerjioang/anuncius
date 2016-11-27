package com.spidlinq.optimus.modules.ui.dialog;

import android.content.DialogInterface;

/**
 * Created by .local on 20/07/2016.
 */
public class DialogOptions {
    private boolean positiveButton;
    private int positiveButtonText;
    private boolean negativeButton;
    private int negativeButtonText;

    public boolean isPositiveButton() {
        return positiveButton;
    }

    public void setPositiveButton(boolean positiveButton) {
        this.positiveButton = positiveButton;
    }

    public int getPositiveButtonText() {
        return positiveButtonText;
    }

    public void setPositiveButtonText(int positiveButtonText) {
        this.positiveButtonText = positiveButtonText;
    }

    public void callPositiveButtonAction(DialogInterface dialog, int id) {

    }

    public boolean isNegativeButton() {
        return negativeButton;
    }

    public void setNegativeButton(boolean negativeButton) {
        this.negativeButton = negativeButton;
    }

    public int getNegativeButtonText() {
        return negativeButtonText;
    }

    public void setNegativeButtonText(int negativeButtonText) {
        this.negativeButtonText = negativeButtonText;
    }

    public void callNegativeButtonAction(DialogInterface dialog, int id) {

    }
}
