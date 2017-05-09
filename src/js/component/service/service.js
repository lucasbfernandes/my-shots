define([
	'jquery'
], function(
	$
) {

	function Service() {

	}

	Service.prototype = {

		requestFailed: function() {
			//TODO
		},

		wrapCredentials: function(data) {

			var credentials = appSettings.defaultParams.credentials || {};
			return $.extend({}, credentials, data);
		},

		request: function(url, data, ajaxOptions, options) {

			var defaultOptions = {
				url: url,
				data: this.wrapCredentials(data),
				dataType: 'json'
			};

			return $.ajax($.extend(defaultOptions, ajaxOptions))
					.fail($.proxy(this.requestFailed, this));
		}
	};

	return Service;
});