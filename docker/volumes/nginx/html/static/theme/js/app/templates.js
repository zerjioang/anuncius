var item_template = '\
<div class="gl-featured-items col-md-3 col-sm-3 col-xs-12">\
    <div class="gl-feat-items-img-wrapper">\
        <picture>\
            <source media="(min-width: 768px)" srcset={mainImageUrl}}>\
            <img alt="Imagen de {{keyword}}" srcset={{mainImageUrl}}>\
        </picture>\
\
        <span class="gl-price-tag">Ver precio</span>\
    </div>\
\
    <div class="gl-feat-item-details">\
        <span class="gl-item-status-label gl-sold-label">{{action}}</span>\
\
        <h3>\
            {{#_id}}\
            {{#.}}\
                <a href="/item/{{counter}}">{{name}}</a>\
            {{/.}}\
            {{/_id}}\
        </h3>\
        <div class="gl-item-location">\
            <i class="ion-ios-location-outline"></i>\
            <span>{{location}}</span>\
        </div>\
    </div>\
\
    <div class="gl-feat-item-metas">\
        <ul class="gl-feature-info">\
            <li class="font-bold">PRO</li>\
            <li class="font-bold">NUEVO</li>\
            <li class="font-bold">GRATIS</li>\
        </ul>\
\
        <ul class="gl-wishlist-compare-wrapper">\
            <li>\
                <a href="/item/{{_id}}{{counter}}" class="gl-add-wishlist">\
                    <i class="fa fa-star-o" aria-hidden="true"></i>\
                </a>\
            </li>\
            \
            <li>\
                <a href="/item/{{_id}}{{counter}}" class="gl-add-wishlist">\
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>\
                </a>\
            </li>\
        </ul>\
    </div>\
</div>';

var tags_template = '<a href="/item/{{_id}}{{counter}}" class="gl-tag-btn gl-duplex">t{{tag_name}}</a>';