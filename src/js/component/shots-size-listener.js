define([
	'jquery',
	'signals'
], function(
	$,
	Signals
) {

	function ShotsSizeListener(holder) {

		this.$holder = $(holder || document.body);
		this.on = {
			changed: new Signals()
		}
	}

	ShotsSizeListener.prototype = {

		onClick: function(event) {

			var $element = $(event.target);
			event.preventDefault();
			this.on.changed.dispatch($element.attr('data-size'));
		},

		bindEvents: function() {

			this.$holder.find('[data-shots-size]').on(
				'click', '[data-size]', $.proxy(this.onClick, this));
		},

		init: function() {

			this.bindEvents();
		}
	};

	return ShotsSizeListener;
});