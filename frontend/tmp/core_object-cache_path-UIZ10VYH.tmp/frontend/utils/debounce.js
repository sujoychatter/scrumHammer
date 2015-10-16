define('frontend/utils/debounce', ['exports', 'ember'], function (exports, Ember) {

  'use strict';


  exports['default'] = debounce;function debounce(func, wait) {
    var self, args;
    var later = function later() {
      func.apply(self, args);
    };

    return function () {
      self = this;
      args = arguments;
      Ember['default'].run.debounce(null, later, wait);
    };
  }

  ;

});