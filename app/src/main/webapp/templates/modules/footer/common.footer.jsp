<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<footer>
    
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