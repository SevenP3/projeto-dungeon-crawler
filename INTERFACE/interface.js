const btns = document.querySelectorAll(".btn");
const btnSair = document.querySelector(".sair");

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
