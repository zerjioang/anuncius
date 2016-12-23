<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<!DOCTYPE html>
<html lang="es">

<head>
    <!-- PAGE TITLE -->
    <title>Anuncius | La compra inteligente</title>
    
    <s:include value="/templates/modules/metadata/metadata.generic.jsp">
        <s:param name="description" value="'La compra inteligente'"></s:param>
        <s:param name="author" value="'Sergioó'"></s:param>
    </s:include>

    <s:include value="/templates/modules/metadata/metadata.favicon.jsp" />
    
    <s:include value="/templates/modules/metadata/metadata.opengraph.jsp">
        <s:param name="title" value="'Anuncius'"></s:param>
        <s:param name="sitename" value="'Anuncius'"></s:param>
        <s:param name="url" value="'http://www.anuncius.org/'"></s:param>
        <s:param name="image" value="'http://www.anuncius.org/image.png'"></s:param>
        <s:param name="description" value="'La compra inteligente'"></s:param>
        <s:param name="address" value="'Avenida de las universidades'"></s:param>
        <s:param name="locality" value="'Bilbao'"></s:param>
        <s:param name="region" value="'Bizkaia'"></s:param>
        <s:param name="code" value="'48003'"></s:param>
        <s:param name="country" value="'Spain'"></s:param>
    </s:include>
    
    <s:include value="/templates/modules/metadata/metadata.twitter.jsp">
        <s:param name="alt" value="'Imagen de bienvenida de Anuncius'"></s:param>
        <s:param name="site" value="'@anuncius'"></s:param>
        <s:param name="title" value="'Anuncius - La compra inteligente'"></s:param>
        <s:param name="description" value="'Bienvenido a anuncius. La tienda online donde encontrarás lo que quieras.'"></s:param>
        <s:param name="author" value="'@zerjioang'"></s:param>
        <s:param name="image" value="'http://www.anuncius.org/image.jpg'"></s:param>
    </s:include>
    
    <s:include value="/templates/modules/metadata/metadata.google.jsp">
        <s:param name="name" value="'Anuncius - La compra inteligente'"></s:param>
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

    <!-- HERO IMAGE -->
    <s:include value="/templates/modules/hero/hero.section.jsp">
        <s:param name="normal" value="'Tu compra '" />
        <s:param name="bold" value="'inteligente'"/>
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