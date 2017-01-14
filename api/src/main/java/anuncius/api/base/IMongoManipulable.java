/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.api.base;

import org.bson.Document;

/**
 *
 * @author sanguita
 */
public interface IMongoManipulable {
    
    Document convertToMongoObject();
    void convertFromMongoObject(Document document);
    int getColumnCount();
    String[] getColumnNames();
}
