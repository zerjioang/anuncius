package anuncius.filter;

import anuncius.compress.CharResponseWrapper;
import anuncius.compress.HtmlCompressor;
import anuncius.singleton.RedisHandler;
import java.io.IOException;
import java.util.Map;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ADCompressResponseFilter implements Filter {

    private HtmlCompressor compressor;
    private static final Map<String, String> env = System.getenv();
    
    private static final RedisHandler redis = RedisHandler.getInstance();
    
    @Override
    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws IOException, ServletException {

        System.out.println("Compress filter: ");
        
        HttpServletRequest httpRequest = (HttpServletRequest) req;
        String uriStr = httpRequest.getRequestURI();
        
        CharResponseWrapper responseWrapper = new CharResponseWrapper((HttpServletResponse) resp);
        chain.doFilter(req, responseWrapper);

        String servletResponse = responseWrapper.toString();
        String compressedResponse = compressor.compress(servletResponse);
        if(compressedResponse!=null && !compressedResponse.isEmpty()){
            //add response to redis
            redis.addSet(uriStr, compressedResponse);
            resp.getWriter().flush();
            resp.getWriter().write(compressedResponse);
        }
    }

    @Override
    public void init(FilterConfig config) throws ServletException {
        compressor = new HtmlCompressor();
        compressor.setCompressCss(true);
        compressor.setCompressJavaScript(true);
        if(env!=null && env.get("HOSTNAME")!=null){
            String name = env.get("HOSTNAME");
            compressor.setDevelopment(name.equals("orion"));
        }
        System.out.println("Compression enabled: "+!this.compressor.isDevelopment());
    }

    @Override
    public void destroy() {
    }

}
