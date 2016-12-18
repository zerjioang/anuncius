package musutruq.email;

import java.util.*;
import javax.mail.*;
import javax.mail.internet.*;

public class MailSender {
    
    // Assuming you are sending email from localhost
    private static final String HOST = "localhost";
    private final Session session;
    
    public MailSender(){
        // Get system properties
        Properties props = System.getProperties();

        // Setup mail server
        if(props!=null){
            props.setProperty("mail.smtp.host", HOST);
        }

        // Get the default Session object.
        session = Session.getDefaultInstance(props);
    }
    
    public void send(String to, String from){
        // Recipient's email ID needs to be mentioned.
        to = "abcd@gmail.com";

        // Sender's email ID needs to be mentioned
        from = "web@gmail.com";

        try {
            // Create a default MimeMessage object.
            MimeMessage message = new MimeMessage(session);

            // Set From: header field of the header.
            message.setFrom(new InternetAddress(from));

            // Set To: header field of the header.
            message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));

            // Set Subject: header field
            message.setSubject("This is the Subject Line!");

            // Send the actual HTML message, as big as you like
            message.setContent("<h1>This is actual message</h1>", "text/html");

            // Send message
            Transport.send(message);
            System.out.println("Sent message successfully....");
        }catch (MessagingException mex) {
            mex.printStackTrace();
        }
    }
}