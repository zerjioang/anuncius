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
public class ResponseInvalidEmail extends AbstractResponse{

    private String title, title_es, message, message_es;

    public ResponseInvalidEmail() {
        this._status_code = "SEC_CHECK_FAILED_EMAIL";
        this._request_completed = false;
        this.title = "Invalid data";
        this.message = "Invalid email address detected. Please, check your input and try again.";
        this.title_es = "Información erronea";
        this.message_es = "La dirección de email introducida no es válida";
    }

    public String getTitle() {
        return title;
    }

    public String getTitle_es() {
        return title_es;
    }

    public String getMessage() {
        return message;
    }

    public String getMessage_es() {
        return message_es;
    }
    
    @Override
    public IAPIMessage sendException(SecureLayerException e) {
        return null;
    }
    
}
