angular.module('fadeit.expertise').controller('ExpertiseConroller', expertiseController);

expertiseController.$inject = ['$stateParams', '$state'];
function expertiseController($stateParams, $state) {
  var vm = this;
  vm.tech = $stateParams.tech;
  $state.current.data.pageTitle = 'EXPERTISE_PAGE_TITLE_' + vm.tech.toUpperCase();
  $state.current.data.pageDesc = 'EXPERTISE_' + vm.tech.toUpperCase();

  
  //vm.pageTitle = 'kuked!'+vm.tech;
  //vm.htmlTitle = 'kuked'+vm.tech;
  //TODO: optimize SEO skills
  //title = TITLE_EXPERTISE_+upperCase(vm.tech);
}
 
