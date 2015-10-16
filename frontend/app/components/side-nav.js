import Ember from 'ember';
import AppENV from 'frontend/config/environment';
import PromiseAjax from 'frontend/utils/promise-ajax';

export default Ember.Component.extend({
	elementId : 'side-nav',
	collapsed : true
});