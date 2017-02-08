/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.api;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import io.swagger.annotations.Contact;
import io.swagger.annotations.Info;
import io.swagger.annotations.License;
import io.swagger.annotations.SwaggerDefinition;
import java.net.HttpURLConnection;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
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
public abstract class AbstractAnunciusAPI {
    
    @GET
    @Path("/")
    @ApiOperation(value = "Default method that shows a blank page in web browsers")
    @ApiResponses(value = {
        @ApiResponse(code = HttpURLConnection.HTTP_OK, message = "Request completed"),
        @ApiResponse(code = HttpURLConnection.HTTP_NOT_FOUND, message = "Endpoint not found"),
        @ApiResponse(code = HttpURLConnection.HTTP_INTERNAL_ERROR, message = "Internal server problems")
        }
    )
    @Produces(MediaType.TEXT_HTML)
    public String blank() {
        return "<html><head></head><body style=\" background-color: lightgrey;\"> <div style=\"margin: 0;position: absolute;top: 50%;left: 50%;margin-right: -50%;transform: translate(-50%, -50%);font-family: monospace;color: blue;\"> <h1>API endpoint</h1> <h2>bye bye</h2> </div></body></html>";
    }

    @GET
    @Path("/demo")
    @Produces(MediaType.APPLICATION_JSON)
    @ApiOperation(value = "Demo method for working test")
    @ApiResponses(value = {
        @ApiResponse(code = HttpURLConnection.HTTP_OK, message = "Request completed"),
        @ApiResponse(code = HttpURLConnection.HTTP_NOT_FOUND, message = "Endpoint not found"),
        @ApiResponse(code = HttpURLConnection.HTTP_INTERNAL_ERROR, message = "Internal server problems")
        }
    )
    public String demo() {
        return "{}";
    }
    
}
