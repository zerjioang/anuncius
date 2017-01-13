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
public class ContactFormRequest extends AbstractRequest{
    
    private String name;
    private String email;
    private String message;

    public ContactFormRequest(
            String user_agent, String vendor, String platform, String language, String cookies, String location, String time,
            String name, String email, String message) {
        super(user_agent, vendor, platform, language, cookies, location, time);
        this.name = name;
        this.email = email;
        this.message = message;
    }
    
    @Override
    public Document convertToMongoObject() {
        Document document = super.convertToMongoObject();
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
}
