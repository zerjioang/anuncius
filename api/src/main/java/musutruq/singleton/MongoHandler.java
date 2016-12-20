/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package musutruq.singleton;

import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.MongoClient;
import com.mongodb.MongoCredential;
import com.mongodb.ServerAddress;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.MongoIterable;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;

/**
 *
 * @author sanguita
 */
public class MongoHandler {
    
    //address of your redis server
    private static final String MONGO_HOST = "localhost";
    private static final Integer MONGO_PORT = 27017;
    
    private final static String APP_DATABASE = "musutruq";
    private final static String USERNAME = "user";
    private final static String PASSWORD = "pass";
    
    private static MongoClient mongo;
    private static MongoHandler instance;
    
    private boolean secureMode;
    private MongoDatabase mainDatabase;
    
    public static MongoHandler getInstance(){
        if(instance==null){
            instance = new MongoHandler();
        }
        return instance;
    }
    
    private MongoHandler(){
        try{
            if(secureMode){
            //If MongoDB in secure mode, authentication is required.
            //... missing procedure
            MongoCredential credential = MongoCredential.createCredential(USERNAME, APP_DATABASE, PASSWORD.toCharArray());
            mongo = new MongoClient(new ServerAddress(MONGO_HOST), Arrays.asList(credential));
        }
        else{
            // Since 2.10.0, uses MongoClient
            mongo = new MongoClient(MONGO_HOST, MONGO_PORT);
        }
        }
        catch(Exception e){
            e.printStackTrace();
        }
        if(mongo==null){
            //... missing procedure
        }
        else{
            //Get database.
            mainDatabase = getMainDatabase();
        }
    }
    
    private MongoDatabase getMainDatabase(){
        if(mainDatabase==null){
            //If the database doesn’t exist, MongoDB will create it for you.
            mainDatabase = mongo.getDatabase(APP_DATABASE);
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
    
}