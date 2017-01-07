/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.api.base;

import anuncius.api.model.ResponseInvalidEmail;
import anuncius.api.model.ResponseUserSubscriptionDone;

/**
 *
 * @author sanguita
 */
public enum APIResponse {
    
    INVALID_SUBSCRIPTION_MESSAGE {
        @Override
        public IAPIMessage getAPIResponse() {
            return new ResponseInvalidEmail();
        }
    }, USER_SUBSCRIBED_SUCCESSFUL{
        @Override
        public IAPIMessage getAPIResponse() {
            return new ResponseUserSubscriptionDone();
        }
    };
    
    public abstract IAPIMessage getAPIResponse();
    
}
