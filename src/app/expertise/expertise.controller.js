angular.module('fadeit.expertise').controller('ExpertiseConroller', expertiseController);

expertiseController.$inject = ['$rootScope', '$stateParams', '$state', '$document', '$translate', '$filter', 'ExpertiseService'];
function expertiseController($rootScope, $stateParams, $state, $document, $translate, $filter, ExpertiseService) {
  var vm = this,
      pageTitle,
      pageDesc,
      pageFound = false;

  //Store the current URL
  vm.tech = $stateParams.tech;

  /*
   * The ExpertiseService will persistently store the expertise data
   * (loaded from expertise.json)
   * This is needed to avoid sending a request for new data which every
   * state change. As a result, the ng-repeat in the template will only
   * 'run once' (not really, but it won't loop through the entire data),
   * therefore preventing 'page jumps' when switching routes.
   */
  //TODO: promise rejects are not handled
  if(!ExpertiseService.expertiseData){
    ExpertiseService.expertiseIndex().then(function projectListResponse(response){
      //store the JSON data
      ExpertiseService.expertiseData = response;

      renderExpertiseList(response);
    });
  }
  else{
    renderExpertiseList(ExpertiseService.expertiseData);
  }


  /*
   * Loops through the expertise data to determine if a URL 'slug' (vm.tech)
   * is found in the JSON.
   * If found, the title and description will be updated.
   * If not found, the default expertise page title and description will be
   * used instead.
   */
  function renderExpertiseList(response){
    var i;
    vm.expertiseList = response;

    for(i = 0; i < vm.expertiseList.length; i++){
      if(vm.expertiseList[i].uisref.da === vm.tech || vm.expertiseList[i].uisref.en === vm.tech){
        pageTitle = vm.expertiseList[i].title;
        pageDesc = vm.expertiseList[i].description;

        pageFound = true;

        //building 'otherLangURLs': just match the JSON data for the opposite route
        if($rootScope.activeLang === 'da'){
          $rootScope.otherLangURL = $rootScope.otherLangURL.replace(vm.tech, vm.expertiseList[i].uisref.en);
        }
        else if($rootScope.activeLang === 'en'){
          $rootScope.otherLangURL = $rootScope.otherLangURL.replace(vm.tech, vm.expertiseList[i].uisref.da);
        }

        break;
      }
    }

    if(!pageFound){
      pageTitle = 'EXPERTISE_PAGE_TITLE';
      pageDesc = 'EXPERTISE_SUMMARY';

      //Scroll to top when no expertise is matched
      angular.element('html,body').animate({scrollTop: 0}, 1);
    }

    $state.current.data.pageTitle = pageTitle;
    $state.current.data.pageDesc = pageDesc;
  }
}
