package anuncius.api.base;

import anuncius.securelayer.SecureLayerException;

/**
 *
 * @author sanguita
 */
public abstract class APIMessage implements IAPIMessage{
 
    
    public long getTimestamp(){
        return System.currentTimeMillis();
    }
    
    @Override
    public IAPIMessage sendException(SecureLayerException e){
        return null;
    }
}
