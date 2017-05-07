'use strict';

module.exports = {

	script_preview: {

		files: [{
			expand: true,
			cwd: '<%= defaults.src %>/js',
			src: ['**/*.js', '**/*.ldsh.html'],
			dest: '<%= defaults.preview %>/js'
		}]
	},

	third_party_preview: {

		files: [{
			expand: true,
			cwd: '<%= defaults.src %>/third-party',
			src: ['**/*.js', '**/*.css'],
			dest: '<%= defaults.preview %>/third-party'			
		}]
	}
};