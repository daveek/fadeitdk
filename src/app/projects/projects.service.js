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
    var singleProjectData = $http.get('./data/project-'+projectId+'.json');

    singleProjectData.then(function singleProjectResponse(response){
      var currentProject = {};

      if(response.data){
        currentProject = response.data;
      }
      else {
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
