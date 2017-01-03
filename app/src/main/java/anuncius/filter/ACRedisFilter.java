package anuncius.filter;

/**
 *
 * @author .local
 */
// Import required java libraries
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebFilter;

// Implements Filter class
@WebFilter(filterName = "RedisFilter", urlPatterns = {"/*"})
public class ACRedisFilter implements Filter {

    private static String redisHandler = "";
    
    private String cachedHtml;
    public void init(FilterConfig config) throws ServletException {
        redisHandler = "redis";
        cachedHtml = "<html ⚡><body><h1>atención: response from redis</h1></body></html>";
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
