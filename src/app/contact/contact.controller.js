/*global google:true; */

angular.module('fadeit.contact').controller('ContactController', contactController);

contactController.$inject = ['$window'];
function contactController($window){
  function loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' +
        '&signed_in=true&callback=initializeMaps';
    document.body.appendChild(script);

    $window.initializeMaps = function initializeMaps(){ // jshint ignore:line
      var mapCanvas = document.getElementById('fadeit-map');
      var fadeitLocation = new google.maps.LatLng(56.182175, 10.097238);
      var mapOptions = {
        scrollwheel: false,
        panControl: true,
        scaleControl: true,
        center: fadeitLocation,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      mapOptions.styles = [{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"stylers":[{"hue":"#00aaff"},{"saturation":-100},{"gamma":2.15},{"lightness":12}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"lightness":24}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":57}]}];

      var gmap = new google.maps.Map(mapCanvas, mapOptions); // jshint ignore:line
      var marker = new google.maps.Marker({ // jshint ignore:line
        position: fadeitLocation,
        map: gmap,
        title: 'fadeit ApS'
      });
    };
  }

  loadScript();
}