<%@ taglib prefix="template" tagdir="/WEB-INF/tags" %>
<%@ taglib prefix="s" uri="/struts-tags" %>

<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<!doctype html>
<html class="no-js" lang="en">

<head>
    <s:include value="/templates/common.meta.jsp">
        <s:param name="description" value="'Smouq is the professional communication way'" />
        <s:param name="title" value="'Smouq | The professional communication way'" />
    </s:include>
    
    <s:include value="/templates/common.rich.meta.jsp"/>
    
    <s:include value="/templates/common.favicon.jsp">
        <s:param name="context" value="'landing/favicon/'" />
    </s:include>

    <s:include value="/templates/landing.head.jsp" />
</head>
<body>
    <!--[if lt IE 8]>
        <p class="browserupgrade">
            You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.
        </p>
    <![endif]-->
    
    <s:include value="/templates/landing.header.jsp" />

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

    <s:include value="/templates/dark.footer.jsp" />

    <!-- Scroll to Top
    ======================= -->
    <a href="#" id="scroll-to-top">Scroll to Top</a>

    <!-- Scripts -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="landing/js/vendor/jquery-1.11.3.min.js"><\/script>')</script> 
    <script src="landing/js/vendor/owl.carousel.js"></script>
    <script src="landing/js/vendor/venobox.min.js"></script>
    <script src="landing/js/vendor/jquery.waypoints.min.js"></script>
    <script src="landing/js/vendor/jquery.countTo.js"></script>
    <script src="landing/js/vendor/imagesloaded.pkgd.min.js"></script>
    <script src="landing/js/vendor/masonry.pkgd.min.js"></script>
    <script src="landing/js/vendor/readmore.min.js"></script>
    <script src="landing/js/vendor/wow.min.js"></script>
    <script src="landing/js/main.js"></script>
</body>

</html>