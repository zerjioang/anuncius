/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.api.privatezone;

import anuncius.api.AbstractAnunciusAPI;
import anuncius.api.base.IAPIMessage;
import anuncius.api.model.request.LoginRequest;
import anuncius.api.model.request.LogoutRequest;
import anuncius.api.model.response.BooleanWrapper;
import anuncius.api.model.response.ResponseArrayList;
import anuncius.api.model.response.ResponseDocumentWrapper;
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
import javax.ws.rs.DELETE;
import javax.ws.rs.FormParam;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.QueryParam;
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
@Api(value="Management")
@Path("private/manage")
public class ManagementResource extends AbstractAnunciusAPI {
    
    @GET
    @ApiOperation(value = "Obtain an already existing subscription list sent by users via contact form")
    @ApiResponses(value = {
        @ApiResponse(code = HttpURLConnection.HTTP_OK, message = "Request completed"),
        @ApiResponse(code = HttpURLConnection.HTTP_NOT_FOUND, message = "Endpoint not found"),
        @ApiResponse(code = HttpURLConnection.HTTP_INTERNAL_ERROR, message = "Internal server problems")
        }
    )
    @Path("/subscriptions")
    @Produces(MediaType.APPLICATION_JSON)
    public IAPIMessage readSubscriptionList(
    ) {
        List<Document> questionList = AnunciusDAO.getInstance().getSubscriptionlist();
        return new ResponseArrayList(questionList);
    }
    
    @GET
    @ApiOperation(value = "Obtain the count of subscription sent by users")
    @ApiResponses(value = {
        @ApiResponse(code = HttpURLConnection.HTTP_OK, message = "Request completed"),
        @ApiResponse(code = HttpURLConnection.HTTP_NOT_FOUND, message = "Endpoint not found"),
        @ApiResponse(code = HttpURLConnection.HTTP_INTERNAL_ERROR, message = "Internal server problems")
        }
    )
    @Path("/subscription/count")
    @Produces(MediaType.APPLICATION_JSON)
    public HashMap countSubscriptions(
    ) {
        HashMap<String, Object> data = new HashMap<>();
        data.put("count", AnunciusDAO.getInstance().subscriptionCount());
        return data;
    }
    
    @GET
    @ApiOperation(value = "Obtain an already existing subscription sent by user")
    @ApiResponses(value = {
        @ApiResponse(code = HttpURLConnection.HTTP_OK, message = "Request completed"),
        @ApiResponse(code = HttpURLConnection.HTTP_NOT_FOUND, message = "Endpoint not found"),
        @ApiResponse(code = HttpURLConnection.HTTP_INTERNAL_ERROR, message = "Internal server problems")
        }
    )
    @Path("/subscription/{id:.*}")
    @Produces(MediaType.APPLICATION_JSON)
    public IAPIMessage readSubscription(
        @PathParam("id") int id
    ) {
        Document document = AnunciusDAO.getInstance().read(id, AnunciusDAO.SUBSCRIPTION_COLLECTION_NAME);
        return new ResponseDocumentWrapper(document);
    }
    
    @DELETE
    @ApiOperation(value = "Delete an already existing question sent by user via contact form")
    @ApiResponses(value = {
        @ApiResponse(code = HttpURLConnection.HTTP_OK, message = "Request completed"),
        @ApiResponse(code = HttpURLConnection.HTTP_NOT_FOUND, message = "Endpoint not found"),
        @ApiResponse(code = HttpURLConnection.HTTP_INTERNAL_ERROR, message = "Internal server problems")
        }
    )
    @Path("/subscription/{id:.*}")
    @Produces(MediaType.APPLICATION_JSON)
    public IAPIMessage deleteSubscription(
        @PathParam("id") int id
    ) {
        boolean response = AnunciusDAO.getInstance().delete(id, AnunciusDAO.SUBSCRIPTION_COLLECTION_NAME);
        return new BooleanWrapper(response);
    }
    
    //END SUBSCRIPTION
    
    @GET
    @ApiOperation(value = "Obtain the count of questions sent by users via contact form")
    @ApiResponses(value = {
        @ApiResponse(code = HttpURLConnection.HTTP_OK, message = "Request completed"),
        @ApiResponse(code = HttpURLConnection.HTTP_NOT_FOUND, message = "Endpoint not found"),
        @ApiResponse(code = HttpURLConnection.HTTP_INTERNAL_ERROR, message = "Internal server problems")
        }
    )
    @Path("/question/count")
    @Produces(MediaType.APPLICATION_JSON)
    public HashMap countQuestions(
    ) {
        HashMap<String, Object> data = new HashMap<>();
        data.put("count", AnunciusDAO.getInstance().questionCount());
        return data;
    }
    
    @GET
    @ApiOperation(value = "Obtain an already existing question sent by user via contact form")
    @ApiResponses(value = {
        @ApiResponse(code = HttpURLConnection.HTTP_OK, message = "Request completed"),
        @ApiResponse(code = HttpURLConnection.HTTP_NOT_FOUND, message = "Endpoint not found"),
        @ApiResponse(code = HttpURLConnection.HTTP_INTERNAL_ERROR, message = "Internal server problems")
        }
    )
    @Path("/question/{id:.*}")
    @Produces(MediaType.APPLICATION_JSON)
    public IAPIMessage readQuestion(
        @PathParam("id") int id
    ) {
        Document document = AnunciusDAO.getInstance().read(id, AnunciusDAO.CONTACT_COLLECTION_NAME);
        return new ResponseDocumentWrapper(document);
    }
    
    @DELETE
    @ApiOperation(value = "Delete an already existing question sent by user via contact form")
    @ApiResponses(value = {
        @ApiResponse(code = HttpURLConnection.HTTP_OK, message = "Request completed"),
        @ApiResponse(code = HttpURLConnection.HTTP_NOT_FOUND, message = "Endpoint not found"),
        @ApiResponse(code = HttpURLConnection.HTTP_INTERNAL_ERROR, message = "Internal server problems")
        }
    )
    @Path("/question/{id:.*}")
    @Produces(MediaType.APPLICATION_JSON)
    public IAPIMessage deleteQuestion(
        @PathParam("id") int id
    ) {
        boolean response = AnunciusDAO.getInstance().delete(id, AnunciusDAO.CONTACT_COLLECTION_NAME);
        return new BooleanWrapper(response);
    }
    
    @GET
    @ApiOperation(value = "Obtain an already existing question list sent by users via contact form")
    @ApiResponses(value = {
        @ApiResponse(code = HttpURLConnection.HTTP_OK, message = "Request completed"),
        @ApiResponse(code = HttpURLConnection.HTTP_NOT_FOUND, message = "Endpoint not found"),
        @ApiResponse(code = HttpURLConnection.HTTP_INTERNAL_ERROR, message = "Internal server problems")
        }
    )
    @Path("/questions")
    @Produces(MediaType.APPLICATION_JSON)
    public IAPIMessage readQuestionList(
    ) {
        List<Document> questionList = AnunciusDAO.getInstance().getQuestionlist();
        return new ResponseArrayList(questionList);
    }
    //END QUESTION
    
    @GET
    @ApiOperation(value = "Obtain the count of users registered")
    @ApiResponses(value = {
        @ApiResponse(code = HttpURLConnection.HTTP_OK, message = "Request completed"),
        @ApiResponse(code = HttpURLConnection.HTTP_NOT_FOUND, message = "Endpoint not found"),
        @ApiResponse(code = HttpURLConnection.HTTP_INTERNAL_ERROR, message = "Internal server problems")
        }
    )
    @Path("/user/count")
    @Produces(MediaType.APPLICATION_JSON)
    public HashMap countUsers(
    ) {
        HashMap<String, Object> data = new HashMap<>();
        data.put("count", AnunciusDAO.getInstance().usersCount());
        return data;
    }
    
    @GET
    @ApiOperation(value = "Obtains details of a given user")
    @ApiResponses(value = {
        @ApiResponse(code = HttpURLConnection.HTTP_OK, message = "Request completed"),
        @ApiResponse(code = HttpURLConnection.HTTP_NOT_FOUND, message = "Endpoint not found"),
        @ApiResponse(code = HttpURLConnection.HTTP_INTERNAL_ERROR, message = "Internal server problems")
        }
    )
    @Path("/user/{id:.*}")
    @Produces(MediaType.APPLICATION_JSON)
    public IAPIMessage readUser(
        @PathParam("id") int id
    ) {
        Document document = AnunciusDAO.getInstance().read(id, AnunciusDAO.AUTH_COLLECTION_NAME);
        return new ResponseDocumentWrapper(document);
    }
    
    @DELETE
    @ApiOperation(value = "Delete registered user information")
    @ApiResponses(value = {
        @ApiResponse(code = HttpURLConnection.HTTP_OK, message = "Request completed"),
        @ApiResponse(code = HttpURLConnection.HTTP_NOT_FOUND, message = "Endpoint not found"),
        @ApiResponse(code = HttpURLConnection.HTTP_INTERNAL_ERROR, message = "Internal server problems")
        }
    )
    @Path("/user/{id:.*}")
    @Produces(MediaType.APPLICATION_JSON)
    public IAPIMessage deleteUser(
        @PathParam("id") int id
    ) {
        boolean response = AnunciusDAO.getInstance().delete(id, AnunciusDAO.AUTH_COLLECTION_NAME);
        return new BooleanWrapper(response);
    }
    
    @GET
    @ApiOperation(value = "Obtain a list of all registered users")
    @ApiResponses(value = {
        @ApiResponse(code = HttpURLConnection.HTTP_OK, message = "Request completed"),
        @ApiResponse(code = HttpURLConnection.HTTP_NOT_FOUND, message = "Endpoint not found"),
        @ApiResponse(code = HttpURLConnection.HTTP_INTERNAL_ERROR, message = "Internal server problems")
        }
    )
    @Path("/users")
    @Produces(MediaType.APPLICATION_JSON)
    public IAPIMessage readUserList(
    ) {
        List<Document> questionList = AnunciusDAO.getInstance().getUserList();
        return new ResponseArrayList(questionList);
    }
    
    //END USERS
}
