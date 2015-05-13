angular.module('fadeit.blog').directive('codeBlock', codeBlock);

codeBlock.$injector = ['$sanitize', '$http', '$q', '$filter', 'BlogService'];
function codeBlock($sanitize, $http, $q, $filter, BlogService){
  function codeBlockCompile(){
    return {
      post: function codeBlockPreCompile(scope, element, attrs){
        function loadCodeFile(){
          var codeFileDefer = $q.defer();
          var codePromise = $http.get(attrs.codeBlock);
          var prismPromise = BlogService.loadPrism();

          $q.all([codePromise, prismPromise]).then(function(results){
              //results are mapped in order of the promise array
              codeFileDefer.resolve(results[0].data);
          }, function(error){
              codeFileDefer.reject(error);
          });

          return codeFileDefer.promise;
        }

        loadCodeFile().then(function codeFileLoaded(response){
          //escape the shit of the response
          element[0].innerHTML = $sanitize($filter('htmlEscape')(response));
          Prism.highlightAll();
        });
      }
    };
  }

  return {
    restrict: 'A',
    compile: codeBlockCompile
  };
}
