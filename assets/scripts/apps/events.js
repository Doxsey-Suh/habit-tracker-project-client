'use strict'
// require
// const config = require('./config')
// const store = require('./store')
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

let activity = 'run'
let achievement = false
let data

// function onCreateActivity (e) {
//   e.preventDefault()

//   activity = $('#habit-name').val()

//   achievement = e.target.value (achievement is the target value, which is 'yes' or 'no'
//   data = {
//     habit: {
//       achieve: achievement, (achieve ia a boolean in the schema, 'false' if no, 'trye' if yes)
//       name: activity
//     }
//   }
//   api.activityCreate(data)
//     .then(ui.activityCreateSuccess)
//     .catch(ui.activityCreateFail)
//     // .then (() => {indexActivity()})
//     // .then(ui.indexActivitySuccess)
// }

function onCreateHabit (e) {
  e.preventDefault()
  const form = e.target
  const data = getFormFields(form)
    api.habitCreate(data)
      // .then(console.log('after the api request'))
      .then(ui.habitCreateSuccess)
      // .then(console.log('after ui success but before fail response'))
      .catch(ui.habitCreateFail)
}

function onDeleteOne (e) {
  e.preventDefault()
  let data = $('#id').val()
  api.deleteOne(data)
    .then(ui.deleteOneSuccess)
    .catch(ui.deleteOneFail)
}

function onIndexActivity (e) {
  e.preventDefault()
  $('#sign-out-form').show()
  api.indexActivity()
    .then(ui.indexActivitySuccess)
    .catch(ui.indexActivityFail)
}

function onUpdate (e) {
  e.preventDefault()
  const form = e.target
  const data = getFormFields(form)
  api.update(data)
    .then(ui.activityUpdateSuccess)
    .catch(ui.activityUpdateFail)
}

module.exports = {
  onCreateHabit,
  onIndexActivity,
  onDeleteOne,
  onUpdate
}
