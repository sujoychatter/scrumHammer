import Ember from 'ember';

export default Ember.Component.extend({
	elementId      : 'create-team',
	name           : "",
	domain         : "",
	maxHammerCount : 3,
	scrumStartTime : "12:30:00",
	scrumEndTime   : "20:30:00",
	submitText     : "Create",
	getTeamData : function(){
		return {
			name           : this.get('name'),
			domain         : this.get('domain'),
			maxHammerCount : this.get('maxHammerCount'),
			scrumStartTime : this.get('scrumStartTime'),
			scrumEndTime   : this.get('scrumEndTime'),
		}
	},
	actions : {
		createTeam : function(){
			var teamData = this.getTeamData();
			this.get('targetObject').send('createTeam',teamData);
		}
	}
});