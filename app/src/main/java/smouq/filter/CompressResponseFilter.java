/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package smouq.filter;

import smouq.compress.CharResponseWrapper;
import smouq.compress.HtmlCompressor;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletResponse;

public class CompressResponseFilter implements Filter {

  private HtmlCompressor compressor;

  @Override
  public void doFilter(ServletRequest req, ServletResponse resp,
      FilterChain chain) throws IOException, ServletException {

    HttpServletResponse httpResp = (HttpServletResponse) resp;
    CharResponseWrapper responseWrapper = new CharResponseWrapper(httpResp);
    
    chain.doFilter(req, responseWrapper);

    String servletResponse = responseWrapper.toString();
    String compressedResponse = compressor.compress(servletResponse);
    System.out.println("Compressed response: "+compressedResponse);
    
    resp.getOutputStream().print(compressedResponse);
    resp.getOutputStream().flush();
    resp.getOutputStream().close();
  }

  @Override
  public void init(FilterConfig config) throws ServletException {
    compressor = new HtmlCompressor();
    compressor.setCompressCss(true);
    compressor.setCompressJavaScript(true);
  }

  @Override
  public void destroy() {
  }

}