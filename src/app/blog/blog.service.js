angular.module('fadeit.blog').service('BlogService', blogService);

blogService.$inject = ['$http', '$q'];
function blogService($http, $q){
  return {
    postIndex: postIndex,
    singlePost: singlePost
  };

  function postIndex(){
    var postListDefer = $q.defer();
    var postList = $http.get('./posts/post-list.json');

    postList.then(function postListResponse(response){
      postListDefer.resolve(response.data);
    }, function postListResponseError(error){
      postListDefer.reject(error);
    });

    return postListDefer.promise;
  }

  function singlePost(postId){
    var singlePostsDefer = $q.defer();
    var availableProviders = $http.get('./posts/'+postId+'/content.json');

    availableProviders.then(function singlePostResponse(response){
      var currentPost = {};

      if(!response.data[0]) {
        currentPost.error = true;
        currentPost.message = 'Could not find the post with id ' + postId;
      } else {
        currentPost = response.data[0];
      }

      singlePostsDefer.resolve(currentPost);
    }, function singlePostErrorResponse(error){
      singlePostsDefer.reject(error);
    });

    return singlePostsDefer.promise;
  }
}
