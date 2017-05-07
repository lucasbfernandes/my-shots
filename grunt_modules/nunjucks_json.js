'use strict';

module.exports = {

	preview: {

		files: [{
			cwd		: '<%= defaults.src %>/html/page/',
			src 	: '**/*.html',
			dest 	: '<%= defaults.preview %>/html',
			expand	: true
		}]
	}
};