package musutruq.api.base;

import musutruq.securelayer.SecureLayerException;

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
