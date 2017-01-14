/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.api.model.request;

import java.io.Serializable;
import org.bson.Document;

/**
 *
 * @author sanguita
 */
public class UserOAuthDataRequest extends AbstractRequest{
    
    private final String id;
    private final String name;
    private final String givenName;
    private final String familyName;
    private final String imageUrl;
    private final String email;

    public UserOAuthDataRequest(
            String id, String name, String givenName, String familyName, String imageUrl, String email) {
        this.id = id;
        this.name = name;
        this.givenName = givenName;
        this.familyName = familyName;
        this.imageUrl = imageUrl;
        this.email = email;
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

    @Override
    public Document convertToMongoObject() {
        Document document = super.convertToMongoObject();
        String[] names = getColumnNames();
        document.put(names[0], this.id);
        document.put(names[1], this.name);
        document.put(names[2], this.givenName);
        document.put(names[3], this.familyName);
        document.put(names[4], this.imageUrl);
        document.put(names[5], this.email);
        return document;
    }

    @Override
    public int getColumnCount() {
        return 6;
    }

    @Override
    public String[] getColumnNames() {
        return new String[]{
            "id",
            "name",
            "given_name",
            "family_name",
            "image_url",
            "email"
        };
    }

    @Override
    public void convertFromMongoObject(Document document) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
}
