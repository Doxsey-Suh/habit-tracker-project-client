'use strict'

let store = require('./../store')

const habitCreateSuccess = function (response) {
  store.habit = response.habit
  const date = new Date(response.habit.createdAt)
  // $('#display-date').html(`Date: ${date.toDateString()}`)
  // const answer = () => {
  //   if (response.habit.achieve === true) {
  //     return 'yes'
  //   } else {
  //     return 'No'
  //   }
  // }
  $('#display-activity').html(`Habit: ${response.habit.name}`)
  $('#display-achievement').html(`Target: ${response.habit.target}`)
  $('#display-area').show()
  $('#hi-five').show()
  $('#habit-name').val('')
  $('#display-date').html(`Date: ${date.toDateString()}`)
  // $('#message2').html('Create Habit Successful')
  $('form').trigger('reset')
  
  // let createHtml = (`
  // <span> Activity: ${response.habit.name}</span>
  // `)
}
const activityCreateFail = function (response) {
  $('#message2').html('Sorry, Create Activity Unsuccessful')
  // $('#message').delay(1000).fadeOut('slow')
}

let count = 1
// arrange array newest on top
const indexActivitySuccess = function (response) {
  store = response
  $('#index').html('')
  // $('#habit-input').hide()
  // $('#delete-update').show()
  $('#sign-out-form').show()
  // $('#habit-name').val('')
  $('#message2').show()
  $('#sign-out-form').show()
  $('#activity-inqury').show()
  $('#delete-form').show()
  $('#display-area').show()
  $('#update-form').show()
  $('#index').show()

  const index = response.habits
  index.map(myFunction)
  // $('#index').html(toHTML)
  function myFunction (item) {
    const date = new Date(item.createdAt)
    // const answer = () => {
    //   if (item.achieve === true) {
    //     return 'Yes'
    //   } else {
    //     return 'No'
    //   }
    document.getElementById('index').innerHTML += '<div class="hobby-index-item" id=' + item._id + '>Activity: ' +
    item.name + ' on ' +
  date.toDateString() + '<br>' + ' ID ' + item._id + '<br><button id="did-it">I did it</button></div>'
  document.getElementById(item._id).addEventListener("click", handleClick)
  function handleClick () {
  
    if (count >= item.target) {
      alert('good job!')
      return count = 1
    }
  alert(item._id + ' ' + count)
  return count += 1
}
  }


}


const indexActivityFail = function (response) {
  $('#message2').html('Display Failed')
}

const activityUpdateSuccess = function (response) {
  $('#update-form')[0].reset()
  $('#message2').html('Activity Update Successful')
}
const activityUpdateFail = function (response) {
  $('#update-form')[0].reset()
  $('#message2').html('Sorry, Activity Update Unsuccessful')
}

const deleteOneSuccess = function (response) {
  $('#message2').html('Delete successfully.')
  $('#delete-form')[0].reset()
}
const deleteOneFail = function (response) {
  $('#message2').html('Delete is not successful.')
  $('#delete-form')[0].reset()
}

module.exports = {
  habitCreateSuccess,
  activityCreateFail,
  indexActivitySuccess,
  indexActivityFail,
  activityUpdateSuccess,
  activityUpdateFail,
  deleteOneSuccess,
  deleteOneFail

}
