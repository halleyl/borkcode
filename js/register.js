var eName = 'found'
var eDomain = 'borkcode'
var regButton = document.querySelector('#regButton')

var fsEmail = 'https://formspree.io/' + this.eName + '@' + this.eDomain + '.com'

document.querySelector('form').setAttribute('action', fsEmail)