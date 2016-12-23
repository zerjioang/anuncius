/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.securelayer;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 *
 * @author .local
 */
public enum SecureLayerCriteria {

    CONSUMER_KEY_CRITERIA {
        @Override
        public boolean validate(String consumerKey) throws SecureLayerException {
            if(consumerKey == null){
                throw new SecureLayerException("Consumer key does not pass security validations. Please check input data");
            }
            return PASSED;
        }
    },
    CONSUMER_SECRET_CRITERIA {
        @Override
        public boolean validate(String consumerSecret) throws SecureLayerException {
            if(consumerSecret == null){
                throw new SecureLayerException("Consumer key does not pass security validations. Please check input data");
            }
            return PASSED;
        }
    },
    VALID_EMAIL_CRITERIA {
        @Override
        public boolean validate(String email) throws SecureLayerException {
            if(email!=null && !email.trim().isEmpty() && email.contains("@")){
                Pattern pattern = Pattern.compile("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}");
                Matcher mat = pattern.matcher(email);
                return mat.matches();
            }
            return FAILED;
        }
    }
    ;

    private static final boolean PASSED = true;
    private static final boolean FAILED = false;

    public static boolean getFailedValue() {
        return FAILED;
    }
    
    public abstract boolean validate(String data) throws SecureLayerException;
    
}
