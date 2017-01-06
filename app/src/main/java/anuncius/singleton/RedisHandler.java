/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.singleton;

import java.util.Base64;
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
    
    private Jedis jedis;

    public static RedisHandler getInstance() {
        if(instance==null){
            instance = new RedisHandler();
        }
        return instance;
    }
    
    private RedisHandler(){
        try{
            //configure our pool connection
            System.out.println("Getting a Redis pool. Host: "+REDIS_HOST+", port: "+REDIS_PORT);
            pool = new JedisPool(REDIS_HOST, REDIS_PORT);
            System.out.println("Pool estabilshed: "+pool!=null);
            //Connecting to Redis server on localhost
            jedis = pool.getResource();
            System.out.println("Redis connection established?: "+jedis!=null);
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
            if(jedis!=null){
                //set the data in redis string
                if(key!=null && value!=null){
                    //encode value to b64
                    value = Base64.getEncoder().encodeToString(value.getBytes());
                    jedis.set(key, value);
                }
            }
        }
        catch(Exception e){
            System.err.println(e.getLocalizedMessage());
        }
    }
    
    public String getSet(String key){
        //Connecting to Redis server on localhost
        try{
            if(jedis!=null && key!=null){
                //set the data in redis string
                String data = jedis.get(key);
                if(data!=null){
                    return new String(Base64.getDecoder().decode(data), "utf-8");
                }
            }
        }
        catch(Exception e){
            System.err.println(e.getLocalizedMessage());
        }
        return null;
    }
    
    public Set<String> getAllKeys(){
        //Connecting to Redis server on localhost
        try{
            if(jedis!=null){
                //set the data in redis string
                return jedis.keys("*");
            }
        }
        catch(Exception e){
            System.err.println(e.getLocalizedMessage());
        }
        return null;
    }

    public String ping() {
        //Connecting to Redis server on localhost
        try{
            if(jedis!=null){
            //set the data in redis string
            return jedis.ping();
            }
        }
        catch(Exception e){
            System.err.println(e.getLocalizedMessage());
        }
        return null;
    }
}