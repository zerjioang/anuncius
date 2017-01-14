/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.api.model.response;

import anuncius.api.base.AbstractResponse;
import anuncius.api.base.IAPIMessage;
import anuncius.securelayer.SecureLayerException;

/**
 *
 * @author sanguita
 */
public class ResponseNewPublishFailed extends AbstractResponse{

    private String title, title_es, message, message_es;

    public ResponseNewPublishFailed() {
        this._request_completed = false;
        this._status_code = "PUBLISH_ITEM_FAILED";
        this.title = "New item publication failed";
        this.message = "Please, check your current form details and fill them all";
        this.title_es = "Datos no válidos";
        this.message_es = "Por favor, revisa el formulario y completa todos los campos solicitados.";
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
