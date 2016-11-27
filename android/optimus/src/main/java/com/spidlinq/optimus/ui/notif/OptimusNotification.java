package com.spidlinq.optimus.ui.notif;

import android.app.Notification;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;

/**
 * Created by sergio on 9/6/16.
 */
public class OptimusNotification {

    private static NotificationManager notificationManager;

    public static boolean showSimpleNotification(Context c, Intent t, String title, String text, int icon) {
        // use System.currentTimeMillis() to have a unique ID for the pending intent
        PendingIntent pIntent = null;
        if (t != null) {
            pIntent = PendingIntent.getActivity(c, (int) System.currentTimeMillis(), t, 0);
        }
        notificationManager = (NotificationManager) c.getSystemService(Context.NOTIFICATION_SERVICE);
        // build notification
        // the addAction re-use the same intent to keep the example short
        Notification n = new Notification.Builder(c)
                .setContentTitle(title)
                .setContentText(text)
                .setSmallIcon(icon)
                .setContentIntent(pIntent)
                .setAutoCancel(true)
                .build();

        notificationManager.notify(0, n);
        return true;
    }
}
