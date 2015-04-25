'use strict';

// Configuring the Articles module
angular.module('lessons').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		 Menus.addMenuItem('topbar', 'Tutorials', 'lessons', 'dropdown', '/lessons(/create)?',true);
		 Menus.addSubMenuItem('topbar', 'lessons', 'Free Tutorials', 'lessons','lessons',true);
		 Menus.addSubMenuItem('topbar', 'lessons', 'New Tutorials', 'lessons/create','lessons/create',false,['admin']);
	}
]);