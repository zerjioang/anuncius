<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<footer>
    
    <style>
        .footer-ballon-block{
            padding-top: 3.2rem;
            padding-bottom: 1.4em;
            text-align: center;
            border-bottom: 1px solid #f6f6f6;
            background-color: lightgray;
        }
        .footer-ballon{
            padding: 0 2rem;
            line-height: 3.2rem;
            height: 3.2rem;
            margin-right: 1.2rem;
            margin-bottom: 1.2rem;
            background-color: #bababa;
            color: white;
            text-decoration: none;
            border-radius: 10px;
        }
    </style>
    
    <nav class="footer-ballon-block">
        <a class="footer-ballon" href="/conditions" title="Condiciones de uso">Condiciones de uso</a>
        <a class="footer-ballon" href="/privacy" title="Política de Privacidad">Política de Privacidad</a>
        <a class="footer-ballon" href="/cookies" title="Cookies">Cookies</a>
        <a class="footer-ballon" href="/rules" title="Reglas de convivencia">Reglas de convivencia</a>
        <a class="footer-ballon" href="/security" title="Consejos de seguridad">Consejos de seguridad</a>
        <a class="footer-ballon" href="/sitemap" title="Mapa del sitio">Mapa del sitio</a>
        <a class="footer-ballon" href="https://status.anunci.us" title="Estado de la plataforma" target="_blank">Estado de la plataforma</a>
        <a class="footer-ballon" href="/docs" title="Documentación técnica">Documentación</a>
        <a class="footer-ballon" href="/faq" title="Preguntas Frecuentes">Preguntas Frecuentes</a>
    </nav>
    <%--
    <s:include value="/templates/modules/remodal/remodal.jsp" />
    --%>
    <s:include value="/templates/modules/dialog/publish.jsp" />
    
    <!-- FOOTER TOP -->
    <div class="gl-footer-top-wrapper">
        <div class="container">
            <div class="row">
                <!-- FOOTER LOGO -->
                <s:include value="footer.logo.jsp" />
                <!-- END -->

                <!-- FOOTER CONTACT -->
                <s:include value="footer.contact.info.jsp" />
                <!-- END -->

                <!-- FOOTER INFO -->
                <s:include value="footer.app.info.jsp" />
                <!-- END -->

                <!-- FOOTER NEWSLETTER -->
                <s:include value="footer.newsletter.jsp" />
                <!-- END -->
            </div>
        </div>
    </div>
    <!-- END -->

    <!-- FOOTER BOTTOM -->
    <s:include value="footer.copyright.jsp" />
    <!-- END -->
</footer>