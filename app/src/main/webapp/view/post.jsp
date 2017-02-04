<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<!doctype html>
<html lang="es">

    <head>      
        <s:include value="/templates/metadata/metadata.generic.jsp">
            <s:param name="description" value="'Blog oficial de la plataforma anuncius'"></s:param>
            <s:param name="author" value="'anuncius development team'"></s:param>
        </s:include>
        
        <!-- PAGE TITLE -->
        <title>Anuncius - Entrada de Blog</title>

        <s:include value="/templates/metadata/metadata.favicon.jsp" />

        <s:include value="/templates/metadata/metadata.opengraph.jsp">
            <s:param name="title" value="'Blog de Anuncius'"></s:param>
            <s:param name="sitename" value="'Anuncius'"></s:param>
            <s:param name="url" value="'https://www.anunci.us/blog'"></s:param>
            <s:param name="image" value="'https://static.anunci.us/theme/images/metadata/google.image.png'"></s:param>
            <s:param name="description" value="'Blog oficial de la plataforma anuncius'"></s:param>
            <s:param name="address" value="'Avenida de las universidades'"></s:param>
            <s:param name="locality" value="'Bilbao'"></s:param>
            <s:param name="region" value="'Bizkaia'"></s:param>
            <s:param name="code" value="'48003'"></s:param>
            <s:param name="country" value="'Spain'"></s:param>
        </s:include>

        <s:include value="/templates/metadata/metadata.twitter.jsp">
            <s:param name="alt" value="'Imagen de bienvenida al blog de Anuncius'"></s:param>
            <s:param name="site" value="'@anunci.us'"></s:param>
            <s:param name="title" value="'Blog de Anuncius'"></s:param>
            <s:param name="description" value="'Blog oficial de la plataforma anuncius'"></s:param>
            <s:param name="author" value="'anuncius development team'"></s:param>
            <s:param name="image" value="'https://static.anunci.us/theme/images/twitter.image.png'"></s:param>
        </s:include>

        <s:include value="/templates/metadata/metadata.google.jsp">
            <s:param name="name" value="'Blog de Anuncius'"></s:param>
            <s:param name="description" value="'Blog oficial de la plataforma anuncius'"></s:param>
            <s:param name="image" value="'https://static.anunci.us/theme/images/google.image.png'"></s:param>
        </s:include>

        <s:include value="/templates/css/minimum.css.jsp"/>

        <link rel="shortcut icon" href="images/favicon.ico">
    </head>

    <body class="gl-blog-page gl-blog-details gl-realestate-template">

        <s:include value="/templates/modules/loader/loader.section.jsp"/>

        <!-- SIDE MENU-->
        <s:include value="/templates/modules/aside/login/login.section.jsp" />
        <!-- SIDE MENU END -->
        
        <!-- HEADER -->
        <s:include value="/templates/modules/header/header.section.jsp" />

        <!-- FEATURED IMAGE -->
        <section class="gl-featured-image-wrapper">
            <picture>
                <source media="(min-width: 768px)" srcset=https://static.anunci.us/theme/images/blog/post/1/welcome.png>
                <img alt="Featured Image" srcset=https://static.anunci.us/theme/images/blog/post/1/welcome.png>
            </picture>
        </section>
        <!-- FEATURED IMAGE END -->

        <!-- PAGE CONTETNT -->
        <section class="gl-page-content-section">
            <div class="container">
                <div class="row">
                    <div class="gl-blog-details-wrapper">

                        <!-- HEADINGS -->
                        <div class="gl-blog-heading-metas">
                            <h1 class="gl-blog-titles">Atención: Estrenamos anuncius!</h1>
                            <ul>
                                <li class="gl-blog-post-date">1 Enero, 2016</li>
                                <li class="gl-author"><a href="#">postman</a></li>
                                <li class="gl-comments"><a href="#">0 Comentarios</a></li>
                            </ul>
                        </div>
                        <!-- END -->

                        <!-- POST DETAILS -->
                        <div class="gl-blog-post-details">
                            <p align='justify'>
                                Bienvenido a anuncius!
                                <br/>
                                <br/>
                                Tu nueva ventana a Internet donde podrás postear tus necesidades, y encontrar las de otros, vender las cosas que ya no necesitas, comprar articulos que encuentres navegando, pedir una cena romantica a la luz de la luna, etc.
                                Gracias a una compleja organizacion de los datos y a unos, cada vez mejores, algoritmos, en anuncius somos capaces de clasificar los 'items' publicados sin necesidade de tener que categorizar todo tal y como se realiza en la mayoria de páginas.
                                Si que es cierto, que en estos primeros pasos, le damos la oportunidad al usuario de que escoja la categoria, por ejemplo, que mas desee. En un futuro cercano, las categoria asociada a un 'item' se detectara de manera automatica.
                                Por eso, es ahora cuando necesitamos vuestra colaboración, para que dentro de un tiempo, todo funcione mejor, gracias a ti.
                            </p>
                            
                            <div class="gl-blockquote">
                                <span>Escuchando a las personas desde sus propias necesidades, te atendemos y valoramos tus propuestas.</span>
                            </div>
                            
                            <%--
                            <div class="gl-blogpost-images">
                                <div class="gl-post-img-wrapper">
                                    <img src="images/post-img-1.jpg" alt="Post Image" class="gl-lazy">
                                </div>

                                <div class="gl-post-img-wrapper">
                                    <img src="images/post-img-2.jpg" alt="Post Image" class="gl-lazy">
                                </div>
                            </div>
                            --%>

                            <p>
                                Sabemos que esta primera entrada en el blog es corta, pero nos centramos en mejorar cada dia, junto a ti, para que entre todos tengamos la mejor experiencia posible en anuncius.
                                <br/>
                                <br/>
                                De nuevo, bienvenido y gracias por formar parte de esta familia.
                            </p>
                        </div>
                        <!-- END -->

                        <!-- POST METAS -->
                        <div class="gl-post-metas">
                            <div class="gl-tag-wrapper">
                                <a href="#" class="gl-tags">presentacion</a>
                                <a href="#" class="gl-tags">anuncius</a>
                                <a href="#" class="gl-tags">bienvenida</a>
                            </div>

                            <a data-remodal-target="modal-share" class="gl-btn gl-share-btn">Compartir</a>
                        </div>
                        <!-- END -->

                        <%--
                        <!-- COMMENTS -->
                        <div class="gl-post-comments-wrapper">
                            <h3 class="gl-blog-sec-title">Comments</h3>
                            <!-- Reviews -->
                            <div class="gl-comments">
                                <!-- USER IMG -->
                                <div class="gl-user-img">
                                    <img src="images/user-img.png" alt="User" class="gl-lazy">
                                </div>
                                <!-- END -->

                                <!-- TEXT -->
                                <div class="gl-comment-text">
                                    <div class="gl-username-date">
                                        <h3>David Neo</h3>
                                        <span class="gl-comments-date">23 March, 2016</span>
                                    </div>
                                    <p>On the other hand, we denounce with righteous indignation and dislike men who beguiled and demoralized by the of pleasure</p>
                                    <a href="b" class="gl-reply">Responder</a>
                                </div>
                                <!-- END -->
                            </div>
                            <!-- END -->
                        </div>
                        <!-- END -->
                        --%>

                        <%--
                        <!-- COMMENTS FORM -->
                        <div class="gl-comments-form-wrapper">
                            <h3 class="gl-blog-sec-title">5 Reviews</h3>

                            <form action="blog-details.html#">
                                <fieldset>
                                    <input type="text" name="gl-comment-name" id="gl-comment-name" placeholder="Nombre" required>
                                    <input type="email" name="gl-comment-email" id="gl-comment-email" placeholder="Email" required>
                                    <input type="text" name="gl-comment-website" id="gl-comment-website" placeholder="Web">
                                </fieldset>
                                <textarea name="gl-comment-message" id="gl-comment-message" cols="30" rows="10" placeholder="Tu comentario" required></textarea>

                                <input type="submit" value="Submit" class="gl-btn">
                            </form>
                        </div>
                        <!-- END -->

                        --%>
                    </div>
                </div>
            </div>
        </section>
        <!-- PAGE CONTETNT END -->       
        
        <s:include value="/templates/modules/footer/common.footer.jsp" />
        <s:include value="/templates/js/minimum.js.jsp"/>
    </body>
</html>
