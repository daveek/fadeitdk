angular.module(fadeitConfig.appRootModuleName).controller('RootController', rootController);

rootController.$inject = ['$scope', '$window', '$log', '$translate', '$filter', '$state'];
function rootController($scope, $window, $log, $translate, $filter, $state) {
  var vm = this,
      wow;
  vm.pageTitle = 'fadeit';
  vm.htmlTitle = $filter('translate')('SEO_TITLE_APPEND');
  vm.pageDesc = $filter('translate')('SEO_META_DESC');
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
    wow.init();
    /*
     * updates the <title> and meta description tag if the new route has a pageTitle/pageDesc set
     * (vm.htmlTitle is binded to the title tag)
     *
     * The title/desc is also translated.
     */
    if(angular.isDefined(toState.data)){
      if(angular.isDefined(toState.data.pageTitle)){
        $scope.$watch(function(){
          return $filter('translate')(toState.data.pageTitle);
        }, function(newValue){
          var translatedValue = $filter('translate')(newValue);
          vm.pageTitle = translatedValue;
          vm.htmlTitle = translatedValue + ', ' + $filter('translate')('SEO_TITLE_APPEND');
        });
      }

      if(angular.isDefined(toState.data.pageDesc)){
        $scope.$watch(function(){
          return $filter('translate')(toState.data.pageDesc);
        }, function(newValue){
          vm.pageDesc = newValue;
        });
      }
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

    /*
     * blog state add a class to 'nav-container'
     */
    if(toState.name === 'blog-posts'){
      vm.blogMode = true;
    } else {
      vm.blogMode = false;
    }

    /*
     * if the user navigates to one of the language-setting pages
     */
    if(toState.name === 'da-dk'){
      vm.changeLanguage('da-dk', 'da-dk');
      $state.go('home');
    }

    if(toState.name === 'en-us'){
      vm.changeLanguage('en-us', 'en-us');
      $state.go('home');
    }

    angular.element('html,body').animate({scrollTop: 0}, 1);
  });

  /*
   * Listens to controllers that emit title/desc changes
   * Used for custom titles/descs (not from state provider),
   * when the route has a dynamic parameter.
   *
   * With this we can set the titles of 'wildcard' paths.
   * E.g. on 'customers/:Id' -> the page title can be customer.name
   *
   */
  $scope.$on('changedPage', function changedPage(event, pageTitle){
    var translatedValue = $filter('translate')(pageTitle);
    vm.htmlTitle = translatedValue + ', ' + $filter('translate')('SEO_TITLE_APPEND');
    vm.pageTitle = translatedValue;
  });

  $scope.$on('changedDesc', function changedPage(event, pageDesc){
    vm.pageDesc = $filter('translate')(pageDesc);
  });

  /*
   * Language switch
   */
  vm.changeLanguage = function changeLanguage(lang, langId){
    $translate.use($filter('translate')(lang));

    localStorage.setItem('langStore', JSON.stringify({
      'lang': $filter('translate')(langId)
    }));

    //update language display
    vm.langId = $filter('translate')(langId);
  };

  //set current language id on first load
  vm.langId = $filter('translate')('ID');

  //init wow
  wow = new WOW(
    {
      boxClass:     'fadeit-animate',
      animateClass: 'animated',
      offset:       0,
      mobile:       false,
      live:         true
    }
  );
  wow.init();

  /*
   * Hackers gotta hack
   */
  $log.debug('\n'+
    ' ███████╗ █████╗ ██████╗ ███████╗██╗████████╗\n'+
    ' ██╔════╝██╔══██╗██╔══██╗██╔════╝██║╚══██╔══╝\n'+
    ' █████╗  ███████║██║  ██║█████╗  ██║   ██║\n'+
    ' ██╔══╝  ██╔══██║██║  ██║██╔══╝  ██║   ██║\n'+
    ' ██║     ██║  ██║██████╔╝███████╗██║   ██║\n'+
    ' ╚═╝     ╚═╝  ╚═╝╚═════╝ ╚══════╝╚═╝   ╚═╝\n'+
    '\n\n'+
   'Like inspecting code? Check out fadeit.dk/apply');
}