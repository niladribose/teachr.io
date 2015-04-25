'use strict';

angular.module('core').factory('Latestlessons', [ '$resource',
	function($resource) {
		// Latestlessons service logic
		// Public API
		return $resource('lessons/:lessonId', { lessonId: '@_id'
		});
	}
]);