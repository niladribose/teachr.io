'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Lesson Schema
 */
var LessonSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Lesson name',
		trim: true
	},
	videoLocation: {
		type: String,
		default: '',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Lesson', LessonSchema);