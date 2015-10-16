define('frontend/transforms/localdate', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  exports['default'] = DS['default'].Transform.extend({
    deserialize: function deserialize(value) {
      return moment.utc(value).local();
    },
    serialize: function serialize(value) {
      return value ? value.utc.toJSON() : null;
    }
  });

});