<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<!doctype html>
<html lang="es">

    <head>
        <s:include value="/templates/metadata/metadata.generic.jsp">
            <s:param name="description" value="'La compra inteligente'"></s:param>
            <s:param name="author" value="'Sergio'"></s:param>
        </s:include>
        
        <!-- PAGE TITLE -->
        <title>Anuncius | La compra inteligente</title>

        <s:include value="/templates/metadata/metadata.favicon.jsp" />

        <s:include value="/templates/metadata/metadata.opengraph.jsp">
            <s:param name="title" value="'Anuncius'"></s:param>
            <s:param name="sitename" value="'Anuncius'"></s:param>
            <s:param name="url" value="'https://www.anunci.us/'"></s:param>
            <s:param name="image" value="'https://www.anunci.us/image.png'"></s:param>
            <s:param name="description" value="'La compra inteligente'"></s:param>
            <s:param name="address" value="'Avenida de las universidades'"></s:param>
            <s:param name="locality" value="'Bilbao'"></s:param>
            <s:param name="region" value="'Bizkaia'"></s:param>
            <s:param name="code" value="'48003'"></s:param>
            <s:param name="country" value="'Spain'"></s:param>
        </s:include>

        <s:include value="/templates/metadata/metadata.twitter.jsp">
            <s:param name="alt" value="'Imagen de bienvenida de Anuncius'"></s:param>
            <s:param name="site" value="'@anuncius'"></s:param>
            <s:param name="title" value="'Anuncius - La compra inteligente'"></s:param>
            <s:param name="description" value="'Bienvenido a anuncius. La tienda online donde encontrarás lo que quieras.'"></s:param>
            <s:param name="author" value="'@zerjioang'"></s:param>
            <s:param name="image" value="'https://www.anunci.us/image.jpg'"></s:param>
        </s:include>

        <s:include value="/templates/metadata/metadata.google.jsp">
            <s:param name="name" value="'Anuncius - La compra inteligente'"></s:param>
            <s:param name="description" value="'Bienvenido a anuncius. La tienda online donde encontrarás lo que quieras.'"></s:param>
            <s:param name="image" value="'https://www.anunci.us/image.jpg'"></s:param>
        </s:include>

        <s:include value="/templates/modules/css/minimum.css.jsp"/>
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

        <s:include value="/templates/modules/js/minimum.js.jsp"/>

    </body>
</html>