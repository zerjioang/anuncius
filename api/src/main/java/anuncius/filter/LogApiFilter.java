/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.filter;

import anuncius.util.PlatformUtil;
import java.util.*;
import org.glassfish.jersey.server.ContainerRequest;
import java.io.IOException;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.container.ResourceInfo;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Form;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.MultivaluedMap;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.ResponseBuilder;
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.ext.Provider;
import org.glassfish.jersey.message.internal.MediaTypes;

// Implements Filter class
@Provider
public class LogApiFilter implements ContainerRequestFilter {
    
    @Context
    private ResourceInfo resourceInfo;
    
    public LogApiFilter() {
        System.out.println("LogApiFilter initialization");
    }
    
    /**
     * Apply the filter : check input request, validate or not with user auth
     * @param containerRequest The request from Tomcat server
     */
    @Override
    public void filter(ContainerRequestContext containerRequest) throws IOException {
        //GET, POST, PUT, DELETE, ...
        //log
        String method = containerRequest.getMethod();
        //api path called
        ContainerRequest request = (ContainerRequest) containerRequest.getRequest();
        String path = request.getUriInfo().getRequestUri().getPath();
        int port = request.getUriInfo().getRequestUri().getPort();
        // Get the IP address of client machine

        // Log the IP address and current timestamp.
        logRequest(method, port, path);
        
        if(!PlatformUtil.isDevelopment()){
            if(PlatformUtil.isAPIHardeningEnabled()){
                harden(containerRequest);
            }
        }
    }
    
    private void harden(ContainerRequestContext containerRequest) {        
        ContainerRequest request = (ContainerRequest) containerRequest.getRequest();
        MultivaluedMap<String, String> queryParams = request.getUriInfo().getQueryParameters();
        MultivaluedMap<String, String> pathParams = request.getUriInfo().getPathParameters();
        MultivaluedMap<String, String> formParams = null;
        if (containerRequest.hasEntity() && MediaTypes.typeEqual(MediaType.APPLICATION_FORM_URLENCODED_TYPE,request.getMediaType())){
            request.bufferEntity();
            Form f = request.readEntity(Form.class);
            if(f!=null){
                formParams = f.asMap();
            }
        }
        boolean valid = checkRequestValidity(formParams, queryParams, pathParams);
        if(!valid){
            ResponseBuilder responseBuilder = Response.serverError();
            Response response = responseBuilder.status(Status.BAD_REQUEST).build();
            containerRequest.abortWith(response);
        }
    }

    private boolean checkRequestValidity(
            MultivaluedMap<String, String> formParams,
            MultivaluedMap<String, String> queryParams,
            MultivaluedMap<String, String> pathParams) {
        if(formParams!=null && formParams.size()>=8){
            String time = formParams.getFirst("time");
            String useragent = formParams.getFirst("user_agent");
            String cookies = formParams.getFirst("cookies");
            String lang = formParams.getFirst("language");
            String platform = formParams.getFirst("platform");
            String vendor = formParams.getFirst("vendor");
            String loc = formParams.getFirst("loc");
            String lat = formParams.getFirst("lat");
            String lon = formParams.getFirst("lon");
            String token = formParams.getFirst("token");
            
            long serverTime = System.currentTimeMillis();
            long clientTime = Long.parseLong(time);
            //first check. time check
            boolean validTime = serverTime>=clientTime;
            boolean browserCheck = useragent!=null
                && lang!=null
                && vendor!=null
                && platform!=null
                && !useragent.trim().isEmpty()
                && !lang.trim().isEmpty()
                && !vendor.trim().isEmpty()
                && !platform.trim().isEmpty();
            return validTime && browserCheck;
        }
        return false;
    }

    private void logRequest(String method, int port, String path) {
        System.out.println(
                "Method" + method +
                "Time " + new Date().toString() +
                ", Port " + port +
                ", URL " + path
        );
    }
}