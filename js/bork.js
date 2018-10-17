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
      },
      {
      id: 3,
      name: 'Wyatt',
      color: 'Gray',
      weight: 26,
      breed: 'Weimaraner',
      city: 'Kent',
      state: 'WA',
      health: 'No health problems',
      pic: './images/3wyatt.jpg'
      },
      {
      id: 4,
      name: 'Greta',
      color: 'Tan',
      weight: 8,
      breed: 'Dachshund',
      city: 'Seattle',
      state: 'WA',
      health: 'No health problems',
      pic: './images/4greta.jpg'
      },
      {
      id: 5,
      name: 'Rocky',
      color: 'Black',
      weight: 18,
      breed: 'Pug',
      city: 'Seattle',
      state: 'WA',
      health: 'Seasonal allergies',
      pic: './images/5rocky.jpg'
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
        // If no dog is found, send them back to the home page
        window.location.href = './index.html'
      } 
    },
    checkForm: function() {
      document.querySelector('button').addEventListener('click', function() {
        if( document.querySelector('[name="phone"]').value == "" && document.querySelector('[name="email"]').value == "" ) {
          event.preventDefault()
          document.querySelector('#message').innerHTML = "Please enter a phone number and/or email address before sending. Thanks!"
        }
      })
    }
  },
  computed: {
    makeEmail() {
      return 'https://formspree.io/' + this.eName + '@' + this.eDomain + '.com'
    }
  }
})

vm.loadDog()
vm.checkForm()