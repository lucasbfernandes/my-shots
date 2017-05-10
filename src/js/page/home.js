define([
	'jquery',
	'component/shots-size-listener',
	'component/shots-search-listener',
	'component/shots'
], function(
	$,
	ShotsSizeListener,
	ShotsSearchListener,
	Shots
) {

	function Home() {

		this.shotsSizeListener = new ShotsSizeListener('#options-menu');
		this.shotsSearchListener = new ShotsSearchListener('#home-header');
		this.shots = new Shots('#shots-container', 'small');
	}

	Home.prototype = {

		initializeObjects: function() {

			this.shotsSizeListener.init();
			this.shotsSearchListener.init();
			this.shots.init();
		},

		onShotsSearchChanged: function(input) {

			this.shots.searchShots(input);
		},

		onShotsSizeChanged: function(shotsSize) {

			this.shots.resizeShots(shotsSize)
		},

		bindEvents: function() {

			this.shotsSizeListener.on.changed.add(
				$.proxy(this.onShotsSizeChanged, this)
			);

			this.shotsSearchListener.on.changed.add(
				$.proxy(this.onShotsSearchChanged, this)
			);
		},

		init: function() {

			this.initializeObjects();
			this.bindEvents();
		}
	};

	return Home;
});