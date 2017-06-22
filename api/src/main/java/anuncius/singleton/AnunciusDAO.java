/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.singleton;

import anuncius.api.model.request.AbstractRequest;
import anuncius.api.model.request.AbstractRequestList;
import anuncius.util.PlatformUtil;
import com.mongodb.client.MongoCollection;
import java.util.List;
import org.bson.Document;

/**
 *
 * @author sanguita
 */
public class AnunciusDAO {

    private static final AnunciusDAO instance = new AnunciusDAO();
    
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
    
    private final MongoHandler mongo;
    private final RedisHandler redis;
    private static final int DESCENDING_ORDER = 1;
    private static final int ASCENDING_ORDER = -1;
    
    private AnunciusDAO(){
        mongo = MongoHandler.getInstance();
        redis = RedisHandler.getInstance();
    }
    
    public static AnunciusDAO getInstance() {
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
    public boolean save(AbstractRequest request) {
        if(request!=null && request.hasValidData()){
            MongoCollection<Document> authCollection = mongo.getCollection(request.getCollectionName());
            Document dbObject = request.convertToMongoObject();
            authCollection.insertOne(dbObject);
            return true;
        }
        return false;
    }
    
    /*
    Save many items
    */
    public boolean save(AbstractRequestList requestList) {
        if(requestList!=null && requestList.hasContent()){
            MongoCollection<Document> authCollection = mongo.getCollection(requestList.getCollectionName());
            List<Document> objectList = requestList.convertToMongoObject();
            authCollection.insertMany(objectList);
            return true;
        }
        return false;
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
            mongo.connectToDatabase();
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

    public List<Document> getLatestItems() {
        Document result = new Document();
        result.put("deleted", false);
        List<Document> documentList = this.mongo.getList(ADVERTISEMENT_COLLECTION_NAME, 6, ASCENDING_ORDER, result, "creationDate");
        //todo convert
        /*if(documentList!=null && documentList.size()>0){
            list = NewItemRequest.parse(documentList);
        }*/
        return documentList;
    }

    public List<Document> getBestItems() {
        Document result = new Document();
        result.put("deleted", false);
        List<Document> documentList = this.mongo.getList(ADVERTISEMENT_COLLECTION_NAME, 6, ASCENDING_ORDER, result, "views");
        //todo convert
        return documentList;
    }   

    public String getUserCount() {
        return this.mongo.countEntries(AUTH_COLLECTION_NAME);
    }

    public String getClientCount() {
        return this.mongo.countEntries(USER_COLLECTION_NAME);
    }

    public String getItemCount() {
        return this.mongo.countEntries(ADVERTISEMENT_COLLECTION_NAME);
    }
}
