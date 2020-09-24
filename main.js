var Place = /** @class */ (function () {
    function Place(name, location) {
        this.name = name;
        this.location = location;
    }
    return Place;
}());
window.onload = function () {
    var places = staticLoadPlaces();
    renderPlaces(places);
    console.log('\nAdded Donmccurdy\'s library');
};
function staticLoadPlaces() {
    return [
        {
            name: 'Magnemite',
            location: {
                lat: 45.5262257,
                lng: 11.3266237
            }
        },
    ];
}
function renderPlaces(places) {
    var scene = document.querySelector('a-scene');
    places.forEach(function (place) {
        var latitude = place.location.lat;
        var longitude = place.location.lng;
        var model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', "latitude: " + latitude + ", longitude: " + longitude);
        model.setAttribute('gltf-model', 'https://raw.githubusercontent.com/Ryrilya/Ryrilya.github.io/master/assets/magnemite/scene.gltf');
        model.setAttribute('rotation', '0 180 0');
        model.setAttribute('animation-mixer', '');
        model.setAttribute('scale', '0.5 0.5 0.5');
        model.addEventListener('loaded', function () {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'));
        });
        scene.appendChild(model);
    });
}
