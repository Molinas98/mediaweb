document.addEventListener("DOMContentLoaded", () => {
    $(function () {
        var lastScrollTop = 0;
    
        function updateNavPosition() {
            var scrollTop = $(window).scrollTop();
            var isSmallScreen = window.matchMedia("(max-width: 1200px)").matches;
    
            if ((scrollTop > 100) && !($('.offcanvas-top').hasClass('show'))) {
                if (scrollTop > lastScrollTop) {
                    $('nav').css('top', '-100px');
                } else {
                    $('nav').css('top', isSmallScreen ? '0px' : '50px');
                }
                lastScrollTop = scrollTop;
            }
        }
    
        function handleScroll() {
            var scrollTop = $(window).scrollTop();
    
            updateNavPosition();
    
            if (scrollTop > 100) {
                $('.efecto-banner').addClass('efecto');
            } else {
                $('.efecto-banner').removeClass('efecto');
            }
        }
    
        // Escuchar eventos de desplazamiento
        $(window).on('scroll', handleScroll);
    
        // Escuchar cambios en el tamaño de la ventana
        $(window).on('resize', updateNavPosition);
    });


    AOS.init({
        duration: 1000,
        once: true
    });
});