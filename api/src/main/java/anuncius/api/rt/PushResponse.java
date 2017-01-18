/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.api.rt;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author sanguita
 */
public class PushResponse {

    private int version;
    private String type;
    private String payload;
    private transient PushMessage receivedMessage;
    
    public PushResponse() {
        this.version = 1;
        this.type = "PUSH";
        this.payload = "";
    }
    
    public PushResponse(String payload) {
        this.version = 1;
        this.type = "PUSH";
        this.payload = payload;
    }
    
    public PushResponse(PushMessage message) {
        this.receivedMessage = message;
    }

    public PushResponse(int version, String type, String payload) {
        this.version = version;
        this.type = type;
        this.payload = payload;
    }
    
    public PushResponse(int version, String type, String payload, PushMessage receivedMessage) {
        this(receivedMessage);
        this.version = version;
        this.type = type;
        this.payload = payload;
    }
    
    public static String getJson(Object o){
        Gson gson = new GsonBuilder().create();
        return gson.toJson(o);
    }
}
