//import { Place } from './models/place';
// getting places from APIs
function loadPlaces(position) {
  var params = {
    radius: 300,
    clientId: "SAAG2KJSSXRU45K0OHRPMRMFBGNHHC1F45D5JAXYHTZ0HJUR",
    clientSecret: "3SPETMYIWUUT1R1CB0XBUJGCFYMHAOVVODOPNMVCKPVQ0AFD",
    version: "20300101",
  };
  // CORS Proxy to avoid CORS problems
  var corsProxy = "https://cors-anywhere.herokuapp.com/";
  // Foursquare API (limit param: number of maximum places to fetch)
  var endpoint =
    corsProxy +
    "https://api.foursquare.com/v2/venues/search?intent=checkin&ll=" +
    position.latitude +
    "," +
    position.longitude +
    "&radius=" +
    params.radius +
    "&client_id=" +
    params.clientId +
    "&client_secret=" +
    params.clientSecret +
    "&limit=30&v=" +
    params.version;
  return fetch(endpoint)
    .then(function (res) {
      return res.json().then(function (resp) {
        return resp.response.venues;
      });
    })
    ["catch"](function (err) {
      console.error("Error with places API", err);
    });
}
window.onload = function () {
  var scene = document.querySelector("a-scene");
  // first get current user location
  return navigator.geolocation.getCurrentPosition(
    function (position) {
      // than use it to load from remote APIs some places nearby
      loadPlaces(position.coords).then(function (places) {
        places.forEach(function (place) {
          var latitude = place.location.lat;
          var longitude = place.location.lng;
          // add place name
          var placeText = document.createElement("a-link");
          placeText.setAttribute(
            "gps-entity-place",
            "latitude: " + latitude + "; longitude: " + longitude + ";"
          );
          placeText.setAttribute("title", place.name);
          placeText.setAttribute("scale", "5 5 5");
          placeText.addEventListener("loaded", function () {
            window.dispatchEvent(new CustomEvent("gps-entity-place-loaded"));
          });
          scene.appendChild(placeText);
        });
      });
    },
    function (err) {
      return console.error("Error in retrieving position", err);
    },
    {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 27000,
    }
  );
};
