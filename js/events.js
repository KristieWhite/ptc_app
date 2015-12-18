$(document).ready(function () {
	var NamesModel = Backbone.Model.extend({
		initialize: function () {},
		defaults: {
			"name": null,
			"school_class": null,
			"description": null
		},
		Model:NamesModel,
		//will show a classes events
		url: 'https://murmuring-sands-9831.herokuapp.com/api/classes/11/events'
	});
	var NamesCollection = Backbone.Collection.extend({
		Model: NamesModel,
		url: 'https://murmuring-sands-9831.herokuapp.com/api/classes/11/events'
	});

	var Names = new NamesCollection();
	Names.fetch({
		success: function (resp) {
			var namesInfo = {
				"names": resp.toJSON().results
			};
			var namesTemplate = $("#namesTemplate").text();
			var namesHTML = Mustache.render(namesTemplate, namesInfo);
			$("#name").html(namesHTML);
			console.log(resp);
		},
		error: function (err) {
			console.log('error names', err);
		}
	});

	/////////////shows class events//////////////////////
	var EventsTeacherModel = Backbone.Model.extend({
		initialize: function(){
			console.log("EventsTeacherModel intialized");
		},
		defaults: {
			14: null,
			name: null,
			school_class: null,
			description: null,
			date: null,
			image: null
		},
		success: function() {
			url: 'https://murmuring-sands-9831.herokuapp.com/api/classes/id/events'
		}
	});

	var EventsTeacherCollection = Backbone.Collection.extend({
		model: EventsTeacherModel,
		url: 'https://murmuring-sands-9831.herokuapp.com/api/classes/id/events'
	});

	var EventListTeacher = new EventsTeacherCollection();

	EventListTeacher.fetch({
		success: function(resp) {
			console.log('success', resp.toJSON());
			var eventListTeacherObj = {
				"classes": resp.toJSON()[0].results
			};
			var eventsListTeacherTemplate = $("#eventsListTeacherTemplate").text();
			var eventsListTeacherHTML = Mustache.render(eventsListTeacherTemplate, eventListTeacherObj);
			console.log("eventListTeacherObj", eventListTeacherObj);
			$("#classEventsTeacherDiv").html(eventsListTeacherHTML);
		},
		error: function(err) {
			console.log('error classes', err);
		}
	});

});//documentready