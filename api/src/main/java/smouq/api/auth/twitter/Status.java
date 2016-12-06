/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package smouq.api.auth.twitter;

/**
 *
 * @author .local
 */
public class Status {
    private String createdAt;
    private String text;
    private User user;

    public String getCreatedAt() {
        return createdAt;
    }

    public String getText() {
        return text;
    }

    public User getUser() {
        return user;
    }
}
