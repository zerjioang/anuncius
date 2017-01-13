/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.api.model.request;

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

    public SubscriptionRequest(
            String user_agent, String vendor, String platform, String language, String cookies, String location, String time,
            String email) {
        super(user_agent, vendor, platform, language, cookies, location, time);
        this.email = email;
    }
    
    public String getEmail() {
        return email;
    }
    
    @Override
    public Document convertToMongoObject() {
        Document document = super.convertToMongoObject();
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
}
