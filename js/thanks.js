var linkBox = document.querySelector('textarea')
var link = document.querySelector('textarea').value
var copyButton = document.querySelector('button')
var openButton = document.getElementsByTagName('button')[1]

copyButton.addEventListener('click', function(link) {
  linkBox.select()
  document.execCommand("copy")
  copyButton.innerHTML = "Link Copied!"
  copyButton.classList.add("selected")
})

openButton.addEventListener('click', function() {
  console.log(link)
  window.open(link);
})
