'use strict';
/**
 * Module dependencies.
 */
var init = require('./config/init')(),
	config = require('./config/config'),
	mongoose = require('mongoose'),
	chalk = require('chalk');

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

// Bootstrap db connection
var db = mongoose.connect(config.db, function(err) {
	if (err) {
		console.error(chalk.red('Could not connect to MongoDB!'));
		console.log(chalk.red(err));
	}
});

// Init the express application
var app = require('./config/express')(db);

// Bootstrap passport config
require('./config/passport')();

//if reset defined then purge all users and lessons
if(process.env.RESET == 1)
{
	var User = mongoose.model('User');
	var Lesson = mongoose.model('Lesson');
		
	User.remove({},function(){});	
	Lesson.remove({},function(){});	
}

//add default admin
//TODO: Parameterize!
var User = mongoose.model('User');
User.findOne({
	firstName: "admin"
}, 'firstName', function(err, user) {
	if (err) console.log('error searching for admin');
	else {
			if (!user) {
			
				var admin = {
					firstName: "admin",
					lastName: "adminName",
					displayName: "admin",
					email: "niladri1979@gmail.com",
					username: "admin",
					password: "red12345",
					provider: "local",
					roles: ['admin']
				}
				var user = new User(admin);
				user.save(function(err) {
					if (err) {
						console.log('error creating admin' + err)
					}
				})
			}
	}


})


// Start the app by listening on <port>
app.listen(config.port);

// Expose app
exports = module.exports = app;

// Logging initialization
console.log('MEAN.JS application started on port ' + config.port);