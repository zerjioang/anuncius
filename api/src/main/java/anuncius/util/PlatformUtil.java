/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.util;

import java.util.Map;

/**
 *
 * @author sanguita
 */
public class PlatformUtil {
    
    private static final Map<String, String> env = System.getenv();
    
    private static boolean init = initValues();
    private static boolean dev;
    
    private static final String DEFAULT_DEVELOPMENT_PORT = "8084";
    private static final String DEFAULT_PRODUCTION_PORT = "8080";
    
    private static final String DEFAULT_PRODUCTION_HOSTNAME = "anunci.us";
    private static final String DEFAULT_DEVELOPMENT_HOSTNAME = "localhost";
    
    private static final String DEFAULT_DEVELOPMENT_API_PATH = "/api/";
    private static final String DEFAULT_PRODUCTION_API_PATH = "/";
    
    private static boolean initValues() {
        if(env!=null && env.get("HOSTNAME")!=null){
            String name = env.get("HOSTNAME");
            dev = name.equals("orion");
        }
        return true;
    }
    
    public static boolean isDevelopment(){
        return dev;
    }
    
    public static boolean isProduction(){
        return !dev;
    }

    public static boolean isRedisCacheEnabled() {
        return true;
    }

    public static String getHostName() {
        if(isDevelopment()){
            return DEFAULT_DEVELOPMENT_HOSTNAME;
        }
        return DEFAULT_PRODUCTION_HOSTNAME;
    }

    public static String getRunningPortAsString() {
        if(isDevelopment()){
            return DEFAULT_DEVELOPMENT_PORT;
        }
        return DEFAULT_PRODUCTION_PORT;
    }

    public static String getApiPath() {
        if(isDevelopment()){
            return DEFAULT_DEVELOPMENT_API_PATH;
        }
        return DEFAULT_PRODUCTION_API_PATH;
    }
}
