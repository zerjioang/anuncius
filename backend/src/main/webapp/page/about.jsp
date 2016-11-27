<%@ taglib prefix="template" tagdir="/WEB-INF/tags" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html>
<html lang="en">
    <head>
        <s:include value="/templates/common.meta.jsp"/>
        <s:include value="/templates/common.rich.meta.jsp">
            <s:param name="description" value="Información acerca de ebengrid, su misión, visión y valores, etc"/>
            <s:param name="title" value="Acerca de Ebengrid"/>
            <s:param name="thumbnail" value="/"/>
        </s:include>
        <title>Ebengrid | Encuentra los mejores planes</title>
        <template:generic.favicon
            dir=""
        />
        <template:generic.css
            dir=""
        />
    </head>
    <body>
        <template:header
            image="theme/img/ebengrid.white.logo.png"
            image_height="40"
            image_width="170"
            image_description="Logo oficial de ebengrid"
            dir=""
        />
        <template:generic.old.browser/>
        <template:generic.subheader
            title="Sobre nosotros"
            subtitle="Toda la tecnología a tu servicio"
            image="theme/img/technology.jpg"
            image_height="1600"
            image_width="2560"
        />
        
        <%
        //TODO fix this
        String[] items={"bob","riche","jacky","rosy"};
        %>
        
        <template:generic.where.am.i
            values="${items}"
        />

        <div class="container margin_60">
            <div class="row">
                <div class="col-md-6">
                    <div class="main_title_left">
                        <h2>Los mejores<br>en acercarte la información que te rodea</h2>
                        <p>Ebengrid es la plataforma de posicionamiento de eventos online más importante que existe que da voz a todo aquel que la necesite.</p>
                        <span><em></em></span>
                    </div>
                    <p>
                        Desarrollamos soluciones tecnologicas que permiten a cualquier persona, animal o cosa, crear, compartir, buscar, opinar y acudir a eventos que satisfacen sus necesidades. Eventos como festivales de música, maratones, charlas, fiestas, hackatones,...
                    </p>
                    <p>Ex graeco nostrud theophrastus nam, cum tibique reprimique ad. Mea omittam electram te, eu cum fastidii sapientem delicatissimi. Sed cu eripuit veritus propriae. An eam choro saperet ullamcorper, eam <strong>saperet rationibus</strong> ut. Cu usu tation quaeque vocibus, alterum torquatos persequeris te ius.</p>
                    <h3>Mission</h3>
                    <p>Ex graeco nostrud theophrastus nam, cum tibique reprimique ad. Mea omittam electram te, eu cum fastidii sapientem delicatissimi. Sed cu eripuit veritus propriae. An eam choro saperet ullamcorper, eam <strong>saperet rationibus</strong> ut. Cu usu tation quaeque vocibus, alterum torquatos persequeris te ius.</p>
                </div>
                <div class="col-md-5 col-md-offset-1 hidden-sm hidden-xs">
                    <img src="theme/img/mobile.png" alt="" class="img-responsive" height="647" width="316">
                </div>
            </div>
            <!-- End row -->
        </div>
        <template:index.how.it.works
            dir=""
        />
        <template:footer
            dir=""
        />
        <template:generic.scripts
            dir=""
        />
    </body>
</html>
