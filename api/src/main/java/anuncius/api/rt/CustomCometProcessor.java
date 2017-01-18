/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.api.rt;

import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.util.ArrayList;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.catalina.comet.CometEvent;

/**
 *
 * @author sanguita
 */
public class CustomCometProcessor {
    
    protected ArrayList<HttpServletResponse> connections = new ArrayList<>();

    public CustomCometProcessor(ArrayList connectionList) {
        connections = connectionList;
    }

    void process(CometEvent event) throws IOException {
        HttpServletRequest request = event.getHttpServletRequest();
        HttpServletResponse response = event.getHttpServletResponse();
        if (null != event.getEventType()) switch (event.getEventType()) {
            case BEGIN:{
                System.out.println("Begin for session: " + request.getSession(true).getId());
                PrintWriter writer = response.getWriter();
                PushResponse responsePayload = new PushResponse("Demo");
                writer.print(PushResponse.getJson(responsePayload));
                writer.flush();
                synchronized(connections) {
                    connections.add(response);
                }
                break;
                }
            case ERROR:
                System.out.println("Error for session: " + request.getSession(true).getId());
                synchronized(connections) {
                    connections.remove(response);
                }
                event.close();
                break;
            case END:{
                System.out.println("End for session: " + request.getSession(true).getId());
                synchronized(connections) {
                    connections.remove(response);
                }
                PrintWriter writer = response.getWriter();
                writer.println("");
                event.close();
                break;
                }
            case READ:
                InputStream is = request.getInputStream();
                byte[] buf = new byte[512];
                do {
                    int n = is.read(buf); //can throw an IOException
                    if (n > 0) {
                        System.out.println("Read " + n + " bytes: " + new String(buf, 0, n)+ " for session: " + request.getSession(true).getId());
                    } else if (n < 0) {
                        //error(event, request, response);
                        return;
                    }
                } while (is.available() > 0);
                break;
            default:
                break;
        }
    }
   
    
}
