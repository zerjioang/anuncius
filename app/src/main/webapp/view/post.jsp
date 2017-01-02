<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<!doctype html>
<html ⚡ lang="es">

    <head>      
        <s:include value="/templates/metadata/metadata.generic.jsp">
            <s:param name="description" value="'Blog oficial de la plataforma anuncius'"></s:param>
            <s:param name="author" value="'Sergio'"></s:param>
        </s:include>
        
        <!-- PAGE TITLE -->
        <title>Anuncius - Blog</title>

        <s:include value="/templates/metadata/metadata.favicon.jsp" />

        <s:include value="/templates/metadata/metadata.opengraph.jsp">
            <s:param name="title" value="'Blog de Anuncius'"></s:param>
            <s:param name="sitename" value="'Anuncius'"></s:param>
            <s:param name="url" value="'https://www.anunci.us/blog'"></s:param>
            <s:param name="image" value="'https://www.anunci.us/image.png'"></s:param>
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
            <s:param name="author" value="'@zerjioang'"></s:param>
            <s:param name="image" value="'https://static.anunci.us/img/twitter.image.png'"></s:param>
        </s:include>

        <s:include value="/templates/metadata/metadata.google.jsp">
            <s:param name="name" value="'Blog de Anuncius'"></s:param>
            <s:param name="description" value="'Blog oficial de la plataforma anuncius'"></s:param>
            <s:param name="image" value="'https://static.anunci.us/img/google.image.png'"></s:param>
        </s:include>

        <s:include value="/templates/modules/css/minimum.css.jsp"/>

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
                <source media="(min-width: 768px)" srcset=https://static.anunci.us/theme/images/product.png>
                <img alt="Featured Image" srcset=https://static.anunci.us/theme/images/product.png>
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
                                <li class="gl-blog-post-date">March 21, 2016</li>
                                <li class="gl-author"><a href="blog-details.html#">postman</a></li>
                                <li class="gl-comments"><a href="blog-details.html#">3 Comentarios</a></li>
                            </ul>
                        </div>
                        <!-- END -->

                        <!-- POST DETAILS -->
                        <div class="gl-blog-post-details">
                            <p>On the other hand, we denounce with righteous <strong>indignation</strong> and dislike men who are so begueled and demoralized by the of pleasur so blinded by desire, that they cannot foresee the pain and trouble that are bounds to ensure blame belongs to those who fail in their weakness of will, which is the same therefore always holds in these matters to this principle of selection: he rejects pleasures to On the other hand, we denounce with righteous indignation and dislike men who are so begueled and demoralized by the of pleasur so blinded by desire, that they cannot foresee the pain and trouble that are bounds to ensure blame belongs to those who fail in their weakness of will, which is the same therefore always holds in these matters to this principle of selection: he rejects pleasures to </p>

                            <div class="gl-blockquote">
                                <span>On the other hand, we denounce with righteous indignation goes weakness of will, which is the same therefore</span>
                            </div>

                            <p>On the other hand, we denounce with righteous indignation and dislike men who are so begueled and demoralized by the of pleasur so blinded by desire, that they cannot foresee the pain and trouble that are bounds to ensure blame belongs to those who fail in their weakness of will, which is the same therefore always holds in these </p>

                            <div class="gl-blogpost-images">
                                <div class="gl-post-img-wrapper">
                                    <img src="images/post-img-1.jpg" alt="Post Image" class="gl-lazy">
                                </div>

                                <div class="gl-post-img-wrapper">
                                    <img src="images/post-img-2.jpg" alt="Post Image" class="gl-lazy">
                                </div>
                            </div>

                            <p>blinded by desire, that they cannot foresee the pain and trouble that are bounds to ensure blame belongs to those who fail in their weakness of will, which is the same therefore always holds in these matters to this principle of selection: he rejects pleasures to On the other hand, we denounce with righteous indignation and dislike men who are so begueled and demoralized by the of pleasur so blinded by desire, that they cannot foresee the pain and trouble that are bounds to ensure blame belongs to those who fail in their weakness of will, which is the same therefore always holds in these matters to this principle of selection: he rejects pleasures to <br/>

                                <br/>blinded by desire, that they cannot foresee the pain and trouble that are bounds to ensure blame belongs to those who fail in their weakness of will, which is the same therefore always holds in these matters to this principle of selection: he rejects pleasures to On the other hand, we denounce with righteous indignation</p>
                        </div>
                        <!-- END -->

                        <!-- POST METAS -->
                        <div class="gl-post-metas">
                            <div class="gl-tag-wrapper">
                                <a href="blog-details.html#" class="gl-tags">design</a>
                                <a href="blog-details.html#" class="gl-tags">travel</a>
                                <a href="blog-details.html#" class="gl-tags">food</a>
                            </div>

                            <a data-remodal-target="modal-share" class="gl-btn gl-share-btn">Share</a>
                        </div>
                        <!-- END -->

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
                                    <a href="blog-details.html#" class="gl-reply">Responder</a>
                                </div>
                                <!-- END -->
                            </div>
                            <!-- END -->
                        </div>
                        <!-- END -->

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

                    </div>
                </div>
            </div>
        </section>
        <!-- PAGE CONTETNT END -->
        
        <!-- SHARE MODAL -->
        <div class="remodal-bg">
            <div class="gl-share-modal-wrapper" data-remodal-id="modal-share">
                <button data-remodal-action="close" class="remodal-close"></button>

                <div class="gl-share-opt-wrapper">
                    <ul>
                        <li class="gl-fb-share">
                            <a href="blog-details.html#">
                                <i class="fa fa-facebook"></i>
                                <span>Facebook</span>
                            </a>
                        </li>

                        <li class="gl-twitter-share">
                            <a href="blog-details.html#">
                                <i class="fa fa-twitter"></i>
                                <span>Twitter</span>
                            </a>
                        </li>

                        <li class="gl-gplus-share">
                            <a href="blog-details.html#">
                                <i class="fa fa-google-plus"></i>
                                <span>Google+</span>
                            </a>
                        </li>

                        <li class="gl-linkedin-share">
                            <a href="blog-details.html#">
                                <i class="fa fa-linkedin"></i>
                                <span>Linkedin</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- SHARE MODAL END -->
        
        <s:include value="/templates/modules/footer/common.footer.jsp" />
        <s:include value="/templates/modules/js/minimum.js.jsp"/>
    </body>
</html>
