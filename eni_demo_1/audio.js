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
      this.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>'; // Mettez l'icone' "Pause" sur le bouton
    } else {
      audio.pause();
      this.innerHTML = '<i class="fa fa-stop" aria-hidden="true"></i>'; // Mettez l'icone' "play
    }
  }); 

  //Hide button when nothing is played

  document.getElementById('btn-stop-hidden').addEventListener('click', function() {
    if (audio.paused) {
        // Hide the button
        this.style.display = 'none';
    } else {
        // Show the button
        this.style.display = 'block'; // or 'inline' or any other valid CSS value
    }
});
