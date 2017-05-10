define([
	'jquery',
	'component/shots-size-listener',
	'component/shots'
], function(
	$,
	ShotsSizeListener,
	Shots
) {

	function Home() {

		this.shotsSizeListener = new ShotsSizeListener('#options-menu');
		this.shots = new Shots('#shots-container', 'small');
	}

	Home.prototype = {

		initializeObjects: function() {

			this.shotsSizeListener.init();
			this.shots.init();
		},

		onShotsSizeChanged: function(shotsSize) {

			this.shots.resizeShots(shotsSize)
		},

		bindEvents: function() {

			this.shotsSizeListener.on.changed.add(
				$.proxy(this.onShotsSizeChanged, this)
			);
		},

		init: function() {

			this.initializeObjects();
			this.bindEvents();
		}
	};

	return Home;
});