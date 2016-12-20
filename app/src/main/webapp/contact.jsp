<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="utf-8">
    <!-- PAGE TITLE -->
    <title>Musutruq | La revolución de las tiendas online</title>
    
    <s:include value="/templates/modules/metadata/metadata.generic.jsp">
        <s:param name="description" value="'La revolución de las tiendas online'"></s:param>
        <s:param name="description" value="'Sergio'"></s:param>
    </s:include>

    <s:include value="/templates/modules/metadata/metadata.favicon.jsp" />
    
    <s:include value="/templates/modules/metadata/metadata.opengraph.jsp">
        <s:param name="title" value="'Musutruq'"></s:param>
        <s:param name="sitename" value="'Musutruq'"></s:param>
        <s:param name="url" value="'http://www.musutruq.com/'"></s:param>
        <s:param name="image" value="'http://www.musutruq.com/image.png'"></s:param>
        <s:param name="description" value="'La revolución de las tiendas online'"></s:param>
        <s:param name="address" value="'Avenida de las universidades'"></s:param>
        <s:param name="locality" value="'Bilbao'"></s:param>
        <s:param name="region" value="'Bizkaia'"></s:param>
        <s:param name="code" value="'48003'"></s:param>
        <s:param name="country" value="'Spain'"></s:param>
    </s:include>
    
    <s:include value="/templates/modules/metadata/metadata.twitter.jsp">
        <s:param name="alt" value="'Imagen de bienvenida de Musutruq'"></s:param>
        <s:param name="site" value="'@musutruq'"></s:param>
        <s:param name="title" value="'Musutruq - La revolución de las tiendas online'"></s:param>
        <s:param name="description" value="'Bienvenido a musutruq. La tienda online donde encontrarás lo que quieras.'"></s:param>
        <s:param name="author" value="'@zerjioang'"></s:param>
        <s:param name="image" value="'http://www.musutruq.com/image.jpg'"></s:param>
    </s:include>
    
    <s:include value="/templates/modules/metadata/metadata.google.jsp">
        <s:param name="name" value="'Musutruq - La revolución de las tiendas online'"></s:param>
        <s:param name="description" value="'Bienvenido a musutruq. La tienda online donde encontrarás lo que quieras.'"></s:param>
        <s:param name="image" value="'http://www.musutruq.com/image.jpg'"></s:param>
    </s:include>
    
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />

    <!-- remodal css -->
    <link rel="stylesheet" href="vendor/remodal/remodal.css">
    <link rel="stylesheet" href="vendor/remodal/remodal-default-theme.css">

    <link rel="stylesheet" href="css/style.min.css">
    <link rel="stylesheet" href="css/clean.scrollbar.css">

    <!-- main title font -->
    <link href="https://fonts.googleapis.com/css?family=Fredoka+One" rel="stylesheet">
</head>

<body class="gl-realestate-template">

    <s:include value="/templates/modules/loader/loader.section.jsp"/>

    <!-- HEADER -->
    <s:include value="/templates/modules/header/header.section.jsp"/>
    <!-- HEADER END -->

    <!-- HERO IMAGE -->
    <s:include value="/templates/modules/hero/hero.section.jsp">
        <s:param name="normal" value="'Acerca de'" />
        <s:param name="bold" value=""/>
    </s:include>
    <!-- HERO IMAGE END -->
    
    <div class="container" style='padding-top: 5%;padding-bottom: 5%;'>
        <div class="jumbotron">
            <h1 class="display-3">Información de contacto</h1>
            <p class="lead">Para ponerte en contacto con nosotros, por favor envía un email a
                <a href="mailto:info@musutruq.com">info@musutruq.com</a>
            </p>
            <p><a class="btn btn-lg btn-success" href="mailto:info@musutruq.com" role="button">Contactar </a></p>
        </div>
        
        <div class="row">
        <!-- Image -->
        <div class="gl-about-company-image gl-left-side col-md-6 col-sm-6 col-xs-12">
          <div class="gl-page-img-wrapper">
            <img src="images/about-us.jpg" alt="About Us" class="gl-lazy">
          </div>
        </div>
        <!-- END -->

        <!-- About Text -->
        <div class="gl-about-company-text gl-right-side col-md-6 col-sm-6 col-xs-12">
          <h3 class="gl-single-title">Sobre nosotros</h3>
          <p align='justify'>On the other hand, we denounce with righteous indignation and dislike men whos are of pleasure of the moment, so blinded by desire, that they cannot foresee the pain an On the other hand, we denounce with righteous indignation and dislike men who ares of pleasure of the moment, so blinded by desire, that they cannot foresee the pain an blame belongs to those who fail in their duty through weakness of will, which is the a On the other hand, we denounce with righteous indignation and dislike men whos are of pleasure of the moment, so blinded by desire, that they cannot foresee the pain an On the other hand, we denounce with righteous indignation and dislike men who ares of pleasure of the moment, so blinded by desire, that they cannot foresee the pain an </p>

          <p align='justify'>On the other hand, we denounce with righteous indignation and dislike men whos are of pleasure of the moment, so blinded by desire, that they cannot foresee the pain an On the other hand, we denounce</p>
        </div>
        <!-- About Text End -->
      </div>
        
        <div class="row">
            <div class="col-lg-12 col-md-12">
              <h2>Que es musutruq?</h2>
              <p align='justify'>
                  Es una plataforma online realizada con el objetivo de que cualquiera, sin ningun tipo de impedimento sea capaz de publicar en Internet y al mundo un anuncio publicitario de manera gratuita y segura.
              </p>
              <h2>Donde está alojado?</h2>
              <p align='justify'>
                  Está alojado en su totalidad bajo los servicio de Amazon AWS, concretamente en una instancia EC2.
                  Las caracteristicas del servidor pueden cambiar dependiendo de la instancia que se ejecute, por lo que si desea ver cuales son las caracteristicas actuales pulse en el boton adjunto.
              </p>
              <a href="" class='btn btn-success' role='button'>Ver caracteristicas actuales</a>
              <h2>Que tecnologías están detras?</h2>
              <p align='justify'>
                  Las tecnologías que hacen esta plataforma posible son:
              </p>
              
              <div class="row">    
                  <div class="col-md-3 col-md-6 col-xs-12" style='margin:5px;text-align:-webkit-center;background-color:#e8e8e8;border-radius:10px;padding:20px;'>
                      <img src="http://www.theodo.fr/uploads/blog//2015/11/mongodb.png" width="200px" height="200px"/>
                  </div>
                  
                  <div class="col-md-3 col-md-6 col-xs-12" style='margin:5px;text-align:-webkit-center;background-color:#e8e8e8;border-radius:10px;padding:20px;'>
                      <img src="http://www.antweb.es/wp-content/uploads/2012/10/redis318x260_1.png" width="200px" height="200px"/>
                  </div>
                  
                  <div class="col-md-3 col-md-6 col-xs-12" style='margin:5px;text-align:-webkit-center;background-color:#e8e8e8;border-radius:10px;padding:20px;'>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Tomcat-logo.svg/1000px-Tomcat-logo.svg.png" width="200px" height="200px"/>
                  </div>
                  
              </div>
              
              <div class="row">
                  <div class="col-md-3 col-md-6 col-xs-12" style='margin:5px;text-align:-webkit-center;background-color:#e8e8e8;border-radius:10px;padding:20px;'>
                      <img src="http://www.rightstar.com/wp-content/uploads/2014/03/Java.png" width="200px" height="200px"/>
                  </div>
                  
                  <div class="col-md-3 col-md-6 col-xs-12" style='margin:5px;text-align:-webkit-center;background-color:#e8e8e8;border-radius:10px;padding:20px;'>
                      <img src="https://wiki.jenkins-ci.org/download/attachments/2916393/headshot.png" width="200px" height="200px"/>
                  </div>
                  
                  <div class="col-md-3 col-md-6 col-xs-12" style='margin:5px;text-align:-webkit-center;background-color:#e8e8e8;border-radius:10px;padding:20px;'>
                      <img src="https://torusware.com/wp-content/uploads/2016/06/FIRJNLJIDZSJ8P2.png" width="200px" height="200px"/>
                  </div>
              </div>
              
              <div class="row">
                  <div class="col-md-3 col-md-6 col-xs-12" style='margin:5px;text-align:-webkit-center;background-color:#e8e8e8;border-radius: 10px; padding: 20px;'>
                      <img src="https://rekenna.github.io/images/git.png" width="200px" height="200px"/>
                  </div>
                  
                  <div class="col-md-3 col-md-6 col-xs-12" style='margin:5px;text-align:-webkit-center;background-color:#e8e8e8;border-radius:10px;padding:20px;'>
                      <img src="http://www.cloudlifeconsulting.com/wp-content/uploads/2014/01/unnamed.png" width="200px" height="200px"/>
                  </div>
                  
                  <div class="col-md-3 col-md-6 col-xs-12" style='margin:5px;text-align:-webkit-center;background-color:#e8e8e8;border-radius:10px;padding:20px;'>
                      <img src="http://devstickers.com/assets/img/cat/bootstrap.png" width="200px" height="200px"/>
                  </div>
              </div>
              
            </div>
        </div>
    </div>

    <!-- FOOTER -->
    <s:include value="/templates/modules/footer/common.footer.jsp" />
    <!-- FOOTER END -->
    
    <div class="remodal" data-remodal-id="copyright-modal">
    <button data-remodal-action="close" class="remodal-close"></button>
    <h1>Copyright</h1>
    <p>
    Plataforma desarrollada por @zerjioang
    </p>
    <br>
    <button data-remodal-action="confirm" class="remodal-confirm">Cerrar</button>
    </div>

    <script src="js/jquery.min.js"></script>
    <script src="js/plugins.js"></script>
    <script src="js/scripts.js"></script>
    <script src="js/main.js"></script>
    
    <script src="js/app/controller/landing/easytabs.js"></script>
    <script src="js/app/controller/landing/events.js"></script>
    <script src="js/app/controller/landing/functions.js"></script>
    <script src="js/app/controller/landing/masonry.js"></script>
    <script src="js/app/controller/landing/nicescroll.js"></script>
    <script src="js/app/controller/landing/selector.js"></script>
    
    <!-- api handler -->
    <script src="js/app/api.js"></script>
    <script src="js/app/custom.js"></script>
    
    <!-- remodal js -->
    <script src="vendor/remodal/remodal.min.js"></script>
    
</body>
</html>