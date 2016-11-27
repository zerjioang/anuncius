package com.spidlinq.optimus.tools;

import android.util.Base64;
import android.util.Log;

import java.security.Key;

import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;

/**
 * Created by sergio on 7/2/15
 */
public class AES {
    private static String algorithm = "AES";
    private static byte[] keyValue = "hhWG|7J>1lgS% K.YbbT^(kEah!pC&$.".getBytes();

    // Performs Encryption
    public static String encrypt(String plainText) throws Exception {
        Key key = generateKey();
        Cipher chiper = Cipher.getInstance(algorithm);
        chiper.init(Cipher.ENCRYPT_MODE, key);
        byte[] encVal = chiper.doFinal(plainText.getBytes());
        return Base64.encodeToString(encVal, Base64.DEFAULT);
    }

    // Performs decryption
    public static String decrypt(String encryptedText) throws Exception {
        // generate key
        Key key = generateKey();
        Cipher chiper = Cipher.getInstance(algorithm);
        chiper.init(Cipher.DECRYPT_MODE, key);
        byte[] decordedValue = Base64.decode(encryptedText.getBytes(), Base64.DEFAULT);
        byte[] decValue = chiper.doFinal(decordedValue);
        return new String(decValue);
    }

    //generateKey() is used to generate a secret key for AES algorithm
    private static Key generateKey() throws Exception {
        Key key = new SecretKeySpec(keyValue, algorithm);
        return key;
    }

    // performs encryption & decryption
    public static void main() throws Exception {

        String plainText = "boVYbKiyW4gCy6gmTRfillEGn39nR8RdZdHpWuhu";
        String encryptedText = AES.encrypt(plainText);
        String decryptedText = AES.decrypt(encryptedText);

        Log.i("CIPHER", "Plain Text : " + plainText);
        Log.i("CIPHER", "Encrypted Text : " + encryptedText);
        Log.i("CIPHER", "Decrypted Text : " + decryptedText);

        plainText = "N8ITpJtW2YR3lCoWriIP3Vf2DjqPtQbadh6ptccA";
        encryptedText = AES.encrypt(plainText);
        decryptedText = AES.decrypt(encryptedText);

        Log.i("CIPHER", "Plain Text : " + plainText);
        Log.i("CIPHER", "Encrypted Text : " + encryptedText);
        Log.i("CIPHER", "Decrypted Text : " + decryptedText);
    }
}