import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route("teams", { path: "/" });
	this.route("treats", { path: "treats" });
	this.route("create", { path: "create" });
	

	this.route("team", { resetNamespace: true, path: "teams/:team_id" }, function(){
    	this.route("invite");
    	this.route("edit");
  	});
});

export default Router;
