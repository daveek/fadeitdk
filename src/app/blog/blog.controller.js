angular.module('fadeit.blog').controller('BlogController', blogController);

blogController.$inject = ['$scope', '$stateParams','BlogService', '$state', '$sce', '$timeout'];
function blogController($scope, $stateParams, BlogService, $state, $sce, $timeout) {
  //read the project id from the state
  var vm = this;
  vm.next = undefined;
  vm.previous = undefined;
  vm.requestUrl = $stateParams.postId;
  vm.post = [];

  vm.trustUrl = function trustUrl(url) {
    return $sce.trustAsResourceUrl(url);
  };

  if(!$stateParams.postId){
    $state.go('blog');
  }

  BlogService.singlePost(vm.requestUrl)
    .then(function singlePostResponse(response){
      var pageTitle, pageDesc, pageImages;

      vm.post = response;
      pageTitle = !response.error ? vm.post.title : 'Sorry, this post does not exist';
      pageDesc = !response.error ? vm.post.intro : 'Sorry, this post does not exist';
      pageImages = [{
        'id': vm.post.id,
        'image': vm.post.cover,
        'slug': 'posts'
      }];

      $scope.$emit('changedTitle', pageTitle);
      $scope.$emit('changedDesc', pageDesc);
      $scope.$emit('changedImages', pageImages);

      //fire prev-next loader if the post doesn't have the property: 'no_related'
      if(!response.no_related){
        loadNextPrev();
      }
  }, function blogListError(error){
    vm.post.error = 'Sorry, we couldn\'t find this blog post. Will you ever forgive us?';
    vm.post.error += 'The server replied with the status: ' + error.status + ', ' + error.statusText + '.';
  });

  //Load next and previous post after a while
  function loadNextPrev(){
    $timeout(function (){
      BlogService.postIndex().then(function(response){
          for(var i=0;i < response.length; i++){
              if(response[i].id === $stateParams.postId){
                  vm.next = response[i-1];
                  vm.previous = response[i+1];
                  break;
              }
          }
      }, function (error){
          console.log('failed to load post index file');
          console.log(error);
      });
    }, 3000);
  }
}
