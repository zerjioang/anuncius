/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.api;

import anuncius.api.model.request.LoginRequest;
import anuncius.api.model.request.LogoutRequest;
import anuncius.singleton.AnunciusDAO;
import anuncius.util.PlatformUtil;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import java.net.HttpURLConnection;
import java.util.HashMap;
import javax.ws.rs.FormParam;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author sanguita
 */
@Path("/auth")
public class AuthResource {

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
    @Path("/login")
    @Produces(MediaType.APPLICATION_JSON)
    public String login(
            @FormParam("id") String id,
            @FormParam("fullname") String fullname,
            @FormParam("givenname") String givenname,
            @FormParam("familiyname") String familiyname,
            @FormParam("image") String image,
            @FormParam("email") String email,
            @FormParam("token") String token
    ) {
        HashMap<String, String> data = new HashMap<>();
        LoginRequest loginRequest = new LoginRequest(id, fullname, givenname, familiyname, image, email, token);
        String result = (AnunciusDAO.getInstance().save(loginRequest)) ? "success" : "failed";
        data.put("status", result);
        return PlatformUtil.toJsonString(data);
    }
    
    @POST
    @Path("/logout")
    @Produces(MediaType.APPLICATION_JSON)
    public String logout(
            @FormParam("id") String id,
            @FormParam("token") String token
    ) {
        HashMap<String, String> data = new HashMap<>();
        LogoutRequest logout = new LogoutRequest(id, token);
        String result = (AnunciusDAO.getInstance().save(logout)) ? "success" : "failed";
        data.put("status", result);
        return PlatformUtil.toJsonString(data);
    }
    
    @GET
    @Path("/keepalive")
    @Produces(MediaType.APPLICATION_JSON)
    public String keepalive() {
        return "{}";
    }
}