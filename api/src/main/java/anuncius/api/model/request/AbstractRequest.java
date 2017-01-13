/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.api.model.request;

import anuncius.api.base.IMongoManipulable;
import java.io.Serializable;
import org.bson.Document;
/**
 *
 * @author sanguita
 */
public abstract class AbstractRequest implements IMongoManipulable, Serializable{
 
    private String user_agent;
    private String vendor;
    private String platform;
    private String language;
    private String cookies;
    private String location;
    private String time;

    public AbstractRequest(){
        
    }    
    
    public AbstractRequest(String user_agent, String vendor, String platform, String language, String cookies, String location, String time) {
        this.user_agent = user_agent;
        this.vendor = vendor;
        this.platform = platform;
        this.language = language;
        this.cookies = cookies;
        this.location = location;
        this.time = time;
    }

    public String getUser_agent() {
        return user_agent;
    }

    public String getVendor() {
        return vendor;
    }

    public String getPlatform() {
        return platform;
    }

    public String getLanguage() {
        return language;
    }

    public String getCookies() {
        return cookies;
    }

    public String getLocation() {
        return location;
    }

    public String getTime() {
        return time;
    }
    
    @Override
    public Document convertToMongoObject() {
        Document document = new Document();
        String[] names = this.getBaseColumnNames();
        document.put(names[0], this.user_agent);
        document.put(names[1], this.vendor);
        document.put(names[2], this.platform);
        document.put(names[3], this.language);
        document.put(names[4], this.cookies);
        document.put(names[5], this.location);
        document.put(names[6], this.time);
        document.put(names[7], System.currentTimeMillis());
        return document;
    }
    
    @Override
    public String[] getColumnNames() {
        return this.getBaseColumnNames();
    }
    
    public String[] getBaseColumnNames() {
        return new String[]{
            "user_agent",
            "vendor",
            "platform",
            "language",
            "cookies",
            "location",
            "time",
            "server_time"
        };
    }
    
    @Override
    public int getColumnCount(){
        return 8;
    }
}
