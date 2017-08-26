$( document ).ready(function() {
    $('#slick-demo').slick();
    $('#slick-demo').slickLightbox({
    src: 'src',
    itemSelector: '.item img'
    });
});