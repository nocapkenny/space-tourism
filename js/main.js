$(function() {
    $('.header__btn').on('click', function() {
        $('.header__btn').toggleClass('header__btn--active')
    });
    $('.slider__box').slick({
        prevArrow: '<button type="button" class="slick-prev"><img class="slider__arrow slider__arrow-prev" src="images/arrow-prev.svg" alt=""></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img class="slider__arrow slider__arrow-next" src="images/arrow-next.svg" alt=""></img></button>'

    });
    $('.menu-btn').on('click', function() {
        $('.menu__list').toggleClass('menu__list-active');
    });
});