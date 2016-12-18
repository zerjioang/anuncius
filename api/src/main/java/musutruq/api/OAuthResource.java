/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package musutruq.api;

import java.net.URI;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriBuilder;

import org.glassfish.jersey.client.oauth2.ClientIdentifier;
import org.glassfish.jersey.client.oauth2.OAuth2ClientSupport; 
import org.glassfish.jersey.client.oauth2.OAuth2CodeGrantFlow; 
import org.glassfish.jersey.client.oauth2.TokenResult;

import musutruq.api.auth.SimpleOAuth2Service;
import musutruq.api.auth.OAuthApiSecurity;
import musutruq.securelayer.SecureLayerException;
import musutruq.api.base.IAPIMessage;

/**
 * REST Web Service
 *
 * @author .local
 */
@Path("/oauth")
public class OAuthResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of OAuthResource
     */
    public OAuthResource() {
    }

    /**
     * Retrieves representation of an instance of smouq.api.OAuthResource
     * @return an instance of java.lang.String
     */
    @GET
    @Path("register")
    @Produces(MediaType.APPLICATION_JSON)
    public IAPIMessage registerOauth(@QueryParam("clientId") String consumerKey,
                          @QueryParam("clientSecret") String consumerSecret) {
        try{
            OAuthApiSecurity.hasValidInput(consumerKey, consumerSecret);
        }
        catch(SecureLayerException e){
            //return ApiResponse.sendException(e);
            return null;
        }
        ClientIdentifier clientIdentifier = new ClientIdentifier(consumerKey, consumerSecret);
        OAuth2CodeGrantFlow.Builder builder =
            OAuth2ClientSupport.authorizationCodeGrantFlowBuilder(clientIdentifier,
                            "https://example.com/oauth/authorization",
                            "https://example.com/oauth/token");
        OAuth2CodeGrantFlow flow = builder
            .property(OAuth2CodeGrantFlow.Phase.AUTHORIZATION, "readOnly", "true")
            .scope("contact")
            .build();
        String authorizationUri = flow.start();

        // Here we must redirect the user to the authorizationUri
        // and let the user approve an access for our app.
        
        //TODO logic

        // We must handle redirection back to our web resource
        // and extract code and state from the request
        String code = "";
        String state = "";
        final TokenResult result = flow.finish(code, state);
        System.out.println("Access Token: " + result.getAccessToken());
        //return "{'status':'done'}";
        return null;
    }
    
    /**
    * User will be redirected back to this resource after he/she grants access to our application.
    *
    * @author Miroslav Fuksa
    */
    @GET
    @Path("authorize")
    public Response authorize(@QueryParam("code") String code, @QueryParam("state") String state) {
        final OAuth2CodeGrantFlow flow = SimpleOAuth2Service.getFlow();

        final TokenResult tokenResult = flow.finish(code, state);

        SimpleOAuth2Service.setAccessToken(tokenResult.getAccessToken());

        // authorization is finished -> now redirect back to the task resource
        final URI uri = UriBuilder.fromUri(context.getBaseUri()).path("tasks").build();
        return Response.seeOther(uri).build();
    }
    
    /**
     * http://localhost:8080/rest/api/oauth/setup?clientId=demo&clientSecret=1234
     * @param consumerKey               client consumer key
     * @param consumerSecret            client consumer secret
     * @return                          http response object
     */
    @GET
    @Produces("text/html")
    @Path("setup")
    public Response setup(@QueryParam("clientId") String consumerKey,
                          @QueryParam("clientSecret") String consumerSecret) {
        //set client identifier
        SimpleOAuth2Service.setClientIdentifier(new ClientIdentifier(consumerKey, consumerSecret));
        //redirect to other wesite
        final URI uri = UriBuilder.fromUri(context.getBaseUri()).path("tasks").build();
        return Response.seeOther(uri).build();
    }
}
