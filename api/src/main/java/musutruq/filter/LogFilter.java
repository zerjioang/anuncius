/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package musutruq.filter;

/**
 *
 * @author .local
 */
// Import required java libraries
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.util.*;

// Implements Filter class
public class LogFilter implements Filter {
    
    public void init(FilterConfig config) throws ServletException {
        // Get init parameter 
        String testParam = config.getInitParameter("test-param");

        //Print the init parameter 
        System.out.println("Test Param: " + testParam);
    }
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {

        HttpServletRequest httpRequest = (HttpServletRequest) request;
        String uriStr = httpRequest.getRequestURI();
        // Get the IP address of client machine.   
        String ipAddress = request.getRemoteAddr();

        // Log the IP address and current timestamp.
        System.out.println(
                "Time " + new Date().toString() +
                ", IP " + ipAddress +
                ", Host " + request.getRemoteHost() + 
                ", Port " + request.getRemotePort() +
                ", URL " + uriStr
        );

        // Pass request back down the filter chain
        chain.doFilter(request, response);
    }
    public void destroy() {
        /* Called before the Filter instance is removed 
        from service by the web container*/
    }
}