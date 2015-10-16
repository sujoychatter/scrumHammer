define('frontend/transforms/array', ['exports', 'ember', 'ember-data'], function (exports, Em, DS) {

  'use strict';

  exports['default'] = DS['default'].Transform.extend({
    deserialize: function deserialize(serialized) {
      return new Em['default'].A(serialized);
    },
    serialize: function serialize(deserialized) {
      return deserialized.toArray();
    }
  });

});