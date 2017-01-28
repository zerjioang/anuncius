<%@ taglib prefix="s" uri="/struts-tags" %>

<section class="gl-recent-listing-section gl-section-wrapper" id="latest-items-section">
    <div class="container">
        <div class="row">
            <!-- SECTION HEADINGS -->
            <s:include value="listing.title.jsp" />
            <!-- END -->

            <!-- WRAPPER -->
            <div class="gl-recent-listing-wrapper">
                <div id="listing_elements_block"></div>
                <!-- FEATURED ITEMS -->
                <%--
                <s:include value="listing.item.jsp" />
                <s:include value="listing.item.jsp" />
                <s:include value="listing.item.jsp" />
                <s:include value="listing.item.jsp" />
                <s:include value="listing.item.jsp" />
                --%>
                <!-- END -->
            </div>
        </div>
        <div class="row">
            <!-- MORE BTN -->
            <s:include value="listing.viewall.jsp" />
            <!-- END -->
        </div>
    </div>
</section>