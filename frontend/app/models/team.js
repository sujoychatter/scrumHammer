import DS 			from "ember-data";
import AppENV		from 'frontend/config/environment';
import PromiseAjax  from 'frontend/utils/promise-ajax';

export default DS.Model.extend({
<<<<<<< HEAD
	name           : DS.attr('string'),
	domain         : DS.attr('string'),
	startTime      : DS.attr('string'),
	endTime        : DS.attr('string'),
	maxHammerCount : DS.attr('string')
=======
	name : DS.attr('string'),
	start_time: DS.attr('localdate'),
	end_time: DS.attr('localdate'),
	hammer_max: DS.attr('number'),
	emogee_id: DS.attr('number')
>>>>>>> 4933f3957de2f23ce87eba6d922a51bd4ee6eafc
});