define([
	'jquery',
	'component/service/service'
], function(
	$,
	Service
) {

	function ShotsService() {

	}

	$.extend(ShotsService.prototype, Service.prototype, {

		getShots: function(params) {

			var GET_SHOTS = appSettings.serviceUrls.GET_SHOTS,
				dfd = $.Deferred();

			this.request(GET_SHOTS, params, {}, {}).then(function(data) {

				dfd.resolve(data);
			});

			return dfd.promise();
		}
	});

	return ShotsService;
});