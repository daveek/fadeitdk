angular.module(fadeitConfig.appRootModuleName).controller('RootController', rootController);

rootController.$inject = ['$scope', '$window', '$log'];
function rootController($scope, $window, $log) {
  var vm = this;
  vm.htmlTitle = 'fadeit';
  vm.darkMode = false;
  vm.toolboxPage = false;
  /*
   * Event callback on every route change
   * Scrolls the page to the top as 'normally' changing a page
   *
   * Other available params for $stateChangeSuccess: toParams, fromState, fromParams
   *
   */
  $scope.$on('$stateChangeSuccess', function rootStateChangeSuccess(event, toState){
    /*
     * updates the <title> tag if the new route has a pageTitle set
     * (vm.htmlTitle is binded to the title tag)
     *
     */
    if(angular.isDefined(toState.data) && angular.isDefined(toState.data.pageTitle)){
      vm.htmlTitle = toState.data.pageTitle;
    }

    /*
     * if next state is home, turn dark mode on
     */
    if(toState.name === 'home'){
      vm.darkMode = true;
    } else {
      vm.darkMode = false;
    }

    /*
     * if the state is toolbox, don't show footer
     */
    if(toState.name === 'toolbox'){
      vm.toolboxPage = true;
    } else {
      vm.toolboxPage = false;
    }

    $window.scrollTo(0,0);
  });

  /*
   * Listens to controllers that emit title changes
   * Used for custom titles (not from state provider),
   * when the route has a dynamic parameter.
   *
   * With this we can set the titles of 'wildcard' paths.
   * E.g. on 'customers/:Id' -> the page title can be customer.name
   *
   */
  $scope.$on('changedPage', function changedPage(event, pageTitle){
    vm.htmlTitle = pageTitle;
  });

  /*
   * Hackers gotta hack
   */
  $log.debug(
    '███████╗ █████╗ ██████╗ ███████╗██╗████████╗\n'+
    ' ██╔════╝██╔══██╗██╔══██╗██╔════╝██║╚══██╔══╝\n'+
    ' █████╗  ███████║██║  ██║█████╗  ██║   ██║\n'+
    ' ██╔══╝  ██╔══██║██║  ██║██╔══╝  ██║   ██║\n'+
    ' ██║     ██║  ██║██████╔╝███████╗██║   ██║\n'+
    ' ╚═╝     ╚═╝  ╚═╝╚═════╝ ╚══════╝╚═╝   ╚═╝\n'+
    '\n\n'+
   'Like inspecting code? Check out fadeit.dk/apply');
}