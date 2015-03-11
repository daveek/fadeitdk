angular.module('fadeit.blog').directive('codeBlock', codeBlock);

codeBlock.$injector = ['$sanitize', '$http', '$q', '$filter'];
function codeBlock($sanitize, $http, $q, $filter){
  function codeBlockLink(scope, element, attrs){
    function loadCodeFile(){
      var codeFileDefer = $q.defer();
      var codeFile = $http.get(attrs.codeBlock);
      console.log(attrs.codeBlock);

      codeFile.then(function codeFileResponse(response){
        codeFileDefer.resolve(response.data);
      }, function codeFileResponseError(error){
        codeFileDefer.reject(error);
      });

      return codeFileDefer.promise;
    }

    loadCodeFile().then(function codeFileLoaded(response){
      //escape the shit of the response
      element[0].innerHTML = $sanitize($filter('htmlEscape')(response));
      console.log(element);
    });
  }

  return {
    restrict: 'A',
    link: codeBlockLink
  };
}