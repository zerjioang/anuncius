/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.api;

import anuncius.api.base.APIResponse;
import anuncius.api.base.IAPIMessage;
import anuncius.api.model.request.ContactFormRequest;
import anuncius.api.model.request.SubscriptionRequest;
import anuncius.securelayer.SecureLayer;
import anuncius.securelayer.SecureLayerCriteria;
import anuncius.securelayer.SecureLayerException;
import anuncius.singleton.AnunciusDAO;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author sanguita
 */
@Path("/contact")
public class ContactResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of ContactResource
     */
    public ContactResource() {
    }

    @GET
    @Path("/demo")
    @Produces(MediaType.APPLICATION_JSON)
    public String demo() {
        return "{}";
    }
    
    @POST
    @Path("/subscribe/user")
    @Produces(MediaType.APPLICATION_JSON)
    public IAPIMessage subscribe(
            @FormParam("email") String email
    ) {
        IAPIMessage response;
        try{
            SecureLayer.hasApproved(email, SecureLayerCriteria.VALID_EMAIL_CRITERIA);
            
            //todo save user in db
            SubscriptionRequest request = new SubscriptionRequest(email);
            
            AnunciusDAO.getInstance().saveUserEmailAsSubscription(request);
            response = APIResponse.USER_SUBSCRIPTION_SUCCESS.getAPIResponse();
        }
        catch(SecureLayerException e){
            response = APIResponse.USER_SUBSCRIPTION_FAILED.getAPIResponse();
        }
        return response;
    }
    
    @POST
    @Path("/team")
    @Produces(MediaType.APPLICATION_JSON)
    public IAPIMessage contact(
            //useful
            @QueryParam("name") String name,
            @QueryParam("email") String email,
            @QueryParam("message") String message
    ) {
        IAPIMessage response;
        try{
            SecureLayer.hasApproved(email, SecureLayerCriteria.VALID_EMAIL_CRITERIA);
            SecureLayer.hasApproved(name, SecureLayerCriteria.VALID_PERSON_NAME_CRITERIA);
            SecureLayer.hasApproved(message, SecureLayerCriteria.VALID_MESSAGE_CRITERIA);
            //todo save user in db
            //todo save user in db
            ContactFormRequest request = new ContactFormRequest(
                    name,
                    email,
                    message
            );
            
            AnunciusDAO.getInstance().insertUserContactFormRequest(request);
            response = APIResponse.CONTACT_FORM_SUCCESS.getAPIResponse();
        }
        catch(SecureLayerException e){
            response = APIResponse.CONTACT_FORM_FAILED.getAPIResponse();
        }
        return response;
    }
}
