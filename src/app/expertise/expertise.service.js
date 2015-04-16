angular.module('fadeit.expertise').service('ExpertiseService', expertiseService);

expertiseService.$inject = ['$http', '$q'];
function expertiseService($http, $q){
  return {
    expertiseIndex: expertiseIndex,
    expertiseData: false
  };

  function expertiseIndex(){
    var expertiseListDefer = $q.defer();
    var expertiseList = $http.get('./data/expertise.json');

    expertiseList.then(function expertiseListResponse(response){
      expertiseListDefer.resolve(response.data);
    }, function expertiseListResponseError(error){
      expertiseListDefer.reject(error);
    });

    return expertiseListDefer.promise;
  }
}
