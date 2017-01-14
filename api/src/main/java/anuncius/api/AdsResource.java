/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.api;

import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
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
    
    @GET
    @Path("/list/latest")
    @Produces(MediaType.APPLICATION_JSON)
    public String getLatest() {
        return "{}";
    }
    
    @GET
    @Path("/list/best")
    @Produces(MediaType.APPLICATION_JSON)
    public String getTop() {
        return "{}";
    }
    
    @POST
    @Path("/create")
    @Produces(MediaType.APPLICATION_JSON)
    public String create(
        //useful
        @QueryParam("name") String name,
        @QueryParam("description") String description,
        @QueryParam("category") String category
    ) {
        return "{}";
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
    public String delete(@PathParam("id") int id) {
        return "{}";
    }
}
