angular.module('fadeit.coreLayout').directive('stretch', stretch);

/*
 * Gives the containing element a height relative to the
 * window height
 * @param amount: window size percentage (ex.: 0.9 = 90%)
 */
stretch.$inject = ['$window'];
function stretch($window){
  function stretchLink(scope, element, attrs){
    var windowElement = angular.element($window),
        previousWindowWidth = 0; //start with 0 to resize by default the first time

    function stretchElementsOnResize(){
      /*
       * Only strech if not in portrait mode and width > 767px
       * otherwise set the min width to 50% of the window size
       *
       */
      if(windowElement.height() > windowElement.width() && windowElement.height() > 767){
        console.log('resizing to 0.5 for landscape mode, bigger than 767px');
        //if in portrait mode and the viewport height is more than 767
        element.css('min-height', windowElement.height() * 0.5);
      } else {
        //if the window with is < 767, only apply resizing if the width difference is bigger than [an arbitrary] 150px
        if(windowElement.width() <= 767 && Math.abs(previousWindowWidth - windowElement.width()) > 150){
          console.log('resizing to 1 for mobiles, because the resize difference was bigger than 150');
          previousWindowWidth = windowElement.width();
          element.css('min-height', windowElement.height() * attrs.amount);
        } else if(windowElement.height() > 767){
          console.log('just resizing');
          element.css('min-height', windowElement.height() * attrs.amount);
        }
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