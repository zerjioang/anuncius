package anuncius;

import anuncius.singleton.AnunciusDAO;
import static junit.framework.Assert.assertEquals;
import static junit.framework.Assert.assertNotNull;
import anuncius.singleton.MongoHandler;
import anuncius.util.PlatformUtil;
import java.util.List;
import org.bson.Document;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runners.MethodSorters;

/**
 *
 * @author sanguita
 */
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class CRUDTest {

    private static final String TEST_COLLECTION_NAME = "junitest";
    private static final int TOTAL_ELEMENTS = 5;
    
    @Test
    public void test_00_build(){
        if(PlatformUtil.isProduction()){
            PlatformUtil.forceDevelopmentMode(true);
            MongoHandler mongoHandler = MongoHandler.getInstance();
            
            assertNotNull("Mongo handler", mongoHandler);

            //delete all previous possible test collections
            //drop database
            boolean result = AnunciusDAO.getInstance().dropCollection(TEST_COLLECTION_NAME);
            
            if(!mongoHandler.existsCollection(TEST_COLLECTION_NAME)){
                mongoHandler.createCollection(TEST_COLLECTION_NAME);
            }
            
            PlatformUtil.forceDevelopmentMode(false);
        }
    }
    
    @Test
    public void test_01_create(){
        if(PlatformUtil.isProduction()){
            PlatformUtil.forceDevelopmentMode(true);
            MongoHandler mongoHandler = MongoHandler.getInstance();
            
            assertNotNull("Mongo handler", mongoHandler);
            for(int i=0; i<TOTAL_ELEMENTS; i++){
                Document doc = new Document();
                doc.put("price", 10*i);
                doc.put("title", "Ps4");
                doc.put("desc", "PS4 nueva sin usar");
                doc.put("location", "Bilbao");   
                //CREATE TEST
                doc = AnunciusDAO.getInstance().save(doc, TEST_COLLECTION_NAME);
                System.out.println("Inserting document: "+doc.toJson());
            }
            
            assertEquals(true, AnunciusDAO.getInstance().count(TEST_COLLECTION_NAME)==TOTAL_ELEMENTS);
            PlatformUtil.forceDevelopmentMode(false);
        }
    }
    
    @Test
    public void test_02_read(){
        if(PlatformUtil.isProduction()){
            PlatformUtil.forceDevelopmentMode(true);
            MongoHandler mongoHandler = MongoHandler.getInstance();
            assertNotNull("Mongo handler", mongoHandler);
            
            //READ TEST
            List<Document> list = AnunciusDAO.getInstance().getList(TEST_COLLECTION_NAME);
           
            for(Document d: list){
                System.out.println("Inserting document: "+d.toJson());
            }
            assertNotNull(list);
            assertEquals(TOTAL_ELEMENTS, list.size());
            
            PlatformUtil.forceDevelopmentMode(false);
        }
    }
    
    @Test
    public void test_03_update(){
        if(PlatformUtil.isProduction()){
            PlatformUtil.forceDevelopmentMode(true);
            MongoHandler mongoHandler = MongoHandler.getInstance();
            assertNotNull("Mongo handler", mongoHandler);
            
            //replace this (this doc works as filter)
            Document old = new Document();
            old.put("price", 0);
            
            //whith this
            Document doc = new Document();
            doc.put("price", 0);
            doc.put("title", "Ps5");
            doc.put("desc", "PS5 rota y con polvo");
            doc.put("location", "Deusto");
            
            System.out.println("Updating items with price=0...");
            //UPDATE TEST
            boolean success = AnunciusDAO.getInstance().update(old, doc, TEST_COLLECTION_NAME);
            
            Document test = new Document();
            test.put("title", "Ps5");
            //hacer query to check
            List<Document> list = AnunciusDAO.getInstance().find(test, TEST_COLLECTION_NAME);
            assertEquals(1, list.size());
            
            PlatformUtil.forceDevelopmentMode(false);
        }
    }
    
    @Test
    /*
    this is just a logical delete.
    */
    public void test_04_delete(){
        if(PlatformUtil.isProduction()){
            PlatformUtil.forceDevelopmentMode(true);
            MongoHandler mongoHandler = MongoHandler.getInstance();
           
            assertNotNull("Mongo handler", mongoHandler);
            
            System.out.println("Deleting items with price=40...");
            
            List<Document> list = AnunciusDAO.getInstance().find(new Document(), TEST_COLLECTION_NAME);
            System.out.println("Elementos antes de borrarlos");
            for(Document d: list){
                System.out.println(d.toJson());
            }
            
            //DELETE TEST
            /*            
            Document doc = new Document();
            doc.put("price", 40);
            AnunciusDAO.getInstance().delete(doc, TEST_COLLECTION_NAME);
            */
            
            //filter
            Document filter = new Document();
            filter.put("price", 40);
            
            //whith this
            Document doc = new Document();
            doc.put("price", 40);
            doc.put("deleted", true);
            
            //UPDATE TEST
            boolean success = AnunciusDAO.getInstance().update(filter, doc, TEST_COLLECTION_NAME);
            
            
            //show remaining elements
            
            //READ TEST
            Document test = new Document();
            test.put("deleted", true);
            //hacer query to check
            list = AnunciusDAO.getInstance().find(test, TEST_COLLECTION_NAME);
            System.out.println("Elementos marcados como borrados:");
            for(Document d: list){
                System.out.println(d.toJson());
            }
            //assertEquals(1, list.size());
            PlatformUtil.forceDevelopmentMode(false);
        }
    }
    
    @Test
    public void test_05_drop(){
        if(PlatformUtil.isProduction()){
            PlatformUtil.forceDevelopmentMode(true);
            MongoHandler mongoHandler = MongoHandler.getInstance();
            
            assertNotNull("Mongo handler", mongoHandler);
            
            //drop database
            boolean result = AnunciusDAO.getInstance().dropCollection(TEST_COLLECTION_NAME);
            
            assertEquals(true, result);
            PlatformUtil.forceDevelopmentMode(false);
        }
    }
}