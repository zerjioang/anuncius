/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package musutruq.api.base;

/**
 *
 * @author sanguita
 */
public enum APIResponse {
    
    INVALID_SUBSCRIPTION_MESSAGE {
        @Override
        public IAPIMessage getAPIResponse() {
            return null;
        }
    }, USER_SUBSCRIBED_SUCCESSFUL{
        @Override
        public IAPIMessage getAPIResponse() {
            return null;
        }
    };
    
    public abstract IAPIMessage getAPIResponse();
    
}
