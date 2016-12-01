<%@ taglib prefix="s" uri="/struts-tags" %>

<s:include value="/templates/landing.header.jsp">
    <s:param name="showButtons" value="false" />
    <s:param name="title1" value="'Smouq'" />
    <s:param name="title2" value="'the best'" />
    <s:param name="subtitle" value="'for enterprise communications'" />
</s:include>

<section id="features" class="section light">
    <s:include value="/templates/generic.section.header.jsp">
        <s:param name="description" value="'With smouq, you can communicate safely among your employeees, staff, partners and even clients. With no complicated installations nor configurations. Just couple of clicks and your company is ready to go!'" />
        <s:param name="title1" value="'Amazing'"/>
        <s:param name="title2" value="'Features.'"/>
    </s:include>

    <div class="section-content">

        <div class="container">

            <div class="row">

                <div class="col-md-12 col-sm-12">

                    <div class="feature-row">

                        <div class="row">

                            <div class="col-md-6 col-xs-6 wow fadeInLeft">
                                <i class='pe-7s-loop'></i>
                                <h3>Responsive Design</h3>
                                <p>Fit all screen sizes</p>
                            </div>

                            <div class="col-md-6 col-xs-6 wow fadeInRight">
                                <i class='pe-7s-leaf'></i>
                                <h3>Made for All</h3>
                                <p>For coworkers, clients and everybody else</p>
                            </div>

                        </div> <!-- row -->

                    </div><!-- feature row -->

                    <div class="feature-row">

                        <div class="row">

                            <div class="col-md-6 col-xs-6 wow fadeInLeft" data-wow-delay="1s">
                                <i class='pe-7s-compass'></i>
                                <h3>Awesome Design</h3>
                                <p>A polish design that helps focusing on what really matters.</p>
                            </div>

                            <div class="col-md-6 col-xs-6 wow fadeInRight" data-wow-delay="1s">
                                <i class='pe-7s-coffee'></i>
                                <h3>Easy to Customize</h3>
                                <p>Customize your configuration superfast and easy</p>
                            </div>

                        </div><!-- row -->

                    </div><!-- feature row -->

                </div><!-- col-md-8 -->

            </div><!-- row -->

        </div><!-- container -->

    </div><!-- section-container -->

</section><!-- feature -->