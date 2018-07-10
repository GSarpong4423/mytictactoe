// 'use strict'
// show the click - get information

const playerXTurn = true
const token = 'X'
// let currentPlayer =
const grid = ['', '', '', '', '', '', '', '', '' ]

// const alternateTurns = function() {
//   if (playerXTurn) {
//     token = 'X'
//   } else {
//     token = 'O'
//   }

// }
// playerXTurn = !playerXTurn

// Checking for winners - code influenced by stack overflow
const checkResult = function () {
  $('.row').each(function (i, val) {
    $(this).find('.cell').each(function (j, val2) {
      arr[i][j] = parseInt($(this).attr('data-points'))
    })
  })

  for (let i = 0; i < 3; i++) {
    let rowSum = 0
    for (let j = 0; j < 3; j++) {
      rowSum += arr[i][j]
    }
    if (rowSum === 3) { alert('Circle WIN!')} else if (rowSum === -3) { alert('Cross WIN!')}
  }

  for (let i = 0; i < 3; i++) {
    let colSum = 0
    for (let j = 0; j < 3; j++) {
      colSum += arr[j][i]
    }
    if (colSum === 3) { alert('Circle WIN!')} else if (colSum === -3) { alert('Cross WIN!')}
  }

  if (arr[0][0] + arr[1][1] + arr[2][2] === 3) { alert('Circle WIN!') } else if (arr[0][0] + arr[1][1] + arr[2][2] === -3) { alert('Cross WIN!')}

  if (arr[2][0] + arr[1][1] + arr[0][2] === 3) { alert('Circle WIN!') } else if (arr[2][0] + arr[1][1] + arr[0][2] === -3) { alert('Cross WIN!')}
}

// module.exports = {
//   clickEvent
// }
