/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package musutruq.util;

import java.util.ArrayList;
import java.util.HashMap;
import javax.ws.rs.QueryParam;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.Response;
import static junit.framework.Assert.assertEquals;
import static junit.framework.Assert.assertNotNull;
import org.glassfish.jersey.test.JerseyTest;

/**
 *
 * @author sanguita
 */
public class Helper {
    
    public static void testSimpleGET(JerseyTest parent, String apiPath, int code, Class returnClass, Object data){      
        testGETwithParams(parent, apiPath, code, returnClass, data, null);
    }
    
    public static void testGETwithParams(JerseyTest parent, String apiPath, int code, Class returnClass, Object data, HashMap<String, Object> paramList){
        WebTarget target = parent.target(apiPath);
        
        //add query params in case of needed
        if(paramList!=null && !paramList.isEmpty()){
            paramList.entrySet().forEach((entry) -> {
                String key = entry.getKey();
                Object value = entry.getValue();
                target.queryParam(key, value);
            });
        }
        
        Response output = target.request().get();
        
        //check response status
        assertEquals("should return status "+code, code, output.getStatus());
        assertNotNull("Should return valid content", output.hasEntity());
        
        //check response data
        Object readedData = output.readEntity(returnClass);
        assertEquals("should return demo content", data, readedData);
    }
}
