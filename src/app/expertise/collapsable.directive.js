angular.module('fadeit.ourWorkPage').directive('collapsable', collapsableDirective);

function collapsableDirective(){
  function collapsableDirectiveLink(scope, element){
    var elementToToggle = element.children('p');

    function collapsableElementClicked(){
      if(elementToToggle.hasClass('visible')){
        elementToToggle.removeClass('visible');
      } else{
        elementToToggle.addClass('visible');
      }
    }

    element.bind('click', collapsableElementClicked);
  }

  return {
    restrict: 'A',
    link: collapsableDirectiveLink
  };
}