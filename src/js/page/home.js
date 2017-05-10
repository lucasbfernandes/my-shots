define([
	'jquery',
	'component/listener/shots-size-listener',
	'component/listener/shots-search-listener',
	'component/listener/shots-image-listener',
	'component/listener/shots-page-button-listener',
	'component/listener/shots-page-like-listener',
	'component/shots'
], function(
	$,
	ShotsSizeListener,
	ShotsSearchListener,
	ShotsImageListener,
	ShotsPageButtonListener,
	ShotsPageLikeListener,
	Shots
) {

	function Home() {

		this.shotsSizeListener = new ShotsSizeListener('#options-menu');
		this.shotsSearchListener = new ShotsSearchListener('#home-header');
		this.shotsImageListener = new ShotsImageListener('#shots-container');
		this.shotsPageButtonListener = new ShotsPageButtonListener('#shots-container');
		this.shotsPageLikeListener = new ShotsPageLikeListener('#shots-container');
		this.shots = new Shots('#shots-container', 'small');
	}

	Home.prototype = {

		initializeObjects: function() {

			this.shotsSizeListener.init();
			this.shotsSearchListener.init();
			this.shotsImageListener.init();
			this.shotsPageButtonListener.init();
			this.shotsPageLikeListener.init();
			this.shots.init();
		},

		showOptions: function() {
			$('#options-menu').find('.menu-0001__dropdown').show();
			$('#home-header').find('.header-0001__search-input').show();
		},

		hideOptions: function() {

			$('#options-menu').find('.menu-0001__dropdown').hide();
			$('#home-header').find('.header-0001__search-input').hide();
		},

		onShotsPageLikeChanged: function(shotId) {

			this.shots.updateLikeObject(shotId);
		},

		onShotsPageButtonChanged: function() {

			this.showOptions();
			this.shots.renderShots();
		},

		onShotsImageChanged: function(shotId) {

			this.hideOptions();
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

			this.shotsPageButtonListener.on.changed.add(
				$.proxy(this.onShotsPageButtonChanged, this)
			);

			this.shotsPageLikeListener.on.changed.add(
				$.proxy(this.onShotsPageLikeChanged, this)
			);
		},

		init: function() {

			this.initializeObjects();
			this.bindEvents();
		}
	};

	return Home;
});