/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.api.model.request;

import anuncius.singleton.AnunciusDAO;
import org.bson.Document;

/**
 *
 * @author sanguita
 */
public class LoginRequest extends AbstractRequest{
    
    private String id;
    private String fullname;
    private String givenname;
    private String familiyname;
    private String image;
    private String email;
    private String token;

    public LoginRequest(String id, String fullname, String givenname, String familiyname, String image, String email, String token) {
        this.id = id;
        this.fullname = fullname;
        this.givenname = givenname;
        this.familiyname = familiyname;
        this.image = image;
        this.email = email;
        this.token = token;
    }

    @Override
    public void convertFromMongoObject(Document document) {
        String[] names = this.getColumnNames();
        this.id = document.getString(names[0]);
        this.fullname = document.getString(names[1]);
        //...
        this.email = document.getString(names[5]);
        this.token = document.getString(names[6]);
    }
    
    @Override
    public Document convertToMongoObject() {
        Document document = super.parentConvertToMongoObject();
        String[] names = this.getColumnNames();
        document.put(names[0], this.id);
        document.put(names[1], this.fullname);
        document.put(names[2], this.givenname);
        document.put(names[3], this.familiyname);
        document.put(names[4], this.image);
        document.put(names[5], this.email);
        document.put(names[6], this.token);
        return document;
    }

    @Override
    public String getCollectionName() {
        return AnunciusDAO.AUTH_COLLECTION_NAME;
    }

    @Override
    public String[] getColumnNames() {
        return new String[]{
            "google_id",
            "fullname",
            "given_name",
            "familiy_name",
            "image_url",
            "email",
            "token"
        };
    }

    @Override
    public int getColumnCount() {
        return 7;
    }
    
    @Override
    public boolean hasValidData() {
        return true;
    }

}
