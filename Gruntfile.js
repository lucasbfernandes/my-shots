'use strict';

var _			= require('lodash'),
	configs		= require('./grunt_modules'),
	matchdep	= require('matchdep'),
	timeGrunt	= require('time-grunt');

function loadTasks(grunt) {

	grunt.log.write('%s - Loading tasks...', grunt.template.today());
	matchdep.filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	timeGrunt(grunt);
	grunt.log.writeln('done');
};

function initializeGrunt(grunt) {

	grunt.log.write('Initializing grunt configuration...');
	var gruntConfig = _.merge.apply({}, _.values(configs));
	grunt.initConfig(gruntConfig);
	grunt.log.writeln('done');
};

function registerTasks(grunt, tasks) {

	_.forEach(tasks, function(steps, name) {
		grunt.registerTask(name, steps);
	});
};

function init(grunt, tasks) {

	loadTasks(grunt);
	initializeGrunt(grunt);
	registerTasks(grunt, tasks);
};

module.exports = function(grunt) {

	var tasks = {

		build: [

			'clean:preview'
		],

		run: [

			'build'
		],

		default: [

			'run'
		]
	};

	init(grunt, tasks);
};