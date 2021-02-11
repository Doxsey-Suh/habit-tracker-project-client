'use strict'

let store = require('./../store')

const activityCreateSuccess = function (response) {
  store.habit = response.habit
  const date = new Date(response.habit.createdAt)
  // $('#display-date').html(`Date: ${date.toDateString()}`)
  const answer = () => {
    if (response.habit.achieve === true) {
      return 'yes'
    } else {
      return 'No'
    }
  }
  $('#display-activity').html(`Activity: ${response.habit.name}`)
  $('#activity-inqury').hide()
  $('#display-achievement').html(`Achieved: ${answer()}`)
  $('#display-area').show()
  $('#hi-five').show()
  $('#habit-name').val('')
  $('#display-date').html(`Date: ${date.toDateString()}`)
  $('#message2').html('Create Activity Successful')
  
  // let createHtml = (`
  // <span> Activity: ${response.habit.name}</span>
  // `)
}
const activityCreateFail = function (response) {
  $('#message2').html('Sorry, Create Activity Unsuccessful')
  // $('#message').delay(1000).fadeOut('slow')
}

// arrange array newest on top
const indexActivitySuccess = function (response) {
  store = response
  console.log(store)
  document.getElementById('index').innerHTML = ''
  // $('#habit-input').hide()
  // $('#delete-update').show()
  // $('#sign-out-form').show()
  // $('#habit-name').val('')
  // $('#message2').show()
  // $('#sign-out-form').show()
  // $('#activity-inqury').hide()
  // $('#delete-form').show()
  // $('#display-area').show()
  // $('#update-form').show()
  // $('#index').show()
  const inde = (`
  <tr>
  <th scope="row">1</th>
  <td>Mark</td>
  <td>Otto</td>
  <td>@mdo</td>
  <td>@mdo</td>
  <td>@mdo</td>
</tr>
  `)


  const index = response.habits
  console.log(index)
  // index.forEach(myFunction)
  // $('#index').html(toHTML)
  for (let i = 0; i < index.length; i++) {
    const item = index[i]
    const date = new Date(item.createdAt)
    const answer = () => {
      if (item.achieve === true) {
        return 'Yes'
      } else {
        return 'No'
      }
    }
    // $('#tbody').append(`
    // <tr>
    //   <th scope="row">2</th>
    //   <td> hi</td>
    //   <td>my </td>
    //   <td>name </td>
    //   <td>is</td>
    //   <td>johan</td>
    // </tr>
    //   `)
   
    $('#tbody').append(`
    <tr>
      <th scope="row">${item.name}</th>
      <td>${answer()}</td>
      <td>${date.toDateString()}</td>
      <td>${item._id}</td>
      <td><button>update</button></td>
      <td><button>delete</button></td>
  </tr>
      `)
    // $('#tbody').append(`
    //   <tr>
    //     <th scope="row">1</th>
    //     <td>Mark</td>
    //     <td>Otto</td>
    //     <td>@mdo</td>
    //     <td>@mdo</td>
    //     <td>@mdo</td>
    //   </tr>
    // `)

    }



  // function myFunction (item) {
    // const item = index[i]
    // const date = new Date(item.createdAt)
    // const answer = () => {
    //   if (item.achieve === true) {
    //     return 'Yes'
    //   } else {
    //     return 'No'
    //   }
  //   }
    // $('tbody').append(`hello`)
    // $('#tbody').append(`
    //       <tr> 
    //         <th scope="row > ${item.name} </th>
    //         <td>${answer()}</td>
    //         <td>${date.toDateString()}</td>
    //         <td>${item._id}</td>
    //       </tr>
    //       `)
  // }
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
  activityCreateSuccess,
  activityCreateFail,
  indexActivitySuccess,
  indexActivityFail,
  activityUpdateSuccess,
  activityUpdateFail,
  deleteOneSuccess,
  deleteOneFail

}
