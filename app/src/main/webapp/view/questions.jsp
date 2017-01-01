<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<!doctype html>
<html ⚡ lang="es">

    <head>
        <s:include value="/templates/metadata/metadata.generic.jsp">
            <s:param name="description" value="'La revolución de las tiendas online'"></s:param>
            <s:param name="author" value="'Sergio'"></s:param>
        </s:include>
        
        <!-- PAGE TITLE -->
        <title>Anuncius | La revolución de las tiendas online</title>

        <s:include value="/templates/metadata/metadata.favicon.jsp" />

        <s:include value="/templates/metadata/metadata.opengraph.jsp">
            <s:param name="title" value="'Anuncius'"></s:param>
            <s:param name="sitename" value="'Anuncius'"></s:param>
            <s:param name="url" value="'http://www.anunci.us/'"></s:param>
            <s:param name="image" value="'http://www.anunci.us/image.png'"></s:param>
            <s:param name="description" value="'La revolución de las tiendas online'"></s:param>
            <s:param name="address" value="'Avenida de las universidades'"></s:param>
            <s:param name="locality" value="'Bilbao'"></s:param>
            <s:param name="region" value="'Bizkaia'"></s:param>
            <s:param name="code" value="'48003'"></s:param>
            <s:param name="country" value="'Spain'"></s:param>
        </s:include>

        <s:include value="/templates/metadata/metadata.twitter.jsp">
            <s:param name="alt" value="'Imagen de bienvenida de Anuncius'"></s:param>
            <s:param name="site" value="'@anuncius'"></s:param>
            <s:param name="title" value="'Anuncius - La revolución de las tiendas online'"></s:param>
            <s:param name="description" value="'Bienvenido a anuncius. La tienda online donde encontrarás lo que quieras.'"></s:param>
            <s:param name="author" value="'@zerjioang'"></s:param>
            <s:param name="image" value="'http://www.anunci.us/image.jpg'"></s:param>
        </s:include>

        <s:include value="/templates/metadata/metadata.google.jsp">
            <s:param name="name" value="'Anuncius - La revolución de las tiendas online'"></s:param>
            <s:param name="description" value="'Bienvenido a anuncius. La tienda online donde encontrarás lo que quieras.'"></s:param>
            <s:param name="image" value="'http://www.anunci.us/image.jpg'"></s:param>
        </s:include>

        <s:include value="/templates/modules/css/minimum.css.jsp"/>
    </head>

    <body class="gl-realestate-template">

        <s:include value="/templates/modules/loader/loader.section.jsp"/>
        
        <!-- SIDE MENU-->
        <s:include value="/templates/modules/aside/login/login.section.jsp" />
        <!-- SIDE MENU END -->

        <!-- HEADER -->
        <s:include value="/templates/modules/header/header.section.jsp"/>
        <!-- HEADER END -->

        <!-- HERO IMAGE -->
        <s:include value="/templates/modules/hero/hero.section.jsp">
            <s:param name="normal" value="'Preguntas '" />
            <s:param name="bold" value="'frecuentes'"/>
            <s:param name="image" value="'http://static.anunci.us/img/hero/questions/hero.jpg'" />
            <s:param name="block" value="'questions'" />
        </s:include>
        <!-- HERO IMAGE END -->

        <section id="questions">
            <div class="container" style='padding-top: 5%;padding-bottom: 5%;'>
                <div class="jumbotron">
                    <h1 class="display-3">Preguntas frecuentes</h1>
                </div>

                <div class="row">
                    <div class="gl-contact-form-wrapper gl-left-side col-md-6 col-sm-6 col-xs-12">
                        <h3 class="gl-single-title">Tienes alguna pregunta que hacernos, y no está en la lista? Preguntanos!</h3>

                        <form action="#">
                            <input type="text" name="gl-contact-name" id="gl-contact-name" placeholder="Nombre" required>
                            <input type="email" name="gl-contact-email" id="gl-contact-email" placeholder="Email" required>
                            <textarea name="gl-contact-message" id="gl-contact-message" cols="30" rows="10" placeholder="Tu pregunta" required></textarea>

                            <input type="submit" value="Send" class="gl-btn">
                        </form>
                    </div>

                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <h3>
                            <b>Mira cómo quedará tu pregunta antes de publicarla!</b>
                        </h3>
                        <div style="background-color: #eaeaea; padding: 10px; border-radius: 10px;">
                            <h3>Titulo de la pregunta</h3>
                            <p align='justify'>publicada por: <b>anon</b></p>
                        </div>
                    </div>
                </div>

                <div class="row" style="padding-top: 50px;">
                    <h1>Preguntas frecuentes publicadas</h1>
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <div style="background-color: #eaeaea; padding: 10px; border-radius: 10px;">
                            <h3>Titulo de la pregunta</h3>
                            <p align='justify'>respuesta de la pregunta</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- FOOTER -->
        <s:include value="/templates/modules/footer/common.footer.jsp" />
        <!-- FOOTER END -->

        <s:include value="/templates/modules/js/minimum.js.jsp"/>

    </body>
</html>