package anuncius.filter;

import anuncius.compress.CharResponseWrapper;
import anuncius.compress.HtmlCompressor;
import java.io.IOException;
import java.util.Map;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletResponse;

@WebFilter(filterName = "CompressResponseFilter", urlPatterns = {"/*"})
public class ADCompressResponseFilter implements Filter {

    private HtmlCompressor compressor;
    private static final Map<String, String> env = System.getenv();
    @Override
    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws IOException, ServletException {

        System.out.println("Compress filter: ");
        
        CharResponseWrapper responseWrapper = new CharResponseWrapper((HttpServletResponse) resp);
        chain.doFilter(req, responseWrapper);

        String servletResponse = responseWrapper.toString();
        String compressedResponse = compressor.compress(servletResponse);
        if(compressedResponse!=null && !compressedResponse.isEmpty()){
            resp.getWriter().flush();
            resp.getWriter().write(compressedResponse);
        }
    }

    @Override
    public void init(FilterConfig config) throws ServletException {
        compressor = new HtmlCompressor();
        compressor.setCompressCss(true);
        compressor.setCompressJavaScript(true);
        compressor.setDevelopment(false);
        if(env!=null && env.get("HOSTNAME")!=null){
            String name = env.get("HOSTNAME");
            compressor.setDevelopment(name.equals("orion"));
        }
    }

    @Override
    public void destroy() {
    }

}
