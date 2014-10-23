'use strict';

angular.module('core').controller('HomeController', ['$scope', '$http', 'linkify', '$sce', '$log', 'parallaxHelper', '$document', 'ProjectPreview', '$location', '$anchorScroll', 'AnimationService', 'StyleService', function ($scope, $http, linkify, $sce, $log, parallaxHelper, $document, ProjectPreview, $location, $anchorScroll, AnimationService, StyleService) {
	//load services
	$scope.projectPreviews = ProjectPreview;
	$scope.anim = AnimationService;
	$scope.styles = StyleService.getStyles();

	//containers & vars
	$scope.gridSize = 0;
	$scope.nextElementClass = '';

	/*
	 * This method generates the 'image grid' of the projects/cases.
	 * @activeCover is the current size ID of the element: sm, md or lg.
	 * @isDummy means it's an empty grid element (no image)
	 * @index is the current index of the ng-repeat
	 *
	 * This method calculates whether the combined grid size is 12
	 * and appends a 'clear-preview' class that forces the next item
	 * to start from a new row.
	 *
	 * It also generates the equivalent bootstrap column class (col-xs-*)
	 * OR appends 'dummy-project' if the element is empty.
	 *
	 */
	$scope.generateClass = function generateClass(activeCover, isDummy, index){
		var cssClass,
				currentGridSize,
				columnSize;

		switch(activeCover){
			case 'sm':
				currentGridSize = 3;
				columnSize = 3;
			break;
			case 'md':
				/*
				 * The combined grid width is calculated by adding the
				 * grid size corresponding to each element.
				 * For 'lg' and 'sm' the grid size will always be the same as
				 * the column size.
				 *
				 * 'md' is susceptible to 3 use cases:
				 * - grid size 0: placed at the beginning of the row (left)
				 * - grid size 3: placed in the middle of the row (center)
				 * - grid size 6: placed at the end of the row (right)
				 *
				 * The column size is always 6 for 'md'.
				 *
				 * The rule of thumb is that there cannot be two
				 * 'md' elements on the same row
				 *
				 */
				if($scope.gridSize === 3){
					currentGridSize = 3; //if it's after col-xs-3 dummy (in the middle)
				}
				else if($scope.gridSize === 6){
					currentGridSize = 6; //if it's at the end of the row, after 2 col-xs-3's
				}
				else if($scope.gridSize === 0){
					currentGridSize = 0; //if it's at the beginning of the row
				}

				columnSize = 6;
			break;
			case 'lg':
				currentGridSize = 12;
				columnSize = 12;
			break;
			default:
				currentGridSize = 12;
				columnSize = 12;
			break;
		}

		cssClass = 'col-xs-' + columnSize + ' project-size-' + activeCover + $scope.nextElementClass;

		//if it's just a dummy project, append one more identifier class
		if(isDummy){
			cssClass += ' dummy-project';
		}

		//keeps track of the column size of grid elements, when it's >=12, it adds a '.clear-preview' class (clear:both) to the element
		$scope.gridSize += currentGridSize;
		if($scope.gridSize >= 12){
			$scope.nextElementClass += ' clear-preview';
			$scope.gridSize = 0;
		}
		else{
			$scope.nextElementClass = '';
		}

		return cssClass;
	};
}]);