window.initMap = function () {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 48.153033, lng: 10.8838333 },
        zoom: 10
    });

    new google.maps.Marker({
        position: { lat: 48.17544626081099, lng: 11.551784725912334 },
        label: "올림피아파크",
        map: map
    });
}

