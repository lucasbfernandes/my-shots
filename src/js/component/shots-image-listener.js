define([
	'jquery',
	'signals'
], function(
	$,
	Signals
) {

	function ShotsImageListener(holder) {

		this.$holder = $(holder || document.body);
		this.on = {
			changed: new Signals()
		}
	}

	ShotsImageListener.prototype = {

		onClick: function(event) {

			var $element = $(event.target);
			event.preventDefault();
			this.on.changed.dispatch($element.attr('data-shot'));
		},

		bindEvents: function() {

			this.$holder.on(
				'click',
				'[data-shots-list] [data-shot]',
				$.proxy(this.onClick, this)
			);
		},

		init: function() {

			this.bindEvents();
		}
	};

	return ShotsImageListener;
});