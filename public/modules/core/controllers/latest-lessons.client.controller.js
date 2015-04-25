'use strict';

angular.module('core').controller('LatestLessonsController', ['$scope','Latestlessons',
	function($scope,Latestlessons) {
		// Latest lessons controller logic
		// Find a list of Lessons
		$scope.findLatest = function() {
			$scope.latestlessons = Latestlessons.query();
		};
	}
]);