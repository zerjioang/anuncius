/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.singleton;

import anuncius.api.model.request.ContactFormRequest;
import anuncius.api.model.request.SubscriptionRequest;
import anuncius.api.model.request.UserOAuthDataRequest;
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
    private final static String USER_COLLECTION_NAME = "user";
    private final static String ADVERTISEMENT_COLLECTION_NAME = "anuncio";
    private final static String CATEGORY_COLLECTION_NAME = "category";
    private final static String COMMUNITY_COLLECTION_NAME = "community";
    private final static String LOCATION_COLLECTION_NAME = "location";
    private final static String ANALYTICS_COLLECTION_NAME = "analytics";
    private final static String SUBSCRIPTION_COLLECTION_NAME = "subscription";
    
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

    public void insertUserContactFormRequest(ContactFormRequest request) {
        if(request!=null){
            MongoCollection<Document> authCollection = mongo.getCollection(AUTH_COLLECTION_NAME);
            Document dbObject = request.convertToMongoObject();
            authCollection.insertOne(dbObject);
        }
    }
    
    public void createInitialSchema() {
        if(!mongo.isConnected()){
            mongo.connect();
        }
        mongo.createCollection(USER_COLLECTION_NAME);
        mongo.createCollection(ADVERTISEMENT_COLLECTION_NAME);
        mongo.createCollection(CATEGORY_COLLECTION_NAME);
        mongo.createCollection(COMMUNITY_COLLECTION_NAME);
        mongo.createCollection(LOCATION_COLLECTION_NAME);
        mongo.createCollection(ANALYTICS_COLLECTION_NAME);
        mongo.createCollection(AUTH_COLLECTION_NAME);
        
        mongo.createCollection(SUBSCRIPTION_COLLECTION_NAME);
    }
    
}
