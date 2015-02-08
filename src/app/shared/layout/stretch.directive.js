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
    element.css('min-height', windowElement.height() * attrs.amount);

    windowElement.bind('resize', function resizeWindowStretch(){
      element.css('min-height', windowElement.height() * attrs.amount);
    });
  }

  return {
    scope: {},
    restrict: 'A',
    link: stretchLink
  };
}