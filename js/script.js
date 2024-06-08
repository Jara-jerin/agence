$('.Banner_slider').slick({
    autoplay: false,
    autoplayspeed: 3000,
    arrows: false,
    dots: true,
});
$('.slider').slick({
    autoplay: false,
    autoplayspeed: 3000,
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:`<i class="fa-solid fa-angle-left left"></i>`,
    nextArrow:`<i class="fa-solid fa-angle-right right"></i>`,
    centerMode: true,
    centerPadding: '0px',
});