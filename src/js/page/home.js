define([
	'jquery',
	'component/shots-size-listener',
	'component/shots-search-listener',
	'component/shots-image-listener',
	'component/shots'
], function(
	$,
	ShotsSizeListener,
	ShotsSearchListener,
	ShotsImageListener,
	Shots
) {

	function Home() {

		this.shotsSizeListener = new ShotsSizeListener('#options-menu');
		this.shotsSearchListener = new ShotsSearchListener('#home-header');
		this.shotsImageListener = new ShotsImageListener('#shots-container');
		this.shots = new Shots('#shots-container', 'small');
	}

	Home.prototype = {

		initializeObjects: function() {

			this.shotsSizeListener.init();
			this.shotsSearchListener.init();
			this.shotsImageListener.init();
			this.shots.init();
		},

		onShotsImageChanged: function(shotId) {

			this.shots.describeShot(parseInt(shotId));
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

			this.shotsImageListener.on.changed.add(
				$.proxy(this.onShotsImageChanged, this)
			);
		},

		init: function() {

			this.initializeObjects();
			this.bindEvents();
		}
	};

	return Home;
});