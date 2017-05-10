define([
	'jquery',
	'signals'
], function(
	$,
	Signals
) {

	function ShotsPageLikeListener(holder) {

		this.$holder = $(holder || document.body);
		this.on = {
			changed: new Signals()
		}
	}

	ShotsPageLikeListener.prototype = {

		onClick: function(event) {

			event.preventDefault();
			var $element = $(event.target);
			this.on.changed.dispatch($element.attr('data-shot-id'));
		},

		bindEvents: function() {

			this.$holder.on(
				'click', '[data-shots-page-like]', $.proxy(this.onClick, this)
			);
		},

		init: function() {

			this.bindEvents();
		}
	};

	return ShotsPageLikeListener;
});