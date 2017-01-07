/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.api.model.wrapper;

import org.bson.Document;

/**
 *
 * @author sanguita
 */
interface IMongoManipulable {
    
    Document convertToMongoObject();
    int getColumnCount();
    String[] getColumnNames();
}
