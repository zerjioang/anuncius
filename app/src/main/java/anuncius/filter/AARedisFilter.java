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
@WebFilter(filterName = "RedisFilter", urlPatterns = {"/*"})
public class AARedisFilter implements Filter {

    private static String redisHandler = "";
    
    private String cachedHtml;
    public void init(FilterConfig config) throws ServletException {
        redisHandler = "redis";
        cachedHtml = "<html><body><h1>atención: response from redis</h1></body></html>";
    }

    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {

        HttpServletRequest httpRequest = (HttpServletRequest) request;
        String uriStr = httpRequest.getRequestURI();
        
        System.out.println("Redis filter: ");
        if(isCached(uriStr)){
            response.getWriter().write(cachedHtml);
        }
        else{
            // Pass request back down the filter chain
            chain.doFilter(request, response);
        }
    }

    public void destroy() {
        /* Called before the Filter instance is removed 
        from service by the web container*/
    }

    private boolean isCached(String uriStr) {
        //TODO edit cachedHtml variable content here
        return false;
    }
}