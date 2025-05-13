$(document).ready(function() {
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                $(entry.target).next('img').css("clip-path", "inset(0 0 0 0)");
                $(entry.target).find('img').css("clip-path", "inset(0 0 0 0)");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 1 }); // Ajusta el umbral según tus necesidades

    // Seleccionar y observar todos los elementos con la clase .hola
    var targets = document.querySelectorAll('.efecto-pincel');
    targets.forEach(function(target) {
        observer.observe(target);
    });
});