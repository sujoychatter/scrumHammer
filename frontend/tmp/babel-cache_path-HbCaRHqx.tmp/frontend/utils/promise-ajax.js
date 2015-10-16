/**
	Cast $.ajax into a Proper Promise object using RSVP's cast method.
**/
import Ember from 'ember';
export default function (options) {
	return Ember.RSVP.Promise.cast($.ajax(options)).then(function (data) {
		if (data.error) return new Ember.RSVP.reject({ message: data.error });
		return data;
	});
}