/* global
      setFactor: true,
      createTech: true,
      createBall: true,
      init: true,
      play: true,
      clear: true,
      onDocumentTouchStart: true,
      onDocumentTouchMove: true,
      onDocumentTouchEnd: true,
      onWindowDeviceOrientation: true
*/

angular.module('fadeit.toolbox').controller('ToolboxController', toolboxController);

toolboxController.$inject = ['$scope', 'angularLoad', '$rootScope', '$window', 'ToolboxService'];
function toolboxController($scope, angularLoad, $rootScope, $window, ToolboxService) {
  var vm = this;

  vm.createBalls = function createBalls(){
    var technologies = ToolboxService.getTechnologies();
    var width = angular.element($window).innerWidth;
    var factor;
    if(width < 360){
      factor = 0.3;
    }
    else if(width < 767){
      factor = 0.5;
    }
    else if(width < 800){
      //let's trim it down a little for 1024x768 guys
      factor = 0.75;
    }
    else{
      factor = 1;
    }

    setFactor(factor);
    angular.forEach(technologies,function(tech){
      //for smaller screens we randomize what we display
      if(factor > Math.random()){
        createTech(tech.name,tech.size,tech.circles,tech.font,tech.bold);
        createBall();
      }
    });
    vm.ballsCreated = true;
  };

  vm.initBalls = function initBalls(){
    var randomGravity = angular.element($window).innerWidth > 767 ? true : false;
    if(!$rootScope.ballsLoaded){
      angularLoad.loadScript('src/assets/js/assets.js').then(function() {
        init(randomGravity);
        vm.createBalls();
        play();
        $rootScope.ballsLoaded = true;
      }).catch(function() {
        //TODO: list technologies differently?
        console.log('failed to load');
      });
    }
    else{
        //using existing script, no need to re-download
        init(randomGravity);
        vm.createBalls();
      }
    };

    vm.removeBalls = function removeBalls(){
      var unbind = function(){};
      document.onmousedown = unbind;
      document.onmouseup = unbind;
      document.onmousemove = unbind;
      document.ondblclick = unbind;

      document.removeEventListener( 'touchstart', onDocumentTouchStart, false );
      document.removeEventListener( 'touchmove', onDocumentTouchMove, false );
      document.removeEventListener( 'touchend', onDocumentTouchEnd, false );
      window.removeEventListener( 'deviceorientation', onWindowDeviceOrientation, false );
    };

  //start the balls
  vm.initBalls();

  //cleanup when going to another state
  $scope.$on('$destroy', function(){
    clear();
    vm.removeBalls();
  });

  //re-init when resizing window
  angular.element($window).bind('resize', function(){
    if(vm.ballsCreated){
      clear();
      vm.createBalls();
    }
  });
}
