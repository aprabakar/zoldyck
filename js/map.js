function initMap() {
  var uluru = {lat: 11.076189, lng: 76.988488};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });

var markerImage = 'marker.png';

        var contentString = '<div class="info-window">' +
                '<h3>KUMARAGURU COLLEGE OF TECHNOLOGY</h3>' +
                '<div class="info-content">' +
                '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 400
        });

        marker.addListener('mouseover', function () {
            infowindow.open(map, marker);
             });
}