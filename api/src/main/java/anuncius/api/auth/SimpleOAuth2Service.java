/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.api.auth;

import org.glassfish.jersey.client.oauth2.ClientIdentifier;
import org.glassfish.jersey.client.oauth2.OAuth2CodeGrantFlow;

/**
 *
 * @author .local
 */
public class SimpleOAuth2Service {
    
    private static String accessToken = null;
    /**
     * Contains null or actually authorization flow.
     */
    private static OAuth2CodeGrantFlow flow;
    private static ClientIdentifier clientIdentifier;

    public static String getAccessToken() {
        return accessToken;
    }

    public static void setAccessToken(String accessToken) {
        SimpleOAuth2Service.accessToken = accessToken;
    }

    public static OAuth2CodeGrantFlow getFlow() {
        return flow;
    }

    public static void setFlow(OAuth2CodeGrantFlow flow) {
        SimpleOAuth2Service.flow = flow;
    }

    public static ClientIdentifier getClientIdentifier() {
        return clientIdentifier;
    }

    public static void setClientIdentifier(ClientIdentifier clientIdentifier) {
        SimpleOAuth2Service.clientIdentifier = clientIdentifier;
    }
}