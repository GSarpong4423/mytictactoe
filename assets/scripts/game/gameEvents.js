const game = require('./gamelogic')

// const clickHandler = function (event) { // Handles Game events
//   game.clickEvent(event)
// }
// const test = () => {
//   alert('hello')
// // }
// const markDiv = (event) => {
//   // $('#zero').text('X')
//   // event.preventDefault()

//   //let parent = document.querySelector('#board div div')
// // $('#board div div').on('click',()=>{
// }
// // const callPaintBoard = () => {
// //   console.log('calling paint')
// //   game.paintBoard(3)
// // }
// //   const openModal = function (event) {
// //   event.preventDefault()
// //   const data = getFormFields(event.target)

// // }

// const addHandlers = () => {
//   // $('#show-alert').on('click', callPaintBoard)
//   $('.cell').on('click',)

// }

const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('sign up ran!')

  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('sign in ran!')

  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}
const onChangePassword = function (event) {
  event.preventDefault()
  console.log('change password ran')

  const data = getFormFields(this)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
const onSignOut = function (event) {
  event.preventDefault()
  console.log('sign out ran')

  const data = getFormFields(this)

  api.changePassword(data)
    .then(ui.signOutSuccess)
    .catch(ui.changePasswordFailure)
}
const addHandlers1 = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
}
// module.exports = {
// }
$(() => {
  // addHandlers()
  addHandlers1()
})
