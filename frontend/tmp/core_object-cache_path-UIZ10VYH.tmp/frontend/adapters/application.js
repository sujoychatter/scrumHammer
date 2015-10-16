define('frontend/adapters/application', ['exports', 'ember-data', 'ember', 'frontend/config/environment'], function (exports, DS, Ember, AppENV) {

	'use strict';

	exports['default'] = DS['default'].RESTAdapter.extend({
		namespace: AppENV['default'].APP.apihost,
		coalesceFindRequests: true,
		findQuery: function findQuery(store, type, query) {
			/*
	  	Extension for findQuery where you can append a string to API Url to hit.
	  	For example
	  		1. store.find("user",{appendUrl:"me"}) => {host}/users/me
	  		2. store.find("user",{appendUrl:"me",email:"abc@gmail.com"}) => {host}/users/me?email=abc@gmail.com
	  */

			var url = "",
			    query = Ember['default'].copy(query);
			//make a copy of query object so that changes here do not reflect on objects passed

			if (query && query.appendUrl) {
				url = this.buildURL(type.typeKey) + "/" + query.appendUrl;
				delete query.appendUrl;
			}
			if (query && query.prependUrl) {
				url = this.buildURL() + "/" + query.prependUrl + "/" + Ember['default'].String.pluralize(type.typeKey);
				delete query.prependUrl;
			}
			if (url === "") {
				url = this.buildURL(type.typeKey);
			}
			return this.ajax(url, 'GET', { data: query });
		}
	});

});