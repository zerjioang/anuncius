/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.api.model;

import anuncius.api.base.AbstractResponse;
import anuncius.api.base.IAPIMessage;
import anuncius.securelayer.SecureLayerException;

/**
 *
 * @author sanguita
 */
public class ResponseUserSubscriptionDone extends AbstractResponse{

    private String title, title_es, message, message_es;

    public ResponseUserSubscriptionDone() {
        this._request_completed = true;
        this._status_code = "USER_SUC_DONE";
        this.title = "Thanks for subscribint to our newsletter";
        this.message = "You will receive non spamming emails with news, discounts and so on.";
        this.title_es = "Gracias por suscribirte";
        this.message_es = "Ahora ya podrás estar a la última y recibir cupones descuento, ofertas, y mucho más!";
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
