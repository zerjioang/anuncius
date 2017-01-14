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
    'scope': 'profile email',
    'width': 300,
    'height': 42,
    'longtitle': true,
    'theme': 'dark',
    'onsuccess': onSuccess,
    'onfailure': onFailure
  });
}

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    log('ID: ' + profile.getId());
    log('Full Name: ' + profile.getName());
    log('Given Name: ' + profile.getGivenName());
    log('Family Name: ' + profile.getFamilyName());
    log('Image URL: ' + profile.getImageUrl());
    log('Email: ' + profile.getEmail());
    var id_token = googleUser.getAuthResponse().id_token;
    googleProfile = profile;
    sessionStorage.googleProfile = googleProfile;
    sessionStorage.token = id_token;
    return profile;
  }
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        log('User signed out.');
    });
    googleProfile = undefined;
    sessionStorage.googleProfile = undefined;
}

function getGoogleProfile(){
    return googleProfile;
}

function getGoogleUserToken() {
    var profile = getGoogleProfile();
    if(profile!==undefined && profile!=='undefined'){
        return profile.getAuthResponse().id_token;
    }
    return undefined;
}