<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="utf-8">
    <!-- PAGE TITLE -->
    <title>Anuncius | La revolución de las tiendas online</title>
    
    <s:include value="/templates/modules/metadata/metadata.generic.jsp">
        <s:param name="description" value="'La revolución de las tiendas online'"></s:param>
        <s:param name="description" value="'Sergio'"></s:param>
    </s:include>

    <s:include value="/templates/modules/metadata/metadata.favicon.jsp" />
    
    <s:include value="/templates/modules/metadata/metadata.opengraph.jsp">
        <s:param name="title" value="'Anuncius'"></s:param>
        <s:param name="sitename" value="'Anuncius'"></s:param>
        <s:param name="url" value="'http://www.anuncius.org/'"></s:param>
        <s:param name="image" value="'http://www.anuncius.org/image.png'"></s:param>
        <s:param name="description" value="'La revolución de las tiendas online'"></s:param>
        <s:param name="address" value="'Avenida de las universidades'"></s:param>
        <s:param name="locality" value="'Bilbao'"></s:param>
        <s:param name="region" value="'Bizkaia'"></s:param>
        <s:param name="code" value="'48003'"></s:param>
        <s:param name="country" value="'Spain'"></s:param>
    </s:include>
    
    <s:include value="/templates/modules/metadata/metadata.twitter.jsp">
        <s:param name="alt" value="'Imagen de bienvenida de Anuncius'"></s:param>
        <s:param name="site" value="'@anuncius'"></s:param>
        <s:param name="title" value="'Anuncius - La revolución de las tiendas online'"></s:param>
        <s:param name="description" value="'Bienvenido a anuncius. La tienda online donde encontrarás lo que quieras.'"></s:param>
        <s:param name="author" value="'@zerjioang'"></s:param>
        <s:param name="image" value="'http://www.anuncius.org/image.jpg'"></s:param>
    </s:include>
    
    <s:include value="/templates/modules/metadata/metadata.google.jsp">
        <s:param name="name" value="'Anuncius - La revolución de las tiendas online'"></s:param>
        <s:param name="description" value="'Bienvenido a anuncius. La tienda online donde encontrarás lo que quieras.'"></s:param>
        <s:param name="image" value="'http://www.anuncius.org/image.jpg'"></s:param>
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
        <s:param name="normal" value="'Política de '" />
        <s:param name="bold" value="'privacidad'"/>
    </s:include>
    <!-- HERO IMAGE END -->
    
    <div class="container" style='padding-top: 5%;padding-bottom: 5%;'>
        <div class="jumbotron">
            <h1 class="display-3">Política de privacidad</h1>
        </div>
        
        <div class="row">
            <div class="col-md-12">
                <div>
                    <h2>Privacidad y protección de datos</h2>
                    <h3>Protección de datos</h3>
                    <p align="justify">En anuncius.org estamos especialmente concienciados acerca de la seguridad y por garantizar la confidencialidad de los datos aportados por nuestros clientes. Nos comprometemos a darte el mejor servicio y la mejor experiencia online. En el momento en que un cliente realiza cualquier interacción a través de nuestro servidor seguro, sus datos personales, domiciliarios, y los relativos a sus compras y formas de pago, en caso de existir, son incorporados a nuestra base de datos para tramitar el pedido. Todo ello realizandose de forma segura usando los estandares de seguridad apropiados para ello. En anuncius.org no tenemos ningún acceso a la información relacionada con el número de la tarjeta de crédito de nuestros clientes. Nosotros únicamente recibimos la confirmación del pago por parte de las instituciones bancarias que tramitan el pedido. En ningún caso, su información personal será cedida a terceros ajenos.
                    </p>
                    <h3>Ley de Protección de Datos:</h3>
                    <p align="justify">
                        De conformidad con lo dispuesto en la Ley Orgánica 15/1999, de Protección de Datos de Carácter Personal (LOPD) y su normativa de desarrollo, el responsable del sitio web, en cumplimiento de lo dispuesto en el art. 5 y 6 de la LOPD, informa a todos los usuarios del sitio web que faciliten o vayan a facilitar sus datos personales, que estos serán incorporados en un fichero automatizado que se encuentra debidamente inscrito en la Agencia Española de Protección de Datos. Los usuarios, mediante la marcación de la casilla habilitada en los formularios de alta habilitados en el sitio web aceptan expresamente y de forma libre e inequívoca que sus datos personales sean tratados por parte de <b>ANUNCIUS</b> para realizar las siguientes finalidades: Cursar su solicitud de usuario registrado y/o su pedido de productos ofrecidos por <b>ANUNCIUS</b>. Una vez confirmada y aceptada su solicitud, el usuario recibirá un correo electrónico de confirmación en la dirección indicada al momento de completar el formulario de registro. Remisión de comunicaciones comerciales publicitarias por e-mail. Dichas comunicaciones comerciales estarán relacionadas con productos o servicios ofrecidos por <b>ANUNCIUS</b>. Realizar estudios estadísticos. Tramitar encargos, solicitudes o responder a las peticiones que sean realizadas por el usuario a través de cualquiera de las formas de contacto que se ponen a disposición del usuario en el sitio web de <b>ANUNCIUS</b>. Remitir el boletín de noticias o newsletter de <b>ANUNCIUS</b>. <b>ANUNCIUS</b> informa y garantiza expresamente a los usuarios que sus datos personales no serán cedidos en ningún caso a terceras compañías, y que siempre que fuera a realizarse algún tipo de cesión de datos personales, de forma previa, se solicitaría el consentimiento expreso, informado, e inequívoco por parte de los titulares. Todos los datos solicitados a través del sitio web son obligatorios, ya que son necesarios para la prestación de un servicio óptimo al usuario. En caso de que no sean facilitados todos los datos, <b>ANUNCIUS</b> no garantiza que la información y servicios facilitados sean completamente ajustados a sus necesidades. <b>ANUNCIUS</b> garantiza en todo caso al usuario el ejercicio de los derechos de acceso, rectificación, cancelación, información y oposición, en los términos dispuestos en la legislación vigente. Por ello, de conformidad con lo dispuesto en la Ley Orgánica 15/1999, de Protección de Datos de Carácter Personal (LOPD) podrá ejercer sus derechos remitiendo una solicitud expresa, junto a una copia de su DNI, a la dirección de correo electrónico que se facilita: <i>contact@anuncius.org</i>
                    </p>
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