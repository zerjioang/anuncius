<%@page contentType="text/html" pageEncoding="UTF-8" %>
<%@ taglib prefix="s" uri="/struts-tags" %>

<!doctype html>
<html lang="es">

<head>
    <s:include value="/templates/metadata/metadata.generic.jsp">
        <s:param name="description" value="'La revolución de las tiendas online'"></s:param>
        <s:param name="author" value="'anuncius development team'"></s:param>
    </s:include>

    <!-- PAGE TITLE -->
    <title>Anuncius - Publicar nuevo anuncio</title>

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
        <s:param name="author" value="'anuncius development team'"></s:param>
        <s:param name="image" value="'https://static.anunci.us/img/metadata/twitter.image.png'"></s:param>
    </s:include>

    <s:include value="/templates/metadata/metadata.google.jsp">
        <s:param name="name" value="'Anuncius - La revolución de las tiendas online'"></s:param>
        <s:param name="description" value="'Bienvenido a anuncius. La tienda online donde encontrarás lo que quieras.'"></s:param>
        <s:param name="image" value="'https://static.anunci.us/img/metadata/google.image.png'"></s:param>
    </s:include>

    <s:include value="/templates/css/minimum.css.jsp" />
</head>

<body class="gl-agent-profile-template gl-realestate-template">

    <s:include value="/templates/modules/loader/loader.section.jsp" />

    <!-- SIDE MENU-->
    <s:include value="/templates/modules/aside/login/login.section.jsp" />
    <!-- SIDE MENU END -->

    <!-- HEADER -->
    <s:include value="/templates/modules/header/header.section.jsp" />
    <!-- HEADER END -->

    <!-- PAGE CONTETNT -->
    <section class="gl-page-content-section" style="padding-top: 5px;">
        <div class="container">
            <div class="row">
                <div class="gl-element-type-wrapper">
                    <div class="col-md-6" style="padding-left: 0px;">
                        <h1 class="gl-element-title" style="font-weight: 400; padding-left: 15px;">Nuevo anuncio</h1>
                    </div>

                    <div class="col-md-6">
                        <h2 class="gl-element-title">Progreso de tu publicación: 
                            <span id="publish-progress">0%</span>
                        </h2>
                    </div>
                </div>

                <div class="gl-element-type-wrapper" style="margin: 15px;">
                    <div class="gl-element-wrapper">
                        <div class="gl-row" style="padding: 15px;border-radius: 20px;background-color: #fdfdfd;">
                            <div>
                                <h3 class="gl-sub-heading">Rellena tu ficha: <span id="anuncio_id"></span></h3>
                            </div>

                            <form action="#" class="gl-review-submission-form">
                                <fieldset class="gl-form-fields">
                                    <div class="gl-input-area">
                                        <div>
                                            <label>Título de tu publicación</label>
                                            <input style="width: 100%;" type="text" name="item_name" id="item_name" placeholder="PS4 Seminueva de 500Gb" required>
                                        </div>
                                        <div>
                                            <label>Categoría</label>
                                            <input style="width: 100%;" type="text" name="item_best_category" id="item_best_category" placeholder="Videoconsola" required>
                                        </div>
                                        <div>
                                            <label>Palabra clave que mejor lo define</label>
                                            <input style="width: 100%;" type="text" name="item_best_name" id="item_best_name" placeholder="PS4" required>
                                        </div>
                                        <div>
                                            <label>Acción que mejor lo define: vender, comprar, cambiar, comer, disfrutar, etc</label>
                                            <input style="width: 100%;" type="text" name="item_action" id="item_action" placeholder="Vender" required>
                                        </div>
                                        <div>
                                            <label>Precio publicación</label>
                                            <input style="width: 100%;"  type="number" name="price" id="price" placeholder="110" required></input>
                                        </div>
                                        <div>
                                            <label>Descripción de tu publicación/evento</label>
                                            <textarea name="description" id="description" cols="30" rows="5" placeholder="Se vende Ps4 seminueva de color..." required></textarea>
                                        </div>
                                    </div>

                                    <div class="gl-rating-wrapper" style="padding-top: 5px;padding-right: 15px;padding-left: 15px;padding-bottom: 20px;">
                                        <h3>Añadir fotos</h3>
                                        <h4>Próximamente</h4>
                                    </div>
                                </fieldset>

                                <fieldset class="gl-submit-wrapper">
                                    <input type="submit" value="Publicar" class="gl-btn">
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
                <!-- Tags End -->
            </div>
        </div>
    </section>

    <!-- FOOTER -->
    <s:include value="/templates/modules/footer/common.footer.jsp" />
    <!-- FOOTER END -->
    <s:include value="/templates/js/minimum.js.jsp" />
</body>

</html>