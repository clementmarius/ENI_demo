// Tracks 1 : 


// Récupération id du bouton

document.getElementById('play-btn').addEventListener('click', function() {

    // Récupération id audio

    var audio = document.getElementById('audio-player');
    if (audio.paused) {
      audio.play();
      this.innerHTML = 'Pause'; // Mettez le texte "Pause" sur le bouton
    } else {
      audio.pause();
      this.innerHTML = 'Lire la musique'; // Mettez le texte "Lire la musique" sur le bouton
    }
  });


// Tracks 2 : 

  document.getElementById('play-btn-second').addEventListener('click', function() {
    var audio = document.getElementById('audio-player-second');
    if (audio.paused) {
      audio.play();
      this.innerHTML = 'Pause'; // Mettez le texte "Pause" sur le bouton
    } else {
      audio.pause();
      this.innerHTML = 'Lire la musique'; // Mettez le texte "Lire la musique" sur le bouton
    }
  }); 


// Tracks 3 : 

  document.getElementById('play-btn-third').addEventListener('click', function() {
    var audio = document.getElementById('audio-player-third');
    if (audio.paused) {
      audio.play();
      this.innerHTML = 'Pause'; // Mettez le texte "Pause" sur le bouton
    } else {
      audio.pause();
      this.innerHTML = 'Lire la musique'; // Mettez le texte "Lire la musique" sur le bouton
    }
  }); 


//  Tracks 4 : 

document.getElementById('play-btn-fourth').addEventListener('click', function() {
    var audio = document.getElementById('audio-player-fourth');
    if (audio.paused) {
      audio.play();
      this.innerHTML = '<i class="fa fa-play"'; // Mettez le texte "Pause" sur le bouton
    } else {
      audio.pause();
      this.innerHTML = 'Lire la musique'; // Mettez le texte "Lire la musique" sur le bouton
    }
  }); 