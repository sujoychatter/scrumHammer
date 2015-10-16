import DS 			from "ember-data";
import AppENV		from 'frontend/config/environment';
import PromiseAjax  from 'frontend/utils/promise-ajax';

export default DS.Model.extend({
	name : DS.attr('string'),
	start_time: DS.attr('localdate'),
	end_time: DS.attr('localdate'),
	hammer_max: DS.attr('number'),
	emogee_id: DS.attr('number')
});