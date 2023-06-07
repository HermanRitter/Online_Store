function initMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 55.7751891, lng: 37.4911201 },
        zoom: 13,
    });
    let marker = new google.maps.Marker({
        position: { lat: 55.7751891, lng: 37.4911201 },
        map: map
    })
}
window.initMap = initMap;

