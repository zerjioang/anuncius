package anuncius.filter;

/**
 *
 * @author .local
 */
// Import required java libraries
import anuncius.singleton.RedisHandler;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebFilter;

// Implements Filter class
public class ACRedisFilter implements Filter {

    private static RedisHandler redis = RedisHandler.getInstance();
    
    public void init(FilterConfig config) throws ServletException {
    }

    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {

        HttpServletRequest httpRequest = (HttpServletRequest) request;
        String uriStr = httpRequest.getRequestURI();
       
        String data = gotHit(uriStr);
        System.out.println("Redis filter hit: "+data!=null);
        System.out.println(data);
        if(data!=null && data.startsWith("<!doctype html>")){
            response.getWriter().write(data);
        }
        else{
            // Pass request back down the filter chain
            chain.doFilter(request, response);
        }
    }

    public void destroy() {
        /* Called before the Filter instance is removed 
        from service by the web container*/
        System.out.println("Redis filter destroyed");
    }

    private String gotHit(String uriStr) {
        return redis.getSet(uriStr);
    }
}
