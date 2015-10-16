import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel : function() {
		var session = this.controllerFor("session");
		// return this.store.query("user",{appendUrl:'me'}).then(
		// 	function(data){
		// 		session.set("current_user",data.get('firstObject'));
		// 		return data;
		// 	},
		// 	function(e){
		// 		//failure in user call
		// 		console.log("user called failed !!!! Error => ",e);
		// 		return Ember.RSVP.reject(e);
		// 	}
		// );

			// apps_promise = this.store.find("application"),
			// blacklisted_domains = $.getJSON(MycroftoENV.APP.apihost + "/teams/blacklisted_domains").then(function(data){
			// 	MycroftoENV.APP.blacklisted_domains = ","+data.domains[0]+","; //to make blacklisted domain check in profile model consistent
			// });

		// return Ember.RSVP.hash({
		// 	apps                : apps_promise,
		// 	current_user        : cur_user_promise,
		// 	blacklisted_domains : blacklisted_domains
		// });
	}
});