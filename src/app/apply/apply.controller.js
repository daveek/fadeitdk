angular.module('fadeit.apply').controller('ApplyController', applyController);

applyController.$inject = ['$scope'];
function applyController($scope){
  $scope.application = {};
  $scope.apply = function (application) {
    /* TODO:
     - Make sure that email and name is present
     - add success and failure feedback in frontend
    */
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
        alert('Success!');
      } else {
        alert('An error occurred!');
      }
    };
    xhr.send(formData);
  };
}
