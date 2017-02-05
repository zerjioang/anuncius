/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.api.model.response;

import anuncius.api.base.AbstractResponse;
import org.bson.Document;

/**
 *
 * @author sanguita
 */
public class ResponseDocumentWrapper extends AbstractResponse{

    private Document data;

    public ResponseDocumentWrapper() {
        this._status_code = "DOC_WRP";
        this._request_completed = true;
    }

    public ResponseDocumentWrapper(Document document) {
        this();
        this.data = document;
    }

    public Document getData() {
        return data;
    }

    public void setData(Document data) {
        this.data = data;
    }
    
    
}
