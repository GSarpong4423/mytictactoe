const game = require('./gamelogic')

const test = () => {
  alert('hello')
}

const markDiv = (event) => {
  //$('#zero').text('X')
  //event.preventDefault()

  //let parent = document.querySelector('#board div div')
// $('#board div div').on('click',()=>{

// }
//$(this).text('X');


  // if (playerX) {
  //   parent.event.target.id = 'x'
  // } else {
  //   parent.event.target.id = 'o'
  // }
  // playerX = !playerX
}

const callPaintBoard = () => {
  console.log('calling paint')
  game.paintBoard(3)
}



const addHandlers = () => {
  $('#show-alert').on('click', callPaintBoard)
  //$('#0').on('click', markDiv)

}

module.exports = {
  addHandlers
}
