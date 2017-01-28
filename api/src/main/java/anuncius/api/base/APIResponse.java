/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.api.base;

import anuncius.api.model.response.ResponseArrayList;
import anuncius.api.model.response.ResponseContactForm;
import anuncius.api.model.response.ResponseInvalidContactForm;
import anuncius.api.model.response.ResponseInvalidEmail;
import anuncius.api.model.response.ResponseNewPublishDone;
import anuncius.api.model.response.ResponseNewPublishFailed;
import anuncius.api.model.response.ResponseUserSubscriptionDone;

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
    }, NEW_PUBLISH_SUCCESS{
        @Override
        public IAPIMessage getAPIResponse() {
            return new ResponseNewPublishDone();
        }
    }, NEW_PUBLISH_FAILED{
        @Override
        public IAPIMessage getAPIResponse() {
            return new ResponseNewPublishFailed();
        }
    }, RETURN_ARRAYLIST{
        @Override
        public IAPIMessage getAPIResponse() {
            return new ResponseArrayList();
        }
    }, DELETE_AD_FAILED{
        @Override
        public IAPIMessage getAPIResponse() {
            //todo finish
            return null;
        }
    }, DELETE_AD_SUCCESS{
        @Override
        public IAPIMessage getAPIResponse() {
            //todo finish
            return null;
        }
    };
    
    public abstract IAPIMessage getAPIResponse();
    
}
