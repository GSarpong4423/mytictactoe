let grid_size = 0;
let moves = 0;
const paintBoard = (size) => {

  let parentElement = document.querySelector('.game-panel');
  let board = parentElement.querySelector('.board');

  grid_size = size;

  let table = '<table class="table table-hover ">';
  for (let i = 0; i < grid_size; i++) {
    table += '<tr>';
    for (let j = 0; j < grid_size; j++) {
      table += '<td row="' + i + '" column="' + j + '"></td>';
    }
    table += "</tr>";
  }
  //console.log(table)

  board.innerHTML = table;

  let columns = board.getElementsByTagName('td');
  for (let i = 0; i < columns.length; i++) {
    columns[i].addEventListener('click', markElement);
  }

  console.log('calling board')

}

const markElement = (event) => {
  let td = event.target;

  if (td.innerHTML) {
    return;
    // a check to see if each td has an X or an O
  }

  // get values rows and collums
  // let row = td.getAttribute('row'), column = td.getAttribute('column');

  let current_mark =  null//moves % 2 === 0 ? 'X' : 'O';
//   its going to give t\you the remainder which will be either 0 or 1 or X and O
  if((moves % 2) === 0) {
    current_mark = 'X';
  }
  else {
    current_mark = 'O'
  }

  td.innerHTML = current_mark;
  moves++;
  //  moves up 1 space


}
const checkForWinner = () => {
// if ($(td).text()==='XXX') {
//   $('#outcome').text('Winner Chicken!') {
//     else { ($(td).text()==='OOO')
//     $('#outcome').text

//     }
//   }


}

module.exports = {
  paintBoard
}
