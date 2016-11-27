package smouq.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;

public class CommonFilter {
    
}
/*
//@WebFilter(".*[^(\\.css|\\.js|\\.ico|\\.png|\\.jpg|\\.ttf)]$")
@WebFilter(
  filterName = "CommonFilter",
  urlPatterns = { "/*" }
)
public class CommonFilter implements Filter {

    @Override
    public void init(FilterConfig config) throws ServletException {
    }

    @Override
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws ServletException, IOException {
        
        // Pass request back down the filter chain
        chain.doFilter(req, res);
        /*
        HttpServletRequest request = (HttpServletRequest) req;
        
        String uriStr = request.getRequestURI();
        String path = request.getContextPath();
        
        req.getRequestDispatcher(uriStr).forward(req, res);
        if(uriStr.endsWith(".jsp")){
            //do nothing
            uriStr = uriStr.replaceAll("/ebengrid/", "/");
            req.getRequestDispatcher(uriStr).forward(req, res);
        }
        else if(isResource(uriStr)){
            rewriteResource(uriStr, req, res);
        }
        else{
            //redirect to .jsp
            rewriteJSP(uriStr, path, req, res);
        }
    }
    
    private void rewriteResource(String uriStr, ServletRequest req, ServletResponse res) throws IOException, ServletException {
        uriStr = uriStr.replaceAll("/ebengrid/", "/");
        req.getRequestDispatcher(uriStr).forward(req, res);
    }

    private void rewriteJSP(String uriStr, String contextPath, ServletRequest req, ServletResponse res) throws IOException, ServletException {
        int uriLen = uriStr.length();
        int contextLen = contextPath.length();
        if ( uriLen > contextLen ){
            String path;
            path = uriStr.substring(contextLen+1, uriLen);
            if(path.isEmpty()){
                req.getRequestDispatcher("index.jsp").forward(req, res);
            }
            else{
                req.getRequestDispatcher(path+".jsp").forward(req, res);
            }
        }
    }

    private boolean isResource(String uriStr) {
        return uriStr.endsWith(".js") || 
                uriStr.endsWith(".css") || 
                uriStr.endsWith(".png") || 
                uriStr.endsWith(".jpg") || 
                uriStr.endsWith(".ico") || 
                uriStr.endsWith(".svg") || 
                uriStr.endsWith(".woff") || 
                uriStr.endsWith(".ttf");
    }

    @Override
    public void destroy() {
    }
}

