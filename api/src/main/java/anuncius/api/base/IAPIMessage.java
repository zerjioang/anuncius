/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.api.base;

import anuncius.securelayer.SecureLayerException;

/**
 *
 * @author .local
 */
public interface IAPIMessage {
    
    public IAPIMessage sendException(SecureLayerException e);
}
