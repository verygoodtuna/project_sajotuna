$(function () {

    $('.header .banner_b .gnb').on('click', function () {
        $('.header .lnb_con').addClass('on')
    })


    $('.v_slide').slick ({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        infinite: true,
        centerMode: true,
        centerPadding: '250px',

    })


    $('.main_visual .btn .prev').on('click', function () {
        $('.v_slide').slick('slickPrev')
    })

    $('.main_visual .btn .next').on('click', function () {
        $('.v_slide').slick('slickNext')
    })
    
    $('.p_slide').slick ({
        slidesToShow: 5,
        arrows: false,
        infinite: true,
        fade: false,
    })

    $('.main_product .btn .prev').on('click', function () {
        $('.p_slide').slick('slickPrev')
    })
    $('.main_product .btn .next').on('click', function () {
        $('.p_slide').slick('slickNext')
    })

})