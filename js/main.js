; (function ($) {
    $(document).ready(function(){        
        var swiper = new Swiper(".header-pagination-slider", {
            loop: true,
            spaceBetween: 0,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesProgress: true,
        });
        var swiper2 = new Swiper(".header-slider", {
            loop: true,
            spaceBetween: 0,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            thumbs: {
                swiper: swiper,
            },
        });

        $('.toggle-menu').click(function () {
            $('.navbar').slideToggle();
        });

      });
})(jQuery);