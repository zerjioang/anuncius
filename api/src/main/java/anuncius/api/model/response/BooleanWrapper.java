/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.api.model.response;

import anuncius.api.base.AbstractResponse;

/**
 *
 * @author sanguita
 */
public class BooleanWrapper extends AbstractResponse{

    private boolean data;

    public BooleanWrapper(boolean data) {
        this._status_code = "BOL_WRP";
        this._request_completed = true;
        this.data = data;
    }

    public boolean isData() {
        return data;
    }

    public void setData(boolean data) {
        this.data = data;
    }    
}
