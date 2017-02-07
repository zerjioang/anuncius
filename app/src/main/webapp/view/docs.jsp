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
        </style>
    </head>

    <body class="anuncius-body">

        <s:include value="/templates/modules/loader/loader.section.jsp"/>
        
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
                            
                            <div class="gl-tab-style-2 gl-right-side-col" id="docs">
                                <div class="gl-tab-nav-btns">
                                  <ul class="nav nav-tabs" role="tablist">
                                    <li role="presentation" class="active">
                                        <a href="#help" aria-controls="help" role="tab" data-toggle="tab">Ayuda</a>
                                    </li>
                                    <li role="presentation">
                                        <a href="#documentation" aria-controls="documentation" role="tab" data-toggle="tab">Documentación tecnica</a>
                                    </li>
                                  </ul>
                                </div>

                                <div class="gl-tab-nav-contents tab-content">
                                  <div role="tabpanel" class="tab-pane fade in active" id="help">
                                    <s:include value="/templates/modules/docs/help.jsp"/>
                                  </div>

                                  <div role="tabpanel" class="tab-pane fade in" id="documentation">
                                      <s:include value="/templates/modules/docs/manual.jsp"/>
                                  </div>
                                </div>
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