$(function () {
    $('.header-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/next.svg"></button>',
        vertical: true,

        responsive: [
            {
                breakpoint: 371,
                settings: {
                    arrows: false,
                    dots: false,
                    autoplay: true,
                    autoplaySpeed: 2000,
                },
            },
        ],
    });

    $('.product__name').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        focusOnSelect: true,
        vertical: true,
        asNavFor: '.product__content',
        prevArrow:
            '<button type="button" class="product-prev"><img src="images/product-prev.svg"></button>',
        nextArrow:
            '<button type="button" class="product-next"><img src="images/product-next.svg"></button>',
        responsive: [
            {
                breakpoint: 891,
                settings: {
                    arrows: false,
                    vertical: false,
                    slidesToShow: 3,
                    dots: true,
                },
            },
            {
                breakpoint: 461,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false,
                    vertical: false,
                },
            },
        ],
    });

    $('.product__content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        asNavFor: '.product__name',
        fade: true,
    });

    // burger
    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active');
    });
});
