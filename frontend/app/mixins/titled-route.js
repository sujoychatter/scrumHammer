import Ember from 'ember';

export default Ember.Mixin.create({
	afterModel : function(){
		var self = this;
		setTimeout(function(){
			self.get('eventhub').publish('update:title',self.get('pageTitle'));
		});
		return this._super(arguments);
	}
})