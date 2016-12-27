/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.filter;

import anuncius.compress.CharResponseWrapper;
import anuncius.compress.HtmlCompressor;
import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletResponse;

@WebFilter(filterName = "CompressResponseFilter", urlPatterns = {"/*"})
public class ABCompressResponseFilter implements Filter {

    private HtmlCompressor compressor;

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
        compressor.setDevelopment(true);
    }

    @Override
    public void destroy() {
    }

}
