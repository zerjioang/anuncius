/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.util;

import com.google.gson.Gson;
import java.util.Map;

public class PlatformUtil {
    
    private static boolean DEVELOPMENT_ENV;
    
    private static final Map<String, String> ENV_VARS = System.getenv();
    private static final boolean INIT = initValues();
    
    private static final String DEFAULT_DEVELOPMENT_PORT = "8084";
    private static final String DEFAULT_PRODUCTION_PORT = "443";
    
    private static final String DEFAULT_PRODUCTION_HOSTNAME = "api.anunci.us";
    private static final String DEFAULT_DEVELOPMENT_HOSTNAME = "localhost";
    
    private static final String DEFAULT_DEVELOPMENT_API_PATH = "/api/";
    private static final String DEFAULT_PRODUCTION_API_PATH = "/";
    private static final boolean ENABLE_API_HARDENING = false;
    
    private static final String CONTEXT_PATH = "";
    private static final boolean ENABLE_MINIFICATION_DEV = false;
    private static final boolean ENABLE_MINIFICATION_PROD = true;
    
    private static final boolean DEFAULT_DEVELOPMENT_REDIS_CACHE_ENABLED = false;
    private static final boolean DEFAULT_PRODUCTION_REDIS_CACHE_ENABLED = true;
    
    private static boolean initValues() {
        if(ENV_VARS!=null && ENV_VARS.get("HOSTNAME")!=null){
            String name = ENV_VARS.get("HOSTNAME");
            DEVELOPMENT_ENV = name!=null && name.equals("orion");
        }
        return true;
    }
    
    public static boolean isDevelopment(){
        return DEVELOPMENT_ENV;
    }
    
    private static void setDevelopment(boolean b){
        DEVELOPMENT_ENV = b;
    }
    
    public static boolean isProduction(){
        return !DEVELOPMENT_ENV;
    }

    public static boolean isRedisCacheEnabled() {
        if(isDevelopment()){
            return DEFAULT_DEVELOPMENT_REDIS_CACHE_ENABLED;
        }
        return DEFAULT_PRODUCTION_REDIS_CACHE_ENABLED;
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

    public static boolean isAPIHardeningEnabled() {
        return ENABLE_API_HARDENING;
    }
    
    public static boolean enableMinification(){
        if(isDevelopment())
            return ENABLE_MINIFICATION_DEV;
        return ENABLE_MINIFICATION_PROD;
    }

    public static String cleanUrl(String uriStr) {
        if(isDevelopment()){
            return uriStr.replace(getContextPath(), "");
        }
        return uriStr;
    }

    public static String getContextPath() {
        return CONTEXT_PATH;
    }

    public static String toJsonString(Object data) {
        if(data!=null){
            Gson gson = new Gson();
            return gson.toJson(data);
        }
        return "{}";
    }

    public static String getRedisHost() {
        if(isDevelopment()){
            return "10.5.0.3";
        }
        return "redis.anunci.us";
    }
    
    public static String getMongosHost() {
        if(isDevelopment()){
            return "10.5.0.2";
        }
        return "mongo.anunci.us";
    }

    public static void forceDevelopmentMode(boolean b) {
        setDevelopment(b);
    }
}
