angular.module('fadeit.digitalSignage').directive('scrollMovement', scrollMovement);

scrollMovement.$inject = ['$timeout', '$state'];
function scrollMovement($timeout, $state){
  function scrollMovementLink(scope){
    var vm = scope.$parent.vm;

    //Custom scroll method
    function scrollTo(start, to, duration, targetVmVar) {
      var change = to - start,
          currentTime = 0,
          increment = 20;

      var animateScroll = function animateScroll(){
        currentTime += increment;
        var val = easeInOutQuad(currentTime, start, change, duration);
        vm[targetVmVar] = -val;

        if(currentTime < duration) {
          $timeout(animateScroll, increment);
        }
      };

      animateScroll();
    }

    function easeInOutQuad (currentTime, startValue, changeInValue, duration) {
      currentTime /= duration/2;
      if (currentTime < 1) {
        return changeInValue/2*currentTime*currentTime + startValue;
      }

      currentTime--;

      return -changeInValue/2 * (currentTime*(currentTime-2) - 1) + startValue;
    }

    scope.elementScroll = function elementScroll($event, $delta){
      if(vm.scrollPosition + $delta < 0 && vm.scrollPosition + $delta >= -vm.maxScroll){
        //Exactly as the normal scroll
        vm.scrollPosition += $delta;
      }
    };

    scope.scrollToBottom = function scrollToBottom(e){
      e.preventDefault();
      scrollTo(-vm.scrollPosition, vm.maxScroll, 500, 'scrollPosition');
    };

    scope.scrollToTop = function scrollToBottom(){
      scrollTo(-vm.scrollPosition, 0, 500, 'scrollPosition');
    };

    //Watch for the scrollPostion and update the route on the intro page
    scope.$watch(function(){
      return vm.scrollPosition;
    }, function scrollPosChanged(newValue, oldValue){
      if(newValue !== oldValue){
        if(vm.scrollPosition <= -vm.maxScroll){
          $state.transitionTo('app.info-display.features', {lang: scope.activeLang});
        } else if(vm.currentState === 'app.info-display.features'){
          $state.transitionTo('app.info-display', {lang: scope.activeLang});
        }
      }
    });
  }

  return {
    scope: true,
    restrict: "A",
    link: scrollMovementLink
  };
}