var longitude = document.querySelector("#longitude");
var latitude = document.querySelector("#latitude");
var button = document.querySelector("#get-coordinates-btn");

button.addEventListener("click", () => {
  console.log("clicked!");
  if (navigator.geolocation) {
    console.log("Getting current position...");
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  else {
    latitude.value = "Geolocation is not supported by this browser";
    longitude.value = "Geolocation is not supported by this browser";
  }
});

function showPosition(position) {
  console.log("retrieving...");
  latitude.value = longitude.value = "Retrieving value";
  latitude.value = position.coords.latitude;
  longitude.value = position.coords.longitude;
}