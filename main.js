/* global google */
(function () {
  // https://developer.mozilla.org/ja/docs/WebAPI/Using_geolocation
  if ("geolocation" in navigator) {
    /* geolocation is available */
    console.log('geolocation is available');
  } else {
    /* geolocation IS NOT available */
    console.log('geolocation IS NOT available');
    return void 0;
  }
  
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position.coords.latitude, position.coords.longitude);
    
    var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var opts = {
      zoom: 15,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"), opts);
    var marker = new google.maps.Marker({
      position: latlng,
      map: map,
      title: 'おれはここだ！'
    });
  });
})();