$(document).ready(function() {
  const $videoContainer = $('.embed-responsive');
  const video = $videoContainer.find('video')[0];
  const $verButton = $('.ver');
  const $icono = $verButton.find('i');
  let hoverTimeout;

  // Función para verificar el tamaño de pantalla
  function isMobile() {
    return window.matchMedia('(max-width: 991px)').matches;
  }

  // Actualizar estado del botón
  function updateButton() {
    const isPlaying = !video.paused;
    
    if (isMobile()) {
      // Siempre visible en móviles
      $verButton.css({'opacity': 1, 'pointer-events': 'auto'});
    } else {
      // Comportamiento original en desktop
      $verButton.css({
        'opacity': isPlaying ? 0 : 1,
        'pointer-events': isPlaying ? 'none' : 'auto'
      });
    }
  }

  // Eventos del video
  $(video).on('play pause', updateButton);

  // Click del botón
  $verButton.on('click', function(e) {
    e.preventDefault();
    video[video.paused ? 'play' : 'pause']();
    $icono.toggleClass('fa-play fa-pause');
    $videoContainer.toggleClass('brillo', video.paused);
  });

  // Comportamiento hover solo en desktop
  if (!isMobile()) {
    $videoContainer.add($verButton).on('mouseenter', function() {
      clearTimeout(hoverTimeout);
      if (!video.paused) {
        $verButton.css({'opacity': 1, 'pointer-events': 'auto'});
      }
    }).on('mouseleave', function() {
      if (!video.paused) {
        hoverTimeout = setTimeout(() => {
          $verButton.css({'opacity': 0, 'pointer-events': 'none'});
        }, 300);
      }
    });
  }

  // Inicialización y evento de resize
  updateButton();
  $(window).on('resize', updateButton);
});