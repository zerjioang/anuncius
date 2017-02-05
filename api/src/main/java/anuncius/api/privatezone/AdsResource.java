/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.api.privatezone;

import anuncius.api.IAnunciusAPI;
import anuncius.api.base.APIResponse;
import anuncius.api.base.IAPIMessage;
import anuncius.api.model.request.NewItemRequest;
import anuncius.api.model.response.ResponseDocumentWrapper;
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
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.ws.rs.DELETE;
import javax.ws.rs.FormParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;
import org.bson.Document;

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
@Api(value="Advertisement")
@Path("private/ads")
public class AdsResource extends IAnunciusAPI{

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of AdsResource
     */
    public AdsResource() {
    }
    
    @GET
    @Path("/create")
    @ApiOperation(value = "Create a new publication")
    @ApiResponses(value = {
        @ApiResponse(code = HttpURLConnection.HTTP_OK, message = "Request completed"),
        @ApiResponse(code = HttpURLConnection.HTTP_NOT_FOUND, message = "Endpoint not found"),
        @ApiResponse(code = HttpURLConnection.HTTP_INTERNAL_ERROR, message = "Internal server problems")
        }
    )
    @Produces(MediaType.APPLICATION_JSON)
    public IAPIMessage create(
        //useful
        @FormParam("name") String name,
        @FormParam("category") String category,
        @FormParam("keyword") String keyword,
        @FormParam("action") String action,
        @FormParam("price") double price,
        @FormParam("description") String description,
        @FormParam("token") String token
    ) {
        IAPIMessage response;
        try {
            SecureLayer.hasApproved(name, SecureLayerCriteria.VALID_MESSAGE_CRITERIA);
            SecureLayer.hasApproved(category, SecureLayerCriteria.VALID_MESSAGE_CRITERIA);
            SecureLayer.hasApproved(keyword, SecureLayerCriteria.VALID_MESSAGE_CRITERIA);
            SecureLayer.hasApproved(action, SecureLayerCriteria.VALID_MESSAGE_CRITERIA);
            SecureLayer.hasApproved(price, SecureLayerCriteria.VALID_DOUBLE_POSITIVE_NUMBER_CRITERIA);
            SecureLayer.hasApproved(description, SecureLayerCriteria.VALID_MESSAGE_CRITERIA);
            
            NewItemRequest newItem = new NewItemRequest(
                    name,
                    category,
                    keyword,
                    action,
                    price,
                    description,
                    System.currentTimeMillis()
            );
            AnunciusDAO.getInstance().save(newItem);
            response = APIResponse.NEW_PUBLISH_SUCCESS.getAPIResponse();
        } catch (SecureLayerException ex) {
            Logger.getLogger(AdsResource.class.getName()).log(Level.SEVERE, null, ex);
            response = APIResponse.NEW_PUBLISH_FAILED.getAPIResponse();
        }
        return response;
    }
    
    @GET
    @ApiOperation(value = "Obtain an already existing publication")
    @ApiResponses(value = {
        @ApiResponse(code = HttpURLConnection.HTTP_OK, message = "Request completed"),
        @ApiResponse(code = HttpURLConnection.HTTP_NOT_FOUND, message = "Endpoint not found"),
        @ApiResponse(code = HttpURLConnection.HTTP_INTERNAL_ERROR, message = "Internal server problems")
        }
    )
    @Path("/read/id/{:.*}/token/{token:.*}")
    @Produces(MediaType.APPLICATION_JSON)
    public IAPIMessage read(
        @PathParam("id") int id,
        @PathParam("token") String token
    ) {
        Document document = AnunciusDAO.getInstance().read(id, AnunciusDAO.ADVERTISEMENT_COLLECTION_NAME);
        return new ResponseDocumentWrapper(document);
    }
    
    @DELETE
    @ApiOperation(value = "Delete already existing publication")
    @ApiResponses(value = {
        @ApiResponse(code = HttpURLConnection.HTTP_OK, message = "Request completed"),
        @ApiResponse(code = HttpURLConnection.HTTP_NOT_FOUND, message = "Endpoint not found"),
        @ApiResponse(code = HttpURLConnection.HTTP_INTERNAL_ERROR, message = "Internal server problems")
        }
    )
    @Path("/delete/id/{id:.*}/token/{token:.*}")
    @Produces(MediaType.APPLICATION_JSON)
    public IAPIMessage delete(
        @PathParam("id") int id,
        @PathParam("token") String token
    ) {
        IAPIMessage response = APIResponse.DELETE_AD_FAILED.getAPIResponse();
        if(id>=0){
            //delete
            boolean deleted = AnunciusDAO.getInstance().delete(id, AnunciusDAO.ADVERTISEMENT_COLLECTION_NAME);
            if(deleted){
                response = APIResponse.DELETE_AD_SUCCESS.getAPIResponse();
            }
        }
        return response;
    }
    
    @POST
    @Path("/update")
    @ApiOperation(value = "Update an existing publication")
    @ApiResponses(value = {
        @ApiResponse(code = HttpURLConnection.HTTP_OK, message = "Request completed"),
        @ApiResponse(code = HttpURLConnection.HTTP_NOT_FOUND, message = "Endpoint not found"),
        @ApiResponse(code = HttpURLConnection.HTTP_INTERNAL_ERROR, message = "Internal server problems")
        }
    )
    @Produces(MediaType.APPLICATION_JSON)
    public IAPIMessage update(
        //useful
        @FormParam("name") String name,
        @FormParam("category") String category,
        @FormParam("keyword") String keyword,
        @FormParam("action") String action,
        @FormParam("price") double price,
        @FormParam("description") String description,
        @FormParam("token") String token
    ) {
        IAPIMessage response;
        try {
            SecureLayer.hasApproved(name, SecureLayerCriteria.VALID_MESSAGE_CRITERIA);
            SecureLayer.hasApproved(category, SecureLayerCriteria.VALID_MESSAGE_CRITERIA);
            SecureLayer.hasApproved(keyword, SecureLayerCriteria.VALID_MESSAGE_CRITERIA);
            SecureLayer.hasApproved(action, SecureLayerCriteria.VALID_MESSAGE_CRITERIA);
            SecureLayer.hasApproved(price, SecureLayerCriteria.VALID_DOUBLE_POSITIVE_NUMBER_CRITERIA);
            SecureLayer.hasApproved(description, SecureLayerCriteria.VALID_MESSAGE_CRITERIA);
            
            NewItemRequest newItem = new NewItemRequest(
                    name,
                    category,
                    keyword,
                    action,
                    price,
                    description,
                    System.currentTimeMillis()
            );
            AnunciusDAO.getInstance().update(newItem);
            response = APIResponse.NEW_PUBLISH_SUCCESS.getAPIResponse();
        } catch (SecureLayerException ex) {
            Logger.getLogger(AdsResource.class.getName()).log(Level.SEVERE, null, ex);
            response = APIResponse.NEW_PUBLISH_FAILED.getAPIResponse();
        }
        return response;
    }
}
