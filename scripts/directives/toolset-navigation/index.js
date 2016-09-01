angular
	.module('toolset-navigation',[])
	.controller('Actions', ['$scope', function($scope){
		$scope.collapsed = false;
		$scope.toolId = 0;

		$scope.tools = [
			{
				id: 1,
				name: 'Text',
				iconClass: 'fa-font',
				active: false,
				options: [
					{
						id:'1a',
						name: 'Rich Content',
					},
					{
						id:'1b',
						name: 'Auto Scroll',
					},
					{
						id:'1c',
						name: 'Form',
					}
				]
			},
			{
				id: 2,
				name: 'Navigation',
				iconClass: 'fa-hand-pointer-o',
				active: false,
				options: [
					{
						id:'2a',
						name: 'Text Button',
					},
					{
						id:'2b',
						name: 'Navigation Bar',
					},
					{
						id:'2c',
						name: 'Navigation Tabs',
					}
				]
			},
			{
				id: 3,
				name: 'Image',
				iconClass: 'fa-file-image-o',
				active: false
			},
			{
				id: 4,
				name: 'Social',
				iconClass: 'fa-share-alt',
				active: false
			},
			{
				id: 5,
				name: 'Container',
				iconClass: 'fa-square-o',
				active: false
			},						
			{
				id: 6,
				name: 'Image',
				iconClass: 'fa-file-image-o',
				active: false
			},
			{
				id: 7,
				name: 'File',
				iconClass: 'fa-file-pdf-o',
				active: false
			},
			{
				id: 8,
				name: 'Chart',
				iconClass: 'fa-area-chart',
				active: false
			}
		];

		$scope.setActive = function(id, $event){
			if(id === $scope.toolId){
				$scope.toolId = 0;
			} else {
				$scope.toolId = id;				
			}
		};

		$scope.expandCollapse = function(){
			$scope.collapsed = $scope.collapsed ? false : true;
		}
	}])
	.directive('myToolset', function(){
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'scripts/directives/toolset-navigation/my-toolset.html',
			controller: 'Actions'
		}
	})
	.directive('myToolPanel', function(){
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'scripts/directives/toolset-navigation/my-tool-panel.html',
			controller: 'Actions',
			scope: {
				panel: '@'
			}
		}
	})
