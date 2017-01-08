package anuncius;

import java.util.ArrayList;
import static junit.framework.Assert.assertEquals;
import static junit.framework.Assert.assertNotNull;
import anuncius.singleton.MongoHandler;
import anuncius.singleton.RedisHandler;
import com.mongodb.DBCursor;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import java.util.List;
import junit.framework.TestResult;
import org.bson.Document;
import org.junit.Test;

/**
 *
 * @author sanguita
 */
public class ConnectionTest {
    
    
    //@Test
    public void redisConnectionTest(){
        RedisHandler redisHandler = RedisHandler.getInstance();
        assertNotNull("Redis handler valid", redisHandler);
        assertNotNull("Redis ping data", redisHandler.ping());
    }
    
    //@Test
    public void redisUsageConnectionTest(){
        RedisHandler redisHandler = RedisHandler.getInstance(); 
        redisHandler.addSet("test", "success");
        String data = redisHandler.getSet("test");
        assertEquals("success", data);
    }
    
    @Test
    public void mongoConnectionTest(){
        MongoHandler mongoHandler = MongoHandler.getInstance("anuncius");
        assertNotNull("Mongo handler valid", mongoHandler);
        assertEquals("Mongo handler", true, mongoHandler.isConnected());
    }
    
    @Test
    public void mongoHelloWorld(){
        MongoHandler mongoHandler = MongoHandler.getInstance("anuncius");
        assertNotNull("Mongo handler", mongoHandler);
        if(!mongoHandler.existsCollection("demo")){
            mongoHandler.createCollection("demo");
        }
        Document document = new Document();
        document.put("name", "Sergio");
        document.put("age", "21");
        System.out.println("Inserting element on collection demo...");
        MongoCollection collection = mongoHandler.getCollection("demo");
        collection.insertOne(document);
        System.out.println("Collection demo count is: "+collection.count());
        assertEquals(true, collection.count()>=1);
        //get results of age 21
        Document result = new Document();
        document.put("age", "21");
        
        List<Document> documents = (List<Document>) collection.find(result).into(
            new ArrayList<Document>());
        
        documents.forEach((d) -> {
            System.out.println(d);
        });

        assertEquals(true, documents.size()>=1);
    }
}
