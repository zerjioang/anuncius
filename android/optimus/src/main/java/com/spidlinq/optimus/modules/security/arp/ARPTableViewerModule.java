package com.spidlinq.optimus.modules.security.arp;

import android.content.Context;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

/**
 * Created by zerjioang on 27/02/2015.
 */
public class ARPTableViewerModule {

    private static final String ARP_EXEC = "/proc/net/arp";
    private static ARPTableViewerModule arpSDM;

    private ARPTableViewerModule(Context context) {
        Context context1 = context;
    }

    public static ARPTableViewerModule getInstance(Context context) {
        if (arpSDM == null) {
            arpSDM = new ARPTableViewerModule(context);
        }
        return arpSDM;
    }

    //metodos de la clase;

    public String getARPtablesInfo() {
        int macCount = 0;
        BufferedReader br = null;
        try {
            br = new BufferedReader(new FileReader(ARP_EXEC));
            String line;
            String data = "";
            while ((line = br.readLine()) != null) {
                /*String[] splitted = line.split(" +");
                if (splitted != null && splitted.length >= 4) {
                    // Basic sanity check
                    String mac = splitted[3];
                    if (mac.matches("..:..:..:..:..:..")) {
                        macCount++;
                    }
                }*/
                data += line + "\n";
            }
            return data;
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                if (br != null) {
                    br.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return null;

        /*if (macCount == 0)
            return 0;
        else
            return macCount-1; //One MAC address entry will be for the host.*/
    }
}
