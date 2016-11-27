<%@ taglib prefix="template" tagdir="/WEB-INF/tags" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html>
<html lang="en">
    <head>
        <template:generic.meta/>
        <template:generic.rich.meta
            description="Información acerca de ebengrid, su misión, visión y valores, etc"
            title="Acerca de Ebengrid"
            thumbnail="/"/>
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
            title="Ventajas"
            subtitle="Encuentra tu próxima experiencia"
            image="theme/img/benefits.jpg"
            image_height="1810"
            image_width="2716"
        />
        
        <%
        //TODO fix this
        String[] items={"bob","riche","jacky","rosy"};
        %>
        
        <template:generic.where.am.i
            values="${items}"
        />

        <template:footer
            dir=""
        />
        <template:generic.scripts
            dir=""
        />
    </body>
</html>
