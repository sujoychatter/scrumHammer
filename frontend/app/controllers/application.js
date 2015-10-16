import Ember from 'ember';

export default Ember.Controller.extend({
	sideNavShow : false,
	actions : {
		toggleSideNav : function(){
			this.toggleProperty('sideNavShow');
		}
	}
});