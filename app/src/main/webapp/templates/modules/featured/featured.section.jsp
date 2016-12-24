<%@ taglib prefix="s" uri="/struts-tags" %>

<section class="gl-feat-properties-section gl-section-wrapper" id="featured">
    <div class="container">
        <div class="row">
            <s:include value="/templates/modules/featured/featured.title.jsp" />
            <!-- WRAPPER -->
            <div class="gl-featured-listing-wrapper">
                <!-- FEATURED ITEMS -->
                <s:include value="/templates/modules/featured/featured.item.jsp" />
                <s:include value="/templates/modules/featured/featured.item.jsp" />
                <s:include value="/templates/modules/featured/featured.item.jsp" />
                <!-- END -->
            </div>
        </div>
        <div class="row">
            <s:include value="/templates/modules/featured/featured.viewall.jsp" />
        </div>
    </div>
</section>