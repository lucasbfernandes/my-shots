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

	media_preview: {

		files: [{
			expand: true,
			cwd: '<%= defaults.src %>/media',
			src: ['**/*.png', '**/*.svg'],
			dest: '<%= defaults.preview %>/media'
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