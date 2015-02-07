angular.module('abs.coreLayout').directive('lampGraphic', lampGraphic);

lampGraphic.$inject = ['$window'];
function lampGraphic($window){
  function lampGraphicLink(){
    var bodyElement = angular.element('body'),
        windowElement = angular.element($window),
        currentOpacity = 0,
        elementOpacity,
        childBulb = angular.element(".bulb-light");
        console.log(bodyElement.height());

    lampScrollOpacity();

    function lampScrollOpacity(){
      elementOpacity = (this.pageYOffset / (bodyElement.height() - windowElement.height())).toFixed(1);

      if(currentOpacity !== elementOpacity &&
         elementOpacity >= 0 &&
         elementOpacity <= 1){
        currentOpacity = elementOpacity;
        childBulb.css('opacity', elementOpacity);
      }
    }

    windowElement.bind('scroll', lampScrollOpacity);
  }

  return {
    restrict: 'A',
    templateUrl: 'shared-views/lamp-graphic.html',
    link: lampGraphicLink,
    replace: true
  };
}