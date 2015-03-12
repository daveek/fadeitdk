angular.module('fadeit.blog').controller('BlogController', blogController);

blogController.$inject = ['$scope', '$stateParams','BlogService', '$state', '$sce', 'angularLoad'];
function blogController($scope, $stateParams, BlogService, $state, $sce, angularLoad) {
  //read the project id from the state
  var vm = this;
  vm.requestUrl = $stateParams.postId;

  vm.trustUrl = function trustUrl(url) {
    return $sce.trustAsResourceUrl(url);
  };

  if(!$stateParams.postId){
    $state.go('blog');
  }

  //load the prism script
  angularLoad.loadScript('src/assets/js/prism.js').then(function() {
  }).catch(function() {
    //TODO: how can we handle this?
    console.log('failed to load prism');
  });

  BlogService.singlePost(vm.requestUrl)
    .then(function singlePostResponse(response){
      var pageTitle, pageDesc;

      vm.post = response;
      pageTitle = !response.error ? vm.post.title : 'Sorry, this post does not exist';
      pageDesc = !response.error ? vm.post.intro : 'Sorry, this post does not exist';

      $scope.$emit('changedPage', pageTitle);
      $scope.$emit('changedDesc', pageDesc);
  }, function blogListError(error){
    vm.post = 'Sorry, we couldn\'t find this blog post. Will you ever forgive us?';
    vm.post += 'The server replied with the status: ' + error.status + ', ' + error.statusText + '.';
  });
}
