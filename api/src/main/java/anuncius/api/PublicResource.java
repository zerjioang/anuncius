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
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author .local
 */
@Path("/demo")
public class PublicResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of PublicResource
     */
    public PublicResource() {
    }
    
    @GET
    @Path("/demo")
    @Produces(MediaType.APPLICATION_JSON)
    public String demo() {
        return "{}";
    }
    
    @GET
    @Path("/{token: [a-zA-Z0-9]{64}}/demo")
    @Produces(MediaType.APPLICATION_JSON)
    public String secureDemo(@PathParam("token") String token) {
        boolean tokenIsValid = true;
        if(tokenIsValid){
            return "{'token':'"+token+"', 'code':200}";
        }
        return "{'message':'authentication error', 'code':400}";
    }
    
    @GET
    @Path("/message/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public String getMessageId(@PathParam("id") int id) {
        return "{}";
    }
    
    @GET
    @Path("/messages/get/{id : \\d+}")
    @Produces(MediaType.APPLICATION_JSON)
    public String getMessage(@PathParam("id") int id) {
        return "{}";
    }
    
    @GET
    @Path("/quit")
    @Produces(MediaType.APPLICATION_JSON)
    public String closeUserSession() {
        return "{}";
    }
}
