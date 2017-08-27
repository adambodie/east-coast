$( document ).ready(function() {
    $('.slick-carousel').slick();
    $('.slick-carousel').slickLightbox({
    src: 'src',
    itemSelector: '.item img'
    });
});