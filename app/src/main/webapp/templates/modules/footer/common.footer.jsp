<%@ taglib prefix="s" uri="/struts-tags" %>

<footer>
    <!-- FOOTER TOP -->
    <div class="gl-footer-top-wrapper">
        <div class="container">
            <div class="row">
                <!-- FOOTER WIDGET -->
                <s:include value="footer.logo.jsp" />
                <!-- END -->

                <!-- FOOTER WIDGET -->
                <s:include value="footer.contact.info.jsp" />
                <!-- END -->

                <!-- FOOTER WIDGET -->
                <s:include value="footer.app.info.jsp" />
                <!-- END -->

                <!-- FOOTER WIDGET -->
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