var googleProfile = undefined;

function onSuccess(googleUser) {
    log('Logged in as: ' + googleUser.getBasicProfile().getName());
    var profile = onSignIn(googleUser);
    if(document.getElementsByTagName("body")[0].className.indexOf('gl-show-menu')!=-1){
        $("#gl-side-menu-close-button").click();
    }
    showLoggedUserElementsInView(false);
}

function onFailure(error) {
  log(error);
  swal("Permiso denegado", "Por favor, inicia sesión correctamente con tu cuenta de Google para poder empezar. Para ello acepta los permisos basicos que la aplicación solicita.", "error");
}

function renderButton() {
    gapi.signin2.render('my-signin2', {
      'scope': 'profile email openid https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.me https://www.googleapis.com/auth/user.addresses.read ', //https://www.googleapis.com/auth/contacts.readonly https://www.googleapis.com/auth/user.phonenumbers.read',
      'width': 300,
      'height': 42,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': onSuccess,
      'onfailure': onFailure
    });
}

function onSignIn(googleUser) {
    localStorage.googleUser = JSON.stringify(googleUser);
    var profile = googleUser.getBasicProfile();
    /*
     var id_token = googleUser.getAuthResponse().id_token;
     localStorage.token = id_token;
     */
    
    var data = {
        'id' : profile.getId(),
        'full_name': profile.getName(),
        'given_name': profile.getGivenName(),
        'family_name': profile.getFamilyName(),
        'image': profile.getImageUrl(),
        'email' : profile.getEmail()
    };
    log(data);
    googleProfile = JSON.stringify(data);
    localStorage.googleProfile = googleProfile;
    
    notifySignIn();
    
    return profile;
  }
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        log('User signed out.');
        notifySignOut();
        googleProfile = undefined;
        localStorage.googleProfile = undefined;
        localStorage.googleUser = undefined;
        //full clear
        //localStorage.clear();
    });
}

function getGoogleProfile(){
    if(googleProfile===undefined){
        googleProfile = localStorage.googleProfile;
    }
    return googleProfile;
}

function getGoogleUserToken() {
    var profile = getGoogleProfile();
    if(profile!==undefined && profile!=='undefined'){
        /*return profile.getAuthResponse().id_token; // not a function */
        return profile.id;
    }
    return undefined;
}

//ajax

function notifySignIn(){
    var onSuccess = function (data, textStatus, jqXHR) {              
        if(data!==undefined){
        }
    };

    var onError = function (jqXHR, textStatus, errorThrown) {
        if(textStatus!==undefined && textStatus!==errorThrown){
        }
    };
    
    var p = getGoogleProfile();
    if(p!==undefined){
        p = JSON.parse(p);
        var payload = {
            "id" : p.id,
            "fullname" : p.full_name,
            "givenname" : p.given_name,
            "familiyname" : p.family_name,
            "image" : p.image,
            "email" : p.email,
            /*"token" : p.getAuthResponse().id_token, this is not a function*/
        };
        contactAPIviaPOST('/auth/login', payload, onSuccess, onError);
    }
}

function notifySignOut(){
    var onSuccess = function (data, textStatus, jqXHR) {              
        if(data!==undefined){
        }
    };

    var onError = function (jqXHR, textStatus, errorThrown) {
        if(textStatus!==undefined && textStatus!==errorThrown){
        }
    };
    
    var p = getGoogleProfile();
    if(p!==undefined){
        p = JSON.parse(p);
        var payload = {
            "id" : p.id,
            "token" : p.id,
            /*"token" : p.getAuthResponse().id_token, this is not a function*/
        };
        contactAPIviaPOST('/auth/logout', payload, onSuccess, onError);
    }
}