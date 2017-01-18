/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.api;

import anuncius.api.base.APIResponse;
import anuncius.api.base.IAPIMessage;
import anuncius.api.model.request.NewItemRequest;
import anuncius.api.model.response.ResponseArrayList;
import anuncius.securelayer.SecureLayer;
import anuncius.securelayer.SecureLayerCriteria;
import anuncius.securelayer.SecureLayerException;
import anuncius.singleton.AnunciusDAO;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.ws.rs.FormParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author sanguita
 */
@Path("/ads")
public class AdsResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of AdsResource
     */
    public AdsResource() {
    }

    @GET
    @Path("/demo")
    @Produces(MediaType.APPLICATION_JSON)
    public String demo() {
        return "{}";
    }
    
    @POST
    @Path("/list/latest")
    @Produces(MediaType.APPLICATION_JSON)
    public IAPIMessage getLatest() {
        List<NewItemRequest> itemList = AnunciusDAO.getInstance().getLatestItems();
        IAPIMessage response = APIResponse.RETURN_ARRAYLIST.getAPIResponse();
        ((ResponseArrayList)response).setList(itemList);
        return response;
    }
    
    @POST
    @Path("/list/best")
    @Produces(MediaType.APPLICATION_JSON)
    public IAPIMessage getTop() {
        ArrayList<NewItemRequest> itemList = AnunciusDAO.getInstance().getBestItems();
        IAPIMessage response = APIResponse.RETURN_ARRAYLIST.getAPIResponse();
        ((ResponseArrayList)response).setList(itemList);
        return response;
    }
    
    @POST
    @Path("/new")
    @Produces(MediaType.APPLICATION_JSON)
    public IAPIMessage create(
        //useful
        @FormParam("name") String name,
        @FormParam("category") String category,
        @FormParam("keyword") String keyword,
        @FormParam("action") String action,
        @FormParam("price") double price,
        @FormParam("description") String description
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
    @Path("/get/{id : .*}")
    @Produces(MediaType.APPLICATION_JSON)
    public String recover(@PathParam("id") int id) {
        return "{}";
    }
    
    @POST
    @Path("/update")
    @Produces(MediaType.APPLICATION_JSON)
    public String update(
        //useful
        @QueryParam("name") String name,
        @QueryParam("description") String description,
        @QueryParam("category") String category
    ) {
        return "{}";
    }
    
    @GET
    @Path("/delete/{id : .*}")
    @Produces(MediaType.APPLICATION_JSON)
    public IAPIMessage delete(@PathParam("id") int id) {
        IAPIMessage response = APIResponse.DELETE_AD_FAILED.getAPIResponse();
        if(id>=0){
            //delete
            boolean deleted = AnunciusDAO.getInstance().delete(id, AnunciusDAO.ADVERTISEMENT_COLLECTION_NAME);
            if(deleted){
                response = APIResponse.DELETE_AD_SUCCESS.getAPIResponse();
            }
            else{
                
            }
        }
        return response;
    }
}
