'use strict';

angular.module('core').controller('TechnologiesController', ['angularLoad', '$rootScope', '$scope', 'TechnologiesService', '$window', function (angularLoad, $rootScope, $scope, TechnologiesService, $window) {

    $scope.createBalls = function createBalls(){
        var technologies = TechnologiesService.getTechnologies();
        var width = angular.element(window).width();
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
        $scope.ballsCreated = true;
    };

    $scope.initBalls = function initBalls(){
        var randomGravity = angular.element(window).width() > 767 ? true : false;
        if(!$rootScope.ballsLoaded){
            angularLoad.loadScript('scripts/technologies.min.js').then(function() {
                init(randomGravity);
                $scope.createBalls();
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
            $scope.createBalls();
        }
    };

    $scope.removeBalls = function removeBalls(){
        var unbind = function(){};
        document.onmousedown = unbind;
        document.onmouseup = unbind;
        document.onmousemove = unbind;
        document.ondblclick = unbind;
    };

    //start the balls
    $scope.initBalls();

    //cleanup when going to another state
    $scope.$on('$destroy', function(){
        clear();
        $scope.removeBalls();
    });

    //re-init when resizing window
    angular.element(window).resize(function(){
        if($scope.ballsCreated){
            clear();
            $scope.createBalls();
        }
    });
}]);
