import Ember from 'ember';
import TitledRoute from 'frontend/mixins/titled-route';

export default Ember.Route.extend(TitledRoute,{
	pageTitle : 'Create Team',
	actions : {
		createTeam : function(data){
			debugger;
			console.log('create team');
		}
	}
});