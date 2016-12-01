<%@ taglib prefix="s" uri="/struts-tags" %>

<s:include value="/templates/landing.header.jsp">
    <s:param name="showButtons" value="false" />
    <s:param name="title1" value="'Login'" />
    <s:param name="title2" value="'to smouq'" />
    <s:param name="subtitle" value="'Create a new account or use your existing'" />
</s:include>

<style>
.form-signin {
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .form-signin-heading,
.form-signin .checkbox {
  margin-bottom: 10px;
}
.form-signin .checkbox {
  font-weight: normal;
}
.form-signin .form-control {
  position: relative;
  height: auto;
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>

<section class="section light" style="padding-top: 10px;">
    
    <div class="section-content">

    <div class="container">

         <div class="row">
                        
            <form class="form-signin">
              <h4 class="form-signin-heading">Please sign in</h4>
              <label for="inputEmail" class="sr-only">Id</label>
              <input type="email" id="inputEmail" class="form-control" placeholder="Account id" required autofocus>
              <label for="inputPassword" class="sr-only">Password</label>
              <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
              <div class="checkbox">
                <label>
                  <input type="checkbox" value="remember-me"> Remember me
                </label>
              </div>
              <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            </form>

      </div> <!-- row -->

    </div><!-- container -->

</div><!-- section-container -->

</section>