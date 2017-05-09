define([
	'jquery',
	'component/service/shots-service',
	'ldsh!shots'
], function(
	$,
	ShotsService,
	ShotsRenderer
) {

	function Shots(holder, options) {

		this.$holder = $(holder || document.body);
		this.options = options || {};
		this.service = new ShotsService();
	}

	Shots.prototype = {

		wrapData: function(shots) {
			
			return {
				shots: shots
			};
		},

		renderShots: function(shots) {

			var data = this.wrapData(shots),
				template = ShotsRenderer(data);
			this.$holder.append(template);
		},

		retrieveShots: function(params) {

			this.service.getShots(params)
				.then($.proxy(this.renderShots, this));
		},

		bindEvents: function() {

		},

		init: function() {

			this.bindEvents();
			this.retrieveShots(this.options);
		}
	};

	return Shots;
});