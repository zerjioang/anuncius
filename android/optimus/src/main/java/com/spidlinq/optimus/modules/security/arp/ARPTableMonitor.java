package com.spidlinq.optimus.modules.security.arp;

import android.content.Context;
import android.content.Intent;
import android.net.DhcpInfo;
import android.net.wifi.WifiManager;
import android.os.Bundle;
import android.os.Handler;
import android.os.Message;
import android.text.format.Formatter;
import android.util.Log;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;

/**
 * Created by sergio on 8/3/15
 */
public class ARPTableMonitor {

    private static final String TAG = "ARPTableMonitor";
    private static final String ARP_CMD = "/proc/net/arp";
    private static final String SPLIT_REGEX = "[ ]+";
    public static Handler handler;
    private static HashMap<String, String> checkMapARP = new HashMap<String, String>();
    private static ARPTableMonitor instance;
    private ArrayList arpTableList;
    private Context context;
    private DhcpInfo dhcp;
    private String gateway;
    private boolean warnUser;

    private ARPTableMonitor(Context context) {
        arpTableList = new ArrayList();
        dhcp = null;
        gateway = null;
        this.context = context;
        checkMapARP.clear();
        arpTableList.clear();
        Log.d(TAG, "Cleared checkMap and arpTable");
    }

    public static ARPTableMonitor getInstance(Context c) {
        if (instance == null) {
            instance = new ARPTableMonitor(c);
        }
        return instance;
    }

    private void warnUser(String s, Class dst) {
        Intent intent = new Intent(context, dst);
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        Bundle bundle = new Bundle();
        bundle.putString("ADVERSARY", s);
        intent.putExtras(bundle);
        context.startActivity(intent);
    }

    //Todo revisar este metodo copiado
    public void check() throws IOException {
        BufferedReader bufferedreader;
        String s;
        WifiManager wifii = (WifiManager) context.getSystemService(Context.WIFI_SERVICE);
        dhcp = wifii.getDhcpInfo();
        gateway = Formatter.formatIpAddress(dhcp.gateway);
        bufferedreader = new BufferedReader(new FileReader(new File(ARP_CMD)));
        s = "";

        //leer el buffer
        String deviceIp;
        String deviceMAC;
        String readLineStr;
        do {
            readLineStr = bufferedreader.readLine();
            if (readLineStr == null) {
                bufferedreader.close();
                if (warnUser) {
                    //todo add class
                    warnUser(s, null);
                }
                if (handler != null) {
                    Message message = handler.obtainMessage();
                    message.setData(new Bundle());
                    message.getData().putBoolean("UPDATE", true);
                    message.getData().putSerializable("ARPTABLE", arpTableList);
                    handler.sendMessage(message);
                }
                return;
            } else if (!readLineStr.startsWith("IP")) {
                String arpTableRowData[] = readLineStr.split(SPLIT_REGEX);
                deviceIp = arpTableRowData[0];
                deviceMAC = arpTableRowData[3];
                Log.d(TAG, (new StringBuilder("IP: ")).append(arpTableRowData[0]).append(" MAC: ").append(arpTableRowData[3]).toString());
                //analizar todas las IPs excepto la del gateway
                if (!deviceIp.equalsIgnoreCase(gateway)) {
                    //añadir la mac de ese dispositivo al hashmap
                    if (!checkMapARP.containsKey(deviceIp)) {
                        checkMapARP.put(deviceIp, deviceMAC);
                    }
                    if (deviceIp.equalsIgnoreCase(gateway)) {
                        warnUser = true;
                        s = (new StringBuilder("Intrusión detectada! IP Origen:")).append(deviceIp).append(" has MAC: ").append(deviceMAC).append(" and ").append(checkMapARP.get(deviceIp)).toString();
                    }
                    Log.d(TAG, s);
                    for (String deviceMacIterator : checkMapARP.keySet()) {
                        Log.d(TAG, (new StringBuilder("  > ")).append(deviceMacIterator).append(" = ").append(checkMapARP.get(deviceMacIterator)).toString());
                    }
                } else {
                    //añadir la mac del gateway al hashmap
                    if (!checkMapARP.containsKey(deviceIp)) {
                        checkMapARP.put(deviceIp, deviceMAC);
                    }
                }
            }
        } while (readLineStr != null);


    }

    /*public void check() throws IOException {
        BufferedReader bufferedreader;
        String s;
        wifii = (WifiManager) context.getSystemService(Context.WIFI_SERVICE);
        dhcp = wifii.getDhcpInfo();
        gateway = Formatter.formatIpAddress(dhcp.gateway);
        bufferedreader = new BufferedReader(new FileReader(new File("/proc/net/arp")));
        s = "";

        //leer el buffer
        String deviceIp;
        String deviceMAC;
        String s1;
        do
        {
            s1 = bufferedreader.readLine();
            if (s1 == null){
                bufferedreader.close();
                if (warnUser){
                    warnUser(s);
                }
                if (handler != null){
                    Message message = handler.obtainMessage();
                    message.setData(new Bundle());
                    message.getData().putBoolean("UPDATE", true);
                    message.getData().putSerializable("ARPTABLE", arpTableList);
                    handler.sendMessage(message);
                }
                return;
            }
        } while (s1.startsWith("IP"));

        String arpTableRowData[] = s1.split("[ ]+");
        deviceIp = arpTableRowData[0];
        deviceMAC = arpTableRowData[3];
        Log.d(TAG, (new StringBuilder("IP: ")).append(arpTableRowData[0]).append(" MAC: ").append(arpTableRowData[3]).toString());
        if (!checkMapARP.containsKey(deviceIp)){
            checkMapARP.put(deviceIp, deviceMAC);
        }
        s = (new StringBuilder("Found collision! IP:")).append(deviceIp).append(" has MAC: ").append(deviceMAC).append(" and ").append((String)checkMapARP.get(deviceIp)).toString();
        if (deviceIp.equalsIgnoreCase(gateway)){
            warnUser = true;
        }
        Log.d(TAG, s);
        for (String s4 : checkMapARP.keySet()) {
            Log.d(TAG, (new StringBuilder("  > ")).append(s4).append(" = ").append((String) checkMapARP.get(s4)).toString());
        }
    }*/

    /**
     * Reiniciar el estado del monitor de ARP
     */
    public void reset(Context c) {
        instance = new ARPTableMonitor(c);
    }
}
