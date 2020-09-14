var button = document.querySelector("#calculate-distance-btn");
var text = document.querySelector("#distance-text");

button.addEventListener("click", () => {
  const distanceMsg = document.querySelector('[gps-entity-place]').getAttribute('distanceMsg');
  text.value = distanceMsg;
  console.log(distanceMsg);
});
