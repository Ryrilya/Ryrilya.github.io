const model = document.querySelector("#model");

model.addEventListener("markerFound", (e) => {
  isMarkerVisible = true;
});
model.addEventListener("markerLost", (e) => {
  isMarkerVisible = false;
});
model.addEventListener("onefingermove", handleRotation);

function handleRotation(event) {
  if (isMarkerVisible) {
    model.object3D.rotation.y += event.detail.positionChange.x * rotationFactor;

    model.object3D.rotation.x += event.detail.positionChange.y * rotationFactor;
  }
}
