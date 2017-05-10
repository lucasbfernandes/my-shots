define([
	'jquery',
	'component/service/shots-service',
	'ldsh!shots',
	'ldsh!shots-page'
], function(
	$,
	ShotsService,
	ShotsRenderer,
	ShotsPageRenderer
) {

	function Shots(holder, shotsSize, params) {

		this.$holder = $(holder || document.body);
		this.shotsSize = this.sanitizeSize(shotsSize);
		this.params = params || {};
		this.searchString = '';
		this.shots = [];
		this.service = new ShotsService();
	}

	Shots.sizeOptions = [
		'small',
		'normal'
	];

	Shots.prototype = {

		sanitizeSize: function(shotsSize) {

			var sizeExists = ($.inArray(shotsSize, Shots.sizeOptions) !== -1);
			return sizeExists? shotsSize : 'small';
		},

		wrapShotsData: function(shots) {

			var _this = this;
			return {
				shots: shots,
				shotsSize: _this.shotsSize,
				searchString: _this.searchString
			};
		},

		wrapShotData: function(shot) {
			
			return {
				found: !$.isEmptyObject(shot),
				shot: shot
			};
		},

		cleanHolder: function() {

			this.$holder.empty();
		},

		getShotData: function(shotId) {

			var shot = this.shots.filter(
				function(shot) { return shot.id === shotId }
			);
			return this.wrapShotData(
				shot.length? shot[0] : {}
			);
		},

		describeShot: function(shotId) {

			this.renderShotPage(shotId);
		},

		searchShots: function(input) {

			this.searchString = input;
			this.renderShots(this.shots);
		},

		resizeShots: function(shotsSize) {

			this.shotsSize = this.sanitizeSize(shotsSize);
			this.renderShots(this.shots);
		},

		renderShotPage: function(shotId) {

			var data = this.getShotData(shotId),
				template = ShotsPageRenderer(data);
			this.cleanHolder();
			this.$holder.append(template);
		},

		renderShots: function() {

			var data = this.wrapShotsData(this.shots),
				template = ShotsRenderer(data);
			this.cleanHolder();
			this.$holder.append(template);
		},

		onRetrieveShots: function(shots) {

			this.shots = shots;
			this.renderShots();
		},

		retrieveShots: function(params) {

			this.service.getShots(params)
				.then($.proxy(this.onRetrieveShots, this));
		},

		bindEvents: function() {

		},

		init: function() {

			this.bindEvents();
			this.retrieveShots(this.params);
		}
	};

	return Shots;
});