define([
	'jquery',
	'component/shots'
], function(
	$,
	Shots
) {

	function Home() {

		this.shots = new Shots('#shots-container');
	}

	Home.prototype = {

		initializeObjects: function() {

			this.shots.init();
		},

		bindEvents: function() {

		},

		init: function() {

			this.bindEvents();
			this.initializeObjects();
		}
	};

	return Home;
});