<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<!doctype html>
<html lang="es">
    <head>
        <s:include value="/templates/metadata/metadata.generic.jsp">
            <s:param name="description" value="'Anuncius - La nueva forma de comprar online. Vende lo que ya no te interesa y publica miles de anuncios de forma gratuita y segura.'"></s:param>
            <s:param name="author" value="'anuncius development team'"></s:param>
        </s:include>
        
        <!-- PAGE TITLE -->
        <title>Anuncius - Explorar</title>

        <s:include value="/templates/metadata/metadata.favicon.jsp" />

        <s:include value="/templates/metadata/metadata.opengraph.jsp">
            <s:param name="title" value="'Anuncius'"></s:param>
            <s:param name="sitename" value="'Anuncius'"></s:param>
            <s:param name="url" value="'https://anunci.us/'"></s:param>
            <s:param name="image" value="'https://static.anunci.us/theme/images/metadata/google.image.png'"></s:param>
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
            <s:param name="title" value="'Anuncius - Tu ventana digital'"></s:param>
            <s:param name="description" value="'Bienvenido a anuncius. La tienda online donde encontrarás lo que quieras.'"></s:param>
            <s:param name="author" value="'anuncius development team'"></s:param>
            <s:param name="image" value="'https://static.anunci.us/theme/images/metadata/twitter.image.png'"></s:param>
        </s:include>

        <s:include value="/templates/metadata/metadata.google.jsp">
            <s:param name="name" value="'Anuncius - Tu ventana digital'"></s:param>
            <s:param name="description" value="'Bienvenido a anuncius. La tienda online donde encontrarás lo que quieras.'"></s:param>
            <s:param name="image" value="'https://static.anunci.us/theme/images/metadata/google.image.png'"></s:param>
        </s:include>

        <s:include value="/templates/css/minimum.css.jsp"/>
    </head>

    <body class="anuncius-body">

        <s:include value="/templates/modules/loader/loader.section.jsp"/>

        <!-- HEADER -->
        <s:include value="/templates/modules/header/header.section.jsp" />
        <!-- HEADER END -->

        <!-- SEARCH MAP -->
        <section class="gl-realestate-search-map gl-search-map-section anuncius-head-margin">
            <div id="map" style="max-height: 500px"></div>
        </section>
        <!-- SEARCH MAP END -->

        <!-- PAGE CONTETNT -->
        <section class="gl-page-content-section">
            <div class="container">
                <div class="gl-row">
                    <form action="" class="gl-contact-form" id="explore-form" style="display: -webkit-box;">
                        <input type="text" name="query" id="group-query" placeholder="Smart search" style="width: 80%;margin: 10px;">
                        <input type="submit" value="Buscar" class="gl-btn" id="explore-form-btn" style="margin: 10px;">
                    </form>
                </div>
                <div class="row">
                    <!-- PAGE CONTENT DETAILS -->
                    <div class="gl-page-content col-md-8 col-sm-8 col-xs-12">
                        <!-- SEARCH META -->
                        <div class="gl-search-meta-wrapper">
                            <p class="gl-search-number" id="found-article-count"></p>
                            <div class="gl-search-tags">
                                <div id="tags-block">
                                </div>
                            </div>

                            <%--
                            <div class="gl-search-sorting">
                                <span>Sort by</span>

                                <div class="gl-sorting-dropdown">
                                    <div class="gl-salary-sort">
                                        <select class="gl-sort-selection">
                                            <option value="date">Date</option>
                                            <option value="month">Month</option>
                                        </select>
                                    </div>

                                    <a href="#" class="gl-sorting-btn gl-grid-view">
                                        <i class="fa fa-list-ul"></i>
                                    </a>
                                </div>
                            </div>
                            --%>
                        </div>
                        <!-- SEARCH META END -->

                        <!-- SEARCH RESULT -->
                        <div class="gl-search-result-wrapper" id="search-results-block">
                        </div>
                        <!-- SEARCH RESULT END -->
                    </div>
                    <!-- PAGE CONTENT DETAILS END -->
                </div>
            </div>
        </section>
        <s:include value="/templates/modules/footer/common.footer.jsp" />
        <s:include value="/templates/js/minimum.js.jsp"/>
    </body>
</html>