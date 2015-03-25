angular.module(fadeitConfig.appRootModuleName).controller('RootController', rootController);

rootController.$inject = ['$scope', '$window', '$log', '$translate', '$filter', '$state', '$rootScope', '$location', 'store'];
function rootController($scope, $window, $log, $translate, $filter, $state, $rootScope, $location, store) {
  var vm = this,
      wow;
  vm.pageTitle = 'fadeit';
  vm.htmlTitle = $filter('translate')('SEO_TITLE_APPEND');
  vm.pageDesc = $filter('translate')('SEO_META_DESC').replace(/<[^>]+>/gm, '');
  vm.toolboxPage = false;

  var port = $location.port();
  //Port can be omitted on 80 or 443
  port = (port === 80 || port === 443) ? '' : ':' + port;
  vm.pageURL = $location.protocol() + '://' + $location.host() + port;

  //setting fb app id
  $rootScope.facebookAppId = 377735055715546;

  /*
   * Event callback on every route change
   * Scrolls the page to the top as 'normally' changing a page
   *
   * Other available params for $stateChangeSuccess: toParams, fromState, fromParams
   *
   */
  $scope.$on('$stateChangeSuccess', function rootStateChangeSuccess(event, toState){
    var defaultState = {
        multiLang: true,
        scrollTop: true,
        darkMode: false,
        toolboxPage: false,
        blogMode: false,
    };
    angular.extend(vm, defaultState);
    angular.extend(vm, toState.data);
    wow.init();
    var absUrl = $location.absUrl();
    $scope.activeState = toState.name;
    //NB! gotta look out for accidental match e.g fadeit.dk/end (would match /en)
    if(absUrl.indexOf('/en') !== -1){
        $rootScope.activeLang = 'en'; //Used in html head
        $rootScope.otherLangURL = $location.absUrl().replace('/en', '/da');
        console.log('url set');
    }
    else if(absUrl.indexOf('/da') !== -1){
        $rootScope.activeLang = 'da';
        $rootScope.otherLangURL = $location.absUrl().replace('/da', '/en');
        console.log('url set');
    }
    else{
        //default to danish, try localstorage & state default overrides
        $rootScope.activeLang = 'da';
        $scope.otherLangURL = $location.absUrl().replace('/da', '/en');
        var storedLang = store.get('activeLang');
        if(storedLang){
            if(storedLang === 'en'){
                $rootScope.activeLang = 'en';
                $scope.otherLangURL = $location.absUrl().replace('/en', '/da');
            }
        }
        else{
            //fallback to default override
            if(toState.data.defaultLang !== undefined){
                $rootScope.activeLang = 'en';
                $scope.otherLangURL = $location.absUrl().replace('/en', '/da');
            }
        }
    }
    $translate.use($scope.activeLang);
    store.set('activeLang', $scope.activeLang);

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
          vm.pageDesc = newValue.replace(/<[^>]+>/gm, '');
        });
      }
    }

    /*
     * update canonical url
     */
    vm.pageURL = $location.protocol() + "://" + $location.host() + $location.path();
    if(vm.scrollTop){
      angular.element('html,body').animate({scrollTop: 0}, 1);
    }
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
    vm.pageDesc = $filter('translate')(pageDesc).replace(/<[^>]+>/gm, '');
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
