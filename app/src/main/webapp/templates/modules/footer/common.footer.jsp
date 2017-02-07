<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<footer>
    
    <div id="loginModal" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title">Inicia sesión en anuncius</h4>
                </div>
                <div class="modal-body">
                    <p>Actualmente tenemos los siguientes métodos disponibles:</p>
                    <div class="centered padding-all-small" id="my-signin2"></div>
                    <p class="reminder-subtitle">Has perdido tu contraseña? Quieres una nueva cuenta?</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal" id="modal-login-btn-close">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
    
    <div id="google-block" class="hidden">
        <!-- Modal -->
        <div id="googleModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h3 id="myModalLabel">Modal header</h3>
            </div>
            <div class="modal-body">
                <p>One fine body…</p>
                <div class="centered" id="my-signin2"></div>
            </div>
            <div class="modal-footer">
                <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
                <button class="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
    
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