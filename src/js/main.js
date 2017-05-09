'use strict';

require.config({

	paths: {

		'jquery'				: '../third-party/bower-component/jquery/dist/jquery',
		'ldsh'					: '../third-party/bower-component/lodash-template-loader/loader',
		'lodash'				: '../third-party/bower-component/lodash/lodash',
		'signals'				: '../third-party/bower-component/js-signals/dist/signals'
	},

	waitSeconds: 60,

	shim: {

	},

	lodashLoader: {

		ext: '.ldsh.html',
		root: './template/'
	},

	urlArgs: ''
});

require(['page/home'], function(Home) {

	var home = new Home();
	home.init && home.init();
});