// 'use strict'
// show the click - get information

let currentPlayer = 'x'

const alternateTurns = function () {
  if (currentPlayer === 'x') {
    currentPlayer = 'o'
  } else {
    currentPlayer = 'x'
  }
}

// let player = true
// let token = 'X'
''
// const Xturn = function(clickedCell)
// if (playerXTurn) {
//   token = 'X'
// } else {
//   token = 'O'
// }

// function drawBoard()
// {
//   const parent = document.getElementById("grid");
//   const counter = 1;

//   for (let i = 0; i < 3; i++)
//   {
//     let row = document.createElement("row");

//     for(let x = 0; x < size; x++)
//     {
//       let col = document.createElement("cell");
//       cell.innerHTML = counter;

//       row.appendChild(cell);
//     }
//     parent.appendChild(row);
//   }
// }


// playerXTurn = !playerXTurn


// x

// // let grid_size = 0;
//  let data = {};
//  let moves = 0;

// const markElement = (event) => {
//      let td = event.target;

//    if (td.innerHTML) {
//       return;
//        // a check to see if each td has an X or an O
//   //   }

//   //   // get values rows and collums
//   //   let row = td.getAttribute('row'), column = td.getAttribute('column');

//      let current_mark =  null//moves % 2 === 0 ? 'X' : 'O';
//   // //   its going to give t\you the remainder which will be either 0 or 1 or X and O
//      if((moves % 2) === 0) {
//        current_mark = 'X';
//        console.log(data)
//      }
//      else {
//     current_mark = 'O'
//        console.log(data)
//      }

// ----

// When i click a box change the inside html to "X"






// module.exports = {
//   clickEvent
// }
