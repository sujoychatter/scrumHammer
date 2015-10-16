import DS from "ember-data";

export default DS.Transform.extend({
  deserialize: function deserialize(serialized) {
    return serialized;
  },
  serialize: function serialize(deserialized) {
    return deserialized;
  }
});