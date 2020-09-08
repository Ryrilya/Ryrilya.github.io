var body = document.querySelector("body");
var markerLostEntity = document.querySelector("#content-markerLost");
var hammertime = new Hammer(body);
var pinch = new Hammer.Pinch();
hammertime.add(pinch);

hammertime.on('pan', (ev) => {
  body.style.cursor = "-webkit-grab";
  let rotation = markerLostEntity.getAttribute("rotation");
  switch (ev.direction) {
    case 2:
      rotation.y += 4;
      break;
    case 4:
      rotation.y -= 4;
      break;
    case 8:
      rotation.x += 4;
      break;
    case 16:
      rotation.x -= 4;
      break;
    default:
      break;
  }

  markerLostEntity.setAttribute("rotation", rotation);
});

hammertime.on("pinch", (ev) => {
  let scale = { x: ev.scale, y: ev.scale, z: ev.scale };
  module.setAttribute("scale", scale);
});