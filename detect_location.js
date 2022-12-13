// Get the IPv6
$.getJSON("https://api6.ipify.org?format=json", function(data) {

  // Setting text of element P with id gfg
  document.getElementById(`ipv6`).innerHTML = data.ip;
})

// Get the IPv4
$.getJSON("https://api4.ipify.org?format=json", function(data) {

  // Setting text of element P with id gfg
  document.getElementById(`ipv4`).innerHTML = data.ip;
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
        console.log(error_message);
  });
} else {
  // geolocation is not supported
  // get your location some other way
  console.log('geolocation is not enabled on this browser');
}
