$(document).ready(function() {
  const $videoContainer = $('.embed-responsive');
  const video = $videoContainer.find('video')[0];
  const $verButton = $('.ver');
  const $icono = $verButton.find('i');


  // Configuración inicial
  function updateButton() {
    const isPlaying = !video.paused;
    $verButton.css('opacity', isPlaying ? 0 : 1);
    $verButton.css('pointer-events', isPlaying ? 'none' : 'auto');
  }

  // Eventos del video
  $(video).on('play pause', updateButton);

  // Click del botón
  $verButton.on('click', function(e) {
    e.preventDefault();

    if (video.paused) {
      video.play();
      $icono.removeClass('fa-play').addClass('fa-pause');
      $videoContainer.removeClass('brillo')
    } else {
      video.pause();
      $icono.removeClass('fa-pause').addClass('fa-play');
      $videoContainer.addClass('brillo')
    }
  });

  // Hover manual con detección de botón
  let hoverTimeout;
  $videoContainer.add($verButton).on('mouseenter', function() {
    clearTimeout(hoverTimeout);
    if (!video.paused) {
      $verButton.css({'opacity': 1, 'pointer-events': 'auto'});
    }
  }).on('mouseleave', function() {
    if (!video.paused) {
      hoverTimeout = setTimeout(() => {
        $verButton.css({'opacity': 0, 'pointer-events': 'none'});
      }, 300); // Tiempo para llegar al botón
    }
  });

  updateButton(); // Estado inicial
});