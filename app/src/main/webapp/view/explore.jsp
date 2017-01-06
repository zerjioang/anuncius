<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<!doctype html>
<html lang="es">

    <head>
        <s:include value="/templates/metadata/metadata.generic.jsp">
            <s:param name="description" value="'Anuncius - La nueva forma de comprar online. Vende lo que ya no te interesa y publica miles de anuncios de forma gratuita y segura.'"></s:param>
            <s:param name="author" value="'Sergio'"></s:param>
        </s:include>
        
        <!-- PAGE TITLE -->
        <title>Anuncius | La compra inteligente</title>

        <s:include value="/templates/metadata/metadata.favicon.jsp" />

        <s:include value="/templates/metadata/metadata.opengraph.jsp">
            <s:param name="title" value="'Anuncius'"></s:param>
            <s:param name="sitename" value="'Anuncius'"></s:param>
            <s:param name="url" value="'https://anunci.us/'"></s:param>
            <s:param name="image" value="'https://static.anunci.us/image/image.png'"></s:param>
            <s:param name="description" value="'Anuncius - La nueva forma de comprar online. Vende lo que ya no te interesa y publica miles de anuncios de forma gratuita y segura.'"></s:param>
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
            <s:param name="image" value="'https://static.anunci.us/image/image.jpg'"></s:param>
        </s:include>

        <s:include value="/templates/metadata/metadata.google.jsp">
            <s:param name="name" value="'Anuncius - La compra inteligente'"></s:param>
            <s:param name="description" value="'Bienvenido a anuncius. La tienda online donde encontrarás lo que quieras.'"></s:param>
            <s:param name="image" value="'https://static.anunci.us/image/image.jpg'"></s:param>
        </s:include>

        <s:include value="/templates/modules/css/minimum.css.jsp"/>
        
        <link rel="stylesheet" href="https://openlayers.org/en/v3.20.1/css/ol.css" type="text/css">
    </head>

    <body class="gl-realestate-template">

        <s:include value="/templates/modules/loader/loader.section.jsp"/>
        
        <!-- SIDE MENU-->
        <s:include value="/templates/modules/aside/login/login.section.jsp" />
        <!-- SIDE MENU END -->

        <!-- HEADER -->
        <s:include value="/templates/modules/header/header.section.jsp" />
        <!-- HEADER END -->

        <!-- SEARCH MAP -->
        <section class="gl-realestate-search-map gl-search-map-section">
            <div id="map" style="max-height: 500px"></div>
        </section>
        <!-- SEARCH MAP END -->

        <!-- PAGE CONTETNT -->
        <section class="gl-page-content-section">
            <div class="container">
                <div class="row">
                    <!-- PAGE CONTENT DETAILS -->
                    <div class="gl-page-content col-md-8 col-sm-8 col-xs-12">
                        <!-- SEARCH META -->
                        <div class="gl-search-meta-wrapper">
                            <p class="gl-search-number">1 Artículo encontrado</p>
                            <div class="gl-search-tags">
                                <a href="/item/1" class="gl-tag-btn gl-duplex">tag 1</a>
                                <a href="/item/1" class="gl-tag-btn gl-resort">tag 2</a>
                                <a href="/item/1" class="gl-tag-btn gl-villa">tag 3</a>
                            </div>

                            <div class="gl-search-sorting">
                                <span>Sort by</span>

                                <div class="gl-sorting-dropdown">
                                    <div class="gl-salary-sort">
                                        <select class="gl-sort-selection">
                                            <option value="date">Date</option>
                                            <option value="month">Month</option>
                                        </select>
                                    </div>

                                    <a href="/item/1" class="gl-sorting-btn gl-grid-view">
                                        <i class="fa fa-list-ul"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <!-- SEARCH META END -->

                        <!-- SEARCH RESULT -->
                        <div class="gl-search-result-wrapper">
                            <!-- FEATURED ITEMS -->
                            <div class="gl-featured-items gl-alt-search">
                                <div class="gl-feat-items-img-wrapper">
                                    <picture>
                                        <source media="(min-width: 768px)" srcset=https://static.anunci.us/theme/images/product.png>
                                        <img alt="Imagen del articulo" srcset=https://static.anunci.us/theme/images/product.png>
                                    </picture>

                                    <span class="gl-price-tag">$3,000</span>
                                </div>

                                <div class="gl-feat-details-meta">
                                    <div class="gl-feat-item-details">
                                        <h3>
                                            <a href="/item/1">Nombre del articulo</a>
                                        </h3>
                                        <div class="gl-item-location">
                                            <i class="ion-ios-location-outline"></i>
                                            <span>Road 3, West Portland, USA</span>
                                        </div>

                                        <span class="gl-item-status-label gl-sold-label">Sold</span>
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
                                                <a href="/item/1" class="gl-add-wishlist">
                                                    <i class="fa fa-heart-o"></i>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="/item/1" class="gl-add-compare">
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
                            </div>
                            <!-- END -->
                        </div>
                        <!-- SEARCH RESULT END -->
                    </div>
                    <!-- PAGE CONTENT DETAILS END -->

                    <!-- SIDEBAR -->
                    <div class="gl-sidebar gl-page-sidebar col-md-4 col-sm-4 col-xs-12">
                        <!-- SIDEBAR WIDGET -->
                        <div class="gl-sidebar-widget gl-search-filter-widget">
                            <h3 class="gl-sidebar-title">Búsqueda avanzada</h3>

                            <form action="/item/1">
                                <div class="gl-filter-options gl-search-keyword">
                                    <input type="text" name="gl-search-keyword" id="gl-search-keyword" placeholder="Keywords">
                                </div>

                                <div class="gl-filter-options gl-search-location">
                                    <input type="text" name="location" id="gl-search-location" placeholder="Lugar">
                                </div>

                                <div class="gl-range-wrapper gl-job-filter-options">
                                    <span class="gl-filter-inp-title">Precio</span>

                                    <span class="gl-range-value"></span>
                                    <div class="gl-range-slider">
                                        <input type="text" id="gl-search-range" name="price"/>
                                    </div>
                                </div>

                                <div class="gl-search-category gl-filter-options">
                                    <select class="gl--search-category-selection">
                                        <option>&nbsp;</option>
                                        <option value="new">Nuevo</option>
                                        <option value="used">Usado</option>
                                        <option value="defective">Defectuoso</option>
                                        <option value="broken">Roto</option>
                                    </select>
                                </div>

                                <div class="gl-filter-options">
                                    <input type="text" name="smart" id="gl-bed" placeholder="Smart search">
                                </div>
                            </form>
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

        <s:include value="/templates/modules/js/minimum.js.jsp"/>
        
        <!-- The line below is only needed for old environments like Internet Explorer and Android 4.x -->
        <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=requestAnimationFrame,Element.prototype.classList,URL"></script>
        <script src="https://openlayers.org/en/v3.20.1/build/ol.js"></script>

        <%--
        <!-- Google Map -->
        <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBF0FPDHlurGkDKua7PfZjpD2fr2rQsRw0&libraries=places"></script>

        <script src="../js/infobubble-richmarker.js+realestate-map,_google-searchmap-init.js+google-autocomplete.js.pagespeed.jc.EN7wnMfBGq.js">
        --%>
        
        <script>
        var map = /*new ol.Map({
          interactions: ol.interaction.defaults().extend([
            new ol.interaction.DragRotateAndZoom()
          ]),*/
        new ol.Map({
          interactions: ol.interaction.defaults({mouseWheelZoom:false}),
          layers: [
            new ol.layer.Tile({
              source: new ol.source.OSM()
            })
          ],
          target: 'map',
          view: new ol.View({
            center: [0, 0],
            zoom: 0
          })
        });
        var lat = 43.270675;
        var long = -2.937939;
        console.log("Long: " + long + " Lat: " + lat);
        map.getView().setCenter(ol.proj.transform([long, lat], 'EPSG:4326', 'EPSG:3857'));
        map.getView().setZoom(13);
      </script>
      
    </body>
</html>