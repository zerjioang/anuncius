<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%
    String host = System.getenv("HOSTNAME");
    if(host!=null && host.equals("orion")){
%>
    <link rel="stylesheet" href="/theme/css/bootstrap.css">
    <link rel="stylesheet" href="/theme/css/clean.scrollbar.min.css">

    <!-- main title font -->
    <link rel="stylesheet" href="/theme/css/fonts.min.css">

    <!-- icon fonts -->
    <link rel="stylesheet" href="/theme/css/fontawesome.css">
    <link rel="stylesheet" href="/theme/css/ion-font.css">

    <!-- other styles -->
    <link rel="stylesheet" href="/theme/css/style.css">

    <link rel="stylesheet" href="/theme/css/custom.css">
    
    
    <!-- remodal css -->
    <link async defer rel="stylesheet" href="/theme/vendor/remodal/remodal.css">
    <link async defer rel="stylesheet" href="/theme/vendor/remodal/remodal-default-theme.css">
    
    <%-- other fonts 
    <link rel="stylesheet" href="/theme/css/glyphicon.css">
    <link rel="stylesheet" href="/theme/css/mic-font.css">
    --%>
    
<% }else{ %>
    <link async defer rel="stylesheet" href="https://static.anunci.us/dist/css/style.min.css">
<% } %>


