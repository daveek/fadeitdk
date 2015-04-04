angular.module('fadeit.coreLayout').directive('scrollOpacity', scrollOpacity);

/*
 * Modifies the background-color opacity of an element as the page is scrolled
 *
 * @param attrs.maxOpacity = the maximum opacity that can be reached
 * @param attrs.slowDown = coeficient to slow down opacity increase
 * @param attrs.rgb = the background color of the element
 *
 */
scrollOpacity.$inject = ['$window'];
function scrollOpacity($window){
  function scrollOpacityLink(scope, element, attrs){
    var bodyElement = angular.element('body'),
        windowElement = angular.element($window),
        currentOpacity = 0,
        elementOpacity;

    function opacityScrollAdjust(){
      elementOpacity = (this.pageYOffset / (bodyElement.height() - windowElement.height()) / attrs.slowDown).toFixed(1);

      if(elementOpacity >= attrs.maxOpacity){
        elementOpacity = attrs.maxOpacity;
      }

      if(currentOpacity !== elementOpacity &&
         elementOpacity >= 0 &&
         elementOpacity <= 1){
        currentOpacity = elementOpacity;
        angular.element(element).css('background-color', 'rgba('+attrs.rgb+', ' + elementOpacity +')');
      }
    }

    windowElement.on('scroll', opacityScrollAdjust);
    scope.$watch('root.darkMode', opacityScrollAdjust);
    scope.$watch(function pageYOffsetWatch(){
      return this.pageYOffset;
    }, opacityScrollAdjust);
  }

  return {
    restrict: 'A',
    link: scrollOpacityLink
  };
}