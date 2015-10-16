/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var FilterTree = require('broccoli-file-remover');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  app.import('vendor/stylesheets/material.min.css');
  app.import('bower_components/font-awesome/css/font-awesome.min.css');

  app.import('vendor/scripts/material.min.js');

  return app.toTree();
};
