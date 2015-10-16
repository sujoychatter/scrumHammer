define('frontend/utils/promise-ajax', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	/**
		Cast $.ajax into a Proper Promise object using RSVP's cast method.
	**/
	exports['default'] = function (options) {
		return Ember['default'].RSVP.Promise.cast($.ajax(options)).then(function (data) {
			if (data.error) return new Ember['default'].RSVP.reject({ message: data.error });
			return data;
		});
	}

});