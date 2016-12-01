<%@ taglib prefix="s" uri="/struts-tags" %>

<header id="home">

    <div id="main-menu">

        <nav class="side-navigation-menu clearfix">
            <div class="close-btn clearfix">
                <p class="pull-left">Smouq</p>
                <a href="" class="main-menu-close pull-right"><i class="icon_close"></i></a>
            </div>
            <ul>
                <li><a href="#/">Home</a></li>
                <li><a href="#login">Login</a></li>
            </ul>

        </nav><!-- menu-area -->

    </div><!-- #main-menu -->


    <div class="overlay-light">

        <div class="container">

            <div class="menu-container">

                <div class="row">

                    <div class="col-xs-6">

                        <div class="logo">
                            <a href="#/"><img src="landing/images/logo/smouq.logo.png" height="40" width="40" alt="Live Logo">
                            </a>
                        </div><!-- .logo -->

                    </div><!-- .col-xs-6 -->

                    <div class="col-xs-6">

                        <nav class='fr hamburger-menu'>

                            <a href="" class="main-menu-open">
                                <i class="icon_menu"></i>
                            </a>

                        </nav><!-- nav -->

                    </div><!-- .col-xs-6 -->

                </div><!-- .row -->

            </div><!-- .menu-container -->

            <div class="header-container">

                <div class="row">

                    <div class="col-md-12">

                        <div class="header-items">

                            <div class="header-text">
                                <h1><span>${param.title1}</span> ${param.title2}</h1>
                                <h3 style="margin-top:15px;">${param.subtitle}</h3>
                            </div><!-- header-text -->

                            <div class="header-buttons">
                                <a class="btn-white" href="#login">Login</a>
                                <a class="btn-white-outlined" href="#readmore">Learn More</a>
                            </div><!-- header-buttons -->
                            
                            <span style="margin-bottom: 50px;"></span>

                        </div> <!-- .header-text -->

                    </div><!-- .col-md-12 -->

                </div><!-- .row -->

            </div><!-- .header-container -->

        </div><!-- .container -->

    </div><!-- .overlay -->

</header><!-- #home -->