angular.module('fadeit.projects').controller('ProjectsController', projectsController);

projectsController.$inject = ['$scope', '$stateParams','ProjectsService', '$state', '$translate', '$filter', '$sce'];
function projectsController($scope, $stateParams, ProjectsService, $state, $translate, $filter, $sce) {
  //read the project id from the state
  var vm = this,
      pageTitle,
      pageDesc,
      pageTags = [],
      pageImages = [];

  vm.project = {};
  vm.requestUrl = $stateParams.projectId;

  if(!$stateParams.projectId){
    $state.go('projects', {projectId: 'wrong-project-page'});
  }

  //TODO: promise rejects are not handled
  ProjectsService.singleProject(vm.requestUrl)
    .then(function singleProjectResponse(response){
      if(response.title){
        vm.project = response;
        pageTitle = vm.project.title;
        pageDesc = vm.project.content.shortDescription;
        pageImages = [{
          'id': vm.project.id,
          'image': vm.project.images.cover,
          'slug': 'src/assets/img/projects'
        }];

        for(var tag in vm.project.tags){
          if(vm.project.tags.hasOwnProperty(tag)){
            pageTags.push(vm.project.tags[tag].name);
          }
        }

        $scope.$emit('changedTitle', pageTitle);
        $scope.$emit('changedDesc', $filter('translate')(pageDesc) + ' Tags: ' +pageTags.toString().replace(/,/g, ', '));
        $scope.$emit('changedImages', pageImages);
      } else {
        // Corrupt response
        vm.project.error = true;
        pageTitle = pageDesc = 'Sorry, this project does not exist';
      }
  }, function singleProjectErrorResponse(error){
    vm.project.error = error;
    pageTitle = pageDesc = 'Sorry, this project does not exist';

    $scope.$emit('changedTitle', pageTitle);
    $scope.$emit('changedDesc', pageDesc);
  });

  //Generate youtube URL
  vm.getVideoUrl = function getVideoUrl(videoId){
    return $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + videoId + '?autoplay=0&showinfo=0&theme=light&color=white&rel=0');
  };
}
