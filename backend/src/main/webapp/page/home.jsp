<%@ taglib prefix="template" tagdir="/WEB-INF/tags" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html>
<html lang="en">
    <head>
        <s:include value="/templates/common.meta.jsp">
            <s:param name="description" value="'Encuentra los mejores bares, restaurantes, tiendas y eventos que están a tu alrededor'" />
        </s:include>
        <s:include value="/templates/common.rich.meta.jsp"/>
        <title>Ebengrid - Encuentra tus mejores lugares</title>
        <s:include value="/templates/common.header.jsp"/>
        <style>
            .border-btn{
                padding:4px 10px 4px;
                margin: 2px;
                border: white;
                border-radius: 4px;
                border-style: solid;
                margin: 2px;
                border-width: 2px;
            }
            .white-btn{
                background-color: white;
                padding:4px 10px 4px;
                margin: 2px;
                border: white;
                border-radius: 4px;
                border-style: solid;
                margin: 2px;
                border-width: 2px;
            }
        </style>
    </head>
    <body>
        <!--[if lte IE 8]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a>.</p>
        <![endif]-->
        <s:include value="/templates/main.headbar.jsp" />
        <s:include value="/templates/common.subheader.jsp" />
        
        <div id='position'>
            <s:include value="/templates/breadcrumb.jsp" />
            <s:include value="/template/search.bar.jsp" />
        </div>
        
        <div class="container margin_60_30">
            <s:include value="/template/demo.body.jsp" />
        </div>
        
        <s:include value="/templates/categories.list.horizontal.jsp" /> 
        <s:include value="/templates/common.footer.jsp"/>
        
        <!-- COMMON SCRIPTS -->
        <script src="js/jquery-2.2.4.min.js"></script>

        <!-- APP SCRIPTS -->
        <script src="js/common_scripts_min.js"></script>
        <script src="assets/validate.js"></script>
        <script src="js/functions.js"></script>

        <!-- SPECIFIC SCRIPTS -->
        <script src="js/raphael-2.1.4.min.js"></script>
        <script src="js/justgage.min.js"></script>
        <script src="js/score.js"></script>
        <script src="js/ion.rangeSlider.min.js"></script>
        <script src="js/switchery.min.js"></script>

        <!-- Fixed sidebar + Input Range + Carousel + Switch-->
        <script src="js/theia-sticky-sidebar.min.js"></script>
        <script src="js/carrousel.js"></script>
    </body>
</html>
