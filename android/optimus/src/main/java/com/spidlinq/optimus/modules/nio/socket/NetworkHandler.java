package com.spidlinq.optimus.modules.nio.socket;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.net.URLConnection;
import java.nio.channels.Channels;
import java.nio.channels.ReadableByteChannel;

/**
 * Created by sergio on 11/7/16.
 */
public class NetworkHandler {

    public static void saveResource(String urlString, File destination) {
        try {
            URL website = new URL(urlString);
            ReadableByteChannel rbc;
            rbc = Channels.newChannel(website.openStream());
            FileOutputStream fos = new FileOutputStream(destination);
            fos.getChannel().transferFrom(rbc, 0, Long.MAX_VALUE);
            fos.close();
            rbc.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static String getResource(String urlString) throws IOException {
        URL url = new URL(urlString);
        URLConnection conection = url.openConnection();
        conection.connect();

        // this will be useful so that you can show a tipical 0-100%
        // progress bar
        int lenghtOfFile = conection.getContentLength();

        // download the file
        InputStream input = new BufferedInputStream(url.openStream(), lenghtOfFile);

        byte data[] = new byte[1024];
        long total = 0;

        int count;
        StringBuilder sb = new StringBuilder();
        while ((count = input.read(data)) != -1) {
            total += count;
            sb.append(data);
        }
        input.close();
        return sb.toString();
    }
}
