'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const events = require('./game/gameEvents')

 $(() => {
  let playerXTurn = true
  let token = ['X']

const alternateTurns = function() {
  if (playerXTurn) {
    token = 'X'
  } else {
    token = 'O'
  }
  playerXTurn = !playerXTurn
  return token
}
$('.cell').on('click', function(event){
  console.log(event)
  // eventually alternate between turns
   $(event.target).html(alternateTurns())

})
})

