let grid_size = 0;
let data = {};
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
  let row = td.getAttribute('row'), column = td.getAttribute('column');

  let current_mark =  null//moves % 2 === 0 ? 'X' : 'O';
//   its going to give t\you the remainder which will be either 0 or 1 or X and O
  if((moves % 2) === 0) {
    current_mark = 'X';
    console.log(data)
  }
  else {
    current_mark = 'O'
    console.log(data)
  }
  // to add the method splice to our game array.
  // We are calling it splice because
  // we want to replace either the X or O when clicking the box (replacing empy string)
  // gameArray.splice($( "td" ).html();)
  td.innerHTML = current_mark;
  data[row + ' ' + column] = current_mark;
  moves++;
  //  moves up 1 space

  if (checkForWinner(current_mark, grid_size)) {

    console.log('We got a winner');
  } else {
    console.log('try again')
  }

}
const checkForWinner = (mark, grid_size) => {
  let vertical_count = 0,
    horizontal_count = 0,
    right_to_left_count = 0,
    left_to_right_count = 0;

  for (let i = 0; i < grid_size; i++) {

    vertical_count = 0;
    horizontal_count = 0;

    for (let j = 0; j < grid_size; j++) {

      if (data[i + '' + j] == mark) {
        horizontal_count++;
      }
      console.log(data)
      console.log(j + i)
      if (data[j + '' + i] == mark) {
        vertical_count++;
      }
    }

    if (data[i + '' + i] == mark) {
      left_to_right_count++;
    }

    if (data[(grid_size - 1 - i) + '' + i] == mark) {
      right_to_left_count++;
    }

    if (horizontal_count == grid_size || vertical_count == grid_size) {
      return true;
    }

  }

  if (left_to_right_count == grid_size || right_to_left_count == grid_size) {
    return true;
  }

  return false;
}
module.exports = {
  paintBoard
}
