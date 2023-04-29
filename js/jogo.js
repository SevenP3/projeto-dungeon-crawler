var x = 0;
var y = 0;

window.addEventListener("keydown", function (event) {
   var tecla = event.keyCode;

   if (tecla == "68") {
      x += 10;
      document.getElementById("person").style.left = x + "px";
   } else if (tecla == "65") {
      x -= 10;
      document.getElementById("person").style.left = x + "px";
   } else if (tecla == "87") {
      y -= 10;
      document.getElementById("person").style.top = y + "px";
   } else if (tecla == "83") {
      y += 10;
      document.getElementById("person").style.top = y + "px";
   }
});
