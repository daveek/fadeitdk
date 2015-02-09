angular.module('fadeit.projects').service('ProjectsService', projectsService);

projectsService.$inject = ['$http', '$q'];
function projectsService($http, $q){
  return {
    projectIndex: projectIndex,
    singleProject: singleProject
  };

  function projectIndex(){
    var projectListDefer = $q.defer();
    var projectList = $http.get('./data/project-list.json');

    projectList.then(function projectListResponse(response){
      projectListDefer.resolve(response.data);
    }, function projectListResponseError(error){
      projectListDefer.reject(error);
    });

    return projectListDefer.promise;
  }

  function singleProject(projectId){
    var singleProjectsDefer = $q.defer();
    var availableProviders = $http.get('./data/projects.json');

    availableProviders.then(function singleProjectResponse(response){
      var currentProject = {},
          projectExists = false;

      for (var key in response.data) {
        if (response.data.hasOwnProperty(key)) {
          if(projectId === response.data[key].id){
            projectExists = true;
            currentProject = response.data[key];
          }
        }
      }

      if(!projectExists) {
        currentProject.error = true;
        currentProject.message = 'Could not find the project with id ' + projectId;
      }

      singleProjectsDefer.resolve(currentProject);
    }, function singleProjectErrorResponse(error){
      singleProjectsDefer.reject(error);
    });

    return singleProjectsDefer.promise;
  }
}
