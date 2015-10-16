import DS 			from "ember-data";
import MycroftoENV	from 'frontend/config/environment';
import PromiseAjax  from 'frontend/utils/promise-ajax';

export default DS.Model.extend({
	name : DS.attr('string'),
	email : DS.attr('string')
});