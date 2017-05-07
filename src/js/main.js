'use strict';

require.config({

	paths: {

		'jquery'				: '../third-party/bower-component/jquery/dist/jquery',
	},

	waitSeconds: 60,

	shim: {

	},

	urlArgs: ''
});

require(['page/home'], function(Home) {

	var home = new Home();
	home.init && home.init();
});