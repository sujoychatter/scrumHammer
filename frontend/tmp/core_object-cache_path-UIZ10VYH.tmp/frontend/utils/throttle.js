define('frontend/utils/throttle', ['exports', 'ember'], function (exports, Ember) {

  'use strict';


  exports['default'] = throttle;function throttle(func, wait) {
    var self, args;
    var later = function later() {
      func.apply(self, args);
    };

    return function () {
      self = this;
      args = arguments;
      Ember['default'].run.throttle(null, later, wait, 0, false);
    };
  }

  ;

});