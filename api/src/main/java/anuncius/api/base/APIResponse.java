/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.api.base;

import anuncius.api.model.ResponseContactForm;
import anuncius.api.model.ResponseInvalidContactForm;
import anuncius.api.model.ResponseInvalidEmail;
import anuncius.api.model.ResponseUserSubscriptionDone;

/**
 *
 * @author sanguita
 */
public enum APIResponse {
    
    USER_SUBSCRIPTION_FAILED {
        @Override
        public IAPIMessage getAPIResponse() {
            return new ResponseInvalidEmail();
        }
    }, USER_SUBSCRIPTION_SUCCESS{
        @Override
        public IAPIMessage getAPIResponse() {
            return new ResponseUserSubscriptionDone();
        }
    }, CONTACT_FORM_SUCCESS{
        @Override
        public IAPIMessage getAPIResponse() {
            return new ResponseContactForm();
        }
    }, CONTACT_FORM_FAILED{
        @Override
        public IAPIMessage getAPIResponse() {
            return new ResponseInvalidContactForm();
        }
    };
    
    public abstract IAPIMessage getAPIResponse();
    
}
