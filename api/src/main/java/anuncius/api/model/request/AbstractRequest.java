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

    private String id;
    private boolean deleted;
    
    public AbstractRequest(){
        
    }
    
    public AbstractRequest(Document document) {
        this.convertFromMongoObject(document);
    }
    
    public abstract void convertFromMongoObject(Document document);
    
    @Override
    public Document convertToMongoObject() {
        Document document = new Document();
        String[] names = this.getThisColumnNames();
        document.put(names[1], deleted);
        return document;
    }
    
    public String[] getThisColumnNames() {
        return new String[]{
            "id",
            "deleted"
        };
    }
    
    @Override
    public int getColumnCount(){
        return 2;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public boolean isDeleted() {
        return deleted;
    }

    public void setDeleted(boolean deleted) {
        this.deleted = deleted;
    }
    
    public abstract String getCollectionName();
}
