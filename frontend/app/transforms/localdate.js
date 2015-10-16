import DS from "ember-data";

export default DS.Transform.extend({
  deserialize: function(value) {
    return moment.utc(value).local();
  },
  serialize: function(value) {
    return value ? value.utc.toJSON() : null;
  }
});