var body = document.querySelector("body");
var showContentBtn = document.querySelector("#show-content-btn");
var markerLostEntity = document.querySelector("#content-markerLost");
var modelControlsBtns = document.querySelector("#model-controls-btns");

// Hammer.js enters in action!
var hammertime = new Hammer(body);
var pinch = new Hammer.Pinch();
hammertime.add(pinch);

// >> PAN
hammertime.on('pan', (ev) => {
  body.style.cursor = "-webkit-grab";   // Sets the cursor to a grabbing hand

  let rotation = markerLostEntity.getAttribute("rotation");

  // Rotates the object based on user input direction
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

// >> PINCH
hammertime.on("pinch", (ev) => {
  let scale = { x: ev.scale, y: ev.scale, z: ev.scale };
  module.setAttribute("scale", scale);
});

showContentBtn.addEventListener("click", () => {
  markerLostEntity.setAttribute("visible", false);  // Close the content in the middle of the screen
  showContentBtn.style.display = "none";            // Close the "Hide Content" button
  modelControlsBtns.style.display = "none";         // Close zoom buttons
  body.style.cursor = "initial";                    // Sets the cursor to default style
});

// Event fired when the user uses the scrollwheel on his mouse
body.addEventListener("wheel", (event) => {
  // Change the size of the entity based on scrolling direction

  let y = event.deltaY; // takes the event value
  let scale = markerLostEntity.getAttribute("scale"); // takes the entity's scale


  if (y > 0) {
    // If the user scrolls down then decrease the entity's size
    scale.x -= 0.001;
    scale.y -= 0.001;
    scale.z -= 0.001;
  } else {
    // If the user scrolls down then increase the entity's size
    scale.x += 0.001;
    scale.y += 0.001;
    scale.z += 0.001;
  }
});