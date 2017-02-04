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
                            <h1>Reglas generales de convivencia en anuncius</h1>
                            
                            <div class="container container-static">
                                <p><br><br></p>
                                <h2><strong>1. REGLAS GENERALES DE CONVIVENCIA</strong></h2>
                                <p>wallapop es una gran comunidad de personas que compran y venden como tú. Y como en todas las comunidades a veces es necesario marcar unas normas de convivencia para que todo el mundo esté a gusto.</p>
                                <p>Wallapop utiliza mecanismos para detectar y retirar los productos que supuestamente incumplan con estas prohibiciones.</p>
                                <p><strong>Todo el contenido (incluyendo fotos, títulos, textos) que vaya contra disposiciones legales, buenas costumbres, y/o nuestros términos de uso o que ofenda otros usuarios está sujeto a la eliminación por parte de wallapop.</strong></p>
                                <p>¿Qué se puede vender?</p>
                                <p>En wallapop se puede vender prácticamente de todo. Creemos en las segundas vidas y nos gustan las frikadas, pero hay ciertos límites legales que debemos respetar.<br> Vender a tu primo o una colilla del suelo puede ser gracioso, pero preferimos reservar nuestro espacio a ofertas reales ;)</p>
                                <ul>
                                <li>No está permitido publicar imágenes o descripciones que no se correspondan con el artículo realmente ofrecido.</li>
                                <li>Ten en cuenta que no se puede publicar varias veces el mismo producto o subir el mismo en varios anuncios. wallapop no es una plataforma para uso publicitario, por lo que cualquier anuncio con dicha finalidad será retirado.</li>
                                <li>Aunque tengas muchos productos molones en tu perfil, no está permitido publicar un anuncio dirigiendo a tu perfil, solo un producto por cada anuncio.</li>
                                <li>En todos los anuncios que publiques es necesario asignar la categoría correcta a cada producto y, por supuesto, debe coincidir con el producto anunciado.</li>
                                <li>No está permitido el uso indiscriminado de etiquetas o palabras clave que no se correspondan con el artículo ofertado.</li>
                                <li>Tampoco está permitida la publicación de anuncios cuya única finalidad sea la búsqueda (compro, busco...). Cada día mejoran las herramientas de búsqueda para que sea más sencillo encontrar lo que buscas a la primera.</li>
                                <li>Aunque no pedimos que escribas una novela, sí que recomendamos redactar los anuncios de manera adecuada, facilitando la información necesaria para describir el producto ofertado (composición del producto, estado, etc). Será más fácil que acabes vendiendo.</li>
                                <li>Si estás vendiendo un producto dentro del estado, recomendamos el uso del castellano o de cualquiera de las lenguas oficiales del territorio español para asegurar que todo el mundo encuentre lo que anuncias.</li>
                                <li>El precio del producto debe establecerse de conformidad con el valor actual del producto en el mercado.</li>
                                </ul>
                                <p>a) PRODUCTOS NO PERMITIDOS</p>
                                <ul>
                                <li>Cosas que puedan herir psicológica o emocionalmente, o penalizadas por la ley. Cualquier anuncio de estas características podrá ser bloqueado.</li>
                                <li>Productos recibidos por asistencia del Gobierno.</li>
                                <li>Equipamiento propiedad del Estado (uniformes policiales, extintores, placas de policía, etc).</li>
                                <li>Medicamentos (<a href="app/toc#anchor3">ver Términos de uso 3.X</a>).</li>
                                <li>Productos que deben ser estériles.</li>
                                <li>Comida, bebida o cualquier cosa que se pueda ingerir y de la que no se pueda asegurar calidad, estado ni fecha de caducidad.</li>
                                <li>Cosméticos o artículos de perfumería desprecintados y/o usados.</li>
                                <li>Productos defectuosos vendidos por nuevos.</li>
                                <li>Productos ofertados como gratuitos, sin serlo.</li>
                                <li>Armas</li>
                                <li>Material explosivo</li>
                                <li>Imanes de neodimio</li>
                                <li>Billetes de transporte (bus, metro, avión, tren, etc.)</li>
                                <li>Tabaco, droga, productos tóxicos, peligrosos para los seres humanos, los animales y/o el medio ambiente.</li>
                                <li>Productos enviados bajo pedido, excepto obras de artesanía.</li>
                                <li>Tarjetas regalo y cupones descuento</li>
                                <li>Moneda de curso legal</li>
                                <li>etc</li>
                                </ul>
                                <p>b) SERVICIOS NO PERMITIDOS</p>
                                <ul>
                                <li>Contenido relacionado con publicidad, spamming, cadenas de correos, esquemas piramidales, marketing multinivel , amenazas y/o fraude.</li>
                                <li>Cualquier enlace que dirija o pretenda dirigir tráfico a otras páginas web o apps.</li>
                                <li>Contenido relacionado con acciones ilegales y/o peligrosas.</li>
                                <li>etc</li>
                                </ul>
                                <p>c) VIOLACIÓN DE LA PROPIEDAD INTELECTUAL</p>
                                <ul>
                                <li>Contenido que infrinja la propiedad intelectual o los derechos industriales, incluyendo patentes, marcas registradas, copyrights o secretos comerciales.</li>
                                <li>Falsificaciones.</li>
                                <li>Contenido que infrinja la privacidad de información personal de cualquier tipo.</li>
                                <li>Contenido que infrinja los derechos de privacidad de cualquiera, sea o no usuario de wallapop.</li>
                                <li>Contenido que pertenezca a terceros, como pueden ser fotografías, imágenes extraídas de internet o de catálogo.</li>
                                <li>Venta de documentos originales y/o falsificados o duplicados (carnet de conducir, documentos de identidad, diplomas, o cualquier otro documento emitido desde entidades gubernamentales).</li>
                                <li>etc</li>
                                </ul>
                                <p>d) CONTENIDO NO APROPIADO</p>
                                <ul>
                                <li>No está permitido el uso de imágenes imprecisas o que no muestren correctamente el producto ofertado.</li>
                                <li>No está permitido el contenido sexual de ningún tipo (imágenes y/o descripción). Por lo tanto, no está permitido publicar anuncios relacionados con el sexo, el erotismo o el fetichismo, así como tampoco relacionados con masajes sexuales, servicios de compañía y/o prostitución.</li>
                                <li>No está permitido publicar contenido cuya localización, identidad o condición del producto sea imprecisa o ambigua.</li>
                                <li>No está permitido publicar contenido que pueda conllevar un riesgo para la salud y/o seguridad del comprador del mismo.</li>
                                <li>No está permitido publicar anuncios para denunciar el comportamiento de otros usuarios de la aplicación. En caso de tener problemas con algún comprador o vendedor, puedes reportarlo desde la conversación que hayáis mantenido.</li>
                                <li>No está permitida cualquier manifestación de discriminación, intolerancia y/u ofensas raciales.</li>
                                <li>No está permitida la publicación de anuncios cuyo contenido promueva, apoye o conmemore grupos de odio o intolerancia (Nazi, Neonazi, fascista, etc).</li>
                                <li>No se permite la publicación de productos que puedan incitar a la violencia contra personas, animales o cosas.</li>
                                <li>No está permitida la publicación de bromas, contenido falso, deshonesto, ambiguo, incorrecto o que induzca al engaño o redirija a contenidos no permitidos.</li>
                                <li>No está permitida la publicación de productos relacionados o recuperados de desastres naturales, escenas de crimen, accidentes o tragedias.</li>
                                <li>Productos relacionados con partes del cuerpo humano, fluidos corporales, sangre, restos humanos, artefactos funerarios, morgues o autopsias.</li>
                                <li>Contenido que, de cualquier manera, está relacionado a un individuo menor de 18 años.</li>
                                <li>etc</li>
                                </ul>
                                <p>e) ANIMALES DE CUALQUIER TIPO Y RAZA Y PLANTAS EN EXTINCIÓN</p>
                                <ul>
                                <li>Animales disecados (taxidermia)</li>
                                <li>Collares antiladrido, de puas, de castigo o de ahorque</li>
                                <li>Ahuyentadores ultrasónicos que puedan causar daño a animales domésticos (gatos, perros, etc.)</li>
                                </ul>
                                <p>&nbsp;</p>
                                <h2><strong>2. NUESTRAS CATEGORÍAS</strong></h2>
                                <p>¿Qué incluye cada una de nuestras categorías? Si tienes dudas sobre qué cosa va en cada una, aquí va un pequeño resumen.</p>
                                <p><strong>Tecnología e Informática</strong></p>
                                <p>Bajo esta categoría se pueden encontrar:</p>
                                <ul>
                                <li>Móviles y accesorios para móviles</li>
                                <li>Ordenadores y accesorios para ordenadores</li>
                                <li>Cámaras digitales, videocámaras y sus accesorios</li>
                                <li>Impresoras y Scanners</li>
                                <li>Teclados, ratones y otros accesorios</li>
                                <li>Monitores</li>
                                <li>Ipod, reproductores mp3 y sus accesorios</li>
                                <li>Notebooks</li>
                                <li>Ebooks</li>
                                <li>Manuales de uso de dispositivos electrónicos</li>
                                <li>etc</li>
                                </ul>
                                <p>No se permite vender:</p>
                                <ul>
                                <li>Cigarrillos electrónicos</li>
                                <li>Líquido para cigarrillo electrónico</li>
                                <li>Vaporizadores</li>
                                <li>Productos electrónicos crackeados, pirateados y/o flasheados (consolas incluidas)</li>
                                <li>Emuladores y otros software que permitan ejecutar un programa en un dispositivo para el cual no está diseñado&nbsp;</li>
                                <li>Tecnología Kodi</li>
                                <li>Productos bloqueados (p.ej, móviles)</li>
                                <li>Instrumentación médica de uso profesional</li>
                                <li>Libros digitales</li>
                                <li>Tarjetas SIM o de prepago para móviles</li>
                                <li>Bitcoins y otras monedas virtuales</li>
                                <li>Dispositivos cuyo precio se incremente por contener aplicaciones descatalogadas o retiradas del mercado (p.ej, Flappy Bird, Dogwars, Baby Shake,...)</li>
                                <li>etc</li>
                                </ul>
                                <p><strong>Coches y Motos</strong></p>
                                <p>Bajo esta categoría se pueden encontrar:</p>
                                <ul>
                                <li>Coches</li>
                                <li>Motos</li>
                                <li>Piezas de recambio de coches y motos</li>
                                <li>Caravanas</li>
                                <li>Barcos</li>
                                <li>Cascos para moto</li>
                                <li>etc</li>
                                </ul>
                                <p>No se permite vender:</p>
                                <ul>
                                <li>Gasolina o cualquier tipo de combustible</li>
                                <li>Vehículos sin documentación</li>
                                <li>Enlaces a concesionarios de auto</li>
                                <li>Coches retirados del mercado</li>
                                <li>Servicio de reprogramación de kilometraje o modificación de radares</li>
                                <li>etc</li>
                                </ul>
                                <p><strong>Deporte y Ocio</strong></p>
                                <p>Bajo esta categoría se pueden encontrar:</p>
                                <ul>
                                <li>Bicicletas</li>
                                <li>Patines, monopatines y patinetes</li>
                                <li>Tablas de surf</li>
                                <li>Tiendas de campaña</li>
                                <li>Cañas de pescar y otros utensilios de pesca</li>
                                <li>Raquetas de tenis y padel</li>
                                <li>Calzado deportivo</li>
                                <li>etc</li>
                                </ul>
                                <p>No se permite vender:</p>
                                <ul>
                                <li>Pistolas y fusiles de aire comprimido (airsoft, pistolas BB, etc) y sus municiones</li>
                                <li>Pistolas y fusiles de balas y sus municiones</li>
                                <li>Cuchillos de caza o cuya hoja sea mayor a 10 cm</li>
                                <li>Espadas</li>
                                <li>Ballestas, flechas y arcos</li>
                                <li>Pistolas de paintball</li>
                                <li>Entradas para eventos deportivos</li>
                                <li>Fuegos artificiales</li>
                                <li>Réplicas de ropa deportiva</li>
                                <li>Vitaminas y complementos energéticos para el deporte</li>
                                <li>Trampas de caza</li>
                                <li>Mazas</li>
                                <li>Spray y táser de defensa</li>
                                <li>Cualquier elemento o accesorio que pueda afectar a la integridad física de una persona</li>
                                <li>etc</li>
                                </ul>
                                <p><strong>Muebles, Deco y Jardín</strong></p>
                                <p>Bajo esta categoría se pueden encontrar:</p>
                                <ul>
                                <li>Muebles</li>
                                <li>Cuadros y decoraciones para la casa</li>
                                <li>Lámparas</li>
                                <li>Herramientas domésticas y de jardín</li>
                                <li>Plantas</li>
                                <li>Accesorios para animales</li>
                                <li>etc</li>
                                </ul>
                                <p>No se permite vender:</p>
                                <ul>
                                <li>Palancas</li>
                                <li>Réplicas de muebles</li>
                                <li>etc</li>
                                </ul>
                                <p><strong>Consolas y Videojuegos</strong></p>
                                <p>Bajo esta categoría se pueden encontrar:</p>
                                <ul>
                                <li>Consolas</li>
                                <li>Videojuegos</li>
                                <li>Accesorios de consolas (mandos, etc)</li>
                                <li>etc</li>
                                </ul>
                                <p>No se permite vender:</p>
                                <ul>
                                <li>Consolas flasheadas (pirateadas)</li>
                                <li>Roms o copias de seguridad de juegos</li>
                                <li>Juegos digitales</li>
                                <li>FIFA coins</li>
                                <li>Bitcoins y otras monedas digitales</li>
                                <li>Intercambios Pokemon</li>
                                <li>Cuentas digitales (Steam, Clash of Clans, etc)</li>
                                <li>etc</li>
                                </ul>
                                <p><strong>Libros, Películas y Música</strong></p>
                                <p>Bajo esta categoría se pueden encontrar:</p>
                                <ul>
                                <li>Libros</li>
                                <li>Discos (cd, cassettes, vinilos)</li>
                                <li>Instrumentos musicales (guitarras, teclados, etc)</li>
                                <li>DVD, Blu-ray</li>
                                <li>etc</li>
                                </ul>
                                <p>No se permite vender:</p>
                                <ul>
                                <li>Pornografia</li>
                                <li>Películas pirateadas</li>
                                <li>Música pirateada</li>
                                <li>Copias de libros</li>
                                <li>Entradas para conciertos o espectáculos (tampoco con la estructura “vendo boli y regalo entrada”)</li>
                                <li>Libros de contenido nazi o fascista (Mein Kampf).</li>
                                <li>etc</li>
                                </ul>
                                <p><strong>Moda y Accesorios</strong></p>
                                <p>Bajo esta categoría se pueden encontrar:</p>
                                <ul>
                                <li>Ropa</li>
                                <li>Calzado (no deportivo)</li>
                                <li>Bisutería</li>
                                <li>Perfumería y cosmética</li>
                                <li>Relojes</li>
                                <li>Disfraces</li>
                                <li>Monederos</li>
                                <li>Maletas y bolsos</li>
                                <li>Gafas de sol y graduadas</li>
                                <li>Accesorios</li>
                                <li>etc</li>
                                </ul>
                                <p>No se permite vender:</p>
                                <ul>
                                <li>Réplicas de artículos inspirados en una marca sin permiso de la misma</li>
                                <li>Prendas realizadas con pieles de animales en peligro de extinción</li>
                                <li>Uniformes o accesorios nazis y/o fascistas</li>
                                <li>Cosméticos y/o perfumes desprecintados y/o usados</li>
                                <li>Juguetes eróticos</li>
                                <li>Testers o muestras promocionales de cosmética y/o perfumería</li>
                                <li>Lentes de contacto desprecintadas</li>
                                <li>etc</li>
                                </ul>
                                <p><strong>Juguetes, Niños y Bebés</strong></p>
                                <p>Bajo esta categoría se pueden encontrar:</p>
                                <ul>
                                <li>Pañales</li>
                                <li>Biberones</li>
                                <li>Ropa de bebé</li>
                                <li>Ropa de niño</li>
                                <li>Material escolar</li>
                                <li>Juguetes y muñecas</li>
                                <li>Juegos de mesa</li>
                                <li>Camas infantiles, cunas y carritos</li>
                                <li>Accesorios para bebés</li>
                                <li>etc</li>
                                </ul>
                                <p>No se permite vender:</p>
                                <ul>
                                <li>Leche en polvo o cualquier complemento alimenticio</li>
                                <li>Leche materna</li>
                                <li>Cochecitos de bebé retirados del mercado</li>
                                <li>etc</li>
                                </ul>
                                <p><strong>Inmobiliaria</strong></p>
                                <p>Bajo esta categoría se pueden encontrar:</p>
                                <ul>
                                <li>Inmuebles en venta</li>
                                <li>Inmuebles en alquiler</li>
                                <li>Parkings o plazas de parking</li>
                                <li>Habitaciones en alquiler</li>
                                <li>Traspaso de actividades comerciales</li>
                                <li>etc</li>
                                </ul>
                                <p>No se permite vender:</p>
                                <ul>
                                <li>Servicios de tramitación de contratos de vivienda</li>
                                <li>Timesharing</li>
                                <li>etc</li>
                                </ul>
                                <p><strong>Electrodomésticos</strong></p>
                                <p>Bajo esta categoría se pueden encontrar:</p>
                                <ul>
                                <li>Televisores</li>
                                <li>Lavadoras</li>
                                <li>Secadoras</li>
                                <li>Estufas</li>
                                <li>Batidoras</li>
                                <li>Neveras</li>
                                <li>Calentadores</li>
                                <li>Licuadoras</li>
                                <li>Exprimidoras</li>
                                <li>Tostadoras</li>
                                <li>Microondas</li>
                                <li>Aspiradoras</li>
                                <li>Aparatos de aire acondicionado</li>
                                <li>Utensilios de cocina</li>
                                <li>etc</li>
                                </ul>
                                <p>No se permite vender:</p>
                                <ul>
                                <li>Electrodomésticos, mobiliario y/u otros productos que hayan sido retirados del mercado por considerarse peligrosos y/o defectuosos</li>
                                <li>etc</li>
                                </ul>
                                <p><strong>Servicios</strong></p>
                                <p>Bajo esta categoría se pueden encontrar:</p>
                                <ul>
                                <li>Electricistas</li>
                                <li>Jardineros</li>
                                <li>Pintores</li>
                                <li>Transportes y mudanzas</li>
                                <li>Reformas</li>
                                <li>Reparación electrónica</li>
                                <li>Fotógrafos</li>
                                <li>Profesores particulares</li>
                                <li>Clases</li>
                                <li>Estética</li>
                                <li>Peluquería</li>
                                <li>Artesanos</li>
                                <li>etc</li>
                                </ul>
                                <p>No se permite vender:</p>
                                <ul>
                                <li>Ofertas para la venta y/o intercambio de productos ilegales</li>
                                <li>Masajes eróticos</li>
                                <li>Ofertas de prostitución, chicas de compañía o similares</li>
                                <li>Servicios de magia negra, tarot, vudú o similares</li>
                                <li>Venta y distribución de alimentos</li>
                                <li>Mercadeo multinivel y de redes (p.ej: Avon, Herbalife…)</li>
                                <li>Enlaces a otras plataformas de compra o sitios web de vendedores profesionales</li>
                                <li>Publicidad sobre eventos y/o mercadillos</li>
                                <li>Servicios regulados por el gobierno</li>
                                <li>Servicios de modificación de dispositivos electrónicos</li>
                                <li>Servicios de redistribución de software para los que se necesita una licencia</li>
                                <li>Servicios de desbloqueo de redes wifi</li>
                                <li>Concesión de préstamos</li>
                                <li>Productos ofrecidos por&nbsp;empresas de empeños</li>
                                <li>Publicidad de subastas o pujas</li>
                                <li>Participaciones de loterías, sorteos o rifas</li>
                                <li>Multipropiedades</li>
                                <li>Servicios de venta de seguidores para redes sociales</li>
                                <li>Servicios de venta de canales de YouTube, paginas web, dominios</li>
                                <li>Servicios de tipstering y consejos sobre las apuestas deportivas</li>
                                <li>Servicios con el objetivo de subir el nivel de juegos digitales&nbsp;</li>
                                <li>Servicios de conductor/taxi/safari Pokemon Go</li>
                                <li>etc</li>
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