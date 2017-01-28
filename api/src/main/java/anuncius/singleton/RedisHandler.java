/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.singleton;

import java.util.Set;
import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;

/**
 *
 * @author .local
 */
public class RedisHandler {
 
    //address of your redis server
    private static final String REDIS_HOST = "cache";
    private static final Integer REDIS_PORT = 6379;
 
    //the jedis connection pool..
    private static JedisPool pool = null;
    
    private static RedisHandler instance;

    public static RedisHandler getInstance() {
        if(instance==null){
            instance = new RedisHandler();
        }
        return instance;
    }
    
    private RedisHandler(){
        try{
            //configure our pool connection
            pool = new JedisPool(REDIS_HOST, REDIS_PORT);
            //Connecting to Redis server on localhost
            Jedis jedis = pool.getResource();
            if(jedis!=null){
                System.out.println("Connection to server sucessfully");
                //check whether server is running or not
                System.out.println("Server is running: "+jedis.ping());
            }
        }
        catch(Exception e){
            System.err.println(e.getLocalizedMessage());
        }
    }
    
    public void addSet(String key, String value){
        //Connecting to Redis server on localhost
        try{
            Jedis jedis = pool.getResource();
            if(jedis!=null){
                //set the data in redis string
                jedis.set(key, value);
            }
        }
        catch(Exception e){
            System.err.println(e.getLocalizedMessage());
        }
    }
    
    public String getSet(String key){
        //Connecting to Redis server on localhost
        try{
            Jedis jedis = pool.getResource();
            if(jedis!=null){
                //set the data in redis string
                return jedis.get(key);
            }
        }
        catch(Exception e){
            System.err.println(e.getLocalizedMessage());
        }
        return null;
    }
    
    public Set<String> getAllKeys(){
        //Connecting to Redis server on localhost
        Jedis jedis = pool.getResource();
        if(jedis!=null){
            //set the data in redis string
            return jedis.keys("*");
        }
        return null;
    }

    public String ping() {
        Jedis jedis = pool.getResource();
        if(jedis!=null){
            //set the data in redis string
            return jedis.ping();
        }
        return null;
    }
}