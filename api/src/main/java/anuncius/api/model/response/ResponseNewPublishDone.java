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
public class ResponseNewPublishDone extends AbstractResponse{

    private String title, title_es, message, message_es;

    public ResponseNewPublishDone() {
        this._request_completed = true;
        this._status_code = "PUBLISH_SUC_DONE";
        this.title = "Successfully updated";
        this.message = "Your item has been successfully published. Remember that you can modify it for your 'My Account' section";
        this.title_es = "Publicación realizada correctamente";
        this.message_es = "Tu publicación se ha realizado correctamente. Recuerda que puedes editarlo en cualquier momento desde 'Mi cuenta'";
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
