/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius;

import anuncius.util.Helper;
import javax.ws.rs.core.Application;
import anuncius.api.PublicResource;
import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.test.JerseyTest;
import org.glassfish.jersey.test.TestProperties;
import org.junit.Test;

/**
 *
 * @author sanguita
 */
public class PublicResourceTest extends JerseyTest {
    
    @Override
    public Application configure() {
        enable(TestProperties.LOG_TRAFFIC);
        enable(TestProperties.DUMP_ENTITY);
        return new ResourceConfig(PublicResource.class);
    }
    
    //@Test
    public void testDemo() {
        Helper.testSimpleGET(this, "/public/demo", 200, String.class, "{}");
    }
}
