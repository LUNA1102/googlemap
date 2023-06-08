window.initMap = function () {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 48.13510233937565, lng: 11.581980501868335 },
        zoom: 10
    });

    const trip = [
        { label: "A", name: "올림피아파크", lat: 48.175407, lng: 11.551797 },
        { label: "B", name: "뮌헨 올림픽 스타디움", lat: 48.173111, lng: 11.546587 },
        { label: "C", name: "님펜부르크 궁전", lat: 48.1582422, lng: 11.5031617 },
        { label: "D", name: "마리엔 광장", lat: 48.137383, lng: 11.575454 },
        { label: "E", name: "영국 정원", lat: 48.164182, lng: 11.605574 },
    ];

    const bounds = new google.maps.LatLngBounds();

    trip.forEach(({ label, lat, lng }) => {
        const marker = new google.maps.Marker({
            position: { lat, lng },
            label,
            map
        });
        bounds.extend(marker.position);
    });

    map.fitBounds(bounds);
}