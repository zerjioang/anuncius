notificationsEnabled = false;

function enableNotifications() {
  if (!("Notification" in window)) {
    console.log("This browser does not support desktop notification");
  }
  else if (Notification.permission === "granted") {
       notificationsEnabled = true;
  }
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      if (!('permission' in Notification)) {
        Notification.permission = permission;
      }
      if (permission === "granted") {
        notificationsEnabled = true;
      }
    });
  }
}

function showNotification(title, body, icon, style){
    if(notificationsEnabled){
        //send native notification
        var options = {
                body: body,
                icon: icon, 
                dir : "ltr"
             };
        var notification = new Notification("anuncius", options);
    }
    else{
        //send html based notification
        var content = title+". "+body;
        $.notify(content, style);
    }
}