import DS from "ember-data";
import Ember from 'ember';
import AppENV from 'frontend/config/environment';

export default DS.RESTAdapter.extend({
	host : AppENV.APP.host,
	namespace : AppENV.APP.apihost,
	coalesceFindRequests: true,
	query: function(store, type, query) {
		/*
			Extension for findQuery where you can append a string to API Url to hit.
			For example
				1. store.find("user",{appendUrl:"me"}) => {host}/users/me
				2. store.find("user",{appendUrl:"me",email:"abc@gmail.com"}) => {host}/users/me?email=abc@gmail.com
		*/

		var url = "",
			query = Ember.copy(query); 
			//make a copy of query object so that changes here do not reflect on objects passed

		if(query && query.appendUrl){
			url = this.buildURL(type.modelName)+"/"+query.appendUrl;
			delete query.appendUrl;
		}
		if(query && query.prependUrl){
			url = this.buildURL()+"/"+query.prependUrl+"/"+Ember.String.pluralize(type.modelName);
			delete query.prependUrl;
		}
		if(url === ""){ url = this.buildURL(type.modelName); }
	    return this.ajax(url, 'GET', { data: query });
	}
});