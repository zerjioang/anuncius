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
        <title>Anuncius | Perfil de usuario</title>

        <s:include value="/templates/metadata/metadata.favicon.jsp" />

        <s:include value="/templates/metadata/metadata.opengraph.jsp">
            <s:param name="title" value="'Anuncius'"></s:param>
            <s:param name="sitename" value="'Anuncius'"></s:param>
            <s:param name="url" value="'https://www.anunci.us/'"></s:param>
            <s:param name="image" value="'https://www.anunci.us/image.png'"></s:param>
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
            <s:param name="image" value="'https://www.anunci.us/image.jpg'"></s:param>
        </s:include>

        <s:include value="/templates/metadata/metadata.google.jsp">
            <s:param name="name" value="'Anuncius - La revolución de las tiendas online'"></s:param>
            <s:param name="description" value="'Bienvenido a anuncius. La tienda online donde encontrarás lo que quieras.'"></s:param>
            <s:param name="image" value="'https://www.anunci.us/image.jpg'"></s:param>
        </s:include>

        <s:include value="/templates/modules/css/minimum.css.jsp"/>
    </head>

    <body class="gl-agent-profile-template gl-realestate-template">
        
        <s:include value="/templates/modules/loader/loader.section.jsp"/>

        <!-- SIDE MENU-->
        <s:include value="/templates/modules/aside/login/login.section.jsp" />
        <!-- SIDE MENU END -->

        <!-- HEADER -->
        <s:include value="/templates/modules/header/header.section.jsp" />
        <!-- HEADER END -->
        
        <!-- PAGE CONTETNT -->
        <section class="gl-page-content-section">
            <div class="container">
                <div class="row">
                    <!-- PAGE CONTENT DETAILS -->
                    <div class="gl-page-content">

                        <!-- AGENT INFO -->
                        <div class="gl-page-contents-wrapper">
                            <div class="gl-agent-info-section col-md-8 col-sm-8 col-xs-12">
                                <div class="gl-agent-contact-wrapper">
                                    <div class="gl-agent-info-wrapper">
                                        <div class="gl-agent-img-wrapper">
                                             <amp-img
                                                src="https://static.anunci.us/theme/images/product.png"
                                                alt="Imagen de perfil de Maria"
                                                class="gl-lazy"
                                                width=600
                                                height=400
                                                layout=responsive>
                                            </amp-img>
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

                            <div class="gl-agent-featured-property col-md-4 col-sm-4 col-xs-12">
                                <h3 class="gl-content-title">Artículos TOP</h3>
                                <!-- FEATURED ITEMS -->
                                <div class="gl-featured-items">
                                    <div class="gl-feat-items-img-wrapper">
                                        <picture>
                                            <amp-img
                                                src="https://static.anunci.us/theme/images/product.png"
                                                alt="Imagen del producto"
                                                class="gl-lazy"
                                                width=600
                                                height=400
                                                layout=responsive>
                                            </amp-img>
                                        </picture>

                                        <span class="gl-price-tag">10€</span>
                                    </div>

                                    <div class="gl-feat-item-details">
                                        <span class="gl-item-status-label gl-sale-label">En venta</span>

                                        <h3>
                                            <a href="#">Nombre del item</a>
                                        </h3>
                                        <div class="gl-item-location">
                                            <i class="ion-ios-location-outline"></i>
                                            <span>Bilbao, España</span>
                                        </div>
                                    </div>

                                    <div class="gl-feat-item-metas">
                                        <ul class="gl-feature-info">
                                            <li>Beds<span>3</span>
                                            </li>
                                            <li>Baths<span>2</span>
                                            </li>
                                            <li>Area<span>900 sqft</span>
                                            </li>
                                        </ul>

                                        <ul class="gl-wishlist-compare-wrapper">
                                            <li>
                                                <a href="#" class="gl-add-wishlist">
                                                    <i class="fa fa-heart-o"></i>
                                                </a>
                                            </li>
                                            <%--
                                            <li>
                                                <a href="#" class="gl-add-compare">
                                                    <div class="gl-compare-btn">
                                                        <span class="icon-bar"></span>
                                                        <span class="icon-bar"></span>
                                                        <span class="icon-bar"></span>
                                                    </div>
                                                </a>
                                            </li>
                                            --%>
                                        </ul>
                                    </div>
                                </div>
                                <!-- END -->
                            </div>
                        </div>
                        <!-- END -->

                        <!-- ASSIGNED PROPERTY -->
                        <div class="gl-page-contents-wrapper">
                            <h3 class="gl-content-title">Artículos publicados</h3>

                            <div class="gl-assigned-properties-wrapper">
                                <!-- FEATURED ITEMS -->
                                <div class="gl-featured-items col-md-3 col-sm-6 col-xs-12  appear fadeIn" data-wow-duration=".5s" data-wow-delay=".3s">
                                    <div class="gl-feat-items-img-wrapper">
                                        <picture>
                                            <amp-img
                                                src="https://static.anunci.us/theme/images/product.png"
                                                alt="Imagen del producto"
                                                class="gl-lazy"
                                                width=600
                                                height=400
                                                layout=responsive>
                                            </amp-img>
                                        </picture>

                                        <span class="gl-price-tag">12€</span>
                                    </div>

                                    <div class="gl-feat-item-details">
                                        <span class="gl-item-status-label gl-sale-label">En venta</span>

                                        <h3>
                                            <a href="#">Nombre artículo</a>
                                        </h3>
                                        <div class="gl-item-location">
                                            <i class="ion-ios-location-outline"></i>
                                            <span>Bilbao, España</span>
                                        </div>
                                    </div>
                                    <div class="gl-feat-item-metas">
                                        <ul class="gl-feature-info">
                                            <li>Beds<span>3</span>
                                            </li>
                                            <li>Baths<span>2</span>
                                            </li>
                                            <li>Area<span>900 sqft</span>
                                            </li>
                                        </ul>
                                        
                                        <ul class="gl-wishlist-compare-wrapper">
                                            <li>
                                                <a href="#" class="gl-add-wishlist">
                                                    <i class="fa fa-heart-o"></i>
                                                </a>
                                            </li>
                                            <%--
                                            <li>
                                                <a href="#" class="gl-add-compare">
                                                    <div class="gl-compare-btn">
                                                        <span class="icon-bar"></span>
                                                        <span class="icon-bar"></span>
                                                        <span class="icon-bar"></span>
                                                    </div>
                                                </a>
                                            </li>
                                            --%>
                                        </ul>
                                    </div>
                                </div>
                                <!-- END -->
                            </div>
                        </div>
                        <!-- END -->
                    </div>
                    <!-- PAGE CONTENT DETAILS END -->
                </div>
            </div>
        </section>
        <!-- PAGE CONTETNT END -->

        <!-- FOOTER -->
        <s:include value="/templates/modules/footer/common.footer.jsp" />
        <!-- FOOTER END -->

        <s:include value="/templates/modules/js/minimum.js.jsp"/>
    </body>
</html>

