$(document).ready(function () {

    $('.tienda-carrusel').slick({
        dots: false,
        infinite: true,
        arrows: true,
        autoplay:true,
        autoplaySpeed: 2000,
        speed: 1000,
        pauseOnHover: false,
        slidesToShow: 3.5,
        slidesToScroll: 0.5,
        prevArrow: '<img class="prev" src="./assets/img/iconos/prev.svg">',
        nextArrow: '<img class="next" src="./assets/img/iconos/next.svg">',
        responsive: [
            {
                breakpoint: 1550,
                settings: {
                slidesToShow: 3,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                slidesToShow: 3.5,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                slidesToShow: 2.5,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                slidesToShow: 3.5,
                }
            },
            {
                breakpoint: 767,
                settings: {
                slidesToShow: 3,
                }
            },
            {
                breakpoint: 650,
                settings: {
                slidesToShow: 2.5,
                }
            },
            {
                breakpoint: 540,
                settings: {
                slidesToShow: 2,
                }
            },
            {
                breakpoint: 540,
                settings: {
                slidesToShow: 1.5,
                }
            }
        ]
    });

    $('.carrusel-clientes').slick({
        dots: false,
        infinite: true,
        arrows: false,
        autoplay:true,
        autoplaySpeed: 0,
        speed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        cssEase: 'linear', // Transición continua y sin pausas
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 980,
                settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                }
            }
        ]
    });

    AOS.refresh();
});
