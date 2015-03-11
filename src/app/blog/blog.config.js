fadeitConfig.pushAfterBootstrap('fadeit.blog');

angular.module('fadeit.blog').config(blogConfig);

blogConfig.$inject = ['$stateProvider'];
function blogConfig($stateProvider){
  $stateProvider.state('blog', {
    url: '/blog',
    templateUrl: 'views/blog-list-page.html',
    controller: 'BlogListController',
    controllerAs: 'vm',
    data:{
      pageTitle: 'BLOG_PAGE_TITLE',
      pageDesc: 'BLOG_SUMMARY'
    }
  }).state('blog-posts', {
    url: '/post/:postId',
    controller: 'BlogController',
    controllerAs: 'vm',
    templateUrl: 'views/blog-page.html',
    data:{
      pageTitle: 'BLOG_PAGE_TITLE',
      pageDesc: 'BLOG_SUMMARY'
    }
  });
}