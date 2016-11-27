package com.spidlinq.optimus.modules.persistence.prefs.base;

/**
 * Created by sergio on 18/7/16.
 */
public interface ISharedPreferencesEncoder {

    String encode(byte[] data);

    String decode(byte[] data);
}
