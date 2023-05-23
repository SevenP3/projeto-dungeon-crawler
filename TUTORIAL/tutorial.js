if ('autoplay' in HTMLAudioElement.prototype) {
  var backgroundMusic = document.getElementById('backgroundMusic');
  var currentMusicIndex = localStorage.getItem('currentMusicIndex');
  var musicList = [
    // Adicinar as músicas aqui
    'Pink-Panther-Theme.mp3',
    'Pink-Panther-Theme.mp3'
  ];


  if (currentMusicIndex !== null) {
    backgroundMusic.src = musicList[currentMusicIndex];
    backgroundMusic.play().catch(function() {
      // O navegador bloqueou a reprodução automática; aguardar interação do usuário
    });
  }

  // Iniciar a reprodução de áudio quando o usuário interagir com a página
  document.addEventListener('click', function() {
    if (backgroundMusic.paused) {
      backgroundMusic.play();
    }
  });

  // Pausar a reprodução quando o usuário sair da página
  window.addEventListener('beforeunload', function() {
    if (!backgroundMusic.paused) {
      backgroundMusic.pause();

      // Trocar para a próxima música
     function changeMusic() {
        if (currentMusicIndex === null) {
          currentMusicIndex = 0;
        } else {
          currentMusicIndex = (parseInt(currentMusicIndex) + 1) % musicList.length;
        }
        localStorage.setItem('currentMusicIndex', currentMusicIndex);
        backgroundMusic.src = musicList[currentMusicIndex];
        backgroundMusic.play().catch(function() {
          // O navegador bloqueou a reprodução automática; aguardar interação do usuário
        });
      }

      // Chamar a função changeMusic para trocar de música (você pode chamá-la onde for necessário)
      changeMusic();
    }
  });
}

function popup() {
  var popup = document.getElementById("historia");
  popup.classList.toggle("show");
}