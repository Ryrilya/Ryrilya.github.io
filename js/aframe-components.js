AFRAME.registerComponent('out-of-focus', {
  init: function () {
    console.log("out-of-focus");
    var marker = this.el;
    var element = marker.children[0];
    var contentMarkerLost = document.querySelector("#content-markerLost");

    marker.setAttribute('emitevents', 'true');

    // If the marker is found
    marker.addEventListener('markerFound', function () {
      // Hide the centered content
      contentMarkerLost.setAttribute("visible", false);
    });
    marker.addEventListener('markerLost', function () {
      // Take the marker's content and set the same values to the content hidden in the center of the screen
      let geometry = element.getAttribute('geometry');
      let material = element.getAttribute("material");

      contentMarkerLost.setAttribute("visible", true); // Make visible the centered content
      contentMarkerLost.setAttribute("geometry", geometry);
      contentMarkerLost.setAttribute("material", material);
      contentMarkerLost.setAttribute("material", { opacity: 0.7 });
      contentMarkerLost.setAttribute("rotation", { x: -34, y: 56, z: 92 })
    });
  }
});

AFRAME.registerComponent('out-of-focus-gltf', {
  init: function () {
    var marker = this.el;
    var element = marker.children[0];
    var contentMarkerLost = document.querySelector("#content-markerLost");
    var showContentBtn = document.querySelector("#show-content-btn");
    var modelControlsBtns = document.querySelector("#model-controls-btns");

    marker.setAttribute('emitevents', 'true');

    // If the marker is found
    marker.addEventListener('markerFound', function () {
      // Hide the centered content
      contentMarkerLost.setAttribute("visible", false);
      showContentBtn.style.display = "none";
      modelControlsBtns.style.display = "none";
    });
    marker.addEventListener('markerLost', function () {
      // Take the marker's content and set the same values to the content hidden in the center of the screen
      let model = element.getAttribute('gltf-model');
      let scale = element.getAttribute("scale");

      contentMarkerLost.setAttribute("visible", true); // Make visible the centered content
      contentMarkerLost.setAttribute("gltf-model", model);
      contentMarkerLost.setAttribute("scale", scale);
      contentMarkerLost.setAttribute("rotation", { x: 0, y: 0, z: 0 });

      showContentBtn.style.display = "block";
      modelControlsBtns.style.display = "flex";
    });

    let zoomBtn = modelControlsBtns.children;
    zoomBtn[0].addEventListener("click", () => {
      let scale = contentMarkerLost.getAttribute("scale");
      scale.x += 0.001;
      scale.y += 0.001;
      scale.z += 0.001;

      contentMarkerLost.setAttribute("scale", scale);
    });
    zoomBtn[1].addEventListener("click", () => {
      let scale = contentMarkerLost.getAttribute("scale");
      scale.x -= 0.001;
      scale.y -= 0.001;
      scale.z -= 0.001;

      contentMarkerLost.setAttribute("scale", scale);
    });
  }
});