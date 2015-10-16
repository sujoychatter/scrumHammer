import Ember from "ember";

/**
  Throttle a Javascript function. This means if it's called many times in a time limit it
  should only be executed once. Original function will be called with the context and arguments 
  from the last call made.

  @method throttle
  @param {function} func The function to throttle
  @param {Number} wait how long to wait
**/
export default function throttle(func, wait) {
  var self, args;
  var later = function() {
    func.apply(self, args);
  };

  return function() {
    self = this;
    args = arguments;
    Ember.run.throttle(null, later, wait, 0, false);
  };
};
