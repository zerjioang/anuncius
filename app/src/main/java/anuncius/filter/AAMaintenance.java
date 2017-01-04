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
public class AAMaintenance implements Filter {

    private static final boolean MAINTENANCE_ENABLED = false;
    
    private String updatingMessage;
    public void init(FilterConfig config) throws ServletException {
        updatingMessage = "<html ⚡><body><h1>Server is updating, please wait</h1><h1>El servidor está actualizandose, por favor, espera.</h1></body></html>";
    }

    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {

        HttpServletRequest httpRequest = (HttpServletRequest) request;
        
        System.out.println("Maintenance filter: ");
        if(MAINTENANCE_ENABLED){
            response.getWriter().write(updatingMessage);
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
}
