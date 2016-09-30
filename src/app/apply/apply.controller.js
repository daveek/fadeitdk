angular.module('fadeit.apply').controller('ApplyController', applyController);

applyController.$inject = ['$scope', '$rootScope', '$state'];
function applyController($scope, $rootScope, $state){
  var vm = this;
  vm.application = {};
  vm.submitting = null;
  vm.applyError = null;

  vm.submitApplyForm = function (application) {
    vm.submitting = true;
    var formData = new FormData();

    // attach CV to form, if found
    var fileSelect = document.getElementById('cv-upload');
    if (fileSelect.files.length) {
      var file = fileSelect.files[0];
      formData.append('cv', file, file.name);
    }

    // attach the rest of the data to form
    formData.append('name', application.name);
    formData.append('email', application.email);
    formData.append('education', application.education);
    formData.append('message', application.message);

    // send the application to backend
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/application', true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        $state.go('app.thanks', {lang: $rootScope.activeLang});
      } else {
        vm.applyError = 'APPLY_FORM_ERROR';
        vm.submitting = false;
        $scope.$apply();
      }
    };
    xhr.send(formData);
  };
}
