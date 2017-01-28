<%@page contentType="text/html" pageEncoding="UTF-8"%>

<div class="gl-blog-items gl-image-post col-md-4 col-sm-4 col-xs-12">
    <div class="gl-blog-img-wrapper">
        <picture>
            <source media="(min-width: 768px)" srcset=${param.image}>
            <img alt="${param.alt}" srcset=${param.image}>
        </picture>
        <div class="gl-blog-cat-icon">
            <i class="ion-ios-musical-notes"></i>
        </div>
    </div>

    <div class="gl-blog-item-details">
        <h3>
            <a href="${param.href}">${param.title}</a>
        </h3>
        <p>${param.subtitle}</p>
        <span class="gl-blog-post-date">${param.date}</span>
    </div>
</div>