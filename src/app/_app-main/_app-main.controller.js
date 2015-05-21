angular.module(fadeitConfig.appRootModuleName).controller('RootController', rootController);

rootController.$inject = ['$scope', '$window', '$log', '$translate', '$filter', '$state', '$rootScope', '$location', 'store', '$stateParams'];
function rootController($scope, $window, $log, $translate, $filter, $state, $rootScope, $location, store, $stateParams) {
  var vm = this,
      wow;
  vm.pageTitle = 'fadeit';
  vm.htmlTitle = $filter('translate')('SEO_TITLE_APPEND');
  vm.pageDesc = $filter('translate')('SEO_META_DESC').replace(/<[^>]+>/gm, '');
  vm.toolboxPage = false;
  vm.pageImages = [];

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
    $rootScope.responseStatus = 200;
    var defaultState = {
        multiLang: true,
        scrollTop: true,
        darkMode: false,
        toolboxPage: false,
        blogMode: false,
        noMenu: false
    };
    angular.extend(vm, defaultState);
    angular.extend(vm, toState.data);
    //give 404 on hashbang URL's (for some reason googlebot crawled them?)
    if($location.absUrl().indexOf('#!') !== -1){
        if($location.host() !== 'localhost'){
            $rootScope.responseStatus = 404;
            vm.multiLang = false;
        }
    }

    /*
     * TODO: document this part
     * TODO: revise -> what about the 'SWITCH' translation key?
     */
    if($stateParams.lang !== undefined){
        var otherLang = $stateParams.lang === 'da' ? 'en' : 'da';
        $rootScope.activeLang = $stateParams.lang; //Used in html head
        $rootScope.otherLang = otherLang; //used in hreflang
        $rootScope.otherLangURL = $location.absUrl().replace('/' + $stateParams.lang, '/' + otherLang);
    }
    else{
        //default to danish, try localstorage & state default overrides
        $rootScope.activeLang = 'da';
        $rootScope.otherLang = false;
        $rootScope.otherLangURL = $location.absUrl().replace('/da', '/en');
        var storedLang = store.get('activeLang');
        if(storedLang){
            if(storedLang === 'en'){
                $rootScope.activeLang = 'en';
                $rootScope.otherLangURL = $location.absUrl().replace('/en', '/da');
            }
        }
        else{
            //fallback to default override
            if(toState.data.defaultLang !== undefined){
                $rootScope.activeLang = 'en';
                $rootScope.otherLangURL = $location.absUrl().replace('/en', '/da');
            }
        }
    }
    $translate.use($rootScope.activeLang);
    store.set('activeLang', $rootScope.activeLang);

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
          vm.htmlTitle = translatedValue + ' - ' + $filter('translate')('SEO_TITLE_APPEND');
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
     * Reset vm.pageImages Array
     */
     vm.pageImages = [];

    /*
     * Update canonical url
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
  $scope.$on('changedTitle', function changedTitle(event, pageTitle){
    var translatedValue = $filter('translate')(pageTitle);
    vm.htmlTitle = translatedValue + ' - ' + $filter('translate')('SEO_TITLE_APPEND');
    vm.pageTitle = translatedValue;
  });

  $scope.$on('changedDesc', function changedDesc(event, pageDesc){
    vm.pageDesc = $filter('translate')(pageDesc).replace(/<[^>]+>/gm, '');
  });

  $scope.$on('changedImages', function changedImages(event, changedImages){
    vm.pageImages = changedImages;
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
