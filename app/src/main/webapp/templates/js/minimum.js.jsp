<%@page import="anuncius.util.PlatformUtil"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%
boolean minified = PlatformUtil.enableMinification();
if(PlatformUtil.isDevelopment()){
%>
    <%if(minified){%>
        <script src="theme/dist/app/js/vendor.min.js"></script>
    <%}else{%>
        <script src="/theme/js/vendor/jquery/jquery.min.js"></script>
        
        <script src="/theme/js/vendor/sweetalert/sweetalert.min.js"></script>
        <script async src="/theme/js/vendor/atmosphere/jquery.atmosphere.min.js"></script>
        
        <script src="/theme/js/vendor/bootstrap/3.3.7/bootstrap.min.js"></script>
        
        <script src="/theme/js/vendor/notify/notify.min.js"></script>
        <script src="/theme/js/vendor/ol/3.20.1/ol.js"></script>
        
        <script src="/theme/js/vendor/smoothscroll/2.1.1/jquery.smooth-scroll.min.js"></script>
        <script src="/theme/js/vendor/magnific-popup/1.1.0/jquery.magnific-popup.js"></script>
        
        <script src="/theme/js/vendor/imagepicker/image-picker.min.js"></script>
        
        <script src="/theme/js/vendor/mustache/mustache.min.js"></script>
        
        <script src="/theme/js/app/core.js"></script>
        <script src="/theme/js/app/notification.js"></script>
        <script src="/theme/js/app/api.js"></script>

        <script src="/theme/js/app/google.js"></script>
        
        <script src="/theme/js/app/templates.js"></script>
        <script src="/theme/js/app/events.js"></script>
        
        <script async src="/theme/js/app/map.js"></script>
        <%--
        <script async src="/theme/js/app/reverser.js"></script>
        --%>
    <%}%>
<% }else{ %>
    <%if(minified){%>
        <script src="https://static.anunci.us/theme/dist/app/js/vendor.min.js">
    <%}else{%>        
        <script src="https://static.anunci.us/theme/js/vendor/jquery/jquery.min.js"></script>

        <script src="https://static.anunci.us/theme/js/vendor/sweetalert/sweetalert.min.js"></script>
        <script async src="https://static.anunci.us/theme/js/vendor/atmosphere/jquery.atmosphere.min.js"></script>
        
        <script src="https://static.anunci.us/theme/js/vendor/bootstrap/3.3.7/bootstrap.min.js"></script>
        
        <script src="https://static.anunci.us/theme/js/vendor/notify/notify.min.js"></script>
        <script src="https://static.anunci.us/theme/js/vendor/ol/3.20.1/ol.js"></script>
        
        <script src="https://static.anunci.us/theme/js/vendor/smoothscroll/2.1.1/jquery.smooth-scroll.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <script src="https://static.anunci.us/theme/js/vendor/magnific-popup/1.1.0/jquery.magnific-popup.js"></script>

        <script src="https://static.anunci.us/theme/js/vendor/imagepicker/image-picker.min.js"></script>
        
        <script src="https://static.anunci.us/theme/js/vendor/mustache/mustache.min.js"></script>        

        <script src="https://static.anunci.us/theme/js/app/core.js"></script>
        <script src="https://static.anunci.us/theme/js/app/notification.js"></script>
        <script src="https://static.anunci.us/theme/js/app/api.js"></script>

        <script src="https://static.anunci.us/theme/js/app/google.js"></script>

        <script src="https://static.anunci.us/theme/js/app/templates.js"></script>
        <script src="https://static.anunci.us/theme/js/app/events.js"></script>
        
        <script async src="https://static.anunci.us/theme/js/app/map.js"></script>
        <%--
        <script src="https://static.anunci.us/theme/js/app/reverser.js"></script>
        --%>
    <%}%>
<% } %>
<!-- google oauth 2 script-->
<script async defer src="https://apis.google.com/js/platform.js?onload=renderButton"></script>
<!-- google sensor -->
<%--
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>
--%>

<!-- ofuscated google analytics tracker -->
<script async>
    var _0xbd30=["\x73\x63\x72\x69\x70\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x67\x6F\x6F\x67\x6C\x65\x2D\x61\x6E\x61\x6C\x79\x74\x69\x63\x73\x2E\x63\x6F\x6D\x2F\x61\x6E\x61\x6C\x79\x74\x69\x63\x73\x2E\x6A\x73","\x67\x61","\x47\x6F\x6F\x67\x6C\x65\x41\x6E\x61\x6C\x79\x74\x69\x63\x73\x4F\x62\x6A\x65\x63\x74","\x70\x75\x73\x68","\x71","\x6C","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65","\x61\x73\x79\x6E\x63","\x73\x72\x63","\x69\x6E\x73\x65\x72\x74\x42\x65\x66\x6F\x72\x65","\x70\x61\x72\x65\x6E\x74\x4E\x6F\x64\x65","\x63\x72\x65\x61\x74\x65","\x55\x41\x2D\x38\x34\x38\x37\x39\x33\x33\x33\x2D\x32","\x61\x75\x74\x6F","\x73\x65\x6E\x64","\x70\x61\x67\x65\x76\x69\x65\x77"];(function(_0x69c8x1,_0x69c8x2,_0x69c8x3,_0x69c8x4,_0x69c8x5,_0x69c8x6,_0x69c8x7){_0x69c8x1[_0xbd30[3]]= _0x69c8x5;_0x69c8x1[_0x69c8x5]= _0x69c8x1[_0x69c8x5]|| function(){(_0x69c8x1[_0x69c8x5][_0xbd30[5]]= _0x69c8x1[_0x69c8x5][_0xbd30[5]]|| [])[_0xbd30[4]](arguments)},_0x69c8x1[_0x69c8x5][_0xbd30[6]]= 1*  new Date();_0x69c8x6= _0x69c8x2[_0xbd30[7]](_0x69c8x3),_0x69c8x7= _0x69c8x2[_0xbd30[8]](_0x69c8x3)[0];_0x69c8x6[_0xbd30[9]]= 1;_0x69c8x6[_0xbd30[10]]= _0x69c8x4;_0x69c8x7[_0xbd30[12]][_0xbd30[11]](_0x69c8x6,_0x69c8x7)})(window,document,_0xbd30[0],_0xbd30[1],_0xbd30[2]);ga(_0xbd30[13],_0xbd30[14],_0xbd30[15]);ga(_0xbd30[16],_0xbd30[17])
</script>
<!-- atmosphere js -->
<script src="//cdnjs.cloudflare.com/ajax/libs/atmosphere/2.2.12/atmosphere.min.js"></script>
