'use strict';

var _			= require('lodash'),
	grunt		= require('grunt');

function name(taskName) {

	return taskName;
};

function getTaskConfig(taskName) {

	return require('./' + taskName);
};

function getTasks(tasks) {

	return _(tasks).groupBy(name).mapValues(getTaskConfig).value();
};

module.exports = {

	manifest: {

		pkg: grunt.file.readJSON('package.json'),

		defaults: {
			src 	: 'src',
			test 	: 'test',
			preview : 'env/preview',
		}
	},

	tasks: getTasks([

		'clean',
	])
};