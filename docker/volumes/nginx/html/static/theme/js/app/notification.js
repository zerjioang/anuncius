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