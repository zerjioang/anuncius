/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.securelayer;

/**
 *
 * @author .local
 */
public final class SecureLayer {

    public static void hasApproved(String data, SecureLayerCriteria criteria) throws SecureLayerException {
        if(criteria!=null){
            criteria.validate(data);
        }
        else{
            //no criteria specified throw error
            throw new SecureLayerException("Inbound API Security Check failed cause no criteria was specified");
        }
    }
}
