angular.module('play.digitalSignage').directive('scrollMovement', scrollMovement);

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
      if($state.current.name === 'app.info-display.features' || $state.current.name === 'app.info-display'){
        if(vm.scrollPosition + $delta < 0 && vm.scrollPosition + $delta >= -vm.maxScroll){
          //Exactly as the normal scroll
          vm.scrollPosition += $delta;
        }
      }
    };

    scope.scrollToBottom = function scrollToBottom(duration){
      scrollTo(-vm.scrollPosition, vm.maxScroll, duration || 500, 'scrollPosition');
    };

    scope.scrollToTop = function scrollToBottom(duration){
      scrollTo(-vm.scrollPosition, 0, duration || 500, 'scrollPosition');
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


    //Scrolls to bottom by default after 2s
    setTimeout(function(){
      //if(vm.scrollPosition > -vm.maxScroll){
      if($state.current.name === 'app.info-display'){
        scope.scrollToBottom(1500);
      }
    }, 3000);
  }

  return {
    scope: true,
    restrict: "A",
    link: scrollMovementLink
  };
}