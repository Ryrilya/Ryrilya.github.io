var Place = /** @class */ (function () {
  function Place(name, location) {
    this.name = name;
    this.location = location;
  }
  return Place;
})();
window.onload = function () {
  var places = staticLoadPlaces();
  renderPlaces(places);
  console.log("\nChanged GPS coordinates");
};
function staticLoadPlaces() {
  return [
    {
      name: "Magnemite",
      location: {
        lat: 45.6732267,
        lng: 11.9589154,
      },
    },
  ];
}

var model = null;

function renderPlaces(places) {
  var scene = document.querySelector("a-scene");
  places.forEach(function (place) {
    var latitude = place.location.lat;
    var longitude = place.location.lng;
    model = document.createElement("a-entity");
    model.setAttribute(
      "gps-entity-place",
      `latitude: ${latitude}; longitude: ${longitude};`
    );
    model.setAttribute("id", "model");
    model.setAttribute("gltf-model", "./assets/magnemite/scene.gltf");
    model.setAttribute("rotation", "0 0 0");
    model.setAttribute("position", "0 0 -30");
    model.setAttribute("animation-mixer", "");
    model.setAttribute("scale", "0.5 0.5 0.5");
    model.addEventListener("loaded", function () {
      window.dispatchEvent(new CustomEvent("gps-entity-place-loaded"));
    });
    scene.appendChild(model);
  });
}

const latitude = document.querySelector("#latitude");
const longitude = document.querySelector("#longitude");
const distanceMsg = document.querySelector("#distance-msg");
function getCoordinates() {
  navigator.geolocation.getCurrentPosition((location) => {
    latitude.value = location.coords.latitude;
    longitude.value = location.coords.longitude;
    // console.log(model.getAttribute("distancemsg"));

    const distanceMsgValue = model.getAttribute("distancemsg");
    distanceMsgValue == null
      ? (distanceMsg.value = "Undefined")
      : (distanceMsg.value = distanceMsgValue);
  });
}

setInterval(getCoordinates, 1000);

const btn = document.querySelector("#center-btn");
btn.addEventListener("click", () => {
  let model = document.querySelector("#model");
  model.setAttribute("position", "0 0 -30");
});
