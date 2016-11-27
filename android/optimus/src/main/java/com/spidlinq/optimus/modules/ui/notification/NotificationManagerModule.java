package com.spidlinq.optimus.modules.ui.notification;

import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.graphics.BitmapFactory;
import android.support.v4.app.NotificationCompat;

/**
 * Created by sergio on 23/2/15.
 */
public class NotificationManagerModule {

    // A integer, that identifies each notification uniquely
    public static final int NOTIFICATION_ID = 1;
    private static final int NO_ICON = -1;
    private static NotificationManagerModule nfm;
    private final NotificationManager mNotificationManager;
    private Context context;

    private NotificationManagerModule(Context context) {

        this.context = context;
        String ns = Context.NOTIFICATION_SERVICE;
        mNotificationManager = (NotificationManager) context.getSystemService(ns);
    }

    public static NotificationManagerModule getInstance(Context context) {
        if (nfm == null) {
            nfm = new NotificationManagerModule(context);
        }
        return nfm;
    }

    //metodos de la clase

    public void createNotification(Class source, int notificationSmallIcon, int notificationLargeIcon, String title, String text, String subText) {

        // Use NotificationCompat.Builder to set up our notification.
        NotificationCompat.Builder builder = new NotificationCompat.Builder(context);

        //icon appears in device notification bar and right hand corner of notification
        if (notificationSmallIcon != NO_ICON) {
            builder.setSmallIcon(notificationSmallIcon);
        }

        // This intent is fired when notification is clicked
        Intent intent = new Intent(context, source);
        PendingIntent pendingIntent = PendingIntent.getActivity(context, 0, intent, 0);

        // Set the intent that will fire when the user taps the notification.
        builder.setContentIntent(pendingIntent);

        // Large icon appears on the left of the notification
        builder.setLargeIcon(BitmapFactory.decodeResource(context.getResources(), notificationLargeIcon));

        // Content title, which appears in large type at the top of the notification
        if (title != null) {
            builder.setContentTitle(title);
        }

        // Content text, which appears in smaller text below the title
        if (text != null) {
            builder.setContentText(text);
        }

        // The subtext, which appears under the text on newer devices.
        // This will show-up in the devices with Android 4.2 and above only
        if (subText != null) {
            builder.setSubText(subText);
        }

        // Will display the notification in the notification bar
        mNotificationManager.notify(NOTIFICATION_ID, builder.build());

    }
}
