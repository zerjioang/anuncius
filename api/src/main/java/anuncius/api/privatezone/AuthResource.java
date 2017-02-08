/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.api.privatezone;

import anuncius.api.AbstractAnunciusAPI;
import anuncius.api.model.request.LoginRequest;
import anuncius.api.model.request.LogoutRequest;
import anuncius.singleton.AnunciusDAO;
import anuncius.util.PlatformUtil;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import io.swagger.annotations.Contact;
import io.swagger.annotations.Info;
import io.swagger.annotations.License;
import io.swagger.annotations.SwaggerDefinition;
import java.net.HttpURLConnection;
import java.util.HashMap;
import javax.ws.rs.FormParam;
import javax.ws.rs.Produces;
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
@Api(value="Authorization")
@Path("private/auth")
public class AuthResource extends AbstractAnunciusAPI {
    
    @POST
    @Path("/login")
    @ApiOperation(value = "Register when a user is logged in after oauth verification")
    @ApiResponses(value = {
        @ApiResponse(code = HttpURLConnection.HTTP_OK, message = "Request completed"),
        @ApiResponse(code = HttpURLConnection.HTTP_NOT_FOUND, message = "Endpoint not found"),
        @ApiResponse(code = HttpURLConnection.HTTP_INTERNAL_ERROR, message = "Internal server problems")
        }
    )
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
    @ApiOperation(value = "Register when a user is successfully logged out after oauth logged out")
    @ApiResponses(value = {
        @ApiResponse(code = HttpURLConnection.HTTP_OK, message = "Request completed"),
        @ApiResponse(code = HttpURLConnection.HTTP_NOT_FOUND, message = "Endpoint not found"),
        @ApiResponse(code = HttpURLConnection.HTTP_INTERNAL_ERROR, message = "Internal server problems")
        }
    )
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
    @ApiOperation(value = "Send keepalive message (if needed) to server to keep user information available.")
    @ApiResponses(value = {
        @ApiResponse(code = HttpURLConnection.HTTP_OK, message = "Request completed"),
        @ApiResponse(code = HttpURLConnection.HTTP_NOT_FOUND, message = "Endpoint not found"),
        @ApiResponse(code = HttpURLConnection.HTTP_INTERNAL_ERROR, message = "Internal server problems")
        }
    )
    @Path("/keepalive")
    @Produces(MediaType.APPLICATION_JSON)
    public String keepalive(
        @QueryParam("token") String token
    ) {
        return "{}";
    }
}
