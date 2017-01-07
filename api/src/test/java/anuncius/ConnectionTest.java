package anuncius;

import java.util.ArrayList;
import static junit.framework.Assert.assertEquals;
import static junit.framework.Assert.assertNotNull;
import anuncius.singleton.MongoHandler;
import anuncius.singleton.RedisHandler;

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
    
    //@Test
    public void mongoConnectionTest(){
        MongoHandler mongoHandler = MongoHandler.getInstance("anuncius");
        assertNotNull("Mongo handler valid", mongoHandler);
        assertEquals("Mongo handler", true, mongoHandler.isConnected());
    }
    
    //@Test
    public void mongoUsageConnectionTest(){
        MongoHandler mongoHandler = MongoHandler.getInstance("anuncius");
        assertNotNull("Mongo handler", mongoHandler);
        ArrayList<String> list = mongoHandler.getAllCollectionsNames("anuncius");
        assertNotNull("Mongo databases list", list);
        assertEquals(0, list.size());
    }
}
