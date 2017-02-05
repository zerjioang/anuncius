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
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import io.swagger.annotations.Contact;
import io.swagger.annotations.Info;
import io.swagger.annotations.License;
import io.swagger.annotations.SwaggerDefinition;
import java.net.HttpURLConnection;
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
@SwaggerDefinition(
    info = @Info(
            description = "anuncius public API",
            version = "V1.0",
            title = "anuncius API",
            termsOfService = "share and care",
            contact = @Contact(name = "zerjioang", email = "zerjioang", url = "https://github.com/zerjioang/anuncius"),
            license = @License(name = "GPLv3", url = "https://www.gnu.org/licenses/gpl-3.0.odt")
    ),
    consumes = {"application/json" },
    produces = {"application/json" },
    schemes = {SwaggerDefinition.Scheme.HTTP, SwaggerDefinition.Scheme.HTTPS}
)
@Api(value="/contact")
@Path("/contact")
public class ContactResource implements IAnunciusAPI{

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
    
    @ApiOperation(value = "Demo method for working test")
    @ApiResponses(value = {
        @ApiResponse(code = HttpURLConnection.HTTP_OK, message = "Success"),
        @ApiResponse(code = HttpURLConnection.HTTP_NOT_FOUND, message = "Not found"),
        @ApiResponse(code = HttpURLConnection.HTTP_INTERNAL_ERROR, message = "Internal server problems")
        }
    )
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
            AnunciusDAO.getInstance().save(request);
            //return success reponse if no errors
            response = APIResponse.USER_SUBSCRIPTION_SUCCESS.getAPIResponse();
        }
        catch(SecureLayerException e){
            response = APIResponse.USER_SUBSCRIPTION_FAILED.getAPIResponse();
            response.sendException(e);
        }
        return response;
    }
    
    @POST
    @Path("/team")
    @Produces(MediaType.APPLICATION_JSON)
    public IAPIMessage contact(
            //useful
            @FormParam("name") String name,
            @FormParam("email") String email,
            @FormParam("message") String message
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
            
            AnunciusDAO.getInstance().save(request);
            response = APIResponse.CONTACT_FORM_SUCCESS.getAPIResponse();
        }
        catch(SecureLayerException e){
            response = APIResponse.CONTACT_FORM_FAILED.getAPIResponse();
        }
        return response;
    }
}
