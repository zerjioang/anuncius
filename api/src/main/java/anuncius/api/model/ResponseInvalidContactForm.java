/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.api.model;

import anuncius.ApplicationConfig;
import anuncius.api.base.AbstractResponse;
import anuncius.api.base.IAPIMessage;
import anuncius.securelayer.SecureLayerException;

/**
 *
 * @author sanguita
 */
public class ResponseInvalidContactForm extends AbstractResponse{


    public ResponseInvalidContactForm() {
        this._status_code = "CONTACT_FORM_FAILED";
        this._request_completed = false;
    }
    
    @Override
    public IAPIMessage sendException(SecureLayerException e) {
        return null;
    }
    
}
