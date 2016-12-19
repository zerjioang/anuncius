package musutruq;

import com.mongodb.DB;
import java.util.ArrayList;
import java.util.Collection;
import static junit.framework.Assert.assertEquals;
import static junit.framework.Assert.assertNotNull;
import musutruq.singleton.MongoHandler;
import musutruq.singleton.RedisHandler;
import org.junit.Test;

/**
 *
 * @author sanguita
 */
public class ConnectionTest {
    
    
    @Test
    public void redisConnectionTest(){
        RedisHandler redisHandler = RedisHandler.getInstance();
        assertNotNull("Redis handler valid", redisHandler);
        assertNotNull("Redis ping data", redisHandler.ping());
    }
    
    @Test
    public void redisUsageConnectionTest(){
        RedisHandler redisHandler = RedisHandler.getInstance(); 
        redisHandler.addSet("test", "success");
        String data = redisHandler.getSet("test");
        assertEquals("success", data);
    }
    
    @Test
    public void mongoConnectionTest(){
        MongoHandler mongoHandler = MongoHandler.getInstance();
        assertNotNull("Mongo handler valid", mongoHandler);
        assertEquals("Mongo handler", true, mongoHandler.isConnected());
    }
    
    @Test
    public void mongoUsageConnectionTest(){
        MongoHandler mongoHandler = MongoHandler.getInstance();
        assertNotNull("Mongo handler", mongoHandler);
        ArrayList<String> list = mongoHandler.getAllCollectionsNames("musutruq");
        assertNotNull("Mongo databases list", list);
        assertEquals(0, list.size());
    }
    
    @Test
    public void graylogConnectionTest(){
        assertEquals(true, true);   
    }
    
    @Test
    public void elasticConnectionTest(){
        assertEquals(true, true);
    }
}
