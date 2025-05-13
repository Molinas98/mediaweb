document.addEventListener("DOMContentLoaded", () => {
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                var $elemento = $(entry.target);
                var dataDiv = $elemento.data('div');
                $elemento.css('opacity', 1); // Hacer visible el contador
                
                $({ count: 0 }).animate({ count: dataDiv }, {
                    duration: 1500,
                    easing: 'linear',
                    step: function() {
                        $elemento.text(Math.floor(this.count));
                    },
                    complete: function() {
                        $elemento.text(this.count);
                    }
                });

                observer.unobserve(entry.target); // Dejar de observar una vez animado
            }
        });
    });

    $('.cifra').each(function() {
        observer.observe(this);
    });

    $('.pasarela').magnificPopup({
        type: 'image',
        gallery:{
            enabled:true
        },
        callbacks: {
            open: function() {
                // Cuando se abre el modal, ajusta el tamaño de la imagen
                $('.mfp-content').css('height', '100%');
                $('.mfp-content').css('width', '100%');
                $('.mfp-img').css('max-height', '100%');
            }
        }
    });
});
