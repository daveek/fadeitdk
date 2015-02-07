angular.module('fadeit.coreLayout').directive('anchorScrollTo', anchorScrollTo);

anchorScrollTo.$inject = ['$location', '$anchorScroll'];
function anchorScrollTo($location, $anchorScroll){
  function anchorScrollLink(scope, element, attrs){
    element.bind('click', function(){
        var old = $location.hash();
        $location.hash(attrs.anchor);
        $anchorScroll();
        //reset to old to keep any additional routing logic from kicking in
        $location.hash(old);
        return false;
    });
  }

  return {
    restrict: 'A',
    templateUrl: 'shared-views/navigation.html',
    controller: 'LayoutController',
    controllerAs: 'vm',
    link: anchorScrollLink,
    replace: false
  };
}