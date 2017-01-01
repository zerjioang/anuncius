<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<!doctype html>
<html ⚡ lang="es">

    <head>
        <s:include value="/templates/metadata/metadata.generic.jsp">
            <s:param name="description" value="'Blog oficial de la plataforma anuncius'"></s:param>
            <s:param name="author" value="'Sergio'"></s:param>
        </s:include>
        
        <!-- PAGE TITLE -->
        <title>Anuncius - Blog</title>

        <s:include value="/templates/metadata/metadata.favicon.jsp" />

        <s:include value="/templates/metadata/metadata.opengraph.jsp">
            <s:param name="title" value="'Blog de Anuncius'"></s:param>
            <s:param name="sitename" value="'Anuncius'"></s:param>
            <s:param name="url" value="'http://www.anunci.us/blog'"></s:param>
            <s:param name="image" value="'http://www.anunci.us/image.png'"></s:param>
            <s:param name="description" value="'Blog oficial de la plataforma anuncius'"></s:param>
            <s:param name="address" value="'Avenida de las universidades'"></s:param>
            <s:param name="locality" value="'Bilbao'"></s:param>
            <s:param name="region" value="'Bizkaia'"></s:param>
            <s:param name="code" value="'48003'"></s:param>
            <s:param name="country" value="'Spain'"></s:param>
        </s:include>

        <s:include value="/templates/metadata/metadata.twitter.jsp">
            <s:param name="alt" value="'Imagen de bienvenida al blog de Anuncius'"></s:param>
            <s:param name="site" value="'@anunci.us'"></s:param>
            <s:param name="title" value="'Blog de Anuncius'"></s:param>
            <s:param name="description" value="'Blog oficial de la plataforma anuncius'"></s:param>
            <s:param name="author" value="'@zerjioang'"></s:param>
            <s:param name="image" value="'http://static.anunci.us/img/twitter.image.png'"></s:param>
        </s:include>

        <s:include value="/templates/metadata/metadata.google.jsp">
            <s:param name="name" value="'Blog de Anuncius'"></s:param>
            <s:param name="description" value="'Blog oficial de la plataforma anuncius'"></s:param>
            <s:param name="image" value="'http://static.anunci.us/img/google.image.png'"></s:param>
        </s:include>

        <s:include value="/templates/modules/css/minimum.css.jsp"/>

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
                                <picture>
                                    <amp-img
                                        src="http://static.anunci.us/theme/images/blog/welcome.jpg"
                                        alt="Imagen de bienvenida al blog"
                                        class="gl-lazy"
                                        width=360
                                        height=240
                                        layout=responsive>
                                    </amp-img>
                                </picture>
                                <div class="gl-blog-cat-icon">
                                    <i class="ion-ios-musical-notes"></i>
                                </div>
                            </div>

                            <div class="gl-blog-item-details">
                                <h3>
                                    <a href="/post/1">Atención: Estrenamos Anuncius!</a>
                                </h3>
                                <p>Estamos deseando darte la bienvenida oficial</p>
                                <span class="gl-blog-post-date">1 de Enero, 2017</span>
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
                                        <a href="#">Bienvenido al blog de Anunci.us</a>
                                    </h3>
                                    <a href="#" class="gl-post-author"><b>El equipo de anunci.us</b></a>
                                </div>
                            </div>
                        </div>
                        <!-- BLOG ITEMS END -->

                        <div id="gl-blog-next-page-nav">
                            <a href="next"></a>
                        </div>


                    </div>
                    <!-- PAGE CONTENT DETAILS END -->
                </div>
            </div>
        </section>
        <!-- PAGE CONTETNT END -->

        <s:include value="/templates/modules/footer/common.footer.jsp" />

        <s:include value="/templates/modules/js/minimum.js.jsp"/>
    </body>
</html>