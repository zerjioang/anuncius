/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.api;

import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import anuncius.api.base.APIResponse;
import anuncius.api.base.IAPIMessage;
import anuncius.securelayer.SecureLayer;
import anuncius.securelayer.SecureLayerCriteria;
import anuncius.securelayer.SecureLayerException;
import anuncius.singleton.PersistenceHandler;

/**
 * REST Web Service
 *
 * @author sanguita
 */
@Path("share")
public class ShareResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of ShareResource
     */
    public ShareResource() {
    }

    @PUT
    @Path("/subscribe")
    @Produces(MediaType.APPLICATION_JSON)
    public IAPIMessage demo(@QueryParam("email") String email) {
        try{
            SecureLayer.hasApproved(email, SecureLayerCriteria.VALID_EMAIL_CRITERIA);
            //todo save user in db
            PersistenceHandler.getInstance().saveUserEmailAsSubscription(email);
            return APIResponse.USER_SUBSCRIBED_SUCCESSFUL.getAPIResponse();
        }
        catch(SecureLayerException e){
            return APIResponse.INVALID_SUBSCRIPTION_MESSAGE.getAPIResponse();
        }
    }
}
