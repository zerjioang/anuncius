var googleProfile = undefined;

function onSuccess(googleUser) {
    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
    var profile = onSignIn(googleUser);
    if(document.getElementsByTagName("body")[0].className.indexOf('gl-show-menu')!=-1){
        $("#gl-side-menu-close-button").click();
    }
    showLoggedUserElementsInView(false);
}

function onFailure(error) {
  console.log(error);
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
    console.log('ID: ' + profile.getId());
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
    googleProfile = profile;
    sessionStorage.googleProfile = googleProfile;
    return profile;
  }
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
    googleProfile = undefined;
    sessionStorage.googleProfile = undefined;
}