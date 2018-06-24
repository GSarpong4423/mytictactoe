'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const PLAYER_TOKEN = 'X'
const COMPUTER_TOKEN = 'O'

$(() => {
  const grid = [
    ['','','',''],
    ['','','',''],
    ['','','',''] // blank 3x3 grid array and open strings
  ];
  // event for user to click
  $('.col').click(function() {
    // $this = $(this);
    $(this).html(PLAYER_TOKEN);
    const r = $(this).data('r');  // .this is equal to 'r' and 'c'
    const c = $(this).data('c');
    grid[r][c] = PLAYER_TOKEN;
    console.log(grid);
  });
})


// not to repeat code
