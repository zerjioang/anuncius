/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.singleton;

import anuncius.api.model.wrapper.SubscriptionRequest;
import anuncius.api.model.wrapper.UserOAuthDataRequest;
import com.mongodb.client.MongoCollection;
import org.bson.Document;

/**
 *
 * @author sanguita
 */
public class AnunciusDAO {

    
    private static AnunciusDAO instance;
    
    private final static String APP_DATABASE = "anuncius";
    private final static String AUTH_COLLECTION_NAME = "auth";
    
    private MongoHandler mongo;
    private RedisHandler redis;
    
    private AnunciusDAO(){
        mongo = MongoHandler.getInstance(APP_DATABASE);
        redis = RedisHandler.getInstance();
    }
    
    public static AnunciusDAO getInstance() {
        if(instance==null){
            instance = new AnunciusDAO();
        }
        return instance;
    }
    
    public void saveUserAuth(UserOAuthDataRequest data){
        if(data!=null){
            MongoCollection<Document> authCollection = mongo.getCollection(AUTH_COLLECTION_NAME);
            Document dbObject = data.convertToMongoObject();
            authCollection.insertOne(dbObject);
        }
    }

    public void saveUserEmailAsSubscription(SubscriptionRequest request) {
        if(request!=null){
            MongoCollection<Document> authCollection = mongo.getCollection(AUTH_COLLECTION_NAME);
            Document dbObject = request.convertToMongoObject();
            authCollection.insertOne(dbObject);
        }
    }
    
}
