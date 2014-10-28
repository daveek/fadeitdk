'use strict';

angular.module('core').controller('ApplyController', ['$scope', function ($scope) {
    //load form
    angular.element('#formWrapper').load('http://danmind.ru/api/apply form#webform-client-form-1', function(){
        angular.element('#webform-client-form-1').attr('action','http://danmind.ru/api/apply');
    });

}]);
