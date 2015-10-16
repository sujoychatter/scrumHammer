import Em from 'ember';
import DS from "ember-data";

export default DS.Transform.extend({
  deserialize: function(serialized) {
    return new Em.A(serialized);
  },
  serialize: function(deserialized) {
    return deserialized.toArray();
  }
});