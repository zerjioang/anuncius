/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.api.model.response;

import anuncius.api.base.AbstractResponse;
import java.util.List;

/**
 *
 * @author sanguita
 */
public class ResponseArrayList extends AbstractResponse {

    private List list;
    
    public ResponseArrayList() {
        this._request_completed = true;
    }

    public List getList() {
        return list;
    }

    public void setList(List list) {
        this.list = list;
        this._request_completed = this.list!=null;
    } 
}
