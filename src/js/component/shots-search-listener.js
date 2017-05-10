define([
	'jquery',
	'signals'
], function(
	$,
	Signals
) {

	function ShotsSearchListener(holder) {

		this.$holder = $(holder || document.body);
		this.on = {
			changed: new Signals()
		}
	}

	ShotsSearchListener.defaults = {
		minimumLength: 0
	};

	ShotsSearchListener.prototype = {

		onUserInput: function(event) {

			var $element = $(event.target),
				input = $element.val();

			event.preventDefault();
			if (input.length >= ShotsSearchListener.defaults.minimumLength) {
				this.on.changed.dispatch(input);
			}
		},

		bindEvents: function() {

			this.$holder.find('[data-shots-search]').on(
				'input', '[data-search-input]', $.proxy(this.onUserInput, this)
			);
		},

		init: function() {

			this.bindEvents();
		}
	};

	return ShotsSearchListener;
});