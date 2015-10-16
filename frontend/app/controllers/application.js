import Ember from 'ember';

export default Ember.Controller.extend({
	sideNavShow : false,
	pageTitle   : "Scrum Hammer",
	actions : {
		toggleSideNav : function(){
			this.toggleProperty('sideNavShow');
		}
	},
	init : function(){
		this._super(arguments);
		this.get("eventhub").subscribe("update:title",this.updateTitle.bind(this));
	},
	updateTitle : function(title){
		this.set('pageTitle',title);
	}
});