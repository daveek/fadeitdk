angular.module('fadeit.expertise').controller('ExpertiseConroller', expertiseController);

expertiseController.$inject = ['$stateParams', '$state'];
function expertiseController($stateParams, $state) {
  var vm = this;
  vm.tech = $stateParams.tech;
  $state.current.data.pageTitle = 'EXPERTISE_PAGE_TITLE_' + vm.tech.replace('-','_').toUpperCase();
  $state.current.data.pageDesc = 'EXPERTISE_' + vm.tech.replace('-','_').toUpperCase();
}
 
