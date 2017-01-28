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
    public static final String CONTEXT_PATH = "";
    
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
    
    public static boolean enableMinification(){
        return false;
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
}
