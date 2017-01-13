<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<!doctype html>
<html lang="es">

    <head>
        <s:include value="/templates/metadata/metadata.generic.jsp">
            <s:param name="description" value="'Detalles y documentación técnica para usuarios y desarrolladores, ejemplos y ayuda'"></s:param>
            <s:param name="author" value="'anuncius development team'"></s:param>
        </s:include>
        
        <!-- PAGE TITLE -->
        <title>Anuncius - Documentación</title>

        <s:include value="/templates/metadata/metadata.favicon.jsp" />

        <s:include value="/templates/metadata/metadata.opengraph.jsp">
            <s:param name="title" value="'Anuncius - Documentación'"></s:param>
            <s:param name="sitename" value="'Anuncius'"></s:param>
            <s:param name="url" value="'https://anunci.us/'"></s:param>
            <s:param name="image" value="'https://static.anunci.us/img/metadata/google.image.png'"></s:param>
            <s:param name="description" value="'Detalles y documentación técnica para usuarios y desarrolladores, ejemplos y ayuda'"></s:param>
            <s:param name="address" value="'Avenida de las universidades'"></s:param>
            <s:param name="locality" value="'Bilbao'"></s:param>
            <s:param name="region" value="'Bizkaia'"></s:param>
            <s:param name="code" value="'48003'"></s:param>
            <s:param name="country" value="'Spain'"></s:param>
        </s:include>

        <s:include value="/templates/metadata/metadata.twitter.jsp">
            <s:param name="alt" value="'Imagen de bienvenida de Anuncius'"></s:param>
            <s:param name="site" value="'@anuncius'"></s:param>
            <s:param name="title" value="'Anuncius - Documentación'"></s:param>
            <s:param name="description" value="'Detalles y documentación técnica para usuarios y desarrolladores, ejemplos y ayuda'"></s:param>
            <s:param name="author" value="'anuncius development team'"></s:param>
            <s:param name="image" value="'https://static.anunci.us/img/metadata/google.image.png'"></s:param>
        </s:include>

        <s:include value="/templates/metadata/metadata.google.jsp">
            <s:param name="name" value="'Anuncius - Documentación'"></s:param>
            <s:param name="description" value="'Detalles y documentación técnica para usuarios y desarrolladores, ejemplos y ayuda'"></s:param>
            <s:param name="image" value="'https://static.anunci.us/img/metadata/google.image.png'"></s:param>
        </s:include>

        <s:include value="/templates/css/minimum.css.jsp"/>
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
            <s:param name="normal" value="''" />
            <s:param name="bold" value="'Documentación'"/>
            <s:param name="image" value="'https://static.anunci.us/img/hero/docs/hero.jpg'" />
            <s:param name="block" value="''" />
        </s:include>
        <!-- HERO IMAGE END -->

        <section id="docs">
            <div class="container" style='padding-top: 5%;padding-bottom: 5%;'>
                <div class="row">
                    <div class="col-md-12">
                        <div>
                            <h2>Documentación técnica y ayuda</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>     

        <!-- FOOTER -->
        <s:include value="/templates/modules/footer/common.footer.jsp" />
        <!-- FOOTER END -->

        <s:include value="/templates/js/minimum.js.jsp"/>

    </body>
</html>