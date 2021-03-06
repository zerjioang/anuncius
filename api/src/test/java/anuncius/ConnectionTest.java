package anuncius;

import java.util.ArrayList;
import static junit.framework.Assert.assertEquals;
import static junit.framework.Assert.assertNotNull;
import anuncius.singleton.MongoHandler;
import anuncius.singleton.RedisHandler;
import anuncius.util.PlatformUtil;
import com.mongodb.client.MongoCollection;
import java.util.List;
import org.bson.Document;
import org.junit.Test;

/**
 *
 * @author sanguita
 */
public class ConnectionTest {
    
    
    //@Test
    public void redisConnectionTest(){
        if(PlatformUtil.isProduction()){
            //allow us to access sevices via static ips
            PlatformUtil.forceDevelopmentMode(true);
            RedisHandler redisHandler = RedisHandler.getInstance();
            assertNotNull("Redis handler valid", redisHandler);
            String data = redisHandler.ping();
            assertNotNull("Redis ping data", data);
            assertEquals("PONG", data);
            PlatformUtil.forceDevelopmentMode(false);
        }
    }
    
    //@Test
    public void redisUsageConnectionTest(){
        if(PlatformUtil.isProduction()){
            PlatformUtil.forceDevelopmentMode(true);
            RedisHandler redisHandler = RedisHandler.getInstance(); 
            redisHandler.addSet("test", "success");
            String data = redisHandler.getSet("test");
            assertEquals("success", data);
            PlatformUtil.forceDevelopmentMode(false);
        }
    }
    
    @Test
    public void mongoConnectionTest(){
        if(PlatformUtil.isProduction()){
            PlatformUtil.forceDevelopmentMode(true);
            MongoHandler mongoHandler = MongoHandler.getInstance();
            assertNotNull("Mongo handler valid", mongoHandler);
            assertEquals("Mongo handler", true, mongoHandler.isConnected());
            PlatformUtil.forceDevelopmentMode(false);
        }
    }
    
    @Test
    public void mongoHelloWorld(){
        if(PlatformUtil.isProduction()){
            PlatformUtil.forceDevelopmentMode(true);
            MongoHandler mongoHandler = MongoHandler.getInstance();
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
            //drop database
            collection.drop();
            PlatformUtil.forceDevelopmentMode(false);
        }
    }
}
