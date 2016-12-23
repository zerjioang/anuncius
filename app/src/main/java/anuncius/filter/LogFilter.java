/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.filter;

/**
 *
 * @author .local
 */
// Import required java libraries
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.util.*;
import javax.servlet.annotation.WebFilter;

// Implements Filter class
@WebFilter(filterName = "LogFilter", urlPatterns = { "/*" })
public class LogFilter implements Filter {
    
    public void init(FilterConfig config) throws ServletException {
    }
    
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {

        HttpServletRequest httpRequest = (HttpServletRequest) request;
        String uriStr = httpRequest.getRequestURI();
        // Get the IP address of client machine.   
        String ipAddress = request.getRemoteAddr();
        // Get referer address for behaviour mapping
        String referer = httpRequest.getHeader("referer");

        // Log the IP address and current timestamp.
        System.out.println(
                "Time " + new Date().toString() +
                ", IP " + ipAddress +
                ", Host " + request.getRemoteHost() + 
                ", Port " + request.getRemotePort() +
                ", URL " + uriStr +
                ", Referer URL" + referer
        );

        // Pass request back down the filter chain
        chain.doFilter(request, response);
    }
    public void destroy() {
        /* Called before the Filter instance is removed 
        from service by the web container*/
    }
}