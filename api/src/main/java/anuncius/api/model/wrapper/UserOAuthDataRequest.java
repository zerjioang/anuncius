/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.api.model.wrapper;

import java.io.Serializable;
import org.bson.Document;

/**
 *
 * @author sanguita
 */
public class UserOAuthDataRequest implements IMongoManipulable, Serializable{
    
    private final String id;
    private final String name;
    private final String givenName;
    private final String familyName;
    private final String imageUrl;
    private final String email;
    private final String location;
    private final String user_agent;

    public UserOAuthDataRequest(String id, String name, String givenName, String familyName, String imageUrl, String email, String location, String user_agent) {
        this.id = id;
        this.name = name;
        this.givenName = givenName;
        this.familyName = familyName;
        this.imageUrl = imageUrl;
        this.email = email;
        this.location = location;
        this.user_agent = user_agent;
    }
    
    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getGivenName() {
        return givenName;
    }

    public String getFamilyName() {
        return familyName;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public String getEmail() {
        return email;
    }

    public String getLocation() {
        return location;
    }

    public String getUser_agent() {
        return user_agent;
    }

    @Override
    public Document convertToMongoObject() {
        Document document = new Document();
        String[] names = getColumnNames();
        document.put(names[0], this.id);
        document.put(names[1], this.name);
        document.put(names[2], this.givenName);
        document.put(names[3], this.familyName);
        document.put(names[4], this.imageUrl);
        document.put(names[5], this.email);
        //add metadata
        document.put(names[6], this.location);
        document.put(names[7], this.user_agent);
        document.put(names[8], System.currentTimeMillis());     
        return document;
    }

    @Override
    public int getColumnCount() {
        return 9;
    }

    @Override
    public String[] getColumnNames() {
        return new String[]{
            "id",
            "name",
            "given_name",
            "family_name",
            "image_url",
            "email",
            "location",
            "user_agent",
            "time"
        };
    }
}
