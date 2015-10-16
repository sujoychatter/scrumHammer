import Ember from 'ember';

export default Ember.Controller.extend({
	side_nav_collapsed : true,
	actions : {
		toggleSideNav : function(){
			console.log('great stuff');
		}
	}
});