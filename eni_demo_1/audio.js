document.getElementById('play-btn').addEventListener('click', function() {
    var audio = document.getElementById('audio-player');
    if (audio.paused) {
      audio.play();
      this.innerHTML = 'Pause'; // Mettez le texte "Pause" sur le bouton
    } else {
      audio.pause();
      this.innerHTML = 'Lire la musique'; // Mettez le texte "Lire la musique" sur le bouton
    }
  });