/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package musutruq.api.base;

import musutruq.securelayer.SecureLayerException;

/**
 *
 * @author .local
 */
public interface IAPIMessage {
    
    public IAPIMessage sendException(SecureLayerException e);
}