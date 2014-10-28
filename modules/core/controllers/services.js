'use strict';

angular.module('core').controller('ServicesController', ['$scope', '$log', 'AnimationService', function ($scope, $log, AnimationService) {
    //load services
    $scope.anim = AnimationService;
}]);
