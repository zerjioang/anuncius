<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<!doctype html>
<html lang="es">

    <head>
        <s:include value="/templates/metadata/metadata.generic.jsp">
            <s:param name="description" value="'Busca y encuentra el grupo que más se acerque a tus necesidades. Y si no existe, crea una!'"></s:param>
            <s:param name="author" value="'anuncius development team'"></s:param>
        </s:include>
        
        <!-- PAGE TITLE -->
        <title>Anuncius - Grupos</title>

        <s:include value="/templates/metadata/metadata.favicon.jsp" />

        <s:include value="/templates/metadata/metadata.opengraph.jsp">
            <s:param name="title" value="'Anuncius'"></s:param>
            <s:param name="sitename" value="'Anuncius'"></s:param>
            <s:param name="url" value="'https://anunci.us/'"></s:param>
            <s:param name="image" value="'https://static.anunci.us/theme/images/metadata/google.image.png'"></s:param>
            <s:param name="description" value="'Busca y encuentra el grupo que más se acerque a tus necesidades. Y si no existe, crea uno!'"></s:param>
            <s:param name="address" value="'Avenida de las universidades'"></s:param>
            <s:param name="locality" value="'Bilbao'"></s:param>
            <s:param name="region" value="'Bizkaia'"></s:param>
            <s:param name="code" value="'48003'"></s:param>
            <s:param name="country" value="'Spain'"></s:param>
        </s:include>

        <s:include value="/templates/metadata/metadata.twitter.jsp">
            <s:param name="alt" value="'Imagen de bienvenida de Anuncius'"></s:param>
            <s:param name="site" value="'@anuncius'"></s:param>
            <s:param name="title" value="'Anuncius - Grupos'"></s:param>
            <s:param name="description" value="'Busca y encuentra el grupo que más se acerque a tus necesidades. Y si no existe, crea uno!'"></s:param>
            <s:param name="author" value="'anuncius development team'"></s:param>
            <s:param name="image" value="'https://static.anunci.us/theme/images/metadata/twitter.image.png'"></s:param>
        </s:include>

        <s:include value="/templates/metadata/metadata.google.jsp">
            <s:param name="name" value="'Anuncius - Grupos'"></s:param>
            <s:param name="description" value="'Busca y encuentra el grupo que más se acerque a tus necesidades. Y si no existe, crea uno!'"></s:param>
            <s:param name="image" value="'https://static.anunci.us/theme/images/metadata/google.image.png'"></s:param>
        </s:include>

        <s:include value="/templates/css/minimum.css.jsp"/>
    </head>

    <body class="gl-agent-profile-template gl-realestate-template">
        
        <s:include value="/templates/modules/loader/loader.section.jsp"/>
        
        <!-- SIDE MENU-->
        <s:include value="/templates/modules/aside/login/login.section.jsp" />
        <!-- SIDE MENU END -->

        <!-- HEADER -->
        <s:include value="/templates/modules/header/header.section.jsp" />
        <!-- HEADER END -->
        
        <!-- PAGE CONTETNT -->
        <section class="gl-page-content-section fine-space anuncius-head-margin">
            <div class="container">
                <div class="row">
                    <h1 class="gl-element-title">Grupos públicos</h1>
                    <div class="gl-row">
                        <h3 class="gl-sub-heading">Buscar grupo</h3>
                        <form action="" class="gl-contact-form" style="display: -webkit-box;">
                        <input type="text" name="query" id="group-query" placeholder="Nombre, Localidad, Temática, Objetivo, etc" style="width: 80%;margin: 10px;">
                        <input type="submit" value="Buscar" class="gl-btn" style="margin: 10px;">
                        </form>
                    </div>
                    <!-- PAGE CONTENT DETAILS -->
                    <div class="gl-page-content">
                        <h2 class="gl-element-title">Grupos</h2>
                        <div class="gl-element-type-wrapper gl-featured-post-type">
                            <!-- End -->
                            <div class="gl-element-wrapper">
                              <div class="gl-row">
                                <h3 class="gl-sub-heading">Listado de grupos</h3>

                                <!-- Job item -->
                                <div class="panel panel-default gl-job-list-item">
                                  <!-- Job Excerpt -->
                                  <div class="gl-job-list-item-wrapper panel-heading" role="tab" id="jobOne">
                                    <a role="button" data-toggle="collapse" data-parent="#featured-job" href="#jobOneDetails" aria-expanded="true" aria-controls="jobOneDetails">
                                      <!-- LOGO -->
                                      <div class="gl-job-company-logo gl-job-item-part">
                                        <img src="images/company-1.png" alt="Deep Purple inc" class="gl-lazy" pagespeed_url_hash="3487765496" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                                      </div>
                                      <!-- END -->

                                      <!-- JOB POSTION & COMPANY NAME -->
                                      <div class="gl-job-position-company gl-job-item-part">
                                        <h3>
                                            Product Designer
                                        </h3>

                                        <p class="gl-company-name">Deep Purple inc</p>
                                      </div>
                                      <!-- END -->

                                      <!-- JOB AVAILABILITY -->
                                      <div class="gl-job-availability gl-job-item-part">
                                        <span class="gl-item-status-label full-time-job">Full time</span>
                                      </div>
                                      <!-- END -->

                                      <!-- SALLERY -->
                                      <div class="gl-job-sallery gl-job-item-part">
                                        <!-- <i class="fa fa-money"></i>
                                        <h3>Salary :</h3>
                                        <span>$30000</span> -->
                                      </div>
                                      <!-- END -->

                                      <!-- AREA -->
                                      <div class="gl-job-location gl-job-item-part">
                                        <i class="ion-ios-location-outline"></i>
                                        <span>California</span>
                                      </div>
                                      <!-- END -->
                                    </a>
                                  </div>
                                  <!-- END -->

                                  <!-- Job Details -->
                                  <div id="jobOneDetails" class="panel-collapse collapse gl-job-list-details" role="tabpanel" aria-labelledby="jobOne">
                                    <div class="panel-body">
                                      <div class="gl-jobdetails-sec">
                                        <h3>About Job</h3>
                                        <p>
                                          On the other hand, we denounce with righteous indignation and dislike men who are so begueled and demoralized by the of pleasure so blinded by desire, that they cannot foresee the pain and trouble that are bounds to ensure blame belongs to those who fail in their weakness of will, which is the same
                                        </p>
                                      </div>

                                      <div class="gl-jobdetails-sec">
                                        <h3>Requirements</h3>

                                        <ul>
                                          <li>On the other hand, we denounce with righteous</li>
                                          <li>Pleasure of the moment, so blinded by desire, that</li>
                                          <li>Blame belongs to those who fail in their duty </li>
                                          <li>On the other hand, we denounce</li>
                                        </ul>
                                      </div>

                                      <div class="gl-jobdetails-sec">
                                        <a data-remodal-target="modal" class="gl-btn gl-apply-job">Apply</a>
                                        <a href="job-single.html" class="gl-btn gl-details-job">Details</a>
                                      </div>
                                    </div>
                                  </div>
                                  <!-- END -->
                                </div>
                                <!-- End -->

                                <!-- Job item -->
                                <div class="panel panel-default gl-job-list-item">
                                  <!-- Job Excerpt -->
                                  <div class="gl-job-list-item-wrapper panel-heading" role="tab" id="jobTwo">
                                    <a role="button" data-toggle="collapse" data-parent="#featured-job" href="#jobTwoDetails" aria-expanded="true" aria-controls="jobTwoDetails">
                                      <!-- LOGO -->
                                      <div class="gl-job-company-logo gl-job-item-part">
                                        <img src="images/company-2.png" alt="Deep Purple inc" class="gl-lazy" pagespeed_url_hash="3782265417" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                                      </div>
                                      <!-- END -->

                                      <!-- JOB POSTION & COMPANY NAME -->
                                      <div class="gl-job-position-company gl-job-item-part">
                                        <h3>Android Developer</h3>

                                        <p class="gl-company-name">Deep Purple inc</p>
                                      </div>
                                      <!-- END -->

                                      <!-- JOB AVAILABILITY -->
                                      <div class="gl-job-availability gl-job-item-part">
                                        <span class="gl-item-status-label part-time-job">Part time</span>
                                      </div>
                                      <!-- END -->

                                      <!-- SALLERY -->
                                      <div class="gl-job-sallery gl-job-item-part">
                                        <!-- <i class="fa fa-money"></i>
                                        <h3>Salary :</h3>
                                        <span>$30000</span> -->
                                      </div>
                                      <!-- END -->

                                      <!-- AREA -->
                                      <div class="gl-job-location gl-job-item-part">
                                        <i class="ion-ios-location-outline"></i>
                                        <span>California</span>
                                      </div>
                                      <!-- END -->
                                    </a>
                                  </div>
                                  <!-- END -->

                                  <!-- Job Details -->
                                  <div id="jobTwoDetails" class="panel-collapse collapse gl-job-list-details" role="tabpanel" aria-labelledby="jobTwo">
                                    <div class="panel-body">
                                      <div class="gl-jobdetails-sec">
                                        <h3>About Job</h3>
                                        <p>
                                          On the other hand, we denounce with righteous indignation and dislike men who are so begueled and demoralized by the of pleasure so blinded by desire, that they cannot foresee the pain and trouble that are bounds to ensure blame belongs to those who fail in their weakness of will, which is the same
                                        </p>
                                      </div>

                                      <div class="gl-jobdetails-sec">
                                        <h3>Requirements</h3>

                                        <ul>
                                          <li>On the other hand, we denounce with righteous</li>
                                          <li>Pleasure of the moment, so blinded by desire, that</li>
                                          <li>Blame belongs to those who fail in their duty </li>
                                          <li>On the other hand, we denounce</li>
                                        </ul>
                                      </div>

                                      <div class="gl-jobdetails-sec">
                                        <a data-remodal-target="modal" class="gl-btn gl-apply-job">Apply</a>
                                        <a href="job-single.html" class="gl-btn gl-details-job">Details</a>
                                      </div>
                                    </div>
                                  </div>
                                  <!-- END -->
                                </div>
                                <!-- End -->

                                <!-- Job item -->
                                <div class="panel panel-default gl-job-list-item">
                                  <!-- Job Excerpt -->
                                  <div class="gl-job-list-item-wrapper panel-heading" role="tab" id="jobThree">
                                    <a role="button" data-toggle="collapse" data-parent="#featured-job" href="#jobThreeDetails" aria-expanded="true" aria-controls="jobThreeDetails">
                                      <!-- LOGO -->
                                      <div class="gl-job-company-logo gl-job-item-part">
                                        <img src="images/company-3.png" alt="Deep Purple inc" class="gl-lazy" pagespeed_url_hash="4076765338" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                                      </div>
                                      <!-- END -->

                                      <!-- JOB POSTION & COMPANY NAME -->
                                      <div class="gl-job-position-company gl-job-item-part">
                                        <h3>Product Designer</h3>
                                        <p class="gl-company-name">Deep Purple inc</p>
                                      </div>
                                      <!-- END -->

                                      <!-- JOB AVAILABILITY -->
                                      <div class="gl-job-availability gl-job-item-part">
                                        <span class="gl-item-status-label remote-job">Full time</span>
                                      </div>
                                      <!-- END -->

                                      <!-- SALLERY -->
                                      <div class="gl-job-sallery gl-job-item-part">
                                        <!-- <i class="fa fa-money"></i>
                                        <h3>Salary :</h3>
                                        <span>$30000</span> -->
                                      </div>
                                      <!-- END -->

                                      <!-- AREA -->
                                      <div class="gl-job-location gl-job-item-part">
                                        <i class="ion-ios-location-outline"></i>
                                        <span>California</span>
                                      </div>
                                      <!-- END -->
                                    </a>
                                  </div>
                                  <!-- END -->

                                  <!-- Job Details -->
                                  <div id="jobThreeDetails" class="panel-collapse collapse gl-job-list-details" role="tabpanel" aria-labelledby="jobThree">
                                    <div class="panel-body">
                                      <div class="gl-jobdetails-sec">
                                        <h3>About Job</h3>
                                        <p>
                                          On the other hand, we denounce with righteous indignation and dislike men who are so begueled and demoralized by the of pleasure so blinded by desire, that they cannot foresee the pain and trouble that are bounds to ensure blame belongs to those who fail in their weakness of will, which is the same
                                        </p>
                                      </div>

                                      <div class="gl-jobdetails-sec">
                                        <h3>Requirements</h3>

                                        <ul>
                                          <li>On the other hand, we denounce with righteous</li>
                                          <li>Pleasure of the moment, so blinded by desire, that</li>
                                          <li>Blame belongs to those who fail in their duty </li>
                                          <li>On the other hand, we denounce</li>
                                        </ul>
                                      </div>

                                      <div class="gl-jobdetails-sec">
                                        <a data-remodal-target="modal" class="gl-btn gl-apply-job">Apply</a>
                                        <a href="job-single.html" class="gl-btn gl-details-job">Details</a>
                                      </div>
                                    </div>
                                  </div>
                                  <!-- END -->
                                </div>
                                <!-- End -->

                                <!-- APPLY MODAL -->
                                <div class="remodal-bg remodal-is-closed">

                                </div>
                                <!-- APPLY MODAL END -->
                                </div>
                              </div>
                            </div>
                          </div>
                    </div>
                    <!-- PAGE CONTENT DETAILS END -->
                </div>
            </div>
        </section>
        <!-- PAGE CONTETNT END -->

        <!-- FOOTER -->
        <s:include value="/templates/modules/footer/common.footer.jsp" />
        <!-- FOOTER END -->

        <s:include value="/templates/js/minimum.js.jsp"/>
    </body>
</html>

