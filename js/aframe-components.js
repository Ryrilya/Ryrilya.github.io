AFRAME.registerComponent('out-of-focus', {
  init: function () {
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