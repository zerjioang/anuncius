/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.api.base;

import anuncius.ApplicationConfig;
import anuncius.securelayer.SecureLayerException;
import java.io.Serializable;

/**
 *
 * @author sanguita
 */
public abstract class AbstractResponse implements IAPIMessage, Serializable{

    private final long _time;
    private final int _api_version;
    protected String _status_code;
    protected boolean _request_completed;
    protected String error_details;

    public AbstractResponse() {
        this._time = System.currentTimeMillis();
        this._api_version = ApplicationConfig.API_VERSION;
    }

    public long getTime() {
        return _time;
    }

    public int getApi_version() {
        return _api_version;
    }

    public String getStatus_code() {
        return _status_code;
    }

    public boolean isRequest_completed() {
        return _request_completed;
    }

    public String getError_details() {
        return error_details;
    }

    public void setError_details(String error_details) {
        this.error_details = error_details;
    }
    
    @Override
    public IAPIMessage sendException(SecureLayerException e) {
        if(e!=null){
            this.setError_details(e.getLocalizedMessage());
        }
        return this;
    }
}
