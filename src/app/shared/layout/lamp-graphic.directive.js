angular.module('fadeit.coreLayout').directive('lampGraphic', lampGraphic);

/*
 * Inserts a lamp template that tracks scroll and
 * adjust opacity to a 'bulb-light' (bright) element
 *
 * Top = transparent
 * Bottom = opaque
 *
 */
lampGraphic.$inject = ['$window'];
function lampGraphic($window){
  function lampGraphicLink(){
    var bodyElement = angular.element('body'),
        windowElement = angular.element($window),
        currentOpacity = 0,
        elementOpacity,
        childBulb = angular.element(".bulb-light");

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