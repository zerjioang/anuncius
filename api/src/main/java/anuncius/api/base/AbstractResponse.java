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

    private long _time;
    private int _api_version;
    protected String _status_code;
    protected boolean _request_completed;

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
    
    
    
    @Override
    public IAPIMessage sendException(SecureLayerException e) {
        return null;
    }
    
}
