<%@page import="anuncius.util.PlatformUtil"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@ taglib prefix="s" uri="/struts-tags" %>

<%
boolean minified = PlatformUtil.enableMinification();
if(PlatformUtil.isDevelopment()){
%>
    <%if(minified){%>
        <script src="theme/dist/app/css/style.min.css"></script>
    <%}else{%>
        <link href="https://fonts.googleapis.com/css?family=Raleway:800" rel="stylesheet">
        
        <link rel="stylesheet" href="/theme/css/vendor/bootstrap/bootstrap.css">
        <link rel="stylesheet" href="/theme/css/vendor/magnific-popup/magnific-popup.css">

        <!--sweetalert-->
        <link rel="stylesheet" href="/theme/css/vendor/sweetalert/sweetalert.css">

        <!--loadawesome-->
        <link rel="stylesheet" href="/theme/css/vendor/loadawesome/loadawesome.css">

        <!-- main title font -->
        <link rel="stylesheet" href="/theme/css/vendor/typo/fonts.css">

        <!-- icon fonts -->
        <link rel="stylesheet" href="/theme/css/vendor/typo/fontawesome.css">
        <link rel="stylesheet" href="/theme/css/vendor/typo/ion-font.css">

        <!-- imagepicker -->
        <link rel="stylesheet" href="/theme/css/vendor/imagepicker/image-picker.css">
        
        <!-- maps -->
        <link rel="stylesheet" href="/theme/css/vendor/ol//3.20.1/ol.css" type="text/css">
        
        <!-- other styles -->
        <link rel="stylesheet" href="/theme/css/template.css">
        <link rel="stylesheet" href="/theme/css/style.css">
        <link rel="stylesheet" href="/theme/css/custom.css">

        <style>::-webkit-scrollbar{width:8px;background-color:rgba(0,0,0,0);-webkit-border-radius:100px}::-webkit-scrollbar:hover{background-color:rgba(0,0,0,.09)}::-webkit-scrollbar-thumb:vertical{background:rgba(0,0,0,.5);-webkit-border-radius:100px}::-webkit-scrollbar-thumb:vertical:active{background:rgba(0,0,0,.61);-webkit-border-radius:100px}</style>

        <%-- other fonts 
        <link rel="stylesheet" href="/theme/css/glyphicon.css">
        <link rel="stylesheet" href="/theme/css/mic-font.css">
        --%>
        <% } %>
<% }else{ %>
    <% if(minified){%>
        <link type="text/css" rel="stylesheet" href="https://static.anunci.us/theme/dist/app/css/style.min.css">
    <%}else{%>
        <link type="text/css" href="https://fonts.googleapis.com/css?family=Raleway:800" rel="stylesheet">

        <link type="text/css" rel="stylesheet" href="https://static.anunci.us/theme/css/vendor/bootstrap/bootstrap.css">
        <link type="text/css" rel="stylesheet" href="https://static.anunci.us/theme/css/vendor/magnific-popup/magnific-popup.css">

        <!--sweetalert-->
        <link type="text/css" rel="stylesheet" href="https://static.anunci.us/theme/css/vendor/sweetalert/sweetalert.css">

        <!--loadawesome-->
        <link type="text/css" rel="stylesheet" href="https://static.anunci.us/theme/css/vendor/loadawesome/loadawesome.css">

        <!-- main title font -->
        <link type="text/css" rel="stylesheet" href="https://static.anunci.us/theme/css/vendor/typo/fonts.css">

        <!-- icon fonts -->
        <link type="text/css" rel="stylesheet" href="https://static.anunci.us/theme/css/vendor/typo/fontawesome.css">
        <link type="text/css" rel="stylesheet" href="https://static.anunci.us/theme/css/vendor/typo/ion-font.css">
        
        <!-- imagepicker -->
        <link type="text/css" rel="stylesheet" href="https://static.anunci.us/theme/css/vendor/imagepicker/image-picker.css">
        
        <!-- maps -->
        <link type="text/css" rel="stylesheet" href="https://openlayers.org/en/v3.20.1/css/ol.css">

        <link type="text/css" rel="stylesheet" href="https://static.anunci.us/theme/css/vendor/ol//3.20.1/ol.css">
        
        <!-- other styles -->
        <link type="text/css" rel="stylesheet" href="https://static.anunci.us/theme/css/template.css">
        <link type="text/css" rel="stylesheet" href="https://static.anunci.us/theme/css/style.css">
        <link type="text/css" rel="stylesheet" href="https://static.anunci.us/theme/css/custom.css">
        
        <style>::-webkit-scrollbar{width:8px;background-color:rgba(0,0,0,0);-webkit-border-radius:100px}::-webkit-scrollbar:hover{background-color:rgba(0,0,0,.09)}::-webkit-scrollbar-thumb:vertical{background:rgba(0,0,0,.5);-webkit-border-radius:100px}::-webkit-scrollbar-thumb:vertical:active{background:rgba(0,0,0,.61);-webkit-border-radius:100px}</style>
        <% } %>    
<% } %>