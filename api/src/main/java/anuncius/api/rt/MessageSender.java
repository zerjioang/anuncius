/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.api.rt;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author sanguita
 */
public class MessageSender implements Runnable {

    protected boolean running = true;
    protected ArrayList<String> messages = new ArrayList<>();
    protected ArrayList<HttpServletResponse> connections = new ArrayList<>();

    public MessageSender(ArrayList connectionList) {
        connections = connectionList;
    }

    public void stop() {
        running = false;
    }

    /**
     * Add message for sending.
     */
    public void send(String user, String message) {
        synchronized (messages) {
            messages.add("[" + user + "]: " + message);
            messages.notify();
        }
    }

    public void run() {

        while (running) {

            if (messages.isEmpty()) {
                try {
                    synchronized (messages) {
                        messages.wait();
                    }
                } catch (InterruptedException e) {
                    // Ignore
                }
            }

            synchronized (connections) {
                String[] pendingMessages = null;
                synchronized (messages) {
                    pendingMessages = messages.toArray(new String[0]);
                    messages.clear();
                }
                // Send any pending message on all the open connections
                for (int i = 0; i < connections.size(); i++) {
                    try{
                        PrintWriter writer = connections.get(i).getWriter();
                        for (int j = 0; j < pendingMessages.length; j++) {
                            writer.println(pendingMessages[j] + "<br>");
                        }
                        writer.flush();
                    }
                    catch(IOException e){
                        System.err.println(e.getLocalizedMessage());
                    }
                }
            }

        }

    }

}
