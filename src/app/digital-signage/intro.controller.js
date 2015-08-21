angular.module('play.digitalSignage').controller('IntroController', introController);

introController.$inject = ['$state', '$window', '$scope'];
function introController($state, $window, $scope){
  var vm = this,
      w = angular.element($window);

  vm.currentState = '';
  vm.wHeight = w.height();
  vm.maxScroll = vm.wHeight;
  vm.scrollPosition = 0;

  //$state.transitionTo(states.features);
  if($state.current.name === 'app.info-display'){
    vm.scrollPosition = 0;
  } else {
    vm.scrollPosition = -vm.maxScroll;
  }

  $scope.$on('$stateChangeSuccess', function changedDIState(event, toState){
    vm.currentState = toState.name;
  });
}