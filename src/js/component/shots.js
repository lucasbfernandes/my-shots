define([
	'jquery',
	'component/service/shots-service',
	'ldsh!shots'
], function(
	$,
	ShotsService,
	ShotsRenderer
) {

	function Shots(holder, shotsSize, params) {

		this.$holder = $(holder || document.body);
		this.shotsSize = this.sanitizeSize(shotsSize);
		this.params = params || {};
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

		wrapData: function(shots) {

			var _this = this;
			return {
				shots: shots,
				shotsSize: _this.shotsSize
			};
		},

		cleanHolder: function() {

			this.$holder.empty();
		},

		resizeShots: function(shotsSize) {

			this.shotsSize = this.sanitizeSize(shotsSize);
			if (this.shots) {
				this.renderShots(this.shots);
			}
		},

		renderShots: function(shots) {

			var data = this.wrapData(shots),
				template = ShotsRenderer(data);
			this.cleanHolder();
			this.$holder.append(template);
		},

		onRetrieveShots: function(shots) {

			this.shots = shots;
			this.renderShots(shots);
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