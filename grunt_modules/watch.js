'use strict';

module.exports = {

	options: {
		livereload: true
	},

	rebuild: {
		files: ['Gruntfile.js', 'grunt_modules/**/*.js'],
		tasks: ['build']
	},

	template: {
		files: ['<%= defaults.src %>/html/**/*.{html,js,json}'],
		tasks: ['nunjucks_json']
	},

	style: {
		files: [
			'<%= defaults.src %>/scss/**/*.scss',
			'<%= defaults.src %>/third-party/**/*.scss'
		],
		tasks: ['build_style']
	},

	script: {
		files: ['<%= defaults.src %>/js/**/*.{js,ldsh*}'],
		tasks: ['build_script']
	},

	html: {
		files: ['<%= defaults.src %>/html/**/*.html'],
		tasks: ['build_template']
	}
};