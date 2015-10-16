import DS from "ember-data";

export default DS.Transform.extend({
  deserialize: function deserialize(value) {
    return moment.utc(value).local();
  },
  serialize: function serialize(value) {
    return value ? value.utc.toJSON() : null;
  }
});