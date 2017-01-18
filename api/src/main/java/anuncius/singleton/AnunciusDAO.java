/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.singleton;

import anuncius.api.model.request.AbstractRequest;
import anuncius.api.model.request.AbstractRequestList;
import anuncius.api.model.request.NewItemRequest;
import anuncius.util.PlatformUtil;
import com.mongodb.BasicDBObject;
import com.mongodb.client.MongoCollection;
import java.util.ArrayList;
import java.util.List;
import org.bson.Document;

/**
 *
 * @author sanguita
 */
public class AnunciusDAO {

    
    private static AnunciusDAO instance;
    
    public final static String APP_DATABASE = "anuncius";
    public final static String AUTH_COLLECTION_NAME = "auth";
    public final static String USER_COLLECTION_NAME = "user";
    public final static String ADVERTISEMENT_COLLECTION_NAME = "anuncio";
    public final static String CATEGORY_COLLECTION_NAME = "category";
    public final static String COMMUNITY_COLLECTION_NAME = "community";
    public final static String LOCATION_COLLECTION_NAME = "location";
    public final static String ANALYTICS_COLLECTION_NAME = "analytics";
    public final static String SUBSCRIPTION_COLLECTION_NAME = "subscription";
    public final static String CONTACT_COLLECTION_NAME = "contact";
    
    private MongoHandler mongo;
    private RedisHandler redis;
    private static final int DESCENDING_ORDER = 1;
    private static final int ASCENDING_ORDER = -1;
    
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
    
    public boolean isUserAlreadyRegistered(String token){
        if(PlatformUtil.isRedisCacheEnabled()){
            String data = redis.getSet(
                "is_user_already_registered_"+token //key
            );
            return data!=null && data.equals("true");
        }
        else{
            //ask to mongo and save answer on redis
            boolean result = mongo.isUserAlreadyRegistered(token);
            redis.addSet(
                    "is_user_already_registered_"+token, //key
                    String.valueOf(result)
            );
            return result;
        }
    }

    /*
    Save one item
    */
    public void save(AbstractRequest request) {
        if(request!=null){
            MongoCollection<Document> authCollection = mongo.getCollection(request.getCollectionName());
            Document dbObject = request.convertToMongoObject();
            authCollection.insertOne(dbObject);
        }
    }
    
    /*
    Save many items
    */
    public void save(AbstractRequestList requestList) {
        if(requestList!=null && requestList.hasContent()){
            MongoCollection<Document> authCollection = mongo.getCollection(requestList.getCollectionName());
            List<Document> objectList = requestList.convertToMongoObject();
            authCollection.insertMany(objectList);
        }
    }
    
    /*
    Generic delete based on ID
    */
    public boolean delete(int id, String collectionName) {
        if(collectionName!=null && id>=0){
            return mongo.delete(id, collectionName);
        }
        return false;
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

    public List<NewItemRequest> getLatestItems() {
        List<NewItemRequest> list = new ArrayList<>();
        Document result = new Document();
        result.put("deleted", false);
        MongoCollection collection = this.mongo.getCollection(ADVERTISEMENT_COLLECTION_NAME);
        this.mongo.getList(ADVERTISEMENT_COLLECTION_NAME, 6, ASCENDING_ORDER);
        return list;
    }

    public ArrayList<NewItemRequest> getBestItems() {
        ArrayList<NewItemRequest> list = new ArrayList<>();
        Document result = new Document();
        result.put("deleted", false);
        List<Document> documentList = this.mongo.getList(ADVERTISEMENT_COLLECTION_NAME, 6, ASCENDING_ORDER, result, "views");
        //todo convert
        return list;
    }   
}
