<%@page contentType="text/html" pageEncoding="UTF-8" %>
<%@ taglib prefix="s" uri="/struts-tags" %>

<!doctype html>
<html lang="es">

<head>
    <s:include value="/templates/metadata/metadata.generic.jsp">
        <s:param name="description" value="'Tu ventana a Internet. Revolucionando el comercio. Desde Bilbao al Mundo'"></s:param>
        <s:param name="author" value="'anuncius development team'"></s:param>
    </s:include>

    <!-- PAGE TITLE -->
    <title>Anuncius - Publicar nuevo anuncio</title>

    <s:include value="/templates/metadata/metadata.favicon.jsp" />

    <s:include value="/templates/metadata/metadata.opengraph.jsp">
        <s:param name="title" value="'Anuncius'"></s:param>
        <s:param name="sitename" value="'Anuncius'"></s:param>
        <s:param name="url" value="'https://anunci.us/'"></s:param>
        <s:param name="image" value="'https://static.anunci.us/theme/images/metadata/google.image.png'"></s:param>
        <s:param name="description" value="'Tu ventana a Internet. Revolucionando el comercio. Desde Bilbao al Mundo'"></s:param>
        <s:param name="address" value="'Avenida de las universidades'"></s:param>
        <s:param name="locality" value="'Bilbao'"></s:param>
        <s:param name="region" value="'Bizkaia'"></s:param>
        <s:param name="code" value="'48003'"></s:param>
        <s:param name="country" value="'Spain'"></s:param>
    </s:include>

    <s:include value="/templates/metadata/metadata.twitter.jsp">
        <s:param name="alt" value="'Imagen de bienvenida de Anuncius'"></s:param>
        <s:param name="site" value="'@anuncius'"></s:param>
        <s:param name="title" value="'Anuncius - Tu ventana a Internet. Revolucionando el comercio. Desde Bilbao al Mundo'"></s:param>
        <s:param name="description" value="'Bienvenido a anuncius. La tienda online donde encontrarás lo que quieras.'"></s:param>
        <s:param name="author" value="'anuncius development team'"></s:param>
        <s:param name="image" value="'https://static.anunci.us/theme/images/metadata/twitter.image.png'"></s:param>
    </s:include>

    <s:include value="/templates/metadata/metadata.google.jsp">
        <s:param name="name" value="'Anuncius - Tu ventana a Internet. Revolucionando el comercio. Desde Bilbao al Mundo'"></s:param>
        <s:param name="description" value="'Bienvenido a anuncius. La tienda online donde encontrarás lo que quieras.'"></s:param>
        <s:param name="image" value="'https://static.anunci.us/theme/images/metadata/google.image.png'"></s:param>
    </s:include>

    <s:include value="/templates/css/minimum.css.jsp" />
</head>

<body class="gl-agent-profile-template anuncius-body">

    <s:include value="/templates/modules/loader/loader.section.jsp" />

    <!-- HEADER -->
    <s:include value="/templates/modules/header/header.section.jsp" />
    <!-- HEADER END -->

    <!-- PAGE CONTETNT -->
    <section class="gl-page-content-section anuncius-head-margin" style="padding-top: 5px;">
        <div class="container">
            <div class="row">
                <div class="gl-element-type-wrapper">
                    <div class="col-md-6" style="padding-left: 0px;">
                        <h1 class="gl-element-title" style="font-weight: 400; padding-left: 15px;">Nueva publicacion</h1>
                    </div>
                    <div class="col-md-6">
                        <h2 class="gl-sub-heading">Ficha: <span id="anuncio_id"></span></h2>
                    </div>
                </div>

                <div class="gl-element-type-wrapper" style="margin: 15px;">
                    <div class="gl-element-wrapper">
                        <div class="gl-row" style="padding: 15px;border-radius: 20px;background-color: #fdfdfd;">
                            <div class="container" style="width: 90%;">
                                <form id="publish-form">
                                  <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">Titulo</label>
                                    <div class="col-sm-10">
                                      <input type="email" class="form-control" name="name" id="item_name" placeholder="PS4 Seminueva de 500Gb" required>
                                    </div>
                                  </div>
                                  <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">Categoría</label>
                                    <div class="col-sm-10">
                                      <input type="text" class="form-control" name="category" id="item_best_category" placeholder="Videoconsola" required>
                                    </div>
                                  </div>
                                    <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">Palabra clave que mejor lo define</label>
                                    <div class="col-sm-10">
                                      <input type="email" class="form-control" name="keyword" id="item_keyword" placeholder="PS4" required>
                                    </div>
                                  </div>
                                  <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">Objetivo: vender, comer, jugar, etc</label>
                                    <div class="col-sm-10">
                                      <input type="text" class="form-control" name="action" id="item_best_category" placeholder="vender" required>
                                    </div>
                                  </div>
                                    <div class="form-group row">
                                        <label class="col-sm-2 col-form-label">Precio</label>
                                        <div class="col-sm-10">
                                          <input class="form-control" type="number" name="price" id="price" placeholder="110" required>
                                        </div>
                                  </div>
                                    <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">Descripción</label>
                                    <div class="col-sm-10">
                                        <textarea class="form-control" name="description" id="description" cols="10" rows="5" placeholder="Se vende Ps4 seminueva de color..." required></textarea>
                                    </div>
                                  </div>
                                  
                                  <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">Imagen pricipal</label>
                                    <div class="col-sm-10">
                                        <label class="custom-file">
                                            <input type="file" id="file" class="custom-file-input">
                                            <span class="custom-file-control"></span>
                                          </label>
                                    </div>
                                  </div>
                                    <div class="form-group row">
                                        <label class="col-sm-2 col-form-label">Alcance</label>
                                        <div class="col-sm-10">
                                            <select id="visual-scope" class="image-picker show-html" name="visual-type" required>
                                                <option selected data-img-src="https://static.anunci.us/theme/images/new/scope/global.png" value="global">1</option>
                                                <option data-img-src="https://static.anunci.us/theme/images/new/scope/local.png" value="local">2</option>
                                            </select>
                                        </div>
                                  </div>
                                    <div class="form-group row">
                                        <label class="col-sm-2 col-form-label">Tipo de publicación</label>
                                        <div class="col-sm-10">
                                            <select id="visual-type" class="image-picker show-html" name="visual-type" required>
                                                <option data-img-src="https://static.anunci.us/theme/images/new/tipo/servicio/.png" value="service">1</option>
                                                <option data-img-src="https://static.anunci.us/theme/images/new/tipo/evento.png" value="event">2</option>
                                                <option data-img-src="https://static.anunci.us/theme/images/new/tipo/anuncio.png" value="ad">3</option>
                                            </select>
                                        </div>
                                  </div>
                                    <%--
                                    <div class="form-group row">
                                        <label class="col-sm-2 col-form-label">Características</label>
                                        <div class="col-sm-10">
                                            <select id="visual-features" multiple="multiple" class="image-picker show-html" name="features[]" required>
                                                <option data-img-src="https://static.anunci.us/theme/images/new/features/" value="geolocalizado">1</option>
                                                <option data-img-src="https://static.anunci.us/theme/images/calendar.png" value="evento">2</option>
                                                <option data-img-src="https://static.anunci.us/theme/images/globe.png" value="global">3</option>
                                            </select>
                                        </div>
                                  </div>
                                    --%>
                                    <div class="form-group row">
                                        <label class="col-sm-2 col-form-label">Pegi</label>
                                        <div class="col-sm-10">
                                            <select id="visual-pegi" class="image-picker show-html" name="pegi" required>
                                                <option data-img-src="https://static.anunci.us/theme/images/new/pegi/3.png" value="3">1</option>
                                                <option data-img-src="https://static.anunci.us/theme/images/new/pegi/7.png" value="7">2</option>
                                                <option data-img-src="https://static.anunci.us/theme/images/new/pegi/12.png" value="8">3</option>
                                                <option data-img-src="https://static.anunci.us/theme/images/new/pegi/16.png" value="16">4</option>
                                                <option data-img-src="https://static.anunci.us/theme/images/new/pegi/18.png" value="18">5</option>
                                                <option data-img-src="https://static.anunci.us/theme/images/new/pegi/21.png" value="21">6</option>
                                            </select>
                                        </div>
                                  </div>
                                    <div class="form-group row">
                                        <label class="col-sm-2 col-form-label">Metodo de pago</label>
                                        <div class="col-sm-10">
                                            <select id="visual-pay" multiple class="image-picker show-html" name="payment">
                                                <option data-img-src="https://static.anunci.us/theme/images/new/payment/free.png" value="free">0</option>
                                                <option data-img-src="https://static.anunci.us/theme/images/new/payment/banco.png" value="bank">1</option>
                                                <option data-img-src="https://static.anunci.us/theme/images/new/payment/transferencia.png" value="transfer">2</option>
                                                <option data-img-src="https://static.anunci.us/theme/images/new/payment/paypal.png" value="paypal">3</option>
                                                <option data-img-src="https://static.anunci.us/theme/images/new/payment/tienda.png" value="local">4</option>
                                                <option data-img-src="https://static.anunci.us/theme/images/new/payment/en-mano.png" value="hand">5</option>
                                            </select>
                                        </div>
                                  </div>
                                    
                                  <div class="form-group row">
                                    <div class="offset-sm-2 col-sm-10">
                                      <button type="submit" class="btn btn-primary" id="btn-publish-form">Publicar</button>
                                    </div>
                                  </div>
                                </form>
                              </div>
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