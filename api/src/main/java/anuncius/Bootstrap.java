/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius;

import anuncius.util.PlatformUtil;
import io.swagger.jaxrs.config.BeanConfig;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;

public class Bootstrap extends HttpServlet {
    
    @Override
    public void init(ServletConfig config) throws ServletException {
        super.init(config);
        
        BeanConfig beanConfig = new BeanConfig();
        beanConfig.setVersion("1.0.0");
        beanConfig.setSchemes(new String[]{
            "http",
            "https"
        });
        
        String host = PlatformUtil.getHostName();
        String port = PlatformUtil.getRunningPortAsString();
        beanConfig.setHost(host+":"+port);
        
        //PlatformUtil.getApiPath()
        beanConfig.setBasePath("/v1/public");
        
        beanConfig.setResourcePackage("io.swagger.resources");
        beanConfig.setTitle("Anuncius public API v1 definition");
        beanConfig.setDescription("This is an swagger configuration json file for anuncius public api v1 definition");
        beanConfig.setPrettyPrint(true);
        beanConfig.setScan(true);
    }
}
