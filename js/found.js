var foundForm = document.getElementById('foundDog')
var formButton = document.getElementById('submit')

formButton.addEventListener("click", function() {
  event.preventDefault()
  var dogId = foundForm.dogId.value
  if( dogId <= 0 || dogId > 5 ) {
    var small = document.getElementById('message')
    small.innerHTML = 'Dog ID not recognized. Please enter a valid number.'
  } else {
  window.location.href = './found.html?dog=' + dogId
  }
})

