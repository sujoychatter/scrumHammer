import Em from 'ember';
import DS from "ember-data";

export default DS.Transform.extend({
  deserialize: function deserialize(serialized) {
    return new Em.A(serialized);
  },
  serialize: function serialize(deserialized) {
    return deserialized.toArray();
  }
});