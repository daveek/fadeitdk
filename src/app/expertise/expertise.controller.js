angular.module('fadeit.expertise').controller('ExpertiseConroller', expertiseController);

expertiseController.$inject = ['$rootScope', '$stateParams', '$state'];
function expertiseController($rootScope, $stateParams, $state) {
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
  var vm = this;
  vm.tech = $stateParams.tech;
  $state.current.data.pageTitle = 'EXPERTISE_PAGE_TITLE_' + vm.tech.replace('-','_').toUpperCase();
  $state.current.data.pageDesc = 'EXPERTISE_' + vm.tech.replace('-','_').toUpperCase();
  remapOtherLangURL(vm.tech);

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
 
