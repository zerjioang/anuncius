<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<!doctype html>
<html lang="es">

    <head>        
        <s:include value="/templates/metadata/metadata.generic.jsp">
            <s:param name="description" value="'Términos y condiciones de Anuncius'"></s:param>
            <s:param name="author" value="'anuncius development team'"></s:param>
        </s:include>
        
        <!-- PAGE TITLE -->
        <title>Anuncius - Términos y condiciones</title>

        <s:include value="/templates/metadata/metadata.favicon.jsp" />

        <s:include value="/templates/metadata/metadata.opengraph.jsp">
            <s:param name="title" value="'Anuncius - Términos y condiciones'"></s:param>
            <s:param name="sitename" value="'Anuncius'"></s:param>
            <s:param name="url" value="'https://anunci.us/'"></s:param>
            <s:param name="image" value="'https://static.anunci.us/img/metadata/google.image.png'"></s:param>
            <s:param name="description" value="'Términos y condiciones de Anuncius'"></s:param>
            <s:param name="address" value="'Avenida de las universidades'"></s:param>
            <s:param name="locality" value="'Bilbao'"></s:param>
            <s:param name="region" value="'Bizkaia'"></s:param>
            <s:param name="code" value="'48003'"></s:param>
            <s:param name="country" value="'Spain'"></s:param>
        </s:include>

        <s:include value="/templates/metadata/metadata.twitter.jsp">
            <s:param name="alt" value="'Imagen de bienvenida de Anuncius'"></s:param>
            <s:param name="site" value="'@anuncius'"></s:param>
            <s:param name="title" value="'Anuncius - Términos y condiciones'"></s:param>
            <s:param name="description" value="'Términos y condiciones de Anuncius.'"></s:param>
            <s:param name="author" value="'anuncius development team'"></s:param>
            <s:param name="image" value="'https://static.anunci.us/img/metadata/google.image.png'"></s:param>
        </s:include>

        <s:include value="/templates/metadata/metadata.google.jsp">
            <s:param name="name" value="'Anuncius - Términos y condiciones'"></s:param>
            <s:param name="description" value="'Términos y condiciones de Anuncius.'"></s:param>
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
            <s:param name="normal" value="'Términos y condiciones'" />
            <s:param name="bold" value=""/>
            <s:param name="image" value="'https://static.anunci.us/img/hero/conditions/hero.jpg'" />
            <s:param name="block" value="'conditions'" />
        </s:include>
        <!-- HERO IMAGE END -->

        <section id="conditions">
            <div class="container" style='padding-top: 5%;padding-bottom: 5%;'>
                <div class="jumbotron">
                    <h1 class="display-3">Términos y condiciones</h1>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div>
                            <h1>Condiciones generales de uso
                            </h1>
                            <h2>CONDICIONES GENERALES DE USO
                            </h2>
                            <p align="justify">
                                En cumplimiento a lo establecido por la legislación española en la Ley de Servicios de la Sociedad de la Información (LSSI) publicada en el Boletín Oficial del Estado (B.O.E.) del 12 de Julio de 2002, se publica el siguiente documento
                            </p>
                            <h3>1. Datos identificativos
                            </h3>
                            <p align="justify">
                                anunci.us es un grupo independiente de profesionales especializados en las TIC que actuan como asesores en diversos proyectos para clientes de todo tipo.
                            </p>
                            <h3>2. Descripción del servicio
                            </h3>
                            <p align="justify">
                                Toda persona que acceda a este sitio web asume el papel de usuario, comprometiéndose a la observancia y cumplimiento riguroso de las disposiciones aquí dispuestas, así como a cualquiera otra disposición legal que fuera de aplicación.
                            </p>
                            <p align="justify">
                                <b>ANUNCIUS</b>, se reserva el derecho a modificar cualquier tipo de información que pudiera aparecer en el sitio web, sin que exista obligación de preavisar o poner en conocimiento de los usuarios dichas obligaciones, entendiéndose como suficiente con la publicación en el sitio web del prestador. Uno de dichos servicios es el de optimizar el tiempo de carga de las paginas web, proporcionar herramientas de desarrollo opensource, etc. Los usuarios de <b>ANUNCIUS</b> pueden crear y adquirir los productos y o servicios que sean gratuitos para su propio uso exclusivamente sin coste alguno. Los usuarios que quieran usar dichos productos o servicios que no esten declarados como opensource para obtener beneficio o como herramientas de desarrollo, de trabajo, etc para cualquier persona fisica o juridica deberán aceptar las Condiciones de uso de software de negocio al momento de suscribirse a este servicio. <b>ANUNCIUS</b> permite a los usuarios navegar por su web y suscibirse a los servicios disponibles. Tanto los públicos como los privados.
                            </p>
                            <h3>3. Uso de la web anunci.us y del servicio
                            </h3>
                            <h4>3.1 Edad mínima
                            </h4>
                            <p align="justify">
                                Los usuarios de <b>ANUNCIUS</b>, podrán ser tanto los mayores, como los menores de edad, pero aquéllos que adquieran cualquiera de los servicios/productos de pago ofrecidos, deberán ser mayores de edad, ya que, para contraer obligaciones y ser firmantes de un contrato objeto de compraventa, deberán tener como mínimo 18 años (Art.1263 del Código Civil)
                            </p>
                            <h4>3.2 Licencia de uso de la web y del servicio de <b>ANUNCIUS</b>
                            </h4>
                            <p align="justify">
                                <b>ANUNCIUS</b> ofrece una licencia limitada y revocable a acceder y usar su web y sus servicios de conformidad con sus Condiciones Generales de Uso. Esta licencia no incluye el derecho a recolectar o usar información de la web para objetivos prohibidos por <b>ANUNCIUS</b>, competir con <b>ANUNCIUS</b>, crear gráficos basados en los contenidos de <b>ANUNCIUS</b>, o guardar una copia de la web con fines lucrativos.
                            </p>
                            <h4>3.3 Servicios ofrecidos por terceros
                            </h4>
                            <p align="justify">
                                <b>ANUNCIUS</b> puede usar material de terceros para ofrecer determinados servicios a través de anunci.us. <b>ANUNCIUS</b> no controla a estos terceros y sus servicios, y aceptas que <b>ANUNCIUS</b> no tiene ninguna responsabilidad en cómo tú puedes llegar a usar dichos servicios. Estos terceros tienen su propias Condiciones Generales de Uso. En caso de conflicto con <b>ANUNCIUS</b>, prevalecerán las Condiciones Generales de Uso de <b>ANUNCIUS</b>.
                            </p>
                            <p align="justify">
                                <b>ANUNCIUS</b>, se exime de cualquier tipo de responsabilidad derivada de la información publicada en su sitio web, siempre que esta información haya sido manipulada o introducida por un tercero ajeno al mismo.
                            </p>
                            <p align="justify">
                                Desde el sitio web del cliente es posible que se enlace a contenidos de terceros sitios web. Dado que <b>ANUNCIUS</b>, no puede controlar siempre los contenidos introducidos por los terceros en sus sitios web, ésta no asume ningún tipo de responsabilidad respecto a dichos contenidos. En todo caso, <b>ANUNCIUS</b>, manifiesta que procederá a la retirada inmediata de cualquier contenido que pudiera contravenir la legislación nacional o internacional, la moral o el orden público, procediendo a la retirada inmediata del enlace a dicho sitio web, poniendo en conocimiento de las autoridades competentes el contenido en cuestión.
                            </p>
                            <p align="justify">
                                <b>ANUNCIUS</b>, no se hace responsable de la información y contenidos almacenados, a título enunciativo pero no limitativo, en foros, chats, generadores de blogs, comentarios, redes sociales o cualesquiera otro medio que permita a terceros publicar contenidos de forma independiente en la página web del prestador. No obstante y en cumplimiento de lo dispuesto en el art. 11 y 16 de la LSSI-CE, el prestador se pone a disposición de todos los usuarios, autoridades y fuerzas de seguridad, y colaborando de forma activa en la retirada o en su caso bloqueo de todos aquellos contenidos que pudieran afectar o contravenir la legislación nacional, o internacional, derechos de terceros o la moral y el orden público. En caso de que el usuario considere que existe en el sitio web algún contenido que pudiera ser susceptible de esta clasificación, se ruega lo notifique de forma inmediata al administrador del sitio web.
                            </p>
                            <p align="justify">
                                Este sitio web ha sido revisado y probado para que funcione correctamente. En principio, puede garantizarse el correcto funcionamiento los 365 días del año, 24 horas al día. No obstante, el prestador no descarta la posibilidad de que existan ciertos errores de programación, o que acontezcan causas de fuerza mayor, catástrofes naturales, huelgas, o circunstancias semejantes que hagan imposible el acceso a la página web.
                            </p>
                            <h3>4. Reglas generales
                            </h3>
                            <h4>4.1 Uso prohibido
                            </h4>
                            <p align="justify">
                                No puedes intentar causar ningún daño a la web o al servicio de anunci.us. Por ejemplo, y sin ser esta lista completa ni exhaustiva, no puedes
                            </p>
                            a)    Entorpecer el servicio de <b>ANUNCIUS</b> usando malware u otros programas diseñados para causar daño a cualquier software o hardware.
                            b)    Modificar o crear versiones de cualquier tecnología usada en <b>ANUNCIUS</b> sin previa autorización por los responsables.
                            c)    Usar cualquier tipo de script, robot o tecnología para monitorizar la web, a excepción de contadores o servicios tipo “Google Analytics”.
                            d)    Recolectar emails u otra información a través del servicio de <b>ANUNCIUS</b>.
                            e)    Hacerte pasar por otra persona o entidad.
                            <h4>4.2 Privacidad y protección de datos
                            </h4>
                            <p align="justify">
                                En anunci.us estamos especialmente concienciados acerca de la seguridad y por garantizar la confidencialidad de los datos aportados por nuestros clientes. Nos comprometemos a darte el mejor servicio y la mejor experiencia online
                            </p>
                            <p align="justify">
                                En el momento en que un cliente realiza un pedido a través de nuestro servidor seguro, sus datos personales, domiciliarios, y los relativos a sus compras y formas de pago, son incorporados a nuestra base de datos para tramitar el pedido
                            </p>
                            <p align="justify">
                                En anunci.us no tenemos ningún acceso a la información relacionada con el número de la tarjeta de crédito de nuestros clientes. Nosotros únicamente recibimos la confirmación del pago por parte de las instituciones bancarias que tramitan el pedido
                            </p>
                            <p align="justify">
                                En ningún caso, su información personal será cedida a terceros ajenos a los integrantes de la plataforma ANUNCIUS
                            </p>
                            <h5>Ley de Protección de Datos:
                            </h5>
                            <p align="justify">
                                De conformidad con lo dispuesto en la Ley Orgánica 15/1999, de Protección de Datos de Carácter Personal (LOPD) y su normativa de desarrollo, el responsable del sitio web, en cumplimiento de lo dispuesto en el art. 5 y 6 de la LOPD, informa a todos los usuarios del sitio web que faciliten o vayan a facilitar sus datos personales, que estos serán incorporados en un fichero automatizado que se encuentra debidamente inscrito en la Agencia Española de Protección de Datos
                            </p>
                            Los usuarios, mediante la marcación de la casilla habilitada en los formularios de alta habilitados en el sitio web aceptan expresamente y de forma libre e inequívoca que sus datos personales sean tratados por parte de <b>ANUNCIUS</b> para realizar las siguientes finalidades: 
                            Cursar su solicitud de usuario registrado y/o su pedido de productos ofrecidos por <b>ANUNCIUS</b>. Una vez confirmada y aceptada su solicitud, el usuario recibirá un correo electrónico de confirmación en la dirección indicada al momento de completar el formulario de registro. 
                            Remisión de comunicaciones comerciales publicitarias por e-mail. Dichas comunicaciones comerciales estarán relacionadas con productos o servicios ofrecidos por <b>ANUNCIUS</b>. 
                            Realizar estudios estadísticos. 
                            Tramitar encargos, solicitudes o responder a las peticiones que sean realizadas por el usuario a través de cualquiera de las formas de contacto que se ponen a disposición del usuario en el sitio web de <b>ANUNCIUS</b>. 
                            Remitir el boletín de noticias o newsletter de <b>ANUNCIUS</b>. 
                            <b>ANUNCIUS</b> informa y garantiza expresamente a los usuarios que sus datos personales no serán cedidos en ningún caso a terceras compañías, y que siempre que fuera a realizarse algún tipo de cesión de datos personales, de forma previa, se solicitaría el consentimiento expreso, informado, e inequívoco por parte de los titulares. 
                            Todos los datos solicitados a través del sitio web son obligatorios, ya que son necesarios para la prestación de un servicio óptimo al usuario. En caso de que no sean facilitados todos los datos, <b>ANUNCIUS</b> no garantiza que la información y servicios facilitados sean completamente ajustados a sus necesidades. 
                            <b>ANUNCIUS</b> garantiza en todo caso al usuario el ejercicio de los derechos de acceso, rectificación, cancelación, información y oposición, en los términos dispuestos en la legislación vigente. Por ello, de conformidad con lo dispuesto en la Ley Orgánica 15/1999, de Protección de Datos de Carácter Personal (LOPD) podrá ejercer sus derechos remitiendo una solicitud expresa, junto a una copia de su DNI, a la dirección de correo electrónico: contact@anunci.us
                            <h4>4.3 Condiciones de compra
                            </h4>
                            <h5>Sistema de venta
                            </h5>
                            <p align="justify">
                                Para realizar una compra, el usuario puede hacernos llegar su pedido por Internet a través del sistema implementado en nuestro sitio web anunci.us o a traves de contacto directo por email o teléfono
                            </p>
                            <h5>Impuestos aplicables
                            </h5>
                            Los precios de los productos expuestos en la página web de anunci.us, incluyen el Impuesto sobre el Valor Añadido (IVA) que, en su caso, sea procedente aplicar.
                            Las compras que vayan a ser entregadas dentro del territorio de cualquiera de los estados miembros de la Unión Europea estarán sujetas a IVA.
                            Las compras que deban ser entregadas en territorios de Estados no miembros de la Unión Europea, Ceuta o Melilla estarán exentas del IVA.
                            <h5>Forma de pago
                            </h5>
                            Al formular el pedido, el cliente puede elegir libremente abonar las compras que realice mediante tarjeta (American Express, MasterCard, Visa, Visa Electrón, etc); contra-reembolso (sólo en España y algunos países de la Unión Europea), mediante transferencia bancaria y mediante PayPal. En determinados casos y para prevenir posibles fraudes anunci.us se reserva la posibilidad de solicitar a un cliente una forma de pago concreta.
                            <h3>5. Garantía legal, devoluciones y cambios
                            </h3>
                            <h4>5.1. Garantía legal
                            </h4>
                            <p align="justify">
                                En caso de producto defectuoso, anunci.us procederá, según corresponda, a la reparación, sustitución, rebaja del precio o resolución del contrato, gestiones que serán gratuitas para el cliente. anunci.us responde de las faltas de conformidad que se manifiesten en un plazo de 2 años desde la entrega. El cliente deberá informar a anunci.us de la falta de conformidad en el plazo de 2 meses desde que tuvo conocimiento de ella.
                            </p>
                            <h4>5.2. Cambios y devoluciones (derecho de desistimiento)
                            </h4>
                            <p align="justify">
                                El cliente podrá elegir entre el cambio del producto o de sus especificaciones o la devolución íntegra del importe. El usuario tendrá 30 días naturales para efectuar la devolución o el cambio, antes de la fecha limite de finalización del plazo marcado para el analisis y diseño de la solución. Para solicitar la devolución del pedido dentro del indicado plazo de 30 días naturales (derecho de desistimiento), el cliente deberá contactar con cualquiera de los responsables de anunci.us mediante correo electronico o teléfono
                            </p>
                            <h3>6. Propiedad intelectual e industrial
                            </h3>
                            <h4>6.1. Propiedad de los usuarios 
                            </h4>
                            <p align="justify">
                                El usuario declara y garantiza el propietario intelectual e industrial del contenido que ponga a disposición de anunci.us, o tiene las autorizaciones necesarias de los propietarios para hacerlo. Igualmente, el usuario concede a <b>ANUNCIUS</b> una licencia no exclusiva, mundial y gratuita para usar dicho contenido, en los medios y formatos que <b>ANUNCIUS</b> crea conveniente para prestar su servicio de creación, producción y desarrollo. <b>ANUNCIUS</b> puede ceder esta licencia a un tercero en caso necesario para dicha creación, producción y envío de artículos. <b>ANUNCIUS</b> reconoce a favor de sus titulares los correspondientes derechos de propiedad industrial e intelectual, no implicando su sola mención o aparición en el sitio web la existencia de derechos o responsabilidad alguna del prestador sobre los mismos, como tampoco respaldo, patrocinio o recomendación por parte del mismo.
                            </p>
                            <h4>6.2. Propiedad de <b>ANUNCIUS</b>
                            </h4>
                            <p align="justify">
                                El sitio web, incluyendo a título enunciativo pero no limitativo su programación, edición, compilación y demás elementos necesarios para su funcionamiento, los diseños, logotipos, texto y/o gráficos son propiedad de <b>ANUNCIUS</b>, o en su caso, dispone de licencia o autorización expresa por parte de los autores. Todos los contenidos del sitio web se encuentran debidamente protegidos por la normativa de propiedad intelectual e industrial, así como inscritos en los registros públicos correspondientes. Independientemente de la finalidad para la que fueran destinados, la reproducción total o parcial, uso, explotación, distribución y comercialización, requiere en todo caso de la autorización escrita previa por parte de <b>ANUNCIUS</b>. Cualquier uso no autorizado previamente por parte <b>ANUNCIUS</b> será considerado un incumplimiento grave de los derechos de propiedad intelectual o industrial del autor. Los diseños, logotipos, texto y/o gráficos ajenos a <b>ANUNCIUS</b> y que pudieran aparecer en el sitio web, pertenecen a sus respectivos propietarios, siendo ellos mismos responsables de cualquier posible controversia que pudiera suscitarse respecto a los mismos. En todo caso, el usuario cuenta con la autorización expresa y previa por parte de los mismos.
                            </p>
                            <h4>6.3. Notificaciones de infracción 
                            </h4>
                            <p align="justify">
                                Para realizar cualquier tipo de observación respecto a posibles incumplimientos de los derechos de propiedad intelectual o industrial, así como sobre cualquiera de los contenidos del sitio web, puede hacerlo a través del siguiente correo electrónico: contact@anunci.us
                            </p>
                            <h3>7. Derechos de <b>ANUNCIUS</b>
                            </h3>
                            <h4>7.1 Monitorización
                            </h4>
                            <p align="justify">
                                <b>ANUNCIUS</b> se reserva el derecho (sin asumir la obligación) de monitorizar transacciones y comunicaciones que se produzcan en la su web. Si <b>ANUNCIUS</b> determina, a su propio juicio, que un usuario rompe o puede romper alguna condición de las Condiciones Generales de Uso o dicha transacción o comunicación es inapropiada, <b>ANUNCIUS</b> puede cancelar o restringir el acceso a dicho usuario o al material cuestionable, sin más responsabilidades para las partes implicadas
                            </p>
                            <h4>7.2 Modificaciones del servicio
                            </h4>
                            <p align="justify">
                                <b>ANUNCIUS</b> se reserva el derecho de modificar la distribución, organización y aspecto de su web y los servicios que ofrece, y puede cambiar o suspender cualquier aspecto de sus servicios y/o precios sin previo aviso y sin ninguna responsabilidad para ninguna de las partes
                            </p>
                            <h4>7.3 Cancelación del contrato o servicio
                            </h4>
                            <b>ANUNCIUS</b>, a su propio criterio y con aviso o sin él, puede: 
                            a) suspender o limitar el uso de anunci.us a un usuario en concreto, así como cerrar totalmente una cuenta.
                            b) eliminar el contenido que crea oportuno de los servidores y directorios de anunci.us
                            c) Prohibir el uso de los servicios de anunci.us
                            <h4>7.4 Comunicaciones enviadas por los usuarios
                            </h4>
                            <p align="justify">
                                <b>ANUNCIUS</b> se reserva el derecho de usar el material y las comunicaciones enviadas por los usuarios en: preguntas, comentarios, foros, ideas y concursos; para marketing u otros actos de promoción, sin que puedan considerarse estas comunicaciones confidenciales
                            </p>
                            <h3>8. Política de enlaces
                            </h3>
                            <p align="justify">
                                <b>ANUNCIUS</b> no se hace responsable de aquellos otros sitios web u archivos a los que sea posible acceder a través de enlaces de hipertexto (links) disponibles entre sus contenidos, dado que dichas páginas enlazadas son responsabilidad de sus respectivos titulares. Esta página, por tanto, ni aprueba, ni hace suyos los productos, servicios, contenidos, información, datos, archivos y cualquier clase de material existente en tales páginas web o archivos y no controla ni se hace responsable de la calidad, licitud, fiabilidad y utilidad de la información contenidos y servicios existentes en los sitios enlazados y que son ajenos a esta página. En el caso de que se estime oportuno o de que un órgano competente declare la ilicitud de los datos, ordenando su retirada o que se imposibilite el acceso a los mismos, o se hubiera declarado la existencia de la lesión, y se nos haya notificado expresamente la correspondiente resolución, los enlaces que se indiquen serían inmediatamente retirados
                            </p>
                            <h3>9. Limitación de responsabilidades
                            </h3>
                            <p align="justify">
                                anunci.us excluye cualquier responsabilidad por los daños y perjuicios de toda naturaleza que puedan deberse a la falta de disponibilidad o de continuidad del funcionamiento de anunci.us, así como al mal uso del sitio web y/o de sus contenidos
                            </p>
                            <h3>10. Legislación aplicable y jurisdicción competente
                            </h3>
                            <p align="justify">
                                Estas Condiciones Generales se rigen por la ley española. Las partes se someten, a su elección, para la resolución de los conflictos y con renuncia a cualquier otro fuero, a los juzgados y tribunales del domicilio del usuario
                            </p>                        
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