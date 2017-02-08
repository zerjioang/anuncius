/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.api.publiczone;

import anuncius.api.AbstractAnunciusAPI;
import anuncius.api.base.APIResponse;
import anuncius.api.base.IAPIMessage;
import anuncius.api.model.response.ResponseArrayList;
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
import java.util.List;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
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
@Api(value="Web")
@Path("/public/show")
public class WebResource extends AbstractAnunciusAPI{

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of AdsResource
     */
    public WebResource() {
    }
    
    @GET
    @Path("/landing")
    @ApiOperation(value = "Returns all neccesary information to show landing page properly")
    @ApiResponses(value = {
        @ApiResponse(code = HttpURLConnection.HTTP_OK, message = "Request completed"),
        @ApiResponse(code = HttpURLConnection.HTTP_NOT_FOUND, message = "Endpoint not found"),
        @ApiResponse(code = HttpURLConnection.HTTP_INTERNAL_ERROR, message = "Internal server problems")
        }
    )
    @Produces(MediaType.APPLICATION_JSON)
    public String landing() {
        HashMap<String, Object> data = new HashMap<>();
        data.put("best",this.getBest());
        data.put("latest",this.getLatest());
        data.put("stats",this.getStats());
        return PlatformUtil.toJsonString(data);
    }
    
    @GET
    @Path("/stats")
    @Produces(MediaType.APPLICATION_JSON)
    //@Tag(name = "/demo", description = "Demo method for endpoint working test")
    @ApiOperation(value = "Returns basic population statistics")
    @ApiResponses(value = {
        @ApiResponse(code = HttpURLConnection.HTTP_OK, message = "Request completed"),
        @ApiResponse(code = HttpURLConnection.HTTP_NOT_FOUND, message = "Endpoint not found"),
        @ApiResponse(code = HttpURLConnection.HTTP_INTERNAL_ERROR, message = "Internal server problems")
        }
    )
    public HashMap getStats() {
        HashMap<String, String> data = new HashMap<>();
        data.put("users", AnunciusDAO.getInstance().getUserCount());
        data.put("clients", AnunciusDAO.getInstance().getClientCount());
        data.put("items", AnunciusDAO.getInstance().getItemCount());
        return data;
    }
    
    @GET
    @Path("/list/latest")
    @ApiOperation(value = "Returns the maximum established latest items created. Maximum item count is 6.")
    @ApiResponses(value = {
        @ApiResponse(code = HttpURLConnection.HTTP_OK, message = "Request completed"),
        @ApiResponse(code = HttpURLConnection.HTTP_NOT_FOUND, message = "Endpoint not found"),
        @ApiResponse(code = HttpURLConnection.HTTP_INTERNAL_ERROR, message = "Internal server problems")
        }
    )
    @Produces(MediaType.APPLICATION_JSON)
    public IAPIMessage getLatest() {
        List<Document> itemList = AnunciusDAO.getInstance().getLatestItems();
        IAPIMessage response = APIResponse.RETURN_ARRAYLIST.getAPIResponse();
        ((ResponseArrayList)response).setList(itemList);
        return response;
    }
    
    @GET
    @Path("/list/best")
    @ApiOperation(value = "Returns the maximum established best items published. Maximum item count is 6.")
    @ApiResponses(value = {
        @ApiResponse(code = HttpURLConnection.HTTP_OK, message = "Request completed"),
        @ApiResponse(code = HttpURLConnection.HTTP_NOT_FOUND, message = "Endpoint not found"),
        @ApiResponse(code = HttpURLConnection.HTTP_INTERNAL_ERROR, message = "Internal server problems")
        }
    )
    @Produces(MediaType.APPLICATION_JSON)
    public IAPIMessage getBest() {
        List<Document> itemList = AnunciusDAO.getInstance().getBestItems();
        IAPIMessage response = APIResponse.RETURN_ARRAYLIST.getAPIResponse();
        ((ResponseArrayList)response).setList(itemList);
        return response;
    }
}
