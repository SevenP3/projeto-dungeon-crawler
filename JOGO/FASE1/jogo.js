let table = document.getElementById("map1");
let numRows = 15;
let numCols = 15;
let pressedKey = false
let pressed2Key = false
let pressed3Key = false
let openedDoor = false
let opened2Door = false
let opened3Door = false

// Crie as células da tabela em um loop for.
for (let i = 0; i < numRows; i++) {
   let row = document.createElement("tr");
   for (let j = 0; j < numCols; j++) {
      let cell = document.createElement("td");
      row.appendChild(cell);
      if (i === 0 || i === 14 || j === 0 || j === 14) {
         cell.textContent = "*";
      }
      if (i === 5 || i === 8) {
         cell.textContent = "*";
      }
   }
   table.appendChild(row);
}

// Adiciona a porta na posição inicial
var doorRow = 5;
var doorCol = 5;
var doorCell = table.rows[doorRow].cells[doorCol];
doorCell.innerHTML = "D";
doorCell.setAttribute("id", "door");

let door2Row = 8;
let door2Col = 5;
let door2Cell = table.rows[door2Row].cells[door2Col];
door2Cell.innerHTML = "D";
door2Cell.setAttribute("id", "door2");

let door3Row = 12;
let door3Col = 14;
let door3Cell = table.rows[door3Row].cells[door3Col];
door3Cell.innerHTML = "D";
door3Cell.setAttribute("id", "door3");

let keyRow = 6;
let keyCol = 1;
let keyCell = table.rows[keyRow].cells[keyCol];
keyCell.innerHTML = "@";
keyCell.setAttribute("id", "key");

let key2Row = 1;
let key2Col = 1;
let key2Cell = table.rows[key2Row].cells[key2Col];
key2Cell.innerHTML = "@";
key2Cell.setAttribute("id", "key2");

let key3Row = 13;
let key3Col = 1;
let key3Cell = table.rows[key3Row].cells[key3Col];
key3Cell.innerHTML = "@";
key3Cell.setAttribute("id", "key3");

// Adiciona o jogador na posição inicial
let playerRow = 7;
let playerCol = 7;
let playerCell = table.rows[playerRow].cells[playerCol];
playerCell.innerHTML = "&";
playerCell.setAttribute("id", "player");

// Movimenta o jogador quando as setas do teclado são pressionadas
document.addEventListener("keydown", function (event) {
   let nextRow = playerRow;
   let nextCol = playerCol;

   if (event.key === "w") {
      nextRow--;
   } else if (event.key === "s") {
      nextRow++;
   } else if (event.key === "a") {
      nextCol--;
   } else if (event.key === "d") {
      nextCol++;
   }
   // Verifica se a próxima posição é válida
   if (nextRow >= 0 && nextRow < numRows && nextCol >= 0 && nextCol < numCols) {
      var nextCell = table.rows[nextRow].cells[nextCol];
      if (nextCell.innerHTML !== "*" && nextCell.innerHTML !== "D") {
         // Move o jogador para a próxima posição
         playerCell.innerHTML = "";
         playerCell.removeAttribute("id");
         playerRow = nextRow;
         playerCol = nextCol;
         playerCell = nextCell;
         playerCell.innerHTML = "&";
         playerCell.setAttribute("id", "player");
      }
   }

   if (playerCell === key2Cell && event.key === "i") {
      door3Cell.innerHTML = "=";
      pressed2Key = true
      opened3Door = true
   } else if(playerCell !== key2Cell && event.key !== "i" && pressed2Key === false){
      let key2Row = 1;
      let key2Col = 1;
      let key2Cell = table.rows[key2Row].cells[key2Col];
      key2Cell.innerHTML = "@";
      key2Cell.setAttribute("id", "key2");
   }
   if (playerCell === keyCell && event.key === "i") {
      door2Cell.innerHTML = "=";
      pressedKey = true
      opened2Door = true
   } else if(playerCell !== keyCell && event.key !== "i" && pressedKey === false){
      let keyRow = 6;
      let keyCol = 1;
      let keyCell = table.rows[keyRow].cells[keyCol];
      keyCell.innerHTML = "@";
      keyCell.setAttribute("id", "key");

   }
   if (playerCell === key3Cell && event.key === "i") {
      doorCell.innerHTML = "=";
      pressed3Key = true
      openedDoor = true
   } else if(playerCell!== key3Cell && event.key!=="i" && pressed3Key === false){
      let key3Row = 13;
      let key3Col = 1;
      let key3Cell = table.rows[key3Row].cells[key3Col];
      key3Cell.innerHTML = "@";
      key3Cell.setAttribute("id", "key3");
   }
   if(playerCell !== door3Cell && opened3Door===true){
      door3Cell.innerHTML = "="
   }
   if(playerCell!==door2Cell && opened2Door===true){
      door2Cell.innerHTML = "="
   }
   if(playerCell!==doorCell && openedDoor===true){
      doorCell.innerHTML = "="
   }
   if (playerCell === door3Cell) {
      window.open("../FASE2/fase2.html", "_self");
   }
});
