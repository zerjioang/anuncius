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
        public void validate(Object consumerKey) throws SecureLayerException {
            if(consumerKey == null){
                logInvalidCriteria(this.name(), "Consumer key is null");
                throw new SecureLayerException("Consumer key does not pass security validations. Please check input data");
            }
        }
    },
    CONSUMER_SECRET_CRITERIA {
        @Override
        public void validate(Object consumerSecret) throws SecureLayerException {
            if(consumerSecret == null){
                logInvalidCriteria(this.name(), "Consumer secret is null");
                throw new SecureLayerException("Consumer secret does not pass security validations. Please check input data");
            }
        }
    },
    VALID_EMAIL_CRITERIA {
        @Override
        public void validate(Object data) throws SecureLayerException {
            String email = data!=null && data.getClass().getSimpleName().equals("String") ? (String) data : null;
            if(email!=null){
                if(!email.trim().isEmpty() && email.contains("@")){
                    Pattern pattern = Pattern.compile("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}");
                    Matcher mat = pattern.matcher(email);
                    boolean valid = mat.matches();
                    if(!valid){
                        logInvalidCriteria(this.name(), "Invalid email detected. "+email);
                        throw new SecureLayerException("Inbound API received email attribute failed on security check for criteria "+name());
                    }
                }
                else{
                    logInvalidCriteria(this.name(), "Invalid email detected. "+email);
                    throw new SecureLayerException("Inbound API received wrong structured email attribute and failed on security check for criteria "+name());
                }
            }
            else{
                logInvalidCriteria(this.name(), "Invalid email detected. "+email);
                throw new SecureLayerException("Inbound API received null email attribute and failed on security check for criteria "+name());
            }
        }
    }
    ,
    VALID_PERSON_NAME_CRITERIA{
        @Override
        public void validate(Object data) throws SecureLayerException {
            String name = data!=null && data.getClass().getSimpleName().equals("String") ? (String) data : null;
            if(name!=null){
                if(!name.trim().isEmpty()){
                    Pattern pattern = Pattern.compile("[a-zA-ZñÇçáéíóúàèìòù]{2,}");
                    Matcher mat = pattern.matcher(name);
                    boolean valid = mat.matches();
                    if(!valid){
                        throw new SecureLayerException("Inbound API received name attribute failed on security check for criteria "+name());
                    }
                }
            }
            else{
                logInvalidCriteria(this.name(), "Invalid name detected. "+name);
                throw new SecureLayerException("Inbound API received NULL name attribute and failed on security check for criteria "+name());
            }
        }
    },
    VALID_MESSAGE_CRITERIA{
        @Override
        public void validate(Object data) throws SecureLayerException {
            String message = data!=null && data.getClass().getSimpleName().equals("String") ? (String) data : null;
            if(message!=null){
                if(!message.trim().isEmpty()){
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
                    boolean xssFound = false;
                    int index = 0;
                    while(!xssFound && index<xssKeywords.length){
                        xssFound = message.contains(xssKeywords[index]);
                        index++;
                    }
                    if(xssFound){
                        throw new SecureLayerException("Inbound API received a potential XSS content ("+message+") and failed on security check for criteria "+name());
                    }
                }
            }
            else{
                logInvalidCriteria(this.name(), "Invalid message string detected. "+message);
                throw new SecureLayerException("Inbound API received NULL message attribute and failed on security check for criteria "+name());
            }
        }
    }, VALID_POSITIVE_NUMBER_CRITERIA{
        @Override
        public void validate(Object data) throws SecureLayerException {
            int value = data!=null && data.getClass().getSimpleName().equals("Integer") ? (int) data : -1;
            if(value<=0){
                logInvalidCriteria(this.name(), "Invalid integer value detected. "+value);
                throw new SecureLayerException("Inbound API received invalid value attribute and failed on security check for criteria "+name());
            }
        }
    }
    , VALID_DOUBLE_POSITIVE_NUMBER_CRITERIA{
        @Override
        public void validate(Object data) throws SecureLayerException {
            double value = data!=null && data.getClass().getSimpleName().equals("Double") ? (double) data : -1;
            if(value<=0){
                logInvalidCriteria(this.name(), "Invalid double value detected. "+value);
                throw new SecureLayerException("Inbound API received invalid value attribute and failed on security check for criteria "+name());
            }
        }
    };
    private static void logInvalidCriteria(String sourcename, String data){
        System.err.println("ALERT: "+sourcename+" criteria violation blocked: "+data);
    }
    
    public abstract void validate(Object data) throws SecureLayerException;
    
}
