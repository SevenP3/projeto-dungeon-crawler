if ('autoplay' in HTMLAudioElement.prototype) {
    var backgroundMusic = document.getElementById('backgroundMusic');
    var currentMusicIndex = localStorage.getItem('currentMusicIndex');
    var musicList = [
      'Game-Over-Mario-Theme.mp3',
      'Game-Over-Mario-Theme.mp3'
    ];
  
    if (currentMusicIndex !== null) {
      backgroundMusic.src = musicList[currentMusicIndex];
      backgroundMusic.play().catch(function() {
      });
    }
  
    document.addEventListener('click', function() {
      if (backgroundMusic.paused) {
        backgroundMusic.play();
      }
    });
  }