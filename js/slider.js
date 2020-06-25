$(document).ready(function () {
    $('.slider-01').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true,
        fade: true
    });

    $('.slider-02').slick({
        autoplay: true,
        autoplaySpeed: 10000,
    });

    $('.slider-03').slick({
        autoplay: true,
        autoplaySpeed: 10000,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1040,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 880,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});