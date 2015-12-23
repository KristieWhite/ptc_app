$(document).ready(function () {
	//all school events
	var SchoolEventsModel = Backbone.Model.extend({
		initialize: function () {},
		defaults: {
			"name": null,
			"school_class": null,
			"description": null
		},
		url: "https://murmuring-sands-9831.herokuapp.com/api/schools/#{id}/events"
	});
	// var SchoolEventsCollection = Backbone.Collection.extend({
	// 	Model: SchoolEventsModel,
	// 	url: "https://murmuring-sands-9831.herokuapp.com/api/schools/#{id}/events"
	// });

	var SchoolEvents = new SchoolEventsModel();
	SchoolEvents.fetch({
		success: function (resp) {
			var schoolEventsInfo = {
				"events": resp.toJSON().results
			};
			var schoolEventsTemplate = $("#schoolEventsTemplate").text();
			var schoolEventsHTML = Mustache.render(schoolEventsTemplate, schoolEventsInfo);
			console.log("schoolEventsInfo", schoolEventsInfo);
			console.log("schoolEventsHTML", schoolEventsHTML);
			$("#schoolEventsDiv").html(schoolEventsHTML);
			console.log(resp);
		},
		error: function (err) {
			conole.log(error, err);
		}
	});

////////////////////////////school events detail////////////////////
	var SchoolEventsDetailModel = Backbone.Model.extend({
		initialize: function () {},
		defaults: {
			"name": null,
			"school_class": null,
			"description": null
		},
		url: "https://murmuring-sands-9831.herokuapp.com/api/school_events/#{id}"
	});
	// var SchoolEventsDetailCollection = Backbone.Collection.extend({
	// 	Model: SchoolEventsDetailModel,
	// 	url: "https://murmuring-sands-9831.herokuapp.com/api/school_events/#{id}"
	// });

	var SchoolEventsDetail = new SchoolEventsDetailModel();
	SchoolEventsDetail.fetch({
		success: function (resp) {
			var schoolEventsDetailInfo = {
				"events": resp.toJSON().results
			};
			var schoolEventsDetailTemplate = $("#schoolEventsDetailTemplate").text();
			var schoolEventsDetailHTML = Mustache.render(schoolEventsDetailTemplate, schoolEventsDetailInfo);
			console.log("schoolEventsDetailInfo", schoolEventsDetailInfo);
			console.log("schoolEventsDetailHTML", schoolEventsDetailHTML);
			$("#schoolEventsDetailDiv").html(schoolEventsDetailHTML);
			console.log(resp);
		},
		error: function (err) {
			conole.log(error, err);
		}
	});

	

	/////////////shows class events//////////////////////
	var EventsTeacherModel = Backbone.Model.extend({
		initialize: function(){
			console.log("EventsTeacherModel intialized");
		},
		defaults: {
			id: null,
			name: null,
			school_class: null,
			description: null,
			date: null,
			image: null
		},
		success: function() {
			url: 'https://murmuring-sands-9831.herokuapp.com/api/classes/#{id}/events'
		}
	});

	var EventsTeacherCollection = Backbone.Collection.extend({
		model: EventsTeacherModel,
		url: 'https://murmuring-sands-9831.herokuapp.com/api/classes/#{id}/events'
	});

	var EventListTeacher = new EventsTeacherCollection();

	EventListTeacher.fetch({
		success: function(resp) {
			console.log('success', resp.toJSON());
			var eventListTeacherObj = {
				"events": resp.toJSON()[0].results
			};
			var eventsListTeacherTemplate = $("#eventsListTeacherTemplate").text();
			var eventsListTeacherHTML = Mustache.render(eventsListTeacherTemplate, eventListTeacherObj);
			console.log("eventListTeacherObj", eventListTeacherObj);
			console.log("eventsListTeacherHTML", eventsListTeacherHTML)
			$("#classEventsTeacherDiv").html(eventsListTeacherHTML);
		},
		error: function(err) {
			console.log('error classes', err);
		}
	});

////////////////////////shows class event detail////////////////////////////////////////
	var EventsDetailTeacherModel = Backbone.Model.extend({
		initialize: function(){
			console.log("EventsTeacherModel intialized");
		},
		defaults: {
			id: null,
			name: null,
			school_class: null,
			description: null,
			date: null,
			image: null
		},
		success: function() {
			url: 'https://murmuring-sands-9831.herokuapp.com/api/class_events/#{id}'
		}
	});

	var EventsDetailTeacherCollection = Backbone.Collection.extend({
		model: EventsDetailTeacherModel,
		url: 'https://murmuring-sands-9831.herokuapp.com/api/class_events/#{id}'
	});

	var EventDetailListTeacher = new EventsDetailTeacherCollection();

	EventDetailListTeacher.fetch({
		success: function(resp) {
			console.log('success', resp.toJSON());
			var eventDetailListTeacherObj = {
				"events": resp.toJSON().results
			};
			var eventsDetailListTeacherTemplate = $("#eventsDetailListTeacherTemplate").text();
			var eventsDetailListTeacherHTML = Mustache.render(eventsDetailListTeacherTemplate, eventListTeacherObj);
			console.log("eventDetailListTeacherObj", eventDetailListTeacherObj);
			console.log("eventsDetailListTeacherHTML", eventsDetailListTeacherHTML)
			$("#classEventsDetailDiv").html(eventsDetailListTeacherHTML);
		},
		error: function(err) {
			console.log('error classes', err);
		}
	});


	
});	//documentready

