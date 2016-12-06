/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package smouq.securelayer;

/**
 *
 * @author .local
 */
public final class SecureLayer {

    public static boolean hasApproved(String data, SecureLayerCriteria criteria) throws SecureLayerException {
        if(criteria!=null)
            return criteria.validate(data);
        return SecureLayerCriteria.FAILED;
    }
}
