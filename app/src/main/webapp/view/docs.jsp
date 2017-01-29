<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<!doctype html>
<html lang="es">
    <head>
        <s:include value="/templates/metadata/metadata.generic.jsp">
            <s:param name="description" value="'Detalles y documentación técnica para usuarios y desarrolladores, ejemplos y ayuda'"></s:param>
            <s:param name="author" value="'anuncius development team'"></s:param>
        </s:include>
        
        <!-- PAGE TITLE -->
        <title>Anuncius - Documentación</title>

        <s:include value="/templates/metadata/metadata.favicon.jsp" />

        <s:include value="/templates/metadata/metadata.opengraph.jsp">
            <s:param name="title" value="'Anuncius - Documentación'"></s:param>
            <s:param name="sitename" value="'Anuncius'"></s:param>
            <s:param name="url" value="'https://anunci.us/'"></s:param>
            <s:param name="image" value="'https://static.anunci.us/img/metadata/google.image.png'"></s:param>
            <s:param name="description" value="'Detalles y documentación técnica para usuarios y desarrolladores, ejemplos y ayuda'"></s:param>
            <s:param name="address" value="'Avenida de las universidades'"></s:param>
            <s:param name="locality" value="'Bilbao'"></s:param>
            <s:param name="region" value="'Bizkaia'"></s:param>
            <s:param name="code" value="'48003'"></s:param>
            <s:param name="country" value="'Spain'"></s:param>
        </s:include>

        <s:include value="/templates/metadata/metadata.twitter.jsp">
            <s:param name="alt" value="'Imagen de bienvenida de Anuncius'"></s:param>
            <s:param name="site" value="'@anuncius'"></s:param>
            <s:param name="title" value="'Anuncius - Documentación'"></s:param>
            <s:param name="description" value="'Detalles y documentación técnica para usuarios y desarrolladores, ejemplos y ayuda'"></s:param>
            <s:param name="author" value="'anuncius development team'"></s:param>
            <s:param name="image" value="'https://static.anunci.us/img/metadata/google.image.png'"></s:param>
        </s:include>

        <s:include value="/templates/metadata/metadata.google.jsp">
            <s:param name="name" value="'Anuncius - Documentación'"></s:param>
            <s:param name="description" value="'Detalles y documentación técnica para usuarios y desarrolladores, ejemplos y ayuda'"></s:param>
            <s:param name="image" value="'https://static.anunci.us/img/metadata/google.image.png'"></s:param>
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
            <s:param name="normal" value="'Documentación '" />
            <s:param name="bold" value="'técnica'"/>
            <s:param name="image" value="'https://static.anunci.us/theme/images/docs/hero/code.min.jpg'" />
            <s:param name="block" value="'docs'" />
        </s:include>
        <!-- HERO IMAGE END -->

        <section id="docs">
            <div class="container" style='padding-top: 5%;padding-bottom: 5%;'>
                <div class="row">
                    <div class="col-md-12">
                        <div>
                            <h1>Documentación técnica y ayuda</h1>
                            <section id="docs">
                                <h2>Documentación técnica</h2>
                                <div>
                                    <h3>Defición de la API pública. Swagger</h3>
                                        <p align="justify">
                                            La defición y especificación de la API pública se encuentra detallada mediante Swagger. Su fichero <tt>json</tt> de definición se encuentra en la siguiente URL:
                                            </br>
                                            <code>
                                                https://api.anunci.us/api/swagger.json
                                            </code>
                                            </br>
                                            La especificación se puede consultar en el siguiente enlace:
                                            <a href="https://swagger.anunci.us" target="_blank">https://swagger.anunci.us/</a>
                                            haciendo uso del <tt>json</tt> proporcionado anteriormente.
                                        </p>

                                        <h3>Opensearch</h3>

                                        <p align="justify">
                                            OpenSearch es un conjunto de tecnologías que permiten publicar los resultados de una búsqueda en un formato adecuado para la sindicación y agregación. Es una forma para que las páginas web y los motores de búsqueda publiquen sus resultados de forma accesible. OpenSearch 1.0 fue publicado en marzo de 2005. Los borradores de la versión 1.1 se publicaron entre septiembre y diciembre de 2005.
                                        </p>
                                        <p align="justify">
                                            La plataforma incluye integración con el estandar Opensearch mediante el fichero <tt>opensearch.xml</tt> situado en <a href="https://static.anunci.us/opensearchdescription.xml" target="_blank">https://static.anunci.us/opensearchdescription.xml</a>.
                                        Dicha configuración se carga mediante el siguiente código:
                                            </br>
                                            <pre>
&lt;link rel=&quot;search&quot;
&nbsp;&nbsp; &nbsp; &nbsp;type=&quot;application/opensearchdescription+xml&quot;
&nbsp;&nbsp; &nbsp; &nbsp;href=&quot;https://static.anunci.us/opensearchdescription.xml&quot;
&nbsp;&nbsp; &nbsp; &nbsp;title=&quot;Busqueda rapida en Anunci.us&quot; /&gt;
                                            </pre>
                                        </p>

                                        <h3>Optimización de recursos</h3>
                                        <p align="justify">
                                            La plataforma hace uso de una serie de estrategias para mejorar el tiempo de carga de las páginas con el objetivo de minimizar ese tiempo lo máximo posible. Algunas de las estrategias que se usan son:
                                        </p>
                                        <h4>DNS-prefetch</h4>
                                        <p align="justify">
                                            El primer paso que tiene que realizar el navegador cuando un usuario quiere acceder a una página web, es convertir el nombre de dominio de la url a la que se accede en su correspondiente dirección IP. Esto es lo que que se conoce como resolución DNS (DNS resolution, en donde DNS son las siglas de “Domain Name Service”).
                                            </br>
                                            El tiempo que suele tardar el servidor DNS es relativamente pequeño, en torno a unas decenas de milisegundos. Pero el contenido de la página puede hacer referencia a urls externas desde las que se descargan imágenes, código css y javascript, etc. Cada uno de los nombres de dominio que aparecen en el contenido de la página debe ser convertido a su dirección IP con una nueva petición al servidor de nombres, lo que eventualmente puede suponer un porcentaje significativo del tiempo total de carga de la página., y es aquí donde entra el DNS prefetch.
                                            </br>
                                            Para minimizar el impacto del tiempo de resolución DNS sobre el tiempo total de carga de la página se emplea la técnica de “DNS prefetch” (precarga de DNS):
                                            </br>
                                            En la cabecera del código html de la página, se definen los nombres de dominio que se usarán en las peticiones HTTP.
                                            <pre>
&lt;!-- dns prefetch --&gt;
&lt;link rel=&quot;dns-prefetch&quot; href=&quot;//static.anunci.us&quot;&gt;
&lt;link rel=&quot;dns-prefetch&quot; href=&quot;//anunci.us&quot;&gt;
&lt;link rel=&quot;dns-prefetch&quot; href=&quot;//api.anunci.us&quot;&gt;
&lt;link rel=&quot;dns-prefetch&quot; href=&quot;//swagger.anunci.us&quot;&gt;
&lt;link rel=&quot;dns-prefetch&quot; href=&quot;//dashboard.anunci.us&quot;&gt;
&lt;link rel=&quot;dns-prefetch&quot; href=&quot;//fonts.gstatic.com&quot;&gt;
&lt;link rel=&quot;dns-prefetch&quot; href=&quot;//fonts.googleapis.com&quot;&gt;
&lt;link rel=&quot;dns-prefetch&quot; href=&quot;//apis.google.com&quot;&gt;
&lt;link rel=&quot;dns-prefetch&quot; href=&quot;//www.google-analytics.com&quot;&gt;
                                            </pre>
                                        </p>

                                        <h4>Carga <tt>async</tt> del javascript</h4>
                                        <p align="justify">
                                            Async como su nombre indica implica que la carga del script será totalmente asíncrona. Esto permite que el navegador cargue y ejecute el script en paralelo, sin esperar que la página termine de cargar.
                                        </p>
                                </div>
                            </section>
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