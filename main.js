<<<<<<< HEAD
//import { Place } from './models/place';
=======
// "use strict";
// exports.__esModule = true;
>>>>>>> 4d4b9edcd86e29d1044785a00e934c0c4c0331be
// getting places from APIs
function loadPlaces(position) {
    var params = {
        radius: 300,
        clientId: '<your-client-id>',
        clientSecret: '<your-client-secret>',
        version: '20300101'
    };
    // CORS Proxy to avoid CORS problems
    var corsProxy = 'https://cors-anywhere.herokuapp.com/';
    // Foursquare API (limit param: number of maximum places to fetch)
    var endpoint = corsProxy + "https://api.foursquare.com/v2/venues/search?intent=checkin\n      &ll=" + position.latitude + "," + position.longitude + "\n      &radius=" + params.radius + "\n      &client_id=" + params.clientId + "\n      &client_secret=" + params.clientSecret + "\n      &limit=30 \n      &v=" + params.version;
    return fetch(endpoint)
        .then(function (res) {
        return res.json()
            .then(function (resp) {
            return resp.response.venues;
        });
    })["catch"](function (err) {
        console.error('Error with places API', err);
    });
}
;
window.onload = function () {
    var scene = document.querySelector('a-scene');
    // first get current user location
    return navigator.geolocation.getCurrentPosition(function (position) {
        // than use it to load from remote APIs some places nearby
        loadPlaces(position.coords)
            .then(function (places) {
            places.forEach(function (place) {
                var latitude = place.location.lat;
                var longitude = place.location.lng;
                // add place name
                var placeText = document.createElement('a-link');
                placeText.setAttribute('gps-entity-place', "latitude: " + latitude + "; longitude: " + longitude + ";");
                placeText.setAttribute('title', place.name);
                placeText.setAttribute('scale', '5 5 5');
                placeText.addEventListener('loaded', function () {
                    window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'));
                });
                scene.appendChild(placeText);
            });
        });
    }, function (err) { return console.error('Error in retrieving position', err); }, {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 27000
    });
};
