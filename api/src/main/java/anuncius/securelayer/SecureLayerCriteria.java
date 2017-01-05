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
                logInvalidCriteria(this.name(), "Consumer key is null");
                throw new SecureLayerException("Consumer key does not pass security validations. Please check input data");
            }
            return PASSED;
        }
    },
    CONSUMER_SECRET_CRITERIA {
        @Override
        public boolean validate(String consumerSecret) throws SecureLayerException {
            if(consumerSecret == null){
                logInvalidCriteria(this.name(), "Consumer secret is null");
                throw new SecureLayerException("Consumer secret does not pass security validations. Please check input data");
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
            if(email!=null){
                logInvalidCriteria(this.name(), "Invalid email detected. "+email);
            }
            return FAILED;
        }
    }
    ,
    VALID_NAME_CRITERIA{
        @Override
        public boolean validate(String name) throws SecureLayerException {
            if(name!=null && !name.trim().isEmpty()){
                Pattern pattern = Pattern.compile("[a-zA-ZñÇçáéíóúàèìòù]{2,}");
                Matcher mat = pattern.matcher(name);
                return mat.matches();
            }
            if(name!=null){
                logInvalidCriteria(this.name(), "Invalid name detected. "+name);
            }
            return FAILED;
        }
    },
    VALID_MESSAGE_CRITERIA{
        @Override
        public boolean validate(String message) throws SecureLayerException {
            if(message!=null && !message.trim().isEmpty()){
                message = message.toLowerCase();
                String [] xssKeywords = new String[]{
                    "<",
                    ">",
                    "String.fromCharCode(",
                    "alert(",
                    "<script>",
                    "</script>",
                    "</",
                    "'';!--\"<XSS>=&{()}",
                    "<SCRIPT ",
                    "\">",
                    "\'>",
                    "javascript:",
                    "<img",
                    "Set.constructor`",
                    "```",
                    "script"
                };
                if(message.contains(">"))
                    return FAILED;
                else if(message.contains("<"))
                    return FAILED;
                else if(message.contains("alert"))
                    return FAILED;
                else if(message.contains("javascript"))
                    return FAILED;
                else if(message.contains("/>"))
                    return FAILED;
                else
                    return PASSED;
            }
            if(message!=null){
                logInvalidCriteria(this.name(), "Invalid message string detected. "+message);
            }
            return FAILED;
        }
    };

    private static final boolean PASSED = true;
    private static final boolean FAILED = false;

    public static boolean getFailedValue() {
        return FAILED;
    }
    
    private static final void logInvalidCriteria(String sourcename, String data){
        System.err.println("ALERT: "+sourcename+" criteria violation blocked: "+data);
    }
    
    public abstract boolean validate(String data) throws SecureLayerException;
    
}
