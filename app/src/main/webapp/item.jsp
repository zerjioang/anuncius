<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<!DOCTYPE html>
<html lang="es">

    <head>
        <meta charset="utf-8">
        <!-- PAGE TITLE -->
        <title>Anuncius | La revolución de las tiendas online</title>

        <s:include value="/templates/modules/metadata/metadata.generic.jsp">
            <s:param name="description" value="'La revolución de las tiendas online'"></s:param>
            <s:param name="description" value="'Sergio'"></s:param>
        </s:include>

        <s:include value="/templates/modules/metadata/metadata.favicon.jsp" />

        <s:include value="/templates/modules/metadata/metadata.opengraph.jsp">
            <s:param name="title" value="'Anuncius'"></s:param>
            <s:param name="sitename" value="'Anuncius'"></s:param>
            <s:param name="url" value="'http://www.anuncius.org/'"></s:param>
            <s:param name="image" value="'http://www.anuncius.org/image.png'"></s:param>
            <s:param name="description" value="'La revolución de las tiendas online'"></s:param>
            <s:param name="address" value="'Avenida de las universidades'"></s:param>
            <s:param name="locality" value="'Bilbao'"></s:param>
            <s:param name="region" value="'Bizkaia'"></s:param>
            <s:param name="code" value="'48003'"></s:param>
            <s:param name="country" value="'Spain'"></s:param>
        </s:include>

        <s:include value="/templates/modules/metadata/metadata.twitter.jsp">
            <s:param name="alt" value="'Imagen de bienvenida de Anuncius'"></s:param>
            <s:param name="site" value="'@anuncius'"></s:param>
            <s:param name="title" value="'Anuncius - La revolución de las tiendas online'"></s:param>
            <s:param name="description" value="'Bienvenido a anuncius. La tienda online donde encontrarás lo que quieras.'"></s:param>
            <s:param name="author" value="'@zerjioang'"></s:param>
            <s:param name="image" value="'http://www.anuncius.org/image.jpg'"></s:param>
        </s:include>

        <s:include value="/templates/modules/metadata/metadata.google.jsp">
            <s:param name="name" value="'Anuncius - La revolución de las tiendas online'"></s:param>
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

    <body class="gl-realestate-template">

        <s:include value="/templates/modules/loader/loader.section.jsp"/>

        <!-- SIDE MENU-->
        <s:include value="/templates/modules/aside/login/login.section.jsp" />
        <!-- SIDE MENU END -->

        <!-- HEADER -->
        <s:include value="/templates/modules/header/header.section.jsp" />
        <!-- HEADER END -->

        <!-- PAGE HEADER -->
        <section class="gl-page-header-wrapper" style="background-image:url('images/product.png');">
            <div class="container">
                <div class="row">
                    <h1>Titulo del producto<span class="gl-item-status-label gl-sale-label">Nuevo</span></h1>
                    <p><i class="ion-ios-location-outline"></i>Lugar donde se vende</p>

                    <div class="gl-page-head-btn-wrapper">
                        <a data-remodal-target="modal-share" class="gl-btn gl-icon-btn">Guardar en favoritos</a>
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
                    <div class="gl-page-content col-md-8 col-sm-8 col-xs-12">
                        <!-- GALLERY -->
                        <div class="gl-profile-gallery">
                            <ul class="gl-gallery">
                                <li>
                                    <a href="images/product.png" class="gl-lightbox-img">
                                        <picture>
                                            <source media="(min-width: 768px)" srcset=images/product.png>
                                            <img alt="Category Image" srcset=images/product.png>
                                        </picture>
                                    </a>
                                </li>

                                <li>
                                    <a href="images/product.png" class="gl-lightbox-img">
                                        <picture>
                                            <source media="(min-width: 768px)" srcset=images/product.png>
                                            <img alt="Category Image" srcset=images/product.png>
                                        </picture>
                                    </a>
                                </li>

                                <li>
                                    <a href="images/product.png" class="gl-lightbox-img">
                                        <img src="images/product.png" alt="Profile Gallery Image" class="gl-lazy">
                                    </a>
                                </li>

                                <li>
                                    <a href="images/product.png" class="gl-lightbox-img">
                                        <img src="images/product.png" alt="Profile Gallery Image" class="gl-lazy">
                                    </a>
                                </li>

                                <li>
                                    <a href="images/product.png" class="gl-lightbox-img">
                                        <img src="images/product.png" alt="Profile Gallery Image" class="gl-lazy">
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <!-- END -->

                        <!-- ABOUT COMPANY -->
                        <div class="gl-page-contents-wrapper gl-about-company appear fadeIn" data-wow-duration=".5s" data-wow-delay=".5s">
                            <h3 class="gl-content-title">Descripción del artículo</h3>
                            <p align='justify'>
                                On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bounds to ensure On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the
                                <br>
                                <br>
                                of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bounds to ensure blame belongs to those who fail in their duty through weakness of will, which is the same
                            </p>
                        </div>
                        <!-- END -->

                        <!-- PROPERTY FEATURE -->
                        <div class="gl-page-contents-wrapper gl-property-feature-wrapper appear fadeIn" data-wow-duration="1s" data-wow-delay=".3s">
                            <h3 class="gl-content-title">Caracteristicas</h3>

                            <div class="gl-property-features">
                                <ul>
                                    <li><i class="ion-checkmark"></i>Balcony</li>
                                    <li><i class="ion-checkmark"></i>Balcony</li>
                                </ul>
                            </div>
                        </div>
                        <!-- END -->

                        <!-- Floor Plan -->
                        <div class="gl-page-contents-wrapper gl-floor-plan-wrapper appear fadeIn" data-wow-duration=".5s" data-wow-delay=".5s">
                            <h3 class="gl-content-title">Floor plan</h3>

                            <div class="gl-floor-plan-accordion">
                                <div class="panel-group" id="gl-floorplan" role="tablist" aria-multiselectable="true">
                                    <!-- FLoor plan item -->
                                    <div class="panel panel-default gl-floorplan-item">
                                        <!-- header -->
                                        <div class="gl-floorplan-item-wrapper panel-heading" role="tab" id="gl-floorplan-1">
                                            <a role="button" data-toggle="collapse" data-parent="#gl-floorplan" href="#gl-floorplan-1-Details" aria-expanded="true" aria-controls="gl-floorplan-1-Details">
                                                <h3>Floor Plan A</h3>
                                                <span class="gl-toggle-symbol">
                                                    <i class="ion-ios-plus-empty"></i>
                                                </span>
                                            </a>
                                        </div>
                                        <!-- END -->

                                        <!-- Details -->
                                        <div id="gl-floorplan-1-Details" class="panel-collapse collapse gl-floorplan-details" role="tabpanel" aria-labelledby="gl-floorplanOne">
                                            <div class="panel-body">
                                                <img src="images/product.png" alt="Floor Plan" class="gl-lazy">
                                            </div>
                                        </div>
                                        <!-- END -->
                                    </div>
                                    <!-- End -->

                                    <!-- FLoor plan item -->
                                    <div class="panel panel-default gl-floorplan-item">
                                        <!-- header -->
                                        <div class="gl-floorplan-item-wrapper panel-heading" role="tab" id="gl-floorplan-2">
                                            <a role="button" data-toggle="collapse" data-parent="#gl-floorplan" href="#gl-floorplan-2-Details" aria-expanded="true" aria-controls="gl-floorplan-2-Details">
                                                <h3>Floor Plan B</h3>
                                                <span class="gl-toggle-symbol">
                                                    <i class="ion-ios-plus-empty"></i>
                                                </span>
                                            </a>
                                        </div>
                                        <!-- END -->

                                        <!-- Details -->
                                        <div id="gl-floorplan-2-Details" class="panel-collapse collapse gl-floorplan-details" role="tabpanel" aria-labelledby="gl-floorplantwo">
                                            <div class="panel-body">
                                                <img src="images/product.png" alt="Floor Plan" class="gl-lazy">
                                            </div>
                                        </div>
                                        <!-- END -->
                                    </div>
                                    <!-- End -->

                                    <!-- FLoor plan item -->
                                    <div class="panel panel-default gl-floorplan-item">
                                        <!-- header -->
                                        <div class="gl-floorplan-item-wrapper panel-heading" role="tab" id="gl-floorplan-3">
                                            <a role="button" data-toggle="collapse" data-parent="#gl-floorplan" href="#gl-floorplan-3-Details" aria-expanded="true" aria-controls="gl-floorplan-3-Details">
                                                <h3>Floor Plan C</h3>
                                                <span class="gl-toggle-symbol">
                                                    <i class="ion-ios-plus-empty"></i>
                                                </span>
                                            </a>
                                        </div>
                                        <!-- END -->

                                        <!-- Details -->
                                        <div id="gl-floorplan-3-Details" class="panel-collapse collapse gl-floorplan-details" role="tabpanel" aria-labelledby="gl-floorplanthree">
                                            <div class="panel-body">
                                                <img src="images/product.png" alt="Floor Plan" class="gl-lazy">
                                            </div>
                                        </div>
                                        <!-- END -->
                                    </div>
                                    <!-- End -->
                                </div>

                            </div>
                        </div>
                        <!-- END -->

                        <!-- PROPERTY FEATURE -->
                        <div class="gl-page-contents-wrapper gl-location-map-wrapper appear fadeIn" data-wow-duration=".5s" data-wow-delay=".3s">
                            <h3 class="gl-content-title">Lugar del articulo</h3>

                            <div class="gl-location-map">
                                <div id="gl-map-small"></div>
                            </div>
                        </div>
                        <!-- END -->

                        <!-- Agent Form -->
                        <div class="gl-page-contents-wrapper gl-agent-contact-wrapper appear fadeIn" data-wow-duration=".5s" data-wow-delay=".5s">
                            <div class="gl-agent-info-wrapper gl-same-height">
                                <div class="gl-agent-img-wrapper">
                                    <img src="images/product.png" alt="Agent" class="gl-lazy">
                                </div>

                                <div class="gl-agent-infos">
                                    <ul>
                                        <li class="gl-agent-name">
                                            <h3><a href="agent_profile.html">Nombre vendedor</a></h3>
                                            <p>Buying Agent</p>
                                        </li>

                                        <li><i class="ion-ios-telephone-outline"></i>082 856 310</li>
                                        <li><i class="ion-ios-email-outline"></i>info@mail.com</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="gl-agent-contact-form gl-same-height">
                                <h3 class="gl-content-title">Contact Agent</h3>
                                <form action="#">
                                    <input type="text" name="gl-agent-name" id="gl-agent-name" placeholder="Name">
                                    <input type="email" name="gl-agent-email" id="gl-agent-email" placeholder="Email">
                                    <textarea name="gl-agent-msg" id="gl-agent-msg" cols="30" rows="3" placeholder="Message"></textarea>
                                    <button type="submit" class="gl-btn">Send</button>
                                </form>
                            </div>
                        </div>
                        <!-- END -->
                    </div>
                    <!-- PAGE CONTENT DETAILS END -->

                    <!-- SIDEBAR -->
                    <div class="gl-sidebar gl-page-sidebar col-md-4 col-sm-4 col-xs-12">
                        <!-- OVERVIEW WIDGET -->
                        <div class="gl-sidebar-widget gl-overview-widget">
                            <div class="gl-overview-wrapper">
                                <h3>Overview</h3>
                                <ul>
                                    <li>Baths<span>2</span></li>
                                    <li>Beds<span>3</span></li>
                                    <li>Area<span>2000 sqft</span></li>
                                    <li>Type<span>Rent</span></li>
                                </ul>
                            </div>

                            <div class="gl-overview-btns-wrapper">
                                <span class="gl-overview-price">$400</span>
                                <a href="#" class="gl-overview-btns"><i class="ion-ios-heart-outline"></i></a>
                                <a href="#" class="gl-overview-btns">
                                    <div class="gl-compare-btn">
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <!-- END -->

                        <!-- RELATED PROPERTIES WIDGET -->
                        <div class="gl-sidebar-widget gl-related-widget">
                            <h3 class="gl-sidebar-title">Artículos relacionados</h3>

                            <!-- FEATURED ITEMS -->
                            <div class="gl-featured-items">
                                <div class="gl-feat-items-img-wrapper">
                                    <picture>
                                        <source media="(min-width: 768px)" srcset=images/product.png>
                                        <img alt="Category Image" srcset=images/product.png>
                                    </picture>

                                    <span class="gl-price-tag">10€</span>
                                </div>

                                <div class="gl-feat-item-details">
                                    <span class="gl-item-status-label gl-sold-label">Sold</span>

                                    <h3>
                                        <a href="#">Lake Cafe</a>
                                    </h3>
                                    <div class="gl-item-location">
                                        <i class="ion-ios-location-outline"></i>
                                        <span>Road 3, West Portland, USA</span>
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

                                        <li>
                                            <a href="#" class="gl-add-compare">
                                                <div class="gl-compare-btn">
                                                    <span class="icon-bar"></span>
                                                    <span class="icon-bar"></span>
                                                    <span class="icon-bar"></span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- END -->

                            <!-- FEATURED ITEMS -->
                            <div class="gl-featured-items">
                                <div class="gl-feat-items-img-wrapper">
                                    <picture>
                                        <source media="(min-width: 768px)" srcset=images/real-estate-img-5-lg.jpg>
                                        <img alt="Category Image" srcset=images/real-estate-img-5.jpg>
                                    </picture>

                                    <span class="gl-price-tag">$300</span>
                                </div>

                                <div class="gl-feat-item-details">
                                    <span class="gl-item-status-label gl-rent-label">Rent</span>

                                    <h3>
                                        <a href="#">Lake Cafe</a>
                                    </h3>
                                    <div class="gl-item-location">
                                        <i class="ion-ios-location-outline"></i>
                                        <span>Road 3, West Portland, USA</span>
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

                                        <li>
                                            <a href="#" class="gl-add-compare">
                                                <div class="gl-compare-btn">
                                                    <span class="icon-bar"></span>
                                                    <span class="icon-bar"></span>
                                                    <span class="icon-bar"></span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- END -->
                        </div>
                        <!-- END -->
                    </div>
                    <!-- SIDEBAR END -->
                </div>
            </div>
        </section>
        <!-- PAGE CONTETNT END -->

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