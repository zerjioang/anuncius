<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<!doctype html>
<html lang="es">
    <head>
        <s:include value="/templates/metadata/metadata.generic.jsp">
            <s:param name="description" value="'Reglas generales de uso y convivencia de anuncius'"></s:param>
            <s:param name="author" value="'anuncius development team'"></s:param>
        </s:include>
        
        <!-- PAGE TITLE -->
        <title>Anuncius - Reglas</title>

        <s:include value="/templates/metadata/metadata.favicon.jsp" />

        <s:include value="/templates/metadata/metadata.opengraph.jsp">
            <s:param name="title" value="'Anuncius - Documentación'"></s:param>
            <s:param name="sitename" value="'Anuncius'"></s:param>
            <s:param name="url" value="'https://anunci.us/'"></s:param>
            <s:param name="image" value="'https://static.anunci.us/theme/images/metadata/google.image.png'"></s:param>
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
            <s:param name="image" value="'https://static.anunci.us/theme/images/metadata/google.image.png'"></s:param>
        </s:include>

        <s:include value="/templates/metadata/metadata.google.jsp">
            <s:param name="name" value="'Anuncius - Documentación'"></s:param>
            <s:param name="description" value="'Detalles y documentación técnica para usuarios y desarrolladores, ejemplos y ayuda'"></s:param>
            <s:param name="image" value="'https://static.anunci.us/theme/images/metadata/google.image.png'"></s:param>
        </s:include>

        <s:include value="/templates/css/minimum.css.jsp"/>
        <style>
            p, li{
                padding: 10px;
                text-align: justify;
            }
            ul{
                padding-left: 5%;
                text-align: justify;
            }
        </style>
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
            <s:param name="normal" value="'Reglas de '" />
            <s:param name="bold" value="'convivencia'"/>
            <s:param name="image" value="'https://static.anunci.us/theme/images/docs/hero/code.min.jpg'" />
            <s:param name="block" value="'rules'" />
        </s:include>
        <!-- HERO IMAGE END -->

        <section id="rules">
            <div class="container" style='padding-top: 5%;padding-bottom: 5%;'>
                <div class="row">
                    <div class="col-md-12">
                        <div>
                            <h2>Consejos de seguridad</h2>
                            <div class="container container-static">
                                <p style="font-size: 18px; font-weight: normal;">¡La seguridad ante todo!</p>
                                <p style="font-size: 18px; font-weight: normal;">Antes de empezar a comprar y vender, te recomendamos que leas estos consejos, que ayudarán a mejorar tu experiencia en anuncius.</p>
                                <ul style="font-size: 18px; font-weight: normal;">
                                    <li>
                                        <p>anuncius está pensada para comprar y vender cerca de ti. Por eso te recomendamos que quedes siempre en persona para realizar la transacción y evites compras a distancia. Revisa bien el producto y cómpralo cuando compruebes que está todo tal y como esperabas.</p>
                                    </li>
                                    <li>
                                        <p>Si al chatear con la persona no te inspira confianza o dudas de la veracidad de su perfil, busca otro vendedor, seguro encuentras a otro usuario que te inspire más confianza y seguridad.</p>
                                    </li>
                                    <li>
                                        <p>Si -pese a que te recomendamos lo contrario- prefieres comprar o vender a distancia, asegúrate que la otra persona y el método de pago ofrece garantías para confiar en ellos.</p>
                                    </li>
                                    <li>
                                        <p>Evita hacer transferencias o métodos de pago que no permitan verificar el producto antes de comprarlo.</p>
                                    </li>
                                    <li>
                                        <p>Mira el perfil del vendedor o comprador para ver sus valoraciones anteriores y su verificación de perfil o el resto de sus productos.</p>
                                    </li>
                                    <li>
                                        <p>No te fíes de productos con precios ridículamente bajos o con fotos que no parezcan reales o que sean de catálogo. En anuncius hay gangas, sí, ¡pero todo tiene un límite!</p>
                                    </li>
                                    <li>Evita los anuncios con textos tipo "solo respondo correos electrónicos", no son muy de fiar</li>
                                    <li>Evita los anuncios escritos en lenguas extranjeras o con traducciones erróneas</li>
                                </ul>
                                <p style="font-size: 18px; font-weight: normal;">CONSEJOS RELATIVOS A LA COMPRA</p>
                                <ul style="font-size: 18px; font-weight: normal;">
                                    <li>Realiza las transacciones personalmente, tanto el pago como la recogida del objeto.</li>
                                    <li>No enviar dinero mediante agencias de trasnferencias</li>
                                    <li>No es recomendable comprar productos que provengan supuestamente del extranjero.&nbsp;</li>
                                    <li>No enviar avances de los pagos sin comprobar el producto</li>
                                    <li>Te recomendamos realizar todas las gestiones y conversaciones mediante a nuestro chat interno.&nbsp;</li>
                                </ul>
                                <p style="font-size: 18px; font-weight: normal;">CONSEJOS RELATIVOS A LA VENTA</p>
                                <ul style="font-size: 18px; font-weight: normal;">
                                    <li>Desconfiar de las propuestas de compra a precios superiores a los indicados en la oferta.&nbsp;</li>
                                    <li>Envitar los pagos a distancia o mediante transferencias.</li>
                                    <li>Queda terminantemente prohibida la venta de los productos detallados en nuestra sección "<a href="https://anunci.us/rules">Reglas de convivencia</a>".</li>
                                    <li>Queda terminantemente prohibida la venta de objetos robados.</li>
                                </ul>
                            </div>
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