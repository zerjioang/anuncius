<%@ taglib prefix="s" uri="/struts-tags" %>

<section class="gl-feat-properties-section gl-section-wrapper" id="featured">
    
    <div class="container" id="container-without-featured-items">
        <div class="row">
            <s:include value="/templates/modules/featured/featured.title.jsp">
                <s:param name="title" value="'Se el más rápido'"/>
                <s:param name="subtitle" value="'Date prisa y sé el primero en colocar tu anuncio en portada!'"/>
            </s:include>
        </div>
        <div class="gl-featured-listing-wrapper">
            <%--
            <!-- FEATURED ITEMS -->
            <s:include value="/templates/modules/featured/featured.item.jsp" />
            <s:include value="/templates/modules/featured/featured.item.jsp" />
            <s:include value="/templates/modules/featured/featured.item.jsp" />
            <!-- END -->
            --%>
        </div>
        <div class="row">
            <s:include value="/templates/modules/featured/featured.viewall.jsp">
                <s:param name="url" value="#new"></s:param>
                <s:param name="text" value="'Crear anuncio'"></s:param>
                <s:param name="id" value="'no-featured-items-btn'"></s:param>
            </s:include>
        </div>
    </div>
    
    <div class="container" id="container-with-featured-items">
        <div class="row">
            <s:include value="/templates/modules/featured/featured.title.jsp">
                <s:param name="title" value="'Los más solicitados'"/>
                <s:param name="subtitle" value="'Echa un vistazo rápido a los más vistos'"/>
                <s:param name="id" value="'featured-items-btn'"></s:param>
            </s:include>
            <!-- WRAPPER -->
            <div class="gl-featured-listing-wrapper">
                <div id="featured_elements_block">
                </div>
                <%--
                <!-- FEATURED ITEMS -->
                <s:include value="/templates/modules/featured/featured.item.jsp" />
                <s:include value="/templates/modules/featured/featured.item.jsp" />
                <s:include value="/templates/modules/featured/featured.item.jsp" />
                <!-- END -->
                --%>
            </div>
        </div>
        <div class="row">
            <s:include value="/templates/modules/featured/featured.viewall.jsp">
                <s:param name="url" value="'/explore'"></s:param>
                <s:param name="text" value="'Ver más'"></s:param>
            </s:include>
        </div>
    </div>
        
</section>