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
public class ContactFormRequest extends AbstractRequest{
    
    private String name;
    private String email;
    private String message;

    public ContactFormRequest(String name, String email, String message) {
        this.name = name;
        this.email = email;
        this.message = message;
    }
    
    @Override
    public Document convertToMongoObject() {
        Document document = super.parentConvertToMongoObject();
        String[] names = this.getColumnNames();
        document.put(names[0], this.name);
        document.put(names[1], this.email);
        document.put(names[2], this.message);
        return document;
    }
    
    @Override
    public String[] getColumnNames() {
        return new String[]{
            "name",
            "email",
            "message"
        };
    }
    
    @Override
    public int getColumnCount(){
        return 3;
    }

    @Override
    public void convertFromMongoObject(Document document) {
    }

    @Override
    public String getCollectionName() {
        return AnunciusDAO.CONTACT_COLLECTION_NAME;
    }

    @Override
    public boolean hasValidData() {
        return true;
    }
}
