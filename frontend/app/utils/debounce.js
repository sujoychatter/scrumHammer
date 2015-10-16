import Ember from "ember";

/**
  Debounce a Javascript function. This means if it's called many times in a time limit it
  should only be executed once (at the end of the limit counted from the last call made).
  Original function will be called with the context and arguments from the last call made.

  @method debounce
  @param {function} func The function to debounce
  @param {Number} wait how long to wait
**/
export default function debounce(func, wait) {
  var self, args;
  var later = function() {
    func.apply(self, args);
  };

  return function() {
    self = this;
    args = arguments;
    Ember.run.debounce(null, later, wait);
  };
};
