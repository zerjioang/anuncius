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
public class ABFordwardFilter implements Filter {
    
    public void init(FilterConfig config) throws ServletException {
    }

    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {

        HttpServletRequest httpRequest = (HttpServletRequest) request;
        String uriStr = httpRequest.getRequestURI();
        
        System.out.println("Fordward Filter: "+uriStr);
        String destination = requiresFordward(uriStr);
        if(destination!=null){
            httpRequest.getSession().getServletContext().getRequestDispatcher(destination).forward(request,response);
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

    private String requiresFordward(String uriStr) {
        if(uriStr.equals("/account") || uriStr.startsWith("/account/")){
            return "/view/account.jsp";
        }
        else if(uriStr.equals("/blog") || uriStr.startsWith("/blog/")){
            return "/view/blog.jsp";
        }
        else if(uriStr.equals("/conditions") || uriStr.startsWith("/conditions/")){
            return "/view/conditions.jsp";
        }
        else if(uriStr.equals("/contact") || uriStr.startsWith("/contact/")){
            return "/view/contact.jsp";
        }
        else if(uriStr.equals("/explore") || uriStr.startsWith("/explore/")){
            return "/view/explore.jsp";
        }
        else if(uriStr.equals("/item") || uriStr.startsWith("/item/")){
            return "/view/item.jsp";
        }
        else if(uriStr.equals("/landing") || uriStr.startsWith("/landing/")){
            return "/view/landing.jsp";
        }
        else if(uriStr.equals("/post") || uriStr.startsWith("/post/")){
            return "/view/post.jsp";
        }
        else if(uriStr.equals("/privacy") || uriStr.startsWith("/privacy/")){
            return "/view/privacy.jsp";
        }
        else if(uriStr.equals("/questions") || uriStr.startsWith("/questions/")){
            return "/view/questions.jsp";
        }
        else if(uriStr.equals("/ranking") || uriStr.startsWith("/ranking/")){
            return "/view/ranking.jsp";
        }
        else if(uriStr.equals("/user") || uriStr.startsWith("/user/")){
            return "/view/user.jsp";
        }
        return null;
    }
}
