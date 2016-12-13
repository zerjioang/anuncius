<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <!-- PAGE TITLE -->
    <title>Musutruq | Tu tienda, y la de todos</title>

    <s:include value="/templates/common.favicon.jsp" />

    <!-- remodal css -->
    <link rel="stylesheet" href="vendor/remodal/remodal.css">
    <link rel="stylesheet" href="vendor/remodal/remodal-default-theme.css">

    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/clean.scrollbar.css">

    <!-- main title font -->
    <link href="https://fonts.googleapis.com/css?family=Fredoka+One" rel="stylesheet">
</head>

<body ng-app="landingApp" class="gl-realestate-template">

    <s:include value="/templates/modules/loader/loader.section.jsp"/>

    <!-- SIDE MENU-->
    <s:include value="/templates/modules/aside/login/login.section.jsp" />
    <!-- SIDE MENU END -->

    <!-- HEADER -->
    <s:include value="/templates/modules/header/header.section.jsp" />
    <!-- HEADER END -->

    <!-- HERO IMAGE -->
    <s:include value="/templates/modules/hero/hero.section.jsp"/>
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
    <!-- ETHICS SECTION END -->

    <%-- 
    <!-- AGENTS SECTION -->
    <s:include value="/templates/modules/agents/agents.section.jsp" />
    <!-- AGENTS SECTION END -->
    --%>

    <!-- DONATIONS -->
    <s:include value="/templates/modules/donation/donation.section.jsp" />
    <!-- DONATIONS END -->

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
    <script src="js/main.js"></script>
    <script src="js/scripts.js"></script>
    
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