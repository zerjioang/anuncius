<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<!doctype html>
<html lang="es">

    <head>
        <s:include value="/templates/metadata/metadata.generic.jsp">
            <s:param name="description" value="'La revolución de las tiendas online'"></s:param>
            <s:param name="author" value="'anuncius development team'"></s:param>
        </s:include>
        
        <!-- PAGE TITLE -->
        <title>Anuncius - Política de Privacidad</title>

        <s:include value="/templates/metadata/metadata.favicon.jsp" />

        <s:include value="/templates/metadata/metadata.opengraph.jsp">
            <s:param name="title" value="'Anuncius'"></s:param>
            <s:param name="sitename" value="'Anuncius'"></s:param>
            <s:param name="url" value="'https://anunci.us/'"></s:param>
            <s:param name="image" value="'https://static.anunci.us/theme/images/metadata/google.image.png'"></s:param>
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
            <s:param name="author" value="'anuncius development team'"></s:param>
            <s:param name="image" value="'https://static.anunci.us/theme/images/metadata/google.image.png'"></s:param>
        </s:include>

        <s:include value="/templates/metadata/metadata.google.jsp">
            <s:param name="name" value="'Anuncius - La revolución de las tiendas online'"></s:param>
            <s:param name="description" value="'Bienvenido a anuncius. La tienda online donde encontrarás lo que quieras.'"></s:param>
            <s:param name="image" value="'https://static.anunci.us/theme/images/metadata/google.image.png'"></s:param>
        </s:include>

        <s:include value="/templates/css/minimum.css.jsp"/>
    </head>

    <body class="gl-realestate-template">

        <s:include value="/templates/modules/loader/loader.section.jsp"/>

        <!-- SIDE MENU-->
        <s:include value="/templates/modules/aside/login/login.section.jsp" />
        <!-- SIDE MENU END -->

        <!-- HEADER -->
        <s:include value="/templates/modules/header/header.section.jsp"/>
        <!-- HEADER END -->

        <!-- HERO IMAGE -->
        <s:include value="/templates/modules/hero/hero.section.jsp">
            <s:param name="normal" value="'Política de '" />
            <s:param name="bold" value="'cookies'"/>
            <s:param name="image" value="'https://static.anunci.us/theme/images/hero/cookies/hero.jpg'" />
            <s:param name="block" value="'cookies'" />
        </s:include>
        <!-- HERO IMAGE END -->
        
        <section id="cookies">
            <div class="container" style='padding-top: 5%;padding-bottom: 5%;'>
                <div class="row">
                    <div class="col-md-12">
                        <div>
                            <h2>Política de cookies</h2>
                            <h3>¿Que son las cookies?</h3>
                            <p align="justify">Las cookies son pequeños archivos de texto generados por las páginas web que visitas, las cuales contienen los datos de sesión que pueden ser de utilidad más adelante en la página web. Los datos permiten que la página web pueda mantener su información entre las páginas, y también para analizar la forma de interactuar con el sitio. Las cookies son seguras ya que sólo pueden almacenar la información que se puso en su lugar por el navegador, lo que es información que el usuario ha introducido en el navegador o la que se incluye en la solicitud de página. No pueden ejecutar código y no se pueden utilizar para acceder a tu ordenador.<br>Las cookies son esenciales para el funcionamiento de internet, aportando innumerables ventajas en la prestación de servicios interactivos, facilitándole la navegación y usabilidad de la web. Las cookies no pueden dañar su equipo y que estén activadas ayuda a identificar y resolver los errores.<br>Seguidamente, proporcionamos más información para que se entiendan mejor los diferentes tipos de cookies que pueden ser utilizados:
                            </p>
                            <ul>
                                <li>
                                    <strong>Cookies de sesión:</strong>
                                    <p align="justify">
                                        son cookies temporales que permanecen en el archivo de cookies del
                                    navegador hasta que se abandona la página web, por lo que ninguna queda registrada en el disco duro del
                                    usuario. La información obtenida por medio de estas cookies sirve para analizar pautas de tráfico en la web.
                                    A la larga, esto permite proporcionar una mejor experiencia para mejorar el contenido y facilitar su uso.
                                    </p>
                                </li>
                                <li>
                                    <strong>Cookies de permanentes:</strong>
                                    <p align="justify">son almacenadas en el disco duro y la página web
                                    las lee cada vez que se realiza una nueva visita. A pesar de su nombre, una web permanente posee una fecha
                                    de expiración determinada. La cookie dejará de funcionar después de esa fecha. Se utilizan, generalmente,
                                    para facilitar los diferentes servicios que ofrecen las páginas web.
                                    </p>
                                </li>
                            </ul>
                            
                            <p align="justify">A continuación, publicamos una relación de las principales cookies utilizadas en nuestras webs, distinguiendo:</p>
                            
                            <ul>
                                <li>
                                    Las <strong>cookies estrictamente necesarias</strong> como, por ejemplo, aquellas que sirven para una
                                    correcta navegación o las que permiten realizar el pago de bienes o servicios solicitados por el usuario
                                    o cookies que sirven para asegurar que el contenido de la página web se carga eficazmente.
                                </li>
                                <li>
                                    Las <strong>cookies analíticas</strong> con propósitos de mantenimiento periódico y, en aras de garantizar
                                    el mejor servicio posible al usuario, con las que los sitios webs recopilan datos estadísticos de la
                                    actividad.
                                </li>
                                <li>
                                    Las <strong>cookies de terceros:</strong> utilizamos cookies de terceros para analizar información de la
                                    navegación, permitir compartir contenidos en redes sociales y la reproducción de videos alojados en
                                    otro sitio web. En los siguientes enlaces puede consultar la política de cookies de cada una de estas
                                    entidades:
                                    <ul>
                                        <li>
                                            Google Analytics, consultar los siguientes enlaces:
                                            <ul>
                                                <li>
                                                    <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage" target="_blank">
                                                        Utilización de cookies en Google Analytics
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.google.com/analytics/learn/privacy.html" target="_blank">
                                                        Políticas de privacidad en Google Analytics
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.google.com/intl/en-US/policies/technologies/cookies/" target="_blank">
                                                        Políticas de cookies en Google
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            Google Oauth, consultar el siguiente enlace:
                                            <ul>
                                                <li>
                                                    <a href="https://developers.google.com/terms/" target="_blank">
                                                        Términos de servicio de la API de Google
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        


        <!-- FOOTER -->
        <s:include value="/templates/modules/footer/common.footer.jsp" />
        <!-- FOOTER END -->

        <s:include value="/templates/js/minimum.js.jsp"/>

    </body>
</html>