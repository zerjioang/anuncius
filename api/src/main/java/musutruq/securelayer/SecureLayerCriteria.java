/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package musutruq.securelayer;

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
    }, CONSUMER_SECRET_CRITERIA {
        @Override
        public boolean validate(String consumerSecret) throws SecureLayerException {
            if(consumerSecret == null){
                throw new SecureLayerException("Consumer key does not pass security validations. Please check input data");
            }
            return PASSED;
        }
    };

    private static final boolean PASSED = true;
    public static final boolean FAILED = false;
    public abstract boolean validate(String data) throws SecureLayerException;
    
}
