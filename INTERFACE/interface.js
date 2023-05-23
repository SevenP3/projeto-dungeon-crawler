const btns = document.querySelectorAll(".btn");
const btnSair = document.querySelector(".sair");

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
}

btns.forEach(function (btn) {
   btn.addEventListener("click", function (e) {
      const styles = e.currentTarget.classList;
      console.log(styles);
      if (styles.contains("iniciar")) {
         window.open("../JOGO/FASE1/jogo.html", "_self");
      } else if (styles.contains("tutorial")) {
         window.open("../TUTORIAL/tutorial.html", "_self");
      } else if (styles.contains("sair")) {
         const minhaJanela = window.open(
            "../ENCERRAMENTO/fechar.html",
            "_self"
         );
      }
   });
});
