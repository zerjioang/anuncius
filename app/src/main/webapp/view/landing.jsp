<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<!doctype html>
<html lang="es">

    <head>
        <s:include value="/templates/metadata/metadata.generic.jsp">
            <s:param name="description" value="'Anuncius - La nueva forma de comprar online. Publica un anuncio destacado y empieza a comprar y vender gratis de forma gratuita y segura.'"></s:param>
            <s:param name="author" value="'Anuncius dev team'"></s:param>
        </s:include>
        
        <!-- PAGE TITLE -->
        <title>Anuncius, Tu ventana digital</title>

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
            <s:param name="site" value="'@anunci.us'"></s:param>
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

        <!-- HERO IMAGE -->
        <s:include value="/templates/modules/hero/hero.section.jsp">
            <s:param name="normal" value="'Tu ventana '" />
            <s:param name="bold" value="'digital'"/>
            <s:param name="block" value="'featured'" />
            <s:param name="image" value="'https://static.anunci.us/theme/images/hero/landing/hero.jpg'" />
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

        <!-- ETHICS SECTION -->
        <s:include value="/templates/modules/ethics/ethics.section.jsp" />
        
        <%--
        <!-- AGENTS SECTION -->
        <s:include value="/templates/modules/agents/agents.section.jsp" />
        <!-- AGENTS SECTION END -->
        
        <!-- DONATIONS -->
        <s:include value="/templates/modules/donation/donation.section.jsp" />
        <!-- DONATIONS END -->
        --%>
        
        <s:include value="/templates/modules/stats/stats.section.jsp" />
        
        <!-- FOOTER -->
        <s:include value="/templates/modules/footer/common.footer.jsp" />
        <!-- FOOTER END -->

        <s:include value="/templates/js/minimum.js.jsp"/>

    </body>
</html>