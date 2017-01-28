/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.api.rt;

/**
 *
 * @author sanguita
 */
public class PushMessage {
    private int version;
    private String type;
    private String payload;

    public PushMessage() {
        this.version = 1;
        this.type = "PUSH";
        this.payload = "";
    }
    
    public PushMessage(String payload) {
        this.version = 1;
        this.type = "PUSH";
        this.payload = payload;
    }

    public PushMessage(int version, String type, String payload) {
        this.version = version;
        this.type = type;
        this.payload = payload;
    }

    public int getVersion() {
        return version;
    }

    public void setVersion(int version) {
        this.version = version;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getPayload() {
        return payload;
    }

    public void setPayload(String payload) {
        this.payload = payload;
    }
    
    
}
