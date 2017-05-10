define([
	'jquery',
	'signals'
], function(
	$,
	Signals
) {

	function ShotsPageButtonListener(holder) {

		this.$holder = $(holder || document.body);
		this.on = {
			changed: new Signals()
		}
	}

	ShotsPageButtonListener.prototype = {

		onClick: function(event) {

			event.preventDefault();
			this.on.changed.dispatch();
		},

		bindEvents: function() {

			this.$holder.on(
				'click', '[data-shots-page-button]', $.proxy(this.onClick, this)
			);
		},

		init: function() {

			this.bindEvents();
		}
	};

	return ShotsPageButtonListener;
});