var element = $(".gl-blog-grid-wrapper");
$(".gl-blog-content");
element.imagesLoaded(function () {
    element.isotope({
        itemSelector: ".gl-blog-items",
        masonry: {
            columnWidth: 1
        }
    });

});

var $photosList = $(".gl-listing-categories-wrapper");
$photosList.imagesLoaded(function () {
    $photosList.isotope({
        itemSelector: ".gl-listing-cat-item",
        percentPosition: true,
        masonry: {
            columnWidth: 1
        }
    });

});

var $posts = $(".gl-popular-cat-wrapper");
$posts.imagesLoaded(function () {
    $posts.isotope({
        itemSelector: ".gl-popular-cat-item",
        percentPosition: true,
        masonry: {
            columnWidth: 1
        }
    });

});