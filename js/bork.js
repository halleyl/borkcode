// Get the URL and grab the number value at the end
var theUrl = window.location.href
var dogNum = parseInt(theUrl.split("=").slice(-1));


// TODO
// Figure out how to pass the url value to the
// index value in the HTML (as 'i' or something)

// Possibilities:
// Use components and props

// TODO
// Add dog image(s) to array
// Change image src to a v-bind or v-attr

var vm = new Vue({
  
  el: "#app",
  data: {
    dogs: [
      {
      id: 1,
      name: 'Charlie',
      color: 'Black/Tan',
      weight: 13,
      breed: 'Chihuahua mix',
      city: 'Seattle',
      state: 'WA',
      health: 'No health problems'
      }
    ],
    i: dogNum
  }
})

// TODO
// Set up a contingency if i is NaN

// TODO
// Set up form handler for contact form

// TODO
// Figure out location services
