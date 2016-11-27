package com.spidlinq.optimus.modules;

import android.content.Context;
import android.content.SharedPreferences;
import android.preference.PreferenceManager;

import com.spidlinq.optimus.exception.NullIntegrityCheckFailedException;
import com.spidlinq.optimus.tools.OptimusSecurity;

import java.util.Set;

/**
 * Created by sergio on 23/2/15
 */
public final class SettingsManagerModule {

    private static SettingsManagerModule smm;

    private Context context;
    private SharedPreferences sharedPreferences;

    private boolean saveEncryptedData;

    private SettingsManagerModule(Context context) {
        this.context = context;
        sharedPreferences = PreferenceManager.getDefaultSharedPreferences(context);
    }

    public static SettingsManagerModule getInstance(Context context) {
        if (smm == null) {
            smm = new SettingsManagerModule(context);
        }
        return smm;
    }

    //metodos de la clase;

    public SharedPreferences getSharedPreferences() {
        return sharedPreferences;
    }

    public void setKeyValue(String key, Object value) throws NullIntegrityCheckFailedException {
        OptimusSecurity.checkForNullValue(key);
        OptimusSecurity.checkForNullValue(value);

        //Todo set real classname comparison hardcoded values
        String className = value.getClass().getCanonicalName();

        if(isSaveEncryptedData()){
            sharedPreferences.edit().putString(key, encryptValue(value)).apply();
        }
        else{
            if(className.equalsIgnoreCase("boolean")){
                sharedPreferences.edit().putBoolean(key, (boolean)value).apply();
            }
            else if(className.equalsIgnoreCase("string")){
                sharedPreferences.edit().putString(key, (String)value).apply();
            }
            else if(className.equalsIgnoreCase("int")){
                sharedPreferences.edit().putInt(key, (int)value).apply();
            }
            else if(className.equalsIgnoreCase("long")){
                sharedPreferences.edit().putLong(key, (long)value).apply();
            }
            else if(className.equalsIgnoreCase("float")){
                sharedPreferences.edit().putFloat(key, (float)value).apply();
            }
            else if(className.equalsIgnoreCase("string set")){
                //Todo check if this works properly
                sharedPreferences.edit().putStringSet(key, (Set<String>) value).apply();
            }
        }
    }

    private String encryptValue(Object value) {

        String className = value.getClass().getCanonicalName();
        //Todo set real classname comparison hardcoded values
        if(className.equalsIgnoreCase("boolean")){
            return encryptString(Boolean.toString((Boolean) value));
        }
        else if(className.equalsIgnoreCase("string")){
            return encryptString((String)value);
        }
        else if(className.equalsIgnoreCase("int")){
            return encryptString(Integer.toString((Integer) value));
        }
        else if(className.equalsIgnoreCase("long")){
            return encryptString(Long.toString((Long) value));
        }
        else if(className.equalsIgnoreCase("float")){
            return encryptString(Float.toString((Float) value));
        }
        else if(className.equalsIgnoreCase("string set")){
            //Todo implement string set encryption
            return "not implemented";
        }
        else{
            return null;
        }
    }

    private String encryptString(String s) {
        return s.toUpperCase();
    }

    public boolean isSaveEncryptedData() {
        return saveEncryptedData;
    }

    public void setSaveEncryptedData(boolean saveEncryptedData) {
        this.saveEncryptedData = saveEncryptedData;
    }
}
