"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('frontend/adapters/application', ['exports', 'ember-data', 'ember', 'frontend/config/environment'], function (exports, DS, Ember, AppENV) {

	'use strict';

	exports['default'] = DS['default'].RESTAdapter.extend({
		namespace: AppENV['default'].APP.apihost,
		coalesceFindRequests: true,
		findQuery: function findQuery(store, type, query) {
			/*
	  	Extension for findQuery where you can append a string to API Url to hit.
	  	For example
	  		1. store.find("user",{appendUrl:"me"}) => {host}/users/me
	  		2. store.find("user",{appendUrl:"me",email:"abc@gmail.com"}) => {host}/users/me?email=abc@gmail.com
	  */

			var url = "",
			    query = Ember['default'].copy(query);
			//make a copy of query object so that changes here do not reflect on objects passed

			if (query && query.appendUrl) {
				url = this.buildURL(type.typeKey) + "/" + query.appendUrl;
				delete query.appendUrl;
			}
			if (query && query.prependUrl) {
				url = this.buildURL() + "/" + query.prependUrl + "/" + Ember['default'].String.pluralize(type.typeKey);
				delete query.prependUrl;
			}
			if (url === "") {
				url = this.buildURL(type.typeKey);
			}
			return this.ajax(url, 'GET', { data: query });
		}
	});

});
define('frontend/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'frontend/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  var App;

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('frontend/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'frontend/config/environment'], function (exports, AppVersionComponent, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = AppVersionComponent['default'].extend({
    version: version,
    name: name
  });

});
define('frontend/controllers/array', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('frontend/controllers/object', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('frontend/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'frontend/config/environment'], function (exports, initializerFactory, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = {
    name: 'App Version',
    initialize: initializerFactory['default'](name, version)
  };

});
define('frontend/initializers/export-application-global', ['exports', 'ember', 'frontend/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (config['default'].exportApplicationGlobal !== false) {
      var value = config['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember['default'].String.classify(config['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };

});
define('frontend/router', ['exports', 'ember', 'frontend/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;

});
define('frontend/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "topLevel": false,
        "revision": "Ember@2.1.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","top-nav-bar");
        dom.setAttribute(el1,"id","header-bar");
        var el2 = dom.createTextNode(" SCRUM HAMMER");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,2,2,contextualElement);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[3,0],[3,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('frontend/tests/adapters/application.jshint', function () {

  'use strict';

  QUnit.module('JSHint - adapters');
  QUnit.test('adapters/application.js should pass jshint', function(assert) { 
    assert.ok(false, 'adapters/application.js should pass jshint.\nadapters/application.js: line 17, col 19, \'query\' is already defined.\n\n1 error'); 
  });

});
define('frontend/tests/app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function(assert) { 
    assert.ok(true, 'app.js should pass jshint.'); 
  });

});
define('frontend/tests/helpers/resolver', ['exports', 'ember/resolver', 'frontend/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('frontend/tests/helpers/resolver.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('frontend/tests/helpers/start-app', ['exports', 'ember', 'frontend/app', 'frontend/config/environment'], function (exports, Ember, Application, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('frontend/tests/helpers/start-app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('frontend/tests/router.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function(assert) { 
    assert.ok(true, 'router.js should pass jshint.'); 
  });

});
define('frontend/tests/test-helper', ['frontend/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('frontend/tests/test-helper.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function(assert) { 
    assert.ok(true, 'test-helper.js should pass jshint.'); 
  });

});
define('frontend/tests/transforms/array.jshint', function () {

  'use strict';

  QUnit.module('JSHint - transforms');
  QUnit.test('transforms/array.js should pass jshint', function(assert) { 
    assert.ok(true, 'transforms/array.js should pass jshint.'); 
  });

});
define('frontend/tests/transforms/localdate.jshint', function () {

  'use strict';

  QUnit.module('JSHint - transforms');
  QUnit.test('transforms/localdate.js should pass jshint', function(assert) { 
    assert.ok(false, 'transforms/localdate.js should pass jshint.\ntransforms/localdate.js: line 5, col 12, \'moment\' is not defined.\n\n1 error'); 
  });

});
define('frontend/tests/transforms/raw.jshint', function () {

  'use strict';

  QUnit.module('JSHint - transforms');
  QUnit.test('transforms/raw.js should pass jshint', function(assert) { 
    assert.ok(true, 'transforms/raw.js should pass jshint.'); 
  });

});
define('frontend/tests/utils/debounce.jshint', function () {

  'use strict';

  QUnit.module('JSHint - utils');
  QUnit.test('utils/debounce.js should pass jshint', function(assert) { 
    assert.ok(false, 'utils/debounce.js should pass jshint.\nutils/debounce.js: line 23, col 2, Unnecessary semicolon.\n\n1 error'); 
  });

});
define('frontend/tests/utils/promise-ajax.jshint', function () {

  'use strict';

  QUnit.module('JSHint - utils');
  QUnit.test('utils/promise-ajax.js should pass jshint', function(assert) { 
    assert.ok(false, 'utils/promise-ajax.js should pass jshint.\nutils/promise-ajax.js: line 8, col 13, Expected \'{\' and instead saw \'return\'.\nutils/promise-ajax.js: line 6, col 36, \'$\' is not defined.\n\n2 errors'); 
  });

});
define('frontend/tests/utils/throttle.jshint', function () {

  'use strict';

  QUnit.module('JSHint - utils');
  QUnit.test('utils/throttle.js should pass jshint', function(assert) { 
    assert.ok(false, 'utils/throttle.js should pass jshint.\nutils/throttle.js: line 23, col 2, Unnecessary semicolon.\n\n1 error'); 
  });

});
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
define('frontend/transforms/raw', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  exports['default'] = DS['default'].Transform.extend({
    deserialize: function deserialize(serialized) {
      return serialized;
    },
    serialize: function serialize(deserialized) {
      return deserialized;
    }
  });

});
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
define('frontend/utils/promise-ajax', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	/**
		Cast $.ajax into a Proper Promise object using RSVP's cast method.
	**/
	exports['default'] = function (options) {
		return Ember['default'].RSVP.Promise.cast($.ajax(options)).then(function (data) {
			if (data.error) return new Ember['default'].RSVP.reject({ message: data.error });
			return data;
		});
	}

});
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
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('frontend/config/environment', ['ember'], function(Ember) {
  var prefix = 'frontend';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("frontend/tests/test-helper");
} else {
  require("frontend/app")["default"].create({"apihost":"api/v1","name":"frontend","version":"0.0.0+8a1d9960"});
}

/* jshint ignore:end */
//# sourceMappingURL=frontend.map