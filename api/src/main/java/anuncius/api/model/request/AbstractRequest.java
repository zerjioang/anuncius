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
    private long date;
    
    public AbstractRequest(){
        this.deleted = false;
        this.date = System.currentTimeMillis();
    }
    
    public AbstractRequest(Document document) {
        this.convertFromMongoObject(document);
    }
    
    public Document parentConvertToMongoObject() {
        Document document = new Document();
        String[] names = this.getThisColumnNames();
        document.put(names[0], id);
        document.put(names[1], deleted);
        document.put(names[2], date);
        return document;
    }
    
    public String[] getThisColumnNames() {
        return new String[]{
            "id",
            "deleted",
            "creation_date"
        };
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

    public long getDate() {
        return date;
    }

    public void setDate(long date) {
        this.date = date;
    }
}
