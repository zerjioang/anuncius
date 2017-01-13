<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<!doctype html>
<html lang="es">

    <head>
        <s:include value="/templates/metadata/metadata.generic.jsp">
            <s:param name="description" value="'Anuncius - La nueva forma de comprar online. Vende lo que ya no te interesa y publica miles de anuncios de forma gratuita y segura.'"></s:param>
            <s:param name="author" value="'Anuncius dev team'"></s:param>
        </s:include>
        
        <!-- PAGE TITLE -->
        <title>Anuncius, la compra inteligente</title>

        <s:include value="/templates/metadata/metadata.favicon.jsp" />

        <s:include value="/templates/metadata/metadata.opengraph.jsp">
            <s:param name="title" value="'Anuncius'"></s:param>
            <s:param name="sitename" value="'Anuncius'"></s:param>
            <s:param name="url" value="'https://anunci.us/'"></s:param>
            <s:param name="image" value="'https://static.anunci.us/img/metadata/google.image.png'"></s:param>
            <s:param name="description" value="'Anuncius - La nueva forma de comprar online. Vende lo que ya no te interesa y publica miles de anuncios de forma gratuita y segura.'"></s:param>
            <s:param name="address" value="'Avenida de las universidades'"></s:param>
            <s:param name="locality" value="'Bilbao'"></s:param>
            <s:param name="region" value="'Bizkaia'"></s:param>
            <s:param name="code" value="'48003'"></s:param>
            <s:param name="country" value="'Spain'"></s:param>
        </s:include>

        <s:include value="/templates/metadata/metadata.twitter.jsp">
            <s:param name="alt" value="'Imagen de bienvenida de Anuncius'"></s:param>
            <s:param name="site" value="'@anunci.us'"></s:param>
            <s:param name="title" value="'Anuncius - La compra inteligente'"></s:param>
            <s:param name="description" value="'Bienvenido a anuncius. La tienda online donde encontrarás lo que quieras.'"></s:param>
            <s:param name="author" value="'@anuncius.online'"></s:param>
            <s:param name="image" value="'https://static.anunci.us/img/metadata/twitter.image.png'"></s:param>
        </s:include>

        <s:include value="/templates/metadata/metadata.google.jsp">
            <s:param name="name" value="'Anuncius - La compra inteligente'"></s:param>
            <s:param name="description" value="'Bienvenido a anuncius. La tienda online donde encontrarás lo que quieras.'"></s:param>
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
        <s:include value="/templates/modules/header/header.section.jsp" />
        <!-- HEADER END -->

        <!-- HERO IMAGE -->
        <s:include value="/templates/modules/hero/hero.section.jsp">
            <s:param name="normal" value="'La compra '" />
            <s:param name="bold" value="'inteligente'"/>
            <s:param name="block" value="'featured'" />
            <s:param name="image" value="'https://static.anunci.us/img/hero/landing/hero.jpg'" />
        </s:include>
        <!-- HERO IMAGE END -->

        <!-- DIRECTORY FORM SECTION -->
        <s:include value="/templates/modules/search/search.section.jsp" />
        <!-- END -->

        <!-- FEATURED PROPERTIES -->
        <s:include value="/templates/modules/featured/featured.section.jsp" />
        <!-- FEATURED PROPERTIES END -->

        <%--
        <!-- ICON WITH TEXT BEGIN -->
        <s:include value="/templates/modules/features/features.section.jsp" />
        <!-- ICON WITH TEXT END -->
        --%>

        <%--
        <!-- CUSTOM SECTION  -->
        <s:include value="/templates/modules/details/details.section.jsp" />
        <!-- CUSTOM SECTION END  -->
        --%>

        <!-- RECENT LISTINGS -->
        <s:include value="/templates/modules/listing/listing.section.jsp"/>
        <!-- RECENT LISTINGS END -->

        <%-- 
        <!-- ETHICS SECTION -->
        <s:include value="/templates/modules/ethics/ethics.section.jsp" />
        <!-- ETHICS SECTION END -->
        
        <!-- AGENTS SECTION -->
        <s:include value="/templates/modules/agents/agents.section.jsp" />
        <!-- AGENTS SECTION END -->
        
        <!-- DONATIONS -->
        <s:include value="/templates/modules/donation/donation.section.jsp" />
        <!-- DONATIONS END -->
        --%>
        
        <!-- Modal -->
        <div class="modal fade" id="newProductLandingModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
            <div class="modal-dialog">
                <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header">
                        <button type="button" class="close" 
                           data-dismiss="modal">
                               <span aria-hidden="true">&times;</span>
                               <span class="sr-only">Cerrar</span>
                        </button>
                        <h4 class="modal-title" id="myModalLabel">
                            Publicar anuncio gratis en Anuncius
                        </h4>
                    </div>

                    <!-- Modal Body -->
                    <div class="modal-body">

                        <form role="form">
                          <div class="form-group">
                            <label for="exampleInputEmail1">Titulo del anuncio</label>
                              <input type="text" name="title" class="form-control"
                              id="exampleInputEmail1" placeholder="PS4 de segunda mano"/>
                          </div>
                          <div class="form-group">
                            <label for="exampleInputPassword1">Descripcion del anuncio</label>
                              <input type="text" name="description" class="form-control"
                                  id="description" placeholder="Vendo PS4 muy bien cuidada..."/>
                          </div>
                          <button type="submit" class="btn btn-default">Publicar anuncio</button>
                        </form>
                    </div>

                    <!-- Modal Footer -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default"
                                data-dismiss="modal">
                                    Cancelar publicación
                        </button>
                        <button type="button" class="btn btn-primary">
                            Guardar anuncio
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- FOOTER -->
        <s:include value="/templates/modules/footer/common.footer.jsp" />
        <!-- FOOTER END -->

        <s:include value="/templates/js/minimum.js.jsp"/>

    </body>
</html>