/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.api.oauth;

import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken.Payload;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.http.apache.ApacheHttpTransport;
import com.google.api.client.json.jackson.JacksonFactory;
import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.Collections;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 * link https://developers.google.com/identity/sign-in/web/backend-auth
 * @author sanguita
 */
public class GoogleTokenValidator {
    
    private static final String CLIENT_ID = "119996567226-d25nbob8g6gahivnaevimvnpmbjoqqdi.apps.googleusercontent.com";
    private static final JacksonFactory jsonFactory = new JacksonFactory();
    
    public static boolean validate(String idTokenString){
        HttpTransport transport = new ApacheHttpTransport();;
        GoogleIdTokenVerifier verifier = new GoogleIdTokenVerifier.Builder(transport, jsonFactory)
        .setAudience(Collections.singletonList(CLIENT_ID))
        // Or, if multiple clients access the backend:
        //.setAudience(Arrays.asList(CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3))
        .build();

        // (Receive idTokenString by HTTPS POST)

        GoogleIdToken idToken;
        try {
            idToken = verifier.verify(idTokenString);
            if (idToken != null) {
                Payload payload = idToken.getPayload();

                if(payload!=null){
                    // Print user identifier
                    String userId = payload.getSubject();
                    System.out.println("User ID: " + userId);

                    // Get profile information from payload
                    String email = payload.getEmail();
                    boolean emailVerified = Boolean.valueOf(payload.getEmailVerified());
                    String name = (String) payload.get("name");
                    String pictureUrl = (String) payload.get("picture");
                    String locale = (String) payload.get("locale");
                    String familyName = (String) payload.get("family_name");
                    String givenName = (String) payload.get("given_name");
                }

                // Use or store profile information
                // ...
                return true;
            } else {
                System.out.println("Invalid ID token.");
                return false;
            }
        } catch (GeneralSecurityException ex) {
            Logger.getLogger(GoogleTokenValidator.class.getName()).log(Level.SEVERE, null, ex);
        } catch (IOException ex) {
            Logger.getLogger(GoogleTokenValidator.class.getName()).log(Level.SEVERE, null, ex);
        }
        return false;
    }
}
