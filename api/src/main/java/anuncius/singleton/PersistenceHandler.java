/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.singleton;

/**
 *
 * @author sanguita
 */
public class PersistenceHandler {

    
    private static PersistenceHandler instance;
    
    private MongoHandler mongo;
    private RedisHandler redis;
    
    private PersistenceHandler(){
        mongo = MongoHandler.getInstance();
        redis = RedisHandler.getInstance();
    }
    
    public static PersistenceHandler getInstance() {
        if(instance==null){
            instance = new PersistenceHandler();
        }
        return instance;
    }

    public void saveUserEmailAsSubscription(String email) {
        
    }
    
}
