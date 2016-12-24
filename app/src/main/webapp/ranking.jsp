<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<!DOCTYPE html>
<html lang="es">

    <head>
        <!-- PAGE TITLE -->
        <title>Anuncius | La compra inteligente</title>

        <s:include value="/templates/modules/metadata/metadata.generic.jsp">
            <s:param name="description" value="'La compra inteligente'"></s:param>
            <s:param name="author" value="'Sergio'"></s:param>
        </s:include>

        <s:include value="/templates/modules/metadata/metadata.favicon.jsp" />

        <s:include value="/templates/modules/metadata/metadata.opengraph.jsp">
            <s:param name="title" value="'Anuncius'"></s:param>
            <s:param name="sitename" value="'Anuncius'"></s:param>
            <s:param name="url" value="'http://www.anuncius.org/'"></s:param>
            <s:param name="image" value="'http://www.anuncius.org/image.png'"></s:param>
            <s:param name="description" value="'La compra inteligente'"></s:param>
            <s:param name="address" value="'Avenida de las universidades'"></s:param>
            <s:param name="locality" value="'Bilbao'"></s:param>
            <s:param name="region" value="'Bizkaia'"></s:param>
            <s:param name="code" value="'48003'"></s:param>
            <s:param name="country" value="'Spain'"></s:param>
        </s:include>

        <s:include value="/templates/modules/metadata/metadata.twitter.jsp">
            <s:param name="alt" value="'Imagen de bienvenida de Anuncius'"></s:param>
            <s:param name="site" value="'@anuncius'"></s:param>
            <s:param name="title" value="'Anuncius - La compra inteligente'"></s:param>
            <s:param name="description" value="'Bienvenido a anuncius. La tienda online donde encontrarás lo que quieras.'"></s:param>
            <s:param name="author" value="'@zerjioang'"></s:param>
            <s:param name="image" value="'http://www.anuncius.org/image.jpg'"></s:param>
        </s:include>

        <s:include value="/templates/modules/metadata/metadata.google.jsp">
            <s:param name="name" value="'Anuncius - La compra inteligente'"></s:param>
            <s:param name="description" value="'Bienvenido a anuncius. La tienda online donde encontrarás lo que quieras.'"></s:param>
            <s:param name="image" value="'http://www.anuncius.org/image.jpg'"></s:param>
        </s:include>

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />

        <!-- remodal css -->
        <link rel="stylesheet" href="vendor/remodal/remodal.css">
        <link rel="stylesheet" href="vendor/remodal/remodal-default-theme.css">

        <link rel="stylesheet" href="css/bootstrap.css">
        <link rel="stylesheet" href="css/clean.scrollbar.css">

        <!-- main title font -->
        <link href="https://fonts.googleapis.com/css?family=Fredoka+One" rel="stylesheet">
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
                    <h1>El ranking</h1>
                    <div class="gl-breadcumb">
                        <a href=".">Anuncius</a>
                        <span>Ranking</span>
                    </div>
                </div>
            </div>
        </section>
        <!-- PAGE HEADER -->

        <section class="container">
            <div class="row" style="padding:40px;">
                <div class="col-md-6">
                    <img class="img-center" src="https://www.digicert.com/images/seo-rank-boost.png" width="75%" alt="Imagen del top 10"/>
                </div>
                <div class="col-md-6">
                    <h1 style="text-align: -webkit-center; font-family: 'Fredoka One', cursive;"><b>El top 10</b></h1>
                    <ul>
                        <li>Usuario 01</li>
                    </ul>
                    <p style="text-align: -webkit-center;">No hay usuarios actualmente en el top 10</p>
                </div>
            </div>
        </section>

        <!-- FOOTER -->
        <s:include value="/templates/modules/footer/common.footer.jsp" />
        <!-- FOOTER END -->

        <div class="remodal" data-remodal-id="copyright-modal">
            <button data-remodal-action="close" class="remodal-close"></button>
            <h1>Copyright</h1>
            <p>
                Plataforma desarrollada por @zerjioang
            </p>
            <br>
            <button data-remodal-action="confirm" class="remodal-confirm">Cerrar</button>
        </div>

        <script src="js/jquery.min.js"></script>
        <script src="js/plugins.js"></script>
        <script src="js/scripts.js"></script>
        <script src="js/main.js"></script>

        <script src="js/app/controller/landing/easytabs.js"></script>
        <script src="js/app/controller/landing/events.js"></script>
        <script src="js/app/controller/landing/functions.js"></script>
        <script src="js/app/controller/landing/masonry.js"></script>
        <script src="js/app/controller/landing/nicescroll.js"></script>
        <script src="js/app/controller/landing/selector.js"></script>

        <!-- api handler -->
        <script src="js/app/api.js"></script>
        <script src="js/app/custom.js"></script>

        <!-- remodal js -->
        <script src="vendor/remodal/remodal.min.js"></script>

    </body>
</html>