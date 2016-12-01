<%@ taglib prefix="s" uri="/struts-tags" %>

<s:include value="/templates/landing.header.jsp">
    <s:param name="showButtons" value="false" />
    <s:param name="title1" value="'Smouq'" />
    <s:param name="title2" value="'the best'" />
    <s:param name="subtitle" value="'for enterprise communications'" />
</s:include>

<section class="section light">
    <s:include value="/templates/generic.section.header.jsp">
        <s:param name="description" value="'With smouq, you can communicate safely among your employeees, staff, partners and even clients. With no complicated installations nor configurations. Just couple of clicks and your company is ready to go!'" />
        <s:param name="title1" value="'Read'"/>
        <s:param name="title2" value="'More.'"/>
    </s:include>

    <div class="section-content">

        <div class="container">

            <div class="row">

                <div class="col-md-12 col-sm-12">

                    <div class="feature-row">

                        <div class="row">

                            <p>Read more data</p>

                        </div> <!-- row -->

                    </div><!-- feature row -->

                </div><!-- col-md-8 -->

            </div><!-- row -->

        </div><!-- container -->

    </div><!-- section-container -->

</section><!-- feature -->