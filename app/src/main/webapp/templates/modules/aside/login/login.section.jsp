<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!-- PAGE OVERLAY WHEN MENU ACTIVE -->
<div class="gl-side-menu-overlay"></div>
<!-- PAGE OVERLAY WHEN MENU ACTIVE END -->

<div class="gl-side-menu-wrap" style="height: 88%;">
    <div class="gl-side-menu">
        <div class="gl-side-menu-widget-wrap">
            <div class="gl-login-form-wrapper">
                <h3>Iniciar sesión</h3>
                <p>Inicia sesión y empieza a descubrir</p>

                <%--
                <div class="gl-login-form">
                    <form action="#">
                        <input type="text" name="gl-user-name" id="gl-user-input" placeholder="User Name">
                        <input type="password" name="gl-user-password" id="gl-user-password" placeholder="Password">
                        <button type="submit">Iniciar sesión</button>
                    </form>
                </div>
                --%>

                <div class="gl-social-login-opt">
                    <div style="padding-bottom: 10px;">
                        <div id="my-signin2"></div>
                    </div>        
                    <%--
                    <a href="#login-with-facebook" class="gl-social-login-btn gl-facebook-login">Iniciar sesión con Facebook</a>
                    <a href="#login-with-twitter" class="gl-social-login-btn gl-twitter-login">Iniciar sesión con Twitter</a>
                    --%>
                </div>

                <%--
                <div class="gl-other-options">
                    <a href="#forgot-password" class="gl-forgot-pass">He olvidado mi contraseña</a>
                    <a href="#register" class="gl-signup">Registrarse</a>
                </div>
                --%>
            </div>
        </div>
    </div>

    <button class="gl-side-menu-close-button" id="gl-side-menu-close-button">Cerrar menú</button>
    
    <script>
        
        function onSuccess(googleUser) {
            console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
            var profile = onSignIn(googleUser);
            if(document.getElementsByTagName("body")[0].className.indexOf('gl-show-menu')!=-1){
                $("#gl-side-menu-close-button").click();
            }
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
            console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
            console.log('Name: ' + profile.getName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail());
            return profile;
          }
        function signOut() {
            var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function () {
                console.log('User signed out.');
            });
        }
    </script>
</div>