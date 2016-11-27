package com.spidlinq.optimus.ui;

import android.content.Context;
import android.content.res.Resources;
import android.graphics.drawable.Drawable;
import android.os.Build;

import com.spidlinq.optimus.exception.IntegerValueNotInRangeException;
import com.spidlinq.optimus.exception.InvalidMethodParametersException;
import com.spidlinq.optimus.exception.NullIntegrityCheckFailedException;
import com.spidlinq.optimus.tools.OptimusSecurity;

/**
 * Created by sergio on 19/7/16.
 */
public class UIutils {

    private static int INVALID_ID = -1;

    public static Drawable getDrawableFromId(Context c, int id) throws InvalidMethodParametersException {
        checkInput(c, id);
        Resources resources = c.getResources();
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            return resources.getDrawable(id, c.getTheme());
        } else {
            return resources.getDrawable(id);
        }
    }

    private static void checkInput(Context c, int id) throws InvalidMethodParametersException {
        try {
            OptimusSecurity.checkForNullValue(c);
            OptimusSecurity.checkIntegerValueBiggerThan(id, INVALID_ID);
        } catch (NullIntegrityCheckFailedException | IntegerValueNotInRangeException e) {
            throw new InvalidMethodParametersException("One or more method parameters of class "+UIutils.class.getSimpleName()+"violate current security policies.");
        }

    }
}
