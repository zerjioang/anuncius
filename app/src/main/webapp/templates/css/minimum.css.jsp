<%@page import="anuncius.util.PlatformUtil"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@ taglib prefix="s" uri="/struts-tags" %>

<%
boolean minified = PlatformUtil.enableMinification();
if(PlatformUtil.isDevelopment()){
%>
    <%if(minified){%>
        <script src="dist/css/style.min.css"></script>
    <%}else{%>
        <link href="https://fonts.googleapis.com/css?family=Raleway:800" rel="stylesheet">
        
        <link rel="stylesheet" href="/theme/css/vendor/bootstrap/bootstrap.css">
        <link rel="stylesheet" href="/theme/css/vendor/cleanbar/clean.scrollbar.css">
        <link rel="stylesheet" href="/theme/css/vendor/magnific-popup/magnific-popup.css">

        <!--sweetalert-->
        <link rel="stylesheet" href="/theme/css/vendor/sweetalert/sweetalert.css">

        <!--loadawesome-->
        <link rel="stylesheet" href="/theme/css/vendor/loadawesome/loadawesome.css">

        <!-- select2 -->
        <link rel="stylesheet" href="/theme/css/vendor/select2/select2.css">

        <!-- main title font -->
        <link rel="stylesheet" href="/theme/css/vendor/typo/fonts.css">

        <!-- icon fonts -->
        <link rel="stylesheet" href="/theme/css/vendor/typo/fontawesome.css">
        <link rel="stylesheet" href="/theme/css/vendor/typo/ion-font.css">

        <!-- imagepicker -->
        <link rel="stylesheet" href="/theme/css/vendor/imagepicker/image-picker.css">
        <!-- other styles -->
        <link rel="stylesheet" href="/theme/css/template.css">
        <link rel="stylesheet" href="/theme/css/style.css">
        <link rel="stylesheet" href="/theme/css/custom.css">

        <%--
        <!-- remodal css -->
        <link async defer rel="stylesheet" href="/theme/vendor/remodal/remodal.css">
        <link async defer rel="stylesheet" href="/theme/vendor/remodal/remodal-default-theme.css">
        --%>

        <%-- other fonts 
        <link rel="stylesheet" href="/theme/css/glyphicon.css">
        <link rel="stylesheet" href="/theme/css/mic-font.css">
        --%>
        <% } %>
<% }else{ %>
    <% if(minified){%>
        <link rel="stylesheet" href="https://static.anunci.us/dist/css/style.min.css">
    <%}else{%>
        <link href="https://fonts.googleapis.com/css?family=Raleway:800" rel="stylesheet">

        <link rel="stylesheet" href="https://static.anunci.us/theme/css/vendor/bootstrap/bootstrap.css">
        <link rel="stylesheet" href="https://static.anunci.us/theme/css/vendor/cleanbar/clean.scrollbar.css">
        <link rel="stylesheet" href="https://static.anunci.us/theme/css/vendor/magnific-popup/magnific-popup.css">

        <!--sweetalert-->
        <link rel="stylesheet" href="https://static.anunci.us/theme/css/vendor/sweetalert/sweetalert.css">

        <!--loadawesome-->
        <link rel="stylesheet" href="https://static.anunci.us/theme/css/vendor/loadawesome/loadawesome.css">

        <!-- select2 -->
        <link rel="stylesheet" href="https://static.anunci.us/theme/css/vendor/select2/select2.css">

        <!-- main title font -->
        <link rel="stylesheet" href="https://static.anunci.us/theme/css/vendor/typo/fonts.css">

        <!-- icon fonts -->
        <link rel="stylesheet" href="https://static.anunci.us/theme/css/vendor/typo/fontawesome.css">
        <link rel="stylesheet" href="https://static.anunci.us/theme/css/vendor/typo/ion-font.css">
        
        <!-- imagepicker -->
        <link rel="stylesheet" href="https://static.anunci.us/theme/css/vendor/imagepicker/image-picker.css">

        <!-- other styles -->
        <link rel="stylesheet" href="https://static.anunci.us/theme/css/template.css">
        <link rel="stylesheet" href="https://static.anunci.us/theme/css/style.css">
        <link rel="stylesheet" href="https://static.anunci.us/theme/css/custom.css">
        <% } %>    
<% } %>