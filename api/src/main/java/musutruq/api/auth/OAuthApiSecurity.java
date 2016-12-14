/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package musutruq.api.auth;

import musutruq.securelayer.SecureLayer;
import musutruq.securelayer.SecureLayerCriteria;
import musutruq.securelayer.SecureLayerException;
/**
 *
 * @author .local
 */
public class OAuthApiSecurity {

    public static boolean hasValidInput(String consumerKey, String consumerSecret) throws SecureLayerException {
        return 
                SecureLayer.hasApproved(consumerKey, SecureLayerCriteria.CONSUMER_KEY_CRITERIA) 
                && 
                SecureLayer.hasApproved(consumerSecret, SecureLayerCriteria.CONSUMER_SECRET_CRITERIA);
    }
    
}
