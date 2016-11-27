package com.spidlinq.optimus.tools.font;

import android.content.Context;
import android.graphics.Typeface;

import java.io.File;
import java.util.HashMap;

/**
 * Created by sergio on 3/11/16.
 */

public final class OptimusFontCache extends HashMap<String, Typeface>{

    private static OptimusFontCache instance = new OptimusFontCache();

    private String fontFolder;

    private OptimusFontCache(){
        super();
        fontFolder="";
    }

    public static OptimusFontCache getInstance(){
        return instance;
    }

    public Typeface getTypeface(String fontname, Context context) {
        Typeface typeface = instance.get(fontname);

        if (typeface == null) {
            try {
                if(context!=null && fontname!=null){
                    typeface = Typeface.createFromAsset(context.getAssets(), fontFolder+File.separator+fontname);
                    instance.put(fontname, typeface);
                }
            }
            catch (Exception e) {
            }
        }
        return (typeface==null)? Typeface.DEFAULT : typeface;
    }

    public String getFontFolder() {
        return fontFolder;
    }

    public void setFontFolder(String fontFolder) {
        this.fontFolder = fontFolder;
    }
}
