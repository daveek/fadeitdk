angular.module('fadeit.expertise').directive('scrollOnFinish', scrollOnFinish);

scrollOnFinish.$inject = ['$document', '$timeout'];
function scrollOnFinish($document, $timeout) {
  function scrollOnFinishLink (scope, element, attrs){
    if(scope.$last){
      var elementToScroll = attrs.scrollOnFinish;
      $timeout(function(){
        if($document[0].getElementById(elementToScroll)){
          $document.scrollTo(angular.element($document[0].getElementById(elementToScroll)), 90, 500);
        }
      });
    }
  }

  return {
    restrict: 'A',
    link: scrollOnFinishLink
  };
}