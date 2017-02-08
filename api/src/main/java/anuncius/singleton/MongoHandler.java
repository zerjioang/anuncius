/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.singleton;

import anuncius.util.PlatformUtil;
import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.MongoClient;
import com.mongodb.MongoCredential;
import com.mongodb.ServerAddress;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.MongoIterable;
import com.mongodb.client.result.DeleteResult;
import com.mongodb.client.result.UpdateResult;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import org.bson.Document;

/**
 *
 * @author sanguita
 */
public final class MongoHandler {
    
    //address of your redis server
    private static final String MONGO_HOST = PlatformUtil.getMongosHost();
    private static final Integer MONGO_PORT = 27017;
    
    private final static String USERNAME = "user";
    private final static String PASSWORD = "pass";
    
    private static MongoClient mongo;
    private static final MongoHandler instance = new MongoHandler("anuncius");
    
    private final boolean secureMode;
    private final String database;
    private MongoDatabase mainDatabase;
    
    public static MongoHandler getInstance(){
        return instance;
    }
    
    private MongoHandler(String databaseName){
        System.out.println("Building new mongo instance...");
        this.database = databaseName;
        this.secureMode = false;
        this.connectToDatabase();
        if(mongo==null){
            //... missing procedure
        }
        else{
            //Get database.
            mainDatabase = getMainDatabase();
        }
    }
    
    public MongoDatabase getDatabase(String name){
        if(name!=null){
            return mongo.getDatabase(name);
        }
        return null;
    }
    
    public boolean existsCollection(String name){
        MongoCollection<Document> collection = mainDatabase.getCollection(name);
        if(collection!=null)
            return collection.count() > 0;
        return false;
    }
    
    public final MongoClient connectToDatabase() {
        if(secureMode){
            //If MongoDB in secure mode, authentication is required.
            //... missing procedure
            System.out.println("Connecting to Mongo DB instance on "+MONGO_HOST+" at "+MONGO_PORT+" using user "+USERNAME);
            MongoCredential credential = MongoCredential.createCredential(USERNAME, database, PASSWORD.toCharArray());
            mongo = new MongoClient(new ServerAddress(MONGO_HOST), Arrays.asList(credential));
        }
        else{
            // Since 2.10.0, uses MongoClient
            System.out.println("Connecting to Mongo DB instance on "+MONGO_HOST+" at "+MONGO_PORT);
            mongo = new MongoClient(MONGO_HOST, MONGO_PORT);
        }
        return mongo;
    }
    
    private MongoDatabase getMainDatabase(){
        if(mainDatabase==null){
            //If the database doesn’t exist, MongoDB will create it for you.
            mainDatabase = getDatabase(database);
        }
        return mainDatabase;
    }
    
    public Collection<DB> getAllDatabaseNames(){
        Collection<DB> dbs = mongo.getUsedDatabases();
        return dbs;
    }
    
    public MongoCollection getCollection(String name){
        return mainDatabase.getCollection(name);
    }
    
    public ArrayList<String> getAllCollectionsNames(String database){
        MongoDatabase db = mongo.getDatabase(database);
        MongoIterable<String> names = db.listCollectionNames();

        ArrayList<String> namesList = new ArrayList<>();
        for(String name : names){
            namesList.add(name);
        }
        return namesList;
    }

    public boolean isConnected() {
        try{
            return mongo!=null && mongo.getAddress()!=null;
        }
        catch(Exception e){
            //todo handle exception
            mongo.close();
            return false;
        }
    }
    
    public void createCollection(String name){
        if(name!=null){
            mainDatabase.createCollection(name);
        }
    }
    
    public Document save(Document d, String collectionName) {
        MongoCollection<Document> collection = mainDatabase.getCollection(collectionName);
        d.put("deleted", false);
        collection.insertOne(d);
        return d;
    }
    
    public UpdateResult delete(Document filter, Document newValue, String collectionName) {
        newValue.put("deleted", true);
        Document updateOperationDocument = new Document("$set", newValue);
        UpdateResult result = this.getCollection(collectionName).updateMany(filter, updateOperationDocument);
        return result;
    }
    
    
    public boolean delete(int id, String collectionName) {
        MongoCollection<Document> collection = mainDatabase.getCollection(collectionName);
        Document document = new Document();
        document.put("_id", id);
        document.put("deleted", true);
        UpdateResult result = collection.updateOne(document, document);
        return result.getModifiedCount()>=1;
    }
    
    public Document read(int id, String collectionName) {
        MongoCollection<Document> collection = mainDatabase.getCollection(collectionName);
        Document document = new Document();
        document.put("_id", id);
        document.put("deleted", false);
        ArrayList<Document> result = collection.find(document).limit(1).into(new ArrayList<>());
        if(result!=null && result.size()==1){
            return result.get(0);
        }
        return null;
    }
    
    public Document read(Document document, String collectionName) {
        MongoCollection<Document> collection = mainDatabase.getCollection(collectionName);
        document.put("deleted", false);
        ArrayList<Document> result = collection.find(document).limit(1).into(new ArrayList<>());
        if(result!=null && result.size()==1){
            return result.get(0);
        }
        return null;
    }
    

    public Document update(String id, String collectionName, Document document) {
        //read first, then save
        Document recoveredDocument = this.read(document, collectionName);
        if(recoveredDocument!=null){
            this.update(recoveredDocument, document, collectionName);
        }
        return null;
    }
    
    public UpdateResult update(Document filter, Document newValue, String collectionName) {
        Document updateOperationDocument = new Document("$set", newValue);
        UpdateResult result = this.getCollection(collectionName).updateMany(filter, updateOperationDocument);
        return result;
    }
    
    public List<Document> getList(String collectionName, int limit, int sort, Document result, String sortParam) {
        MongoCollection<Document> collection = mainDatabase.getCollection(collectionName);
        if(collection!=null){
            FindIterable<Document> iterable;
            if(result==null){
                result = new Document();
            }
            iterable = collection.find(result);
            if(limit > 0){
                iterable = iterable.limit(limit);
            }
            if(sortParam!=null){
                iterable = iterable.sort(new BasicDBObject(sortParam, sort));
            }
            return iterable.into(new ArrayList<>());
        }
        return new ArrayList<>();
    }
    
    public List<Document> getList(String collectionName, int sort, Document result) {
        return this.getList(collectionName, 0, sort, result, null);
    }

    boolean isUserAlreadyRegistered(String token) {
        return false;
    }

    public String countEntries(String collectionName) {
        if(collectionName!=null){
            MongoCollection<Document> collection = mainDatabase.getCollection(collectionName);
            if(collection!=null){
                return ""+collection.count();
            }
        }
        return "0";
    }

    public boolean dropCollection(String collection) {
        this.getCollection(collection).drop();
        return true;
    }
}