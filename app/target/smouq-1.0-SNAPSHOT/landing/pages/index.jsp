<%@ taglib prefix="template" tagdir="/WEB-INF/tags" %>
<%@ taglib prefix="s" uri="/struts-tags" %>

<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<!doctype html>
<html class="no-js" lang="en-US">

<head>
    <s:include value="/templates/common.meta.jsp">
        <s:param name="description" value="'Smouq is the professional communication way'" />
        <s:param name="title" value="'Smouq | The professional communication way'" />
    </s:include>
    
    <s:include value="/templates/common.rich.meta.jsp"/>
    
    <s:include value="/templates/common.favicon.jsp">
        <s:param name="context" value="'landing/favicon/'" />
    </s:include>

    <s:include value="/templates/landing.head.jsp" />
    <script src="landing/js/vendor/angular.min.js"></script>
</head>
<body>
    <div ng-app="smouq_landing" ng-controller="landingController">
        <!--[if lt IE 8]>
            <p class="browserupgrade">
                You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.
            </p>
        <![endif]-->
        
        <div ng-view></div>

        <s:include value="/templates/dark.footer.jsp" />

        <!-- Scroll to Top
        ======================= -->
        <a href="#" id="scroll-to-top">Scroll to Top</a>
    </div>

    <!-- Scripts -->
    <s:include value="/templates/common.scripts.jsp" />
    <script src="landing/js/angular/controller.js"></script>
</body>

</html>