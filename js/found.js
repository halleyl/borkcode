var foundForm = document.getElementById('foundDog')
var formButton = document.getElementById('submit')

formButton.addEventListener("click", function() {
  event.preventDefault()
  var dogId = foundForm.dogId.value
  window.location.href = './found.html?dog=' + dogId
})

