angular.module('play.coreLayout').directive('appShell', appShell);

function appShell(){
  return {
    restrict: 'A',
    templateUrl: 'shared-views/shell.html',
    replace: true
  };
}