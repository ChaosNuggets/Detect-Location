
/* Add "https://api.ipify.org?format=json" statement
this will communicate with the ipify servers in
order to retrieve the IP address $.getJSON will
load JSON-encoded data from the server using a
GET HTTP request */

$.getJSON("https://api.ipify.org?format=json", function(data) {

  // Setting text of element P with id gfg
  document.getElementById(`ipAddress`).innerHTML = data.ip;
})



if ("geolocation" in navigator) {
  // check if geolocation is supported/enabled on current browser
  navigator.geolocation.getCurrentPosition(
      function success(position) {
        // for when getting location is a success
        document.getElementById(`location`).innerHTML =
        position.coords.latitude + 
        ', ' + position.coords.longitude;
      },

      function error(error_message) {
        // for when getting location results in an error
        console.error('An error has occured while retrieving' +
                  'location', error_message)
  });
} else {
  // geolocation is not supported
  // get your location some other way
  console.log('geolocation is not enabled on this browser')
}
