package anuncius.filter;

import anuncius.util.PlatformUtil;
import anuncius.compress.CharResponseWrapper;
import anuncius.compress.HtmlCompressor;
import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ADCompressResponseFilter implements Filter {
    
    private HtmlCompressor compressor;
    
    @Override
    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest httpRequest = (HttpServletRequest) req;
        String uriStr = httpRequest.getRequestURI();
        
        System.out.println("Compress filter"+uriStr);
        
        CharResponseWrapper responseWrapper = new CharResponseWrapper((HttpServletResponse) resp);
        chain.doFilter(req, responseWrapper);

        String servletResponse = responseWrapper.toString();
        String compressedResponse = compressor.compress(servletResponse);
        if(compressedResponse!=null && !compressedResponse.isEmpty()){
            double amount = (servletResponse.length()-compressedResponse.length())/((double)servletResponse.length())*100.00;
            System.out.println("Saving "+amount+ " %");
            //add response to redis
            resp.getWriter().flush();
            resp.getWriter().write(compressedResponse);
            //saveRequestOnRedis(uriStr, compressedResponse);
        }
    }

    @Override
    public void init(FilterConfig config) throws ServletException {
        compressor = new HtmlCompressor();
        compressor.setCompressCss(true);
        compressor.setCompressJavaScript(true);
        compressor.setDevelopment(
                PlatformUtil.isDevelopment()
        );
        System.out.println("Compression enabled: "+!this.compressor.isDevelopment());
    }

    @Override
    public void destroy() {
        System.out.println("Compress filter destroyed");
    }
    
    /*

    Not used by now
    
    private void saveRequestOnRedis(String key, String value) {
        new Thread(() -> {
            redis.addSet(key, value);
        }).start();
    }
    */

}
