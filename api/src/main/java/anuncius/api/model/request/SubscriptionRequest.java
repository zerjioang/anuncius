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
public class SubscriptionRequest extends AbstractRequest{
    
    private String email;

    public SubscriptionRequest() {
        super();
    }

    public SubscriptionRequest(String email) {
        this.email = email;
    }
    
    public String getEmail() {
        return email;
    }
    
    @Override
    public Document convertToMongoObject() {
        Document document = super.parentConvertToMongoObject();
        String[] names = this.getColumnNames();
        document.put(names[0], this.email);
        return document;
    }
    
    @Override
    public String[] getColumnNames() {
        return new String[]{
            "email"
        };
    }
    
    @Override
    public int getColumnCount(){
        return 1;
    }

    @Override
    public void convertFromMongoObject(Document document) {
    }

    @Override
    public String getCollectionName() {
        return AnunciusDAO.SUBSCRIPTION_COLLECTION_NAME;
    }
    
    @Override
    public boolean hasValidData() {
        return true;
    }
}
