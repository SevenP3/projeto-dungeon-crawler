let tabela = document.getElementById("map2");

let numRow = 30;
let numCol = 30;

let containerTxt = document.getElementById("container-txt");
let spanLives = document.getElementById("lives");

//table creation and wall creation
for (let i = 0; i < numRow; i++) {
   let row = document.createElement("tr");
   for (let j = 0; j < numCol; j++) {
      let cell = document.createElement("td");
      row.appendChild(cell);
      if (
         i === 0 ||
         i === 29 ||
         j === 0 ||
         j === 29 ||
         i === 9 ||
         i === 19 ||
         j === 9 ||
         j === 19
      ) {
         cell.textContent = "*";
      }
      if ((i === 28 && j === 9) || (i === 28 && j === 19)) {
         cell.textContent = "";
      }
   }
   tabela.appendChild(row);
}

//add player in starting position
let playerRow = 10;
let playerCol = 10;
let playerCell = tabela.rows[playerRow].cells[playerCol];
playerCell.innerHTML = "&";
playerCell.setAttribute("id", "player");

let playerRowInicial = playerRow;
let playerColInicial = playerCol;

//Adding doors to map
let doorRow = 19;
let doorCol = 13;
let doorCell = tabela.rows[doorRow].cells[doorCol];
doorCell.innerHTML = "D";
doorCell.setAttribute("id", "door");

let door2Row = 15;
let door2Col = 9;
let door2Cell = tabela.rows[door2Row].cells[door2Col];
door2Cell.innerHTML = "D";
door2Cell.setAttribute("id", "door");

let door3Row = 14;
let door3Col = 19;
let door3Cell = tabela.rows[door3Row].cells[door3Col];
door3Cell.innerHTML = "D";
door3Cell.setAttribute("id", "door");

let door4Row = 9;
let door4Col = 24;
let door4Cell = tabela.rows[door4Row].cells[door4Col];
door4Cell.innerHTML = "D";
door4Cell.setAttribute("id", "door");

let door5Row = 9;
let door5Col = 4;
let door5Cell = tabela.rows[door5Row].cells[door5Col];
door5Cell.innerHTML = "D";
door5Cell.setAttribute("id", "door");

let doorFinalRow = 14;
let doorFinalCol = 29;
let doorFinalCell = tabela.rows[doorFinalRow].cells[doorFinalCol];
doorFinalCell.innerHTML = "D";
doorFinalCell.setAttribute("id", "door");

let buttonRow = 24;
let buttonCol = 5;
let buttonCell = tabela.rows[buttonRow].cells[buttonCol];
buttonCell.innerHTML = "O";
buttonCell.setAttribute("id", "button");

//Adding key to map
let keyRow = 10;
let keyCol = 14;
let keyCell = tabela.rows[keyRow].cells[keyCol];
keyCell.innerHTML = "@";
keyCell.setAttribute("id", "key");

let key2Row = 20;
let key2Col = 18;
let key2Cell = tabela.rows[key2Row].cells[key2Col];
key2Cell.innerHTML = "@";
key2Cell.setAttribute("id", "key");

let key3Row = 20;
let key3Col = 5;
let key3Cell = tabela.rows[key3Row].cells[key3Col];
key3Cell.innerHTML = "@";
key3Cell.setAttribute("id", "key");

let key4Row = 4;
let key4Col = 15;
let key4Cell = tabela.rows[key4Row].cells[key4Col];
key4Cell.innerHTML = "@";
key4Cell.setAttribute("id", "key");

let keyFinalRow = 5;
let keyFinalCol = 4;
let keyFinalCell = tabela.rows[keyFinalRow].cells[keyFinalCol];
keyFinalCell.innerHTML = "@";
keyFinalCell.setAttribute("id", "key");

let portalRow = 20;
let portalCol = 20;
let portalCell = tabela.rows[portalRow].cells[portalCol];
portalCell.innerHTML = ">";
portalCell.setAttribute("id", "portal");

let portal2Row = 7;
let portal2Col = 10;
let portal2Cell = tabela.rows[portal2Row].cells[portal2Col];
portal2Cell.innerHTML = ">";
portal2Cell.setAttribute("id", "portal");

let portal3Row = 6;
let portal3Col = 28;
let portal3Cell = tabela.rows[portal3Row].cells[portal3Col];
portal3Cell.innerHTML = ">";
portal3Cell.setAttribute("id", "portal");

let portal4Row = 2;
let portal4Col = 2;
let portal4Cell = tabela.rows[portal4Row].cells[portal4Col];
portal4Cell.innerHTML = ">";
portal4Cell.setAttribute("id", "portal");

//Setting location of keys and doors

let lives = 3;
let pressedKey = false;
let pressed2Key = false;
let openedDoor = false;
let opened2Door = false;
let pressed3Key = false;
let opened3Door = false;
let pressed4Key = false;
let opened4Door = false;
let opened5Door = false;
let pressedFinalKey = false;
let openedFinalDoor = false;

//Movement Keys
document.addEventListener("keydown", function (event) {
   let nextRow = playerRow;
   let nextCol = playerCol;

   if (event.key === "w") {
      nextRow--;
   } else if (event.key === "s") {
      nextRow++;
   } else if (event.key === "d") {
      nextCol++;
   } else if (event.key === "a") {
      nextCol--;
   }
   //Hiding the map phrase
   if (event.key) {
      containerTxt.style.display = "none";
   }

   //Collision with the wall and doors
   //Player movement
   if (nextRow >= 0 && nextRow < numRow && nextCol >= 0 && nextCol < numCol) {
      let nextCell = tabela.rows[nextRow].cells[nextCol];
      if (nextCell.innerHTML !== "*" && nextCell.innerHTML !== "D") {
         playerCell.innerHTML = "";
         playerCell.removeAttribute("id");
         playerRow = nextRow;
         playerCol = nextCol;
         playerCell = nextCell;
         playerCell.innerHTML = "&";
         playerCell.setAttribute("id", "player");
      }
   }

   //Creation of thorn
   let thornRow = [100];
   let thornCol = [100];
   for (let n = 0; n < thornRow.length; n++) {
      thornRow = [
         21, 21, 21, 21, 21, 21, 21, 20, 22, 23, 24, 23, 23, 23, 23, 23, 23, 25,
         26, 27, 27, 27, 27, 27, 25, 26, 25, 25, 25, 25, 11, 12, 13, 14, 15, 16,
         17, 11, 11, 11, 11, 11, 12, 13, 14, 15, 16, 17, 17, 17, 17, 17,
      ];
      thornCol = [
         11, 12, 13, 14, 15, 16, 17, 17, 17, 17, 17, 15, 14, 13, 12, 11, 10, 17,
         17, 17, 15, 14, 13, 12, 10, 11, 15, 14, 13, 16, 7, 7, 7, 7, 7, 7, 7, 6,
         5, 4, 3, 2, 2, 2, 2, 2, 2, 2, 3, 4, 5, 6,
      ];
      let thornCell = tabela.rows[thornRow[n]].cells[thornCol[n]];
      thornCell.innerHTML = "#";
      thornCell.setAttribute("id", "thorn");

      //Collision with the thorn
      if (playerCell === thornCell) {
         playerCell.innerHTML = "";
         playerCell.removeAttribute("id");
         playerRow = playerRowInicial;
         playerCol = playerColInicial;
         playerCell = tabela.rows[playerRowInicial].cells[playerColInicial];
         playerCell.innerHTML = "&";
         playerCell.setAttribute("id", "player");

         let thornCell = tabela.rows[thornRow[n]].cells[thornCol[n]];
         thornCell.innerHTML = "#";
         thornCell.setAttribute("id", "thorn");

         lives--;
      }
   }
   //Defeat of the player, after reaching 3x the thorn
   if (lives <= 0) {
      window.open("../GAMEOVER/gameover.html", "_self");
   }

   //Creation of the character's interaction with the key
   //Alteração do sprite da porta

   if (playerCell === keyCell && event.key === "i") {
      doorCell.innerHTML = "=";
      pressedKey = true;
      openedDoor = true;
   } else if (playerCell !== doorCell && openedDoor === true) {
      doorCell.innerHTML = "=";
   } else if (playerCell !== keyCell && pressedKey === false) {
      keyCell.innerHTML = "@";
   }

   if (playerCell === key2Cell && event.key === "i") {
      door2Cell.innerHTML = "=";
      pressed2Key = true;
      opened2Door = true;
   }
   if (playerCell !== key2Cell && pressed2Key === false) {
      key2Cell.innerHTML = "@";
   } else if (playerCell !== door2Cell && opened2Door === true) {
      door2Cell.innerHTML = "=";
   }
   if (playerCell === keyFinalCell && event.key === "i") {
      doorFinalCell.innerHTML = "=";
      door5Cell.innerHTML = "=";
      pressedFinalKey = true;
      openedFinalDoor = true;
      opened5Door = true;
   }
   if (playerCell !== keyFinalCell && pressedFinalKey === false) {
      keyFinalCell.innerHTML = "@";
   }
   if (playerCell === doorFinalCell) {
      window.open("../FASE3/fase3.html", "_self");
   }
   if (playerCell !== door5Cell && opened5Door === true) {
      door5Cell.innerHTML = "=";
   }

   if (playerCell === key3Cell && event.key === "i") {
      door3Cell.inner = "=";
      pressed3Key = true;
      opened3Door = true;
   }
   if (playerCell !== key3Cell && pressed3Key === false) {
      key3Cell.innerHTML = "@";
   } else if (playerCell !== door3Cell && opened3Door === true) {
      door3Cell.innerHTML = "=";
   }
   if (playerCell === key4Cell && event.key === "i") {
      door4Cell.inner = "=";
      pressed4Key = true;
      opened4Door = true;
   }
   if (playerCell !== key4Cell && pressed4Key === false) {
      key4Cell.innerHTML = "@";
   } else if (playerCell !== door4Cell && opened4Door === true) {
      door4Cell.innerHTML = "=";
   }
   if (playerCell === portalCell && event.key === "i") {
      playerCell.innerHTML = "";
      playerCell.removeAttribute("id");
      playerRow = portal2Row;
      playerCol = portal2Col;
      playerCell = tabela.rows[playerRow].cells[playerCol];
      playerCell.innerHTML = "&";
      playerCell.setAttribute("id", "player");
   } else if (playerCell === portal2Cell && event.key === "i") {
      playerCell.innerHTML = "";
      playerCell.removeAttribute("id");
      playerRow = portalRow;
      playerCol = portalCol;
      playerCell = tabela.rows[playerRow].cells[playerCol];
      playerCell.innerHTML = "&";
      playerCell.setAttribute("id", "player");
   }
   if (playerCell === portal3Cell && event.key === "i") {
      playerCell.innerHTML = "";
      playerCell.removeAttribute("id");
      playerRow = portal4Row;
      playerCol = portal4Col;
      playerCell = tabela.rows[playerRow].cells[playerCol];
      playerCell.innerHTML = "&";
      playerCell.setAttribute("id", "player");
   }
   if (playerCell !== portalCell) {
      portalCell.innerHTML = ">";
   }
   if (playerCell !== portal2Cell) {
      portal2Cell.innerHTML = ">";
   }
   if (playerCell !== portal3Cell) {
      portal3Cell.innerHTML = ">";
   }
   if (playerCell !== portal4Cell) {
      portal4Cell.innerHTML = ">";
   }

   if (playerCell === buttonCell && event.key === "i") {
      let randomNumber = parseInt(Math.random() * 2) + 1;
      if (randomNumber === 1) {
         lives++;
      } else if (randomNumber === 2) {
         lives = lives - 2;
         if (lives <= 0) {
            window.open("../GAMEOVER/gameover.html", "_self");
         }
      }
   }
   if (playerCell !== buttonCell) {
      buttonCell.innerHTML = "O";
   }
   spanLives.innerHTML = "Lives: " + lives;
});
