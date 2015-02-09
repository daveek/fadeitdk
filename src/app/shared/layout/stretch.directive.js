angular.module('fadeit.coreLayout').directive('stretch', stretch);

/*
 * Gives the containing element a height relative to the
 * window height
 * @param amount: window size percentage (ex.: 0.9 = 90%)
 */
stretch.$inject = ['$window'];
function stretch($window){
  function stretchLink(scope, element, attrs){
    var windowElement = angular.element($window);

    function stretchElementsOnResize(){
      /*
       * Only strech if not in portrait mode and width > 767px
       * otherwise set the min width to 50% of the window size
       *
       */
      if(windowElement.height() > windowElement.width() && windowElement.height() > 767){
        element.css('min-height', windowElement.height() * 0.5);
      } else {
        element.css('min-height', windowElement.height() * attrs.amount);
      }

    }

    windowElement.bind('resize', stretchElementsOnResize);
    stretchElementsOnResize();
  }

  return {
    scope: {},
    restrict: 'A',
    link: stretchLink
  };
}