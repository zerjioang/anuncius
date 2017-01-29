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
public class LogoutRequest extends AbstractRequest{
    
    private String id;
    private String token;

    public LogoutRequest(String id, String token) {
        this.id = id;
        this.token = token;
    }

    @Override
    public void convertFromMongoObject(Document document) {
        String[] names = this.getColumnNames();
        this.id = document.getString(names[0]);
        this.token = document.getString(names[1]);
    }
    
    @Override
    public Document convertToMongoObject() {
        Document document = super.parentConvertToMongoObject();
        String[] names = this.getColumnNames();
        document.put(names[0], this.id);
        document.put(names[1], this.token);
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
            "token"
        };
    }

    @Override
    public int getColumnCount() {
        return 2;
    }
    
    @Override
    public boolean hasValidData() {
        return true;
    }

}
