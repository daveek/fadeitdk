angular.module('fadeit.apply').controller('ApplyController', applyController);

applyController.$inject = [];
function applyController(){
  angular.element('#formWrapper').load('http://danmind.ru/api/apply form#webform-client-form-1', function(){
      angular.element(document.querySelector('#webform-client-form-1')).attr('action','http://danmind.ru/api/apply');
  });
}
