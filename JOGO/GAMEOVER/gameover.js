if ('autoplay' in HTMLAudioElement.prototype) {
  var backgroundMusic = document.getElementById('backgroundMusic');
  var currentMusicIndex = localStorage.getItem('currentMusicIndex');
  var musicList = [
     'Super-Mario-World-Game Over-Theme.mp3',
     'Super-Mario-World-Game Over-Theme.mp3'
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

btnMenu = document.getElementById("btn-menu");

btnMenu.addEventListener("click", function (e) {
   window.open("../../INTERFACE/interface.html", "_self");
});
