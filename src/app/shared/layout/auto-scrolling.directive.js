/* jshint unused:false */

angular.module('fadeit.coreLayout').directive('autoScrolling', autoScrolling);

/*
 * Auto scrolls the page to focus on a element
 */
autoScrolling.$inject = ['$window', '$document', '$timeout'];
function autoScrolling($window, $document, $timeout){
  function autoScrollingLink(scope, element){
    var windowElement = angular.element($window),
        bodyElement = angular.element('body'),
        animOffset = 0,
        animDuration = 500,
        scrollTimeout;

    function centerElement(){
      var scrollTreshold = windowElement.height() * 0.29,
          absoluteElementPosition = Math.abs(this.pageYOffset - element.offset().top);

      if(absoluteElementPosition <= scrollTreshold){
        $document.scrollToElement(element, animOffset, animDuration);
      }
    }

    windowElement.bind('scroll', function autoScrollingScrolled(){
      if(windowElement.width() >= 768){
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(centerElement, 1000);
      }
    });
  }

  return {
    restrict: 'A',
    link: autoScrollingLink
  };
}