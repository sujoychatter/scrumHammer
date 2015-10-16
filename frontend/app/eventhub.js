import Ember from "ember";

export default Ember.Object.extend({
  init: function(){
    var hubObject = Ember.Object.extend(Ember.Evented);
    this.set('eventHub', hubObject.create());
  },

  publish: function(){
    var hub = this.get('eventHub');
    return hub.trigger.apply(hub, arguments);
  },

  subscribe: function(){
    var hub = this.get('eventHub');
    return hub.on.apply(hub, arguments);
  },
  unsubscribe: function(){
    var hub = this.get('eventHub');
    return hub.off.apply(hub,arguments);
  }
});