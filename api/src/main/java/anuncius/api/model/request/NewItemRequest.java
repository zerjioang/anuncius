/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.api.model.request;

import anuncius.singleton.AnunciusDAO;
import java.util.ArrayList;
import java.util.List;
import org.bson.Document;

/**
 *
 * @author sanguita
 */
public class NewItemRequest extends AbstractRequest{

    public static List<NewItemRequest> parse(List<Document> documentList) {
        List<NewItemRequest> list = new ArrayList<>();
        return list;
    }
    
    private String name;
    private String category;
    private String keyword;
    private String action;
    private double price;
    private String description;
    private String mainImageUrl;
    private String location;
    private ArrayList<String> otherImageUrlList;
    private int views;
    private long time;
    
    public NewItemRequest(Document r) {
        super(r);
    }

    public NewItemRequest() {
        super();
        this.otherImageUrlList = new ArrayList<>();
        //esto es una guarrada pero no tengo tiempo. 10 latigazos como castigo
        this.mainImageUrl = "https://static.anunci.us/theme/images/noimage.jpg";
        this.location = "cerca";
        this.views = 0;
        this.time = -1;
    }

    public NewItemRequest(String name, String category, String keyword, String action, double price, String description, long time) {
        this();
        this.name = name;
        this.category = category;
        this.keyword = keyword;
        this.action = action;
        this.price = price;
        this.description = description;
        this.time = time;
    }
    
    @Override
    public Document convertToMongoObject() {
        Document document = super.parentConvertToMongoObject();
        String[] names = this.getColumnNames();
        document.put(names[0], this.name);
        document.put(names[1], this.category);
        document.put(names[2], this.keyword);
        document.put(names[3], this.action);
        document.put(names[4], this.price);
        document.put(names[5], this.description);
        document.put(names[6], this.mainImageUrl);
        document.put(names[7], this.otherImageUrlList);
        document.put(names[8], this.location);
        return document;
    }
    
    @Override
    public void convertFromMongoObject(Document document) {
        String[] names = this.getColumnNames();
        this.name = document.getString(names[0]);
        this.category = document.getString(names[1]);
        this.keyword = document.getString(names[2]);
    }
    
    @Override
    public String[] getColumnNames() {
        return new String[]{
            "name",
            "category",
            "keyword",
            "action",
            "price",
            "description",
            "main_image",
            "other_image_list",
            "location",
            "views",
            "time"
        };
    }
    
    @Override
    public int getColumnCount(){
        return 11;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getKeyword() {
        return keyword;
    }

    public void setKeyword(String keyword) {
        this.keyword = keyword;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getMainImageUrl() {
        return mainImageUrl;
    }

    public void setMainImageUrl(String mainImageUrl) {
        this.mainImageUrl = mainImageUrl;
    }

    public ArrayList<String> getOtherImageUrlList() {
        return otherImageUrlList;
    }

    public void setOtherImageUrlList(ArrayList<String> otherImageUrlList) {
        this.otherImageUrlList = otherImageUrlList;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public int getViews() {
        return views;
    }

    public void setViews(int views) {
        this.views = views;
    }

    public long getTime() {
        return time;
    }

    public void setTime(long time) {
        this.time = time;
    }

    @Override
    public String getCollectionName() {
        return AnunciusDAO.ADVERTISEMENT_COLLECTION_NAME;
    }
    
    @Override
    public boolean hasValidData() {
        return true;
    }
}
