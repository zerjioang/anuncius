/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.api.model.request;

import anuncius.api.base.IMongoManipulable;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import org.bson.Document;

/**
 *
 * @author sanguita
 */
public final class AbstractRequestList implements Serializable{

    private String id;
    private boolean deleted;
    private List<AbstractRequest> list;
    
    public AbstractRequestList(){
        list = new ArrayList<>();
    }
    
    public AbstractRequestList(List<AbstractRequest> documentList) {
        this();
        documentList.forEach((d) -> {
            list.add(d);
        });
    }
    
    public List<Document> convertToMongoObject() {
        List<Document> temp = new ArrayList<>();
        this.list.forEach((d) -> {
            temp.add(d.convertToMongoObject());
        });
        return temp;
    }
    
    public String getCollectionName(){
        if(list.size()>0){
            AbstractRequest firstItem = list.get(0);
            return firstItem.getCollectionName();
        }
        throw new IllegalArgumentException("Could not determine collection name.");
    }

    public boolean hasContent() {
        return !this.list.isEmpty();
    }
}
