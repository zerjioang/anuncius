<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<!DOCTYPE html>
<html lang="es">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

        <!-- PAGE TITLE -->
        <title>Anuncius - Blog</title>

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />

        <!-- remodal css -->
        <link rel="stylesheet" href="vendor/remodal/remodal.css">
        <link rel="stylesheet" href="vendor/remodal/remodal-default-theme.css">

        <link rel="stylesheet" href="css/style.min.css">
        <link rel="stylesheet" href="css/clean.scrollbar.css">

        <!-- main title font -->
        <link href="https://fonts.googleapis.com/css?family=Fredoka+One" rel="stylesheet">

        <link rel="shortcut icon" href="images/favicon.ico">
    </head>

    <body class="gl-blog-page gl-blog-grid gl-realestate-template">

        <s:include value="/templates/modules/loader/loader.section.jsp"/>

        <!-- SIDE MENU-->
        <s:include value="/templates/modules/aside/login/login.section.jsp" />
        <!-- SIDE MENU END -->

        <!-- HEADER -->
        <s:include value="/templates/modules/header/header.section.jsp" />

        <!-- PAGE HEADER -->
        <section class="gl-blog-page-header gl-page-header-wrapper">
            <div class="container">
                <div class="row">
                    <h1>Blog oficial de Anuncius</h1>
                    <div class="gl-breadcumb">
                        <a href=".">Anuncius</a>
                        <span>Blog</span>
                    </div>
                </div>
            </div>
        </section>
        <!-- PAGE HEADER -->

        <!-- PAGE CONTETNT -->
        <section class="gl-page-content-section">
            <div class="container">
                <div class="row">
                    <!-- PAGE CONTENT DETAILS -->
                    <div class="gl-blog-content gl-blog-grid-wrapper">

                        <!-- BLOG ITEMS -->
                        <div class="gl-blog-items gl-image-post col-md-4 col-sm-4 col-xs-12">
                            <div class="gl-blog-img-wrapper">
                                <img src="images/product.png" alt="Blog img">
                                <!-- <picture>
                                    <source media="(min-width: 768px)" srcset=images/blog-5-lg.jpg>
                                    <img alt="Category Image" srcset=images/blog-5-lg.jpg>
                                </picture> -->
                                <div class="gl-blog-cat-icon">
                                    <i class="ion-ios-musical-notes"></i>
                                </div>
                            </div>

                            <div class="gl-blog-item-details">
                                <h3>
                                    <a href="blog-details.html">Atención: Estrenamos Anuncius!</a>
                                </h3>
                                <p>Estamos deseándote darte la bienvenida oficial</p>
                                <span class="gl-blog-post-date">March 20, 2016</span>
                            </div>
                        </div>
                        <!-- BLOG ITEMS END -->

                        <!-- BLOG ITEMS -->
                        <div class="gl-blog-items gl-music-post col-md-4 col-sm-4 col-xs-12">
                            <div class="gl-blog-img-wrapper">
                                <img src="images/product.png" alt="Blog img" >
                                <!-- <picture>
                                    <source media="(min-width: 768px)" srcset=images/blog-13-lg.jpg>
                                    <img alt="Category Image" srcset=images/blog-13-xs.jpg>
                                </picture> -->
                                <div class="gl-blog-cat-icon">
                                    <i class="ion-ios-camera-outline"></i>
                                </div>
                            </div>

                            <div class="gl-blog-item-details">
                                <h3>
                                    <a href="blog-details.html">Keep Playing</a>
                                </h3>
                                <p>Music kills the devil always. Love music so blinded by desire</p>
                                <span class="gl-blog-post-date">March 20, 2016</span>
                            </div>
                        </div>
                        <!-- BLOG ITEMS END -->

                        <!-- BLOG ITEMS -->
                        <div class="gl-blog-items gl-image-post col-md-4 col-sm-4 col-xs-12">
                            <div class="gl-blog-img-wrapper">
                                <img src="images/product.png" alt="Blog img">
                                <!-- <picture>
                                    <source media="(min-width: 768px)" srcset=images/blog-3-lg.jpg>
                                    <img alt="Category Image" srcset=images/blog-3-xs.jpg>
                                </picture> -->
                                <div class="gl-blog-cat-icon">
                                    <i class="ion-ios-musical-notes"></i>
                                </div>
                            </div>

                            <div class="gl-blog-item-details">
                                <h3>
                                    <a href="blog-details.html">Keep Playing</a>
                                </h3>
                                <p>Music kills the devil always. Love music so blinded by desire</p>
                                <span class="gl-blog-post-date">March 20, 2016</span>
                            </div>
                        </div>
                        <!-- BLOG ITEMS END -->

                        <!-- BLOG ITEMS -->
                        <div class="gl-blog-items gl-image-post col-md-4 col-sm-4 col-xs-12">
                            <div class="gl-blog-img-wrapper">
                                <img src="images/product.png" alt="Blog img">
                                <!-- <picture>
                                    <source media="(min-width: 768px)" srcset=images/blog-4-lg.jpg>
                                    <img alt="Category Image" srcset=images/blog-4-xs.jpg>
                                </picture> -->
                                <div class="gl-blog-cat-icon">
                                    <i class="ion-ios-musical-notes"></i>
                                </div>
                            </div>

                            <div class="gl-blog-item-details">
                                <h3>
                                    <a href="blog-details.html">Keep Playing</a>
                                </h3>
                                <p>Music kills the devil always. Love music so blinded by desire</p>
                                <span class="gl-blog-post-date">March 20, 2016</span>
                            </div>
                        </div>
                        <!-- BLOG ITEMS END -->

                        <!-- BLOG ITEMS -->
                        <div class="gl-blog-items gl-quote-post col-md-4 col-sm-4 col-xs-12">
                            <div class="gl-blog-img-wrapper">
                                <div class="gl-blog-cat-icon">
                                    <i class="ion-quote"></i>
                                </div>

                                <div class="gl-blog-item-details">
                                    <h3>
                                        <a href="blog-details.html">Many desktop publish web page editors now as default model lorem ipsum</a>
                                    </h3>
                                    <a href="blog-grid.html#" class="gl-post-author">admin</a>
                                </div>
                            </div>
                        </div>
                        <!-- BLOG ITEMS END -->

                        <!-- BLOG ITEMS -->
                        <div class="gl-blog-items gl-image-post col-md-4 col-sm-4 col-xs-12">
                            <div class="gl-blog-img-wrapper">
                                <img src="images/product.png" alt="Blog img">
                                <!-- <picture>
                                    <source media="(min-width: 768px)" srcset=images/blog-6-lg.jpg>
                                    <img alt="Category Image" srcset=images/blog-6-xs.jpg>
                                </picture> -->
                                <div class="gl-blog-cat-icon">
                                    <i class="ion-ios-musical-notes"></i>
                                </div>
                            </div>

                            <div class="gl-blog-item-details">
                                <h3>
                                    <a href="blog-details.html">Keep Playing</a>
                                </h3>
                                <p>Music kills the devil always. Love music so blinded by desire</p>
                                <span class="gl-blog-post-date">March 20, 2016</span>
                            </div>
                        </div>
                        <!-- BLOG ITEMS END -->

                        <div id="gl-blog-next-page-nav">
                            <a href="misc/blog-grid-2.html"></a>
                        </div>


                    </div>
                    <!-- PAGE CONTENT DETAILS END -->
                </div>
            </div>
        </section>
        <!-- PAGE CONTETNT END -->

        <s:include value="/templates/modules/footer/common.footer.jsp" />

        <script src="js/jquery.min.js"></script>
        <script src="js/plugins.js"></script>
        <script src="js/scripts.js"></script>
        <script src="js/main.js"></script>
    </body>
</html>