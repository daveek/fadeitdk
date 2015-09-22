fadeitConfig.pushAfterBootstrap('fadeit.order');

angular.module('fadeit.order').config(orderConfig);

orderConfig.$inject = ['$stateProvider'];
function orderConfig($stateProvider){
  $stateProvider.state('app.order', {
    url: '/hjemmeside',
    templateUrl: 'views/order-page.html',
    data:{
      pageTitle: 'ORDER_PAGE_TITLE',
      pageDesc: 'ORDER_DESC'
    }
  });
}
