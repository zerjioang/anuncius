package com.spidlinq.optimus.modules.persistence.prefs;

import android.util.Base64;

import com.spidlinq.optimus.modules.persistence.prefs.base.ISharedPreferencesEncoder;

import java.io.UnsupportedEncodingException;
import java.security.InvalidAlgorithmParameterException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.security.spec.InvalidKeySpecException;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.PBEKeySpec;
import javax.crypto.spec.SecretKeySpec;

/**
 * Created by sergio on 18/7/16.
 */
public class SharedPreferencesEncoder implements ISharedPreferencesEncoder {

    public static final String CHARSET_NAME = "utf-8";
    private static final int ITERATION_COUNT = 65536;
    private static final int KEY_LENGTH = 256;
    private final static int SALT_LEN = 8;
    private static final int IV_LENGTH = 16;
    /* Derive the key, given password and salt. */
    private final Cipher cipher;
    private final byte[] salt;
    private final SecretKeySpec secret;
    private byte[] iv;

    public SharedPreferencesEncoder(byte[] password) throws NoSuchAlgorithmException, InvalidKeySpecException, NoSuchPaddingException {
        /* Derive the key, given password and salt. */

        //generate salt
        // crate secureRandom salt and store  as member var for later use
        salt = new byte[SALT_LEN];
        SecureRandom rnd = new SecureRandom(); //seed is 0
        rnd.setSeed(rnd.generateSeed(16));
        rnd.nextBytes(salt);

        //generate iv
        iv = new byte[IV_LENGTH];
        rnd.setSeed(rnd.generateSeed(16));
        rnd.nextBytes(iv);

        //generate secret
        //secret = new SecretKeySpec(password, "AES");

        //factory
        SecretKeyFactory factory = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA1");
        PBEKeySpec spec = new PBEKeySpec(
                new String(password).toCharArray(),
                salt,
                ITERATION_COUNT,
                KEY_LENGTH
        );
        SecretKey secretKey = factory.generateSecret(spec);
        secret = new SecretKeySpec(secretKey.getEncoded(), "AES");

        //get cipher
        cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
    }

    @Override
    public String encode(byte[] data) {
        /* Encrypt the message. */
        try {
            cipher.init(Cipher.ENCRYPT_MODE, secret, new IvParameterSpec(iv));
            return Base64.encodeToString(cipher.doFinal(data), Base64.NO_WRAP);
        } catch (InvalidKeyException e) {
            e.printStackTrace();
        } catch (BadPaddingException e) {
            e.printStackTrace();
        } catch (IllegalBlockSizeException e) {
            e.printStackTrace();
        } catch (InvalidAlgorithmParameterException e) {
            e.printStackTrace();
        }
        return "";
    }

    @Override
    public String decode(byte[] data) {
        /* Decrypt the message, given derived key and initialization vector. */
        try {
            cipher.init(Cipher.DECRYPT_MODE, secret, new IvParameterSpec(iv));
            byte[] raw = Base64.decode(data, Base64.NO_WRAP);
            byte[] decoded = cipher.doFinal(raw);
            return new String(decoded, CHARSET_NAME);
        } catch (InvalidKeyException e) {
            e.printStackTrace();
        } catch (InvalidAlgorithmParameterException e) {
            e.printStackTrace();
        } catch (BadPaddingException e) {
            e.printStackTrace();
        } catch (IllegalBlockSizeException e) {
            e.printStackTrace();
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        return "";
    }
}
