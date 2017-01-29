/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius;

import anuncius.util.PlatformUtil;
import io.swagger.jaxrs.config.BeanConfig;
import io.swagger.jaxrs.listing.ApiListingResource;
import io.swagger.jaxrs.listing.SwaggerSerializers;
import java.util.HashSet;
import java.util.Set;
import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

/**
 *
 * @author .local
 */
@ApplicationPath("v1/public")
public class ApplicationConfig extends Application {

    public static final int API_VERSION = 1;
    
    public ApplicationConfig(){
        initializeSwaggerBeanConfig();
    }
    
    @Override
    public Set<Class<?>> getClasses() {
        Set<Class<?>> resources = new HashSet<>();
        addRestResourceClasses(resources);
        addSwaggerResourceClasses(resources);
        return resources;
    }


    private void addSwaggerResourceClasses(Set<Class<?>> resources) {
        resources.add(ApiListingResource.class);
        resources.add(SwaggerSerializers.class);
    }

    private void initializeSwaggerBeanConfig() {
        BeanConfig beanConfig = new BeanConfig();
        beanConfig.setVersion("1.0.0");
        beanConfig.setSchemes(new String[]{"http", "https"});
        
        String host = PlatformUtil.getHostName();
        String port = PlatformUtil.getRunningPortAsString();
        beanConfig.setHost(host+":"+port);
        
        beanConfig.setBasePath(PlatformUtil.getApiPath());
        
        beanConfig.setResourcePackage("io.swagger.resources");
        beanConfig.setTitle("Anuncius public API definition");
        beanConfig.setDescription("This is an swagger configuration json file for anuncius public api definition");
        beanConfig.setPrettyPrint(true);
        beanConfig.setScan(true);
    }

    private void addRestResourceClasses(Set<Class<?>> resources) {
        resources.add(anuncius.api.AdsResource.class);
        resources.add(anuncius.api.AuthResource.class);
        resources.add(anuncius.api.ContactResource.class);
        resources.add(anuncius.api.SearchResource.class);
        resources.add(anuncius.filter.LogApiFilter.class);
    }
    
}
