/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.api.rt;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletResponse;

import org.apache.catalina.comet.CometEvent;
import org.apache.catalina.comet.CometProcessor;

@WebServlet("/push")
public class PushService extends HttpServlet implements CometProcessor {

    protected ArrayList<HttpServletResponse> connections = new ArrayList<>();
    protected MessageSender messageSender = null;
    private CustomCometProcessor cometProcessor;
    
    @Override
    public void init() throws ServletException {
        messageSender = new MessageSender(connections);
        Thread messageSenderThread = new Thread(messageSender, "MessageSender[" + getServletContext().getContextPath() + "]");
        messageSenderThread.setDaemon(true);
        messageSenderThread.start();
        cometProcessor = new CustomCometProcessor(connections);
    }

    @Override
    public void destroy() {
        connections.clear();
        messageSender.stop();
        messageSender = null;
    }

    /**
     * Process the given Comet event.
     * 
     * @param event The Comet event that will be processed
     * @throws IOException
     * @throws ServletException
     */
    @Override
    public void event(CometEvent event) throws IOException, ServletException {
        cometProcessor.process(event);
    }
}