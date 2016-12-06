/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package smouq.api;

import smouq.securelayer.SecureLayerCriteria;
import smouq.securelayer.SecureLayerException;
import smouq.securelayer.SecureLayer;
/**
 *
 * @author .local
 */
class OAuthApiSecurity {

    public static boolean hasValidInput(String consumerKey, String consumerSecret) throws SecureLayerException {
        return 
                SecureLayer.hasApproved(consumerKey, SecureLayerCriteria.CONSUMER_KEY_CRITERIA) 
                && 
                SecureLayer.hasApproved(consumerSecret, SecureLayerCriteria.CONSUMER_SECRET_CRITERIA);
    }
    
}
