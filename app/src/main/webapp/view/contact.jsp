<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<!doctype html>
<html lang="es">

    <head>
        <s:include value="/templates/metadata/metadata.generic.jsp">
            <s:param name="description" value="'La revolución de las tiendas online'"></s:param>
            <s:param name="author" value="'Sergio'"></s:param>
        </s:include>
        
        <!-- PAGE TITLE -->
        <title>Anuncius | La revolución de las tiendas online</title>

        <s:include value="/templates/metadata/metadata.favicon.jsp" />

        <s:include value="/templates/metadata/metadata.opengraph.jsp">
            <s:param name="title" value="'Anuncius'"></s:param>
            <s:param name="sitename" value="'Anuncius'"></s:param>
            <s:param name="url" value="'https://anunci.us/'"></s:param>
            <s:param name="image" value="'https://static.anunci.us/img/metadata/google.image.png'"></s:param>
            <s:param name="description" value="'La revolución de las tiendas online'"></s:param>
            <s:param name="address" value="'Avenida de las universidades'"></s:param>
            <s:param name="locality" value="'Bilbao'"></s:param>
            <s:param name="region" value="'Bizkaia'"></s:param>
            <s:param name="code" value="'48003'"></s:param>
            <s:param name="country" value="'Spain'"></s:param>
        </s:include>

        <s:include value="/templates/metadata/metadata.twitter.jsp">
            <s:param name="alt" value="'Imagen de bienvenida de Anuncius'"></s:param>
            <s:param name="site" value="'@anuncius'"></s:param>
            <s:param name="title" value="'Anuncius - La revolución de las tiendas online'"></s:param>
            <s:param name="description" value="'Bienvenido a anuncius. La tienda online donde encontrarás lo que quieras.'"></s:param>
            <s:param name="author" value="'@zerjioang'"></s:param>
            <s:param name="image" value="'https://static.anunci.us/img/metadata/google.image.png'"></s:param>
        </s:include>

        <s:include value="/templates/metadata/metadata.google.jsp">
            <s:param name="name" value="'Anuncius - La revolución de las tiendas online'"></s:param>
            <s:param name="description" value="'Bienvenido a anuncius. La tienda online donde encontrarás lo que quieras.'"></s:param>
            <s:param name="image" value="'https://static.anunci.us/img/metadata/google.image.png'"></s:param>
        </s:include>

        <s:include value="/templates/modules/css/minimum.css.jsp"/>
    </head>

    <body class="gl-realestate-template">

        <s:include value="/templates/modules/loader/loader.section.jsp"/>
        
        <!-- HEADER -->
        <s:include value="/templates/modules/header/header.section.jsp"/>
        <!-- HEADER END -->

        <!-- HERO IMAGE -->
        <s:include value="/templates/modules/hero/hero.section.jsp">
            <s:param name="normal" value="'Información'" />
            <s:param name="bold" value=""/>
            <s:param name="image" value="'https://static.anunci.us/img/hero/contact/hero.jpg'" />
            <s:param name="block" value="'top'" />
        </s:include>
        <!-- HERO IMAGE END -->

        <div class="container" style='padding-top: 5%;padding-bottom: 5%;'>
            <section id="top">
                <div class="row">
                    <!-- Image -->
                    <div class="gl-about-company-image gl-left-side col-md-6 col-sm-6 col-xs-12">
                        <div class="gl-page-img-wrapper">
                            <picture>
                                <amp-img
                                    src="https://static.anunci.us/theme/images/working.jpg"
                                    alt="Imagen acerca de anuncius"
                                    class="gl-lazy"
                                    width=900
                                    height=600
                                    layout=responsive>
                                </amp-img>
                                <picture>
                                    <source media="(min-width: 768px)" srcset=https://static.anunci.us/theme/images/product.png>
                                    <img alt="Imagen sobre en producto en venta" srcset=https://static.anunci.us/theme/images/product.png>
                                </picture>
                            </picture>
                        </div>
                    </div>
                    <!-- END -->

                    <!-- About Text -->
                    <div class="gl-about-company-text gl-right-side col-md-6 col-sm-6 col-xs-12">
                        <h3 class="gl-single-title">Sobre nosotros</h3>
                        <p align='justify'>
                            Cómodo, fácil, rapido, seguro y gratuito<br>
                            Así es anuncius, sin complicaciones, sin letra pequeña.
                        </p>
                    </div>
                    <!-- About Text End -->
                </div>
            </section>

            <section id="contact">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <h2 class="gl-element-title">Que es anuncius?</h2>
                        <p align='justify'>
                            Es una plataforma online realizada con el objetivo de que cualquiera, sin ningun tipo de impedimento sea capaz de publicar en Internet y al mundo un anuncio publicitario de manera gratuita y segura.
                        </p>
                        <p align='justify'>
                            Quiero vender algo, ¿con que plataforma me quedo? <br>
                            Esto es lo que seguramente muchos de vosotros pensais. Que si una app para iOS, que si otra app para Android, etc. Y si se pudiera tener en un solo lugar, todo? Y con todo nos referimos a todo, desde peluches, tazas, ropa interior, música, menús en restaurantes, etc.
                            La lista es interminable verdad? Y lo que nos pasa es que muchas vees, tenemos que ir a webs especificas si queremos encontrar ofertas, o a otras web si lo que queremos es buscar un coche de segunda mano.
                            Con esto en mente, nosotros vamos a ser los que ahora, vamos a trabajar por ti, para que tu solo tengas que poner lo que quieras buscar, y nosotros hacemos todo el trabajo duro por ti. ¿Mola verdad?
                            Pruebalo, y nos comentas!
                        </p>
                    </div>
                </div>
            </section>
            
            <section id="history">
                <div class="row">
                    <div class="col-md-12">
                        <h2>Historia</h2>
                        <p align='justify'>
                            Los orígenes de anuncius se sitúan en 2016, siendo en sus inicios una simple aplicación web realizada para una asignatura de la Universidad. Es en 2017 cuando anuncius da el salto a internet para convertirse, exclusivamente en un portal web para comprar y vender objetos usados.
                            <br>
                            Hoy en día, anuncius pertenece a sus creadores originales, y además de gestionar el portal de compraventa, estos tambien se dedican a mejorar la plataforma dia tras dia añadiendo las demandas de sus usuarios y mejorando la usabilidad y seguridad de la misma.
                        </p>
                    </div>
                </div>
            </section>

            <section id="ethics">
                <div class="row">
                    <div class="col-md-12">
                        <div class="gl-element-wrapper">    
                            <!-- Accorion With Collapse -->
                            <div class="gl-tab-style-2 gl-right-side-col">
                              <div class="gl-tab-nav-btns">
                                <ul class="nav nav-tabs" role="tablist">
                                  <li role="presentation" class="active"><a href="#tab-mision" aria-controls="#tab-mision" role="tab" data-toggle="tab">Misión</a></li>
                                  <li role="presentation"><a href="#tab-vision" aria-controls="#tab-vision" role="tab" data-toggle="tab">Visión</a></li>
                                  <li role="presentation"><a href="#tab-valores" aria-controls="#tab-valores" role="tab" data-toggle="tab">Valores</a></li>
                                </ul>
                              </div>

                              <div class="gl-tab-nav-contents tab-content">
                                <div role="tabpanel" class="tab-pane fade in active" id="tab-mision">
                                  <h3>Misión</h3>
                                    <p align='justify'>
                                        Somos una plataforma dedicada al marketing online y comercialización de productos de cualquier tipo sin ningun tipo de exclusión. Nos centramos en los usuarios particulares pero sin olvidarnos de los profesionales, autonomos y las empresas, ofreciendo una solución global para todos ellos, a nivel del territorio nacional.
                                    </p>
                                </div>

                                <div role="tabpanel" class="tab-pane fade" id="tab-vision">
                                  <h3>Visión</h3>
                                    <p align='justify'>
                                        Pretendemos ser un referente en el mercado nacional en el sector de la compraventa, y para ello abarcaremos todos los servicios que ofrecemos actualmente incrementando los que vayan surgiendo debido a la necesidad de cambio provocado por los avances tecnológicos y las necesidades de nuestros usuarios. Esto es así ya que somos una plataforma en constante innovación, que quiere estar a la última de los avances tecnológicos que suceden en la sociedad.
                                    </p>
                                </div>

                                <div role="tabpanel" class="tab-pane fade" id="tab-valores">
                                  <h3>Valores</h3>
                                    <p align='justify'>
                                        Nuestros valores sobre los que se sostiene esta estrategia de crecimiento y diferenciación en el servicio son:
                                    </p>
                                    <br>
                                    <ul>
                                        <li>
                                            <b>Trabajo en equipo: </b>
                                            <br>
                                            Promoviendo y apoyando un equipo homogéneo, polivalente e interdepartamental.</li>
                                        <li>
                                            <b>Servicio: </b>
                                            <br>
                                            Cumplimos con nuestros compromisos y nos hacemos responsables de nuestro rendimiento en todas nuestras decisiones y acciones, basándonos en una gran voluntad de servicio por y para nuestros clientes.</li>
                                        <li>
                                            <b>Innovación y mejora continua: </b>
                                            <br>
                                            Nos damos cuenta de la importancia de mirar hacia el futuro, por tanto ofrecemos lo último del mercado para dar un apoyo y servicio óptimo a nuestros clientes.</li>
                                        <li>
                                            <b>Transparencia: </b>
                                            <br>
                                            La implicación y compromiso del personal no sería posible sin una absoluta transparencia en los procesos, disponiendo el personal de la máxima información de la empresa</li>
                                    </ul>
                                </div>
                              </div>
                            </div>
                            <!-- Accorion With Collapse Icon End -->
                          </div>
                    </div>
                </div>
            </section>
            
            <section id="contact-info">
                <div class="row">
                  <div class="gl-element-type-wrapper">
                    <!-- Element Name -->
                    <h3 class="gl-element-title">Contacta con nosotros</h3>
                    <!-- End -->
                    <div class="gl-element-wrapper">
                      <div class="gl-row">
                        <form action="#" class="gl-contact-form" id="contact-form">
                          <input type="text" name="name" id="gl-contact-name" placeholder="Nombre" required>
                          <input type="email" name="email" id="gl-contact-email" placeholder="Email" required>
                          <textarea name="message" id="gl-contact-message" cols="30" rows="10" placeholder="Mensaje" required>
                          </textarea>
                          <input type="submit" value="Enviar mensaje" class="gl-btn">
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            
        </div>
        
        <!-- SIDE MENU-->
        <s:include value="/templates/modules/aside/login/login.section.jsp" />
        <!-- SIDE MENU END -->

        <!-- FOOTER -->
        <s:include value="/templates/modules/footer/common.footer.jsp" />
        <!-- FOOTER END -->

        <s:include value="/templates/modules/js/minimum.js.jsp"/>

    </body>
</html>