import EventHub from "frontend/eventhub";

export default {
   name: 'eventhub',
   initialize: function(application) {
   		// var registry = application.registry;
	    application.register('eventhub:main', EventHub, { singleton: true });
	    application.inject('controller', 'eventhub', 'eventhub:main');
	    application.inject('component', 'eventhub', 'eventhub:main');
	    application.inject('route', 'eventhub', 'eventhub:main');
	    application.inject('view', 'eventhub', 'eventhub:main');
	    application.inject('router', 'eventhub', 'eventhub:main');
   }
};