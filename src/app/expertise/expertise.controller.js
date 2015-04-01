angular.module('fadeit.expertise').controller('ExpertiseConroller', expertiseController);

expertiseController.$inject = ['$rootScope', '$stateParams', '$state', '$document', '$translate', '$filter', '$timeout'];
function expertiseController($rootScope, $stateParams, $state, $document, $translate, $filter, $timeout) {
  var vm = this,
      pageTitle,
      pageDesc;
  //Map english urls to danish & vice-versa
  var map = {
      'software-development': 'software-udvikling',
      'drupal-development': 'drupal-udvikling',
      'python-development': 'python-udvikling',
      'angularjs-development': 'angularjs-udvikling',
      'ckan-development': 'ckan-udvikling',
      'nodejs-development': 'nodejs-udvikling',
      'backend-development': 'backend-udvikling'
  };
  //Extend map with other-way-round mappings
  map = angular.extend(map, invert(map));
  vm.tech = $stateParams.tech;

  pageTitle = 'EXPERTISE_PAGE_TITLE_' + vm.tech.replace('-','_').toUpperCase();
  pageDesc = 'EXPERTISE_' + vm.tech.replace('-','_').toUpperCase();

  remapOtherLangURL(vm.tech);

  /*
   * If the translation of pageTitle/Desc will return a different string, use it
   * otherwise default to the expertise meta's.
   *
   * This prevents the display of a key when no translation is available.
   */
  if($filter('translate')(pageTitle) !== pageTitle){
    $state.current.data.pageTitle = pageTitle;
  }
  else {
    $state.current.data.pageTitle = 'EXPERTISE_PAGE_TITLE';
  }

  if($filter('translate')(pageDesc) !== pageDesc){
    $state.current.data.pageDesc = pageDesc;
  }
  else {
    $state.current.data.pageDesc = 'EXPERTISE_SUMMARY';
  }


  /*
   * Scroll to the #id of the tech in the URL if available
   */
  $timeout(function (){
    if($document[0].getElementById(vm.tech)){
      $document.scrollTo(angular.element($document[0].getElementById(vm.tech)), 80, 500);
    }
  }, 200); //200ms to be on the safe side

  function remapOtherLangURL(tech){
    var mappedTech = map[tech];
    if(mappedTech !== undefined){
      $rootScope.otherLangURL = $rootScope.otherLangURL.replace(tech, map[tech]);
    }
  }

  function invert(obj) {
    var new_obj = {};
    for (var prop in obj) {
      if(obj.hasOwnProperty(prop)) {
        new_obj[obj[prop]] = prop;
      }
    }
    return new_obj;
  }
}

