// Possibilities:
// Use components and props

// TODO
// Add dog image(s) to array
// Change image src to a v-bind or v-attr?


var vm = new Vue({
  
  el: "#app",
  data: {
    dogs: [
      {
      id: 0,
      name: '(Dog Name)',
      color: '(Dog Color)',
      weight: 0,
      breed: '(Dog Breed)',
      city: '(City)',
      state: '(State)',
      health: '(Health Status)',
      pic: './images/0dog.jpg'
      },
      {
      id: 1,
      name: 'Charlie',
      color: 'Black/Tan',
      weight: 13,
      breed: 'Chihuahua mix',
      city: 'Seattle',
      state: 'WA',
      health: 'No health problems',
      pic: './images/1charlie.jpg'
      },
      {
      id: 2,
      name: 'Pepper',
      color: 'White and Tan',
      weight: 22,
      breed: 'Corgi',
      city: 'Shoreline',
      state: 'WA',
      health: 'Arthritis',
      pic: './images/2pepper.jpg'
      }
    ],
    dogNum: 0,
    eName: 'found',
    eDomain: 'borkcode'
  },
  methods: {
    loadDog: function(dogNum) {
      // Get the URL and grab the number value at the end
      var theUrl = window.location.href
      var cleanUrl = parseInt(theUrl.split("=").slice(-1))
      // If the number identifies an index within the array,
      // assign the current dog to that item in the array
      if( cleanUrl > 0 && cleanUrl < this.dogs.length) {
        this.dogNum = cleanUrl
      } else {
        this.dogNum = 0
      } 
    }
  },
  computed: {
    makeEmail() {
      return 'https://formspree.io/' + this.eName + '@' + this.eDomain + '.com'
    }
  }
})

vm.loadDog()

// TODO
// Set up a BETTER contingency if i is NaN?

// TODO
// Set up form handler for contact form

// TODO
// Figure out location services
