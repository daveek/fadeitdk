angular.module('fadeit.blog').controller('BlogListController', blogListController);

blogListController.$inject = ['BlogService'];
function blogListController(BlogService){
  var vm = this;

  BlogService.postIndex().then(function postListResponse(response){
    vm.posts = response;
  });
}