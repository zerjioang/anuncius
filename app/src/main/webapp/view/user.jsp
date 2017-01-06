<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<!doctype html>
<html lang="es">

    <head>
        <s:include value="/templates/metadata/metadata.generic.jsp">
            <s:param name="description" value="'La revolución de las tiendas online'"></s:param>
            <s:param name="author" value="'Sergio'"></s:param>
        </s:include>
        
        <!-- PAGE TITLE -->
        <title>Anuncius | Perfil de usuario</title>

        <s:include value="/templates/metadata/metadata.favicon.jsp" />

        <s:include value="/templates/metadata/metadata.opengraph.jsp">
            <s:param name="title" value="'Anuncius'"></s:param>
            <s:param name="sitename" value="'Anuncius'"></s:param>
            <s:param name="url" value="'https://anunci.us/'"></s:param>
            <s:param name="image" value="'https://static.anunci.us/img/metadata/google.image.png'"></s:param>
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
            <s:param name="image" value="'https://static.anunci.us/img/metadata/google.image.png'"></s:param>
        </s:include>

        <s:include value="/templates/metadata/metadata.google.jsp">
            <s:param name="name" value="'Anuncius - La revolución de las tiendas online'"></s:param>
            <s:param name="description" value="'Bienvenido a anuncius. La tienda online donde encontrarás lo que quieras.'"></s:param>
            <s:param name="image" value="'https://static.anunci.us/img/metadata/google.image.png'"></s:param>
        </s:include>

        <s:include value="/templates/modules/css/minimum.css.jsp"/>
    </head>

    <body class="gl-agent-profile-template gl-realestate-template">

        <s:include value="/templates/modules/loader/loader.section.jsp"/>

        <!-- HEADER -->
        <s:include value="/templates/modules/header/header.section.jsp" />
        <!-- HEADER END -->

        <!-- PAGE CONTETNT -->
        <section class="gl-page-content-section">
            <div class="container">
                
                <!-- ASSIGNED PROPERTY -->
                <div class="row">
                    <div class="gl-page-contents-wrapper">
                        <h3 class="gl-content-title">Perfil de usuario</h3>
                    </div>
                </div>
                        <!-- END -->
                <div class="row">
                    <!-- PAGE CONTENT DETAILS -->
                    <div class="gl-page-content">

                        <!-- AGENT INFO -->
                        <div class="gl-page-contents-wrapper">
                            <div class="gl-agent-info-section col-md-12 col-sm-12 col-xs-12">
                                <div class="gl-agent-contact-wrapper">
                                    <div class="gl-agent-info-wrapper">
                                        <div class="gl-agent-img-wrapper">
                                            <img src="https://static.anunci.us/theme/images/product.png" alt="Imagen del usuario pepito" class="gl-lazy" >
                                        </div>

                                        <div class="gl-agent-infos">
                                            <ul>
                                                <li class="gl-agent-name">
                                                    <h3>Maria</h3>
                                                    <p>Mayormente vendedor</p>
                                                </li>

                                                <li><i class="ion-ios-telephone-outline"></i>082 856 310</li>
                                                <li><i class="ion-ios-email-outline"></i>info@mail.com</li>
                                                <li><i class="ion-link"></i>envato.com</li>
                                                <li class="gl-agent-social-icons">
                                                    <a href="#"><i class="fa fa-facebook"></i></a>
                                                    <a href="#"><i class="fa fa-tumblr"></i></a>
                                                    <a href="#"><i class="fa fa-twitter"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="gl-agent-contact-form">
                                        <div class="gl-agent-details">
                                            <p>Añadir aqui un par de lineas sobre la información o biografia de este vendedor. Ojo que esta información es indexable por Google</p>
                                        </div>
                                        <h3 class="gl-content-title">Contactar</h3>
                                        <form action="#">
                                            <input type="text" name="gl-agent-name" id="gl-agent-name" placeholder="Nombre" required>
                                            <input type="email" name="gl-agent-email" id="gl-agent-email" placeholder="Email">
                                            <textarea name="gl-agent-msg" id="gl-agent-msg" cols="30" rows="3" placeholder="Mensaje" required></textarea>
                                            <button type="submit" class="gl-btn">Enviar</button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <!-- END -->
                    </div>
                    <!-- PAGE CONTENT DETAILS END -->
                </div>
            </div>
        </section>
        
        <!-- SIDE MENU-->
        <s:include value="/templates/modules/aside/login/login.section.jsp" />
        <!-- SIDE MENU END -->
        
        <!-- PAGE CONTETNT END -->

        <!-- FOOTER -->
        <s:include value="/templates/modules/footer/common.footer.jsp" />
        <!-- FOOTER END -->

        <s:include value="/templates/modules/js/minimum.js.jsp"/>
    </body>
</html>

