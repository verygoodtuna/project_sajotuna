$(function () {


    $('.v_slide').slick ({
        arrows: false,
        dots: true,
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
    })
})