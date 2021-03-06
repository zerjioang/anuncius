package anuncius.filter;

/**
 *
 * @author .local
 */
// Import required java libraries
import anuncius.util.PlatformUtil;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

// Implements Filter class
public class ABFordwardFilter implements Filter {
    
    @Override
    public void init(FilterConfig config) throws ServletException {
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {

        HttpServletRequest httpRequest = (HttpServletRequest) request;
        String uriStr = httpRequest.getRequestURI();
        
        String destination = requiresFordward(uriStr);
        if(destination!=null && !destination.trim().isEmpty()){
            System.out.println("Fordward Filter redirects "+uriStr+" to "+destination);
            httpRequest.getSession().getServletContext().getRequestDispatcher(destination).forward(request,response);
        }
        else{
            // Pass request back down the filter chain
            System.out.println("Fordward Filter >> next");
            chain.doFilter(request, response);
        }
    }

    public void destroy() {
        /* Called before the Filter instance is removed 
        from service by the web container*/
        System.out.println("Fordward filter destroyed");
    }

    private String requiresFordward(String uriStr) {
        uriStr = cleanURL(uriStr);
        if(uriStr!=null){
            if(uriStr.startsWith("/search/item/")){
                //enable redirects for opensearch queries
                return "/view/explore.jsp";
            }
            else if(uriStr.equals("/explore") || uriStr.startsWith("/explore/")){
                return "/view/explore.jsp";
            }
            else if(uriStr.equals("/new")){
                return "/view/new.jsp";
            }
            else if(uriStr.equals("/rules") || uriStr.startsWith("/rules/")){
                return "/view/rules.jsp";
            }
            else if(uriStr.equals("/security") || uriStr.startsWith("/security/")){
                return "/view/security.jsp";
            }
            else if(uriStr.equals("/sitemap") || uriStr.equals("/sitemap/")){
                return "/view/sitemap.jsp";
            }
            else if(uriStr.startsWith("/sitemap/")){
                return "/view/sitemap.provincia.jsp";
            }
            else if(uriStr.equals("/faq") || uriStr.equals("/faq/")){
                return "/view/faq.jsp";
            }
            else if(uriStr.equals("/cookies") || uriStr.equals("/cookies/")){
                return "/view/cookies.jsp";
            }
            else if(uriStr.equals("/account") || uriStr.startsWith("/account/")){
                return "/view/account.jsp";
            }
            else if(uriStr.equals("/dashboard") || uriStr.startsWith("/dashboard/")){
                return "/view/dashboard/index.jsp";
            }
            else if(uriStr.equals("/status") || uriStr.equals("/status/")){
                return "/view/status/index.jsp";
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
            else if(uriStr.equals("/jobs")){
                return "/view/jobs.jsp";
            }
            else if(uriStr.equals("/docs") || uriStr.startsWith("/docs/")){
                return "/view/docs.jsp";
            }
            else if(uriStr.equals("/groups") || uriStr.startsWith("/groups/")){
                return "/view/groups.jsp";
            }
        }
        return null;
    }

    private String cleanURL(String uriStr) {
        if(uriStr!=null && !uriStr.isEmpty()){
            return PlatformUtil.cleanUrl(uriStr);
        }
        return null;
    }
}
