/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package musutruq.singleton;

import redis.clients.jedis.Jedis;

/**
 *
 * @author .local
 */
public class RedisHandler {
 
    private static final RedisHandler instance = new RedisHandler();
    
    private Jedis jedis;
    
    private RedisHandler(){
        //Connecting to Redis server on localhost
        jedis = new Jedis("localhost");
        System.out.println("Connection to server sucessfully");
        //check whether server is running or not
        System.out.println("Server is running: "+jedis.ping());
    }
}
