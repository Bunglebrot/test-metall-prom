'use strict';

var productCardsSwiper = new Swiper('.other-products-block__swiper .swiper-container', {
    speed: 800,
    autoplay: true,
    loop: true,
    navigation: {
        nextEl: '.other-products-block .swiper__btn-wrapper .swiper-button-next',
        prevEl: '.other-products-block .swiper__btn-wrapper .swiper-button-prev',
    },
    autoHeight: true,

    slidesPerView: 1,

    breakpoints: {
        560: {
        slidesPerView: 2,
        },
        768: {
        slidesPerView: 3,
        },
        768: {
        slidesPerView: 3,
        },
        1024: {
        slidesPerView: 3,
        spaceBetween: 30
        },
        1280: {
        slidesPerView: 4,
        },
        1920: {
        slidesPerView: 5,
        },
    }
})