let tabela = document.getElementById("map2");

let numRow = 30;
let numCol = 30;

let containerTxt = document.getElementById("container-txt");
let spanLives = document.getElementById("lives")

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


let buttonRow = 13
let buttonCol = 10
let buttonCell = tabela.rows[buttonRow].cells[buttonCol]
buttonCell.innerHTML = "O"
buttonCell.setAttribute("id", "button")

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

//Setting location of keys and doors

let lives = 3;
let pressedKey = false;
let pressed2Key = false;
let openedDoor = false;
let opened2Door = false;


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
   if (lives == 0) {
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

   if(playerCell === buttonCell && event.key === "i"){
      let randomNumber = parseInt(Math.random()*2)+1
      if(randomNumber === 1){
         lives++
      } else if(randomNumber === 2){
         lives--
         if (lives == 0) {
            window.open("../GAMEOVER/gameover.html", "_self");
         }
   } 
}
if(playerCell !== buttonCell){
   buttonCell.innerHTML = "O"
}
   spanLives.innerHTML = "Lives: " + lives
});
