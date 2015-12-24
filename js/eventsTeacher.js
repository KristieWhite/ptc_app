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
			var schoolEventsObj = {
				"events": resp.toJSON().results
			};
			var schoolEventsTemplate = $("#schoolEventsTemplate").text();
			var schoolEventsHTML = Mustache.render(schoolEventsTemplate, schoolEventsObj);
			console.log("schoolEventsObj", schoolEventsObj);
			//console.log("schoolEventsHTML", schoolEventsHTML);
			$("#schoolEventsDiv").html(schoolEventsHTML);
			console.log(resp);
			function getURIParameter(param, asArray) {
				return document.location.search.substring(1).split('&').reduce(function(p,c) {
					var parts = c.split('=', 2).map(function(param) {
						return decodeURIComponent(param);
					});
					if(parts.length == 0 || parts[0] != param) 
						return (p instanceof Array) && !asArray ? null : p;
						return asArray ? p.concat(parts.concat(true)[1]) : parts.concat(true)[1];
					},
					[]);
			}
			getURIParameter("id")
			getURIParameter("id", true)
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
			var schoolEventsDetailObj = {
				"events": resp.toJSON().results
			};
			var schoolEventsDetailTemplate = $("#schoolEventsDetailTemplate").text();
			var schoolEventsDetailHTML = Mustache.render(schoolEventsDetailTemplate, schoolEventsDetailObj);
			console.log('schoolEventsDetailObj', schoolEventsDetailObj);
			//console.log("schoolEventsDetailHTML", schoolEventsDetailHTML);
			$("#schoolEventsDetailDiv").html(schoolEventsDetailHTML);
			console.log(resp);
			function getURIParameter(param, asArray) {
				return document.location.search.substring(1).split('&').reduce(function(p,c) {
					var parts = c.split('=', 2).map(function(param) {
						return decodeURIComponent(param);
					});
					if(parts.length == 0 || parts[0] != param) 
						return (p instanceof Array) && !asArray ? null : p;
						return asArray ? p.concat(parts.concat(true)[1]) : parts.concat(true)[1];
					},
					[]);
			}
			getURIParameter("id")
			getURIParameter("id", true)
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
			//console.log("eventsListTeacherHTML", eventsListTeacherHTML)
			$("#classEventsTeacherDiv").html(eventsListTeacherHTML);
			function getURIParameter(param, asArray) {
				return document.location.search.substring(1).split('&').reduce(function(p,c) {
					var parts = c.split('=', 2).map(function(param) {
						return decodeURIComponent(param);
					});
					if(parts.length == 0 || parts[0] != param) 
						return (p instanceof Array) && !asArray ? null : p;
						return asArray ? p.concat(parts.concat(true)[1]) : parts.concat(true)[1];
					},
					[]);
			}
			getURIParameter("id")
			getURIParameter("id", true)
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
				"events": resp.toJSON()[0].results
			};
			var eventsDetailListTeacherTemplate = $("#eventsDetailListTeacherTemplate").text();
			var eventsDetailListTeacherHTML = Mustache.render(eventsDetailListTeacherTemplate, eventDetailListTeacherObj);
			console.log("eventDetailListTeacherObj", eventDetailListTeacherObj);
			//console.log("eventsDetailListTeacherHTML", eventsDetailListTeacherHTML)
			$("#classEventsDetailDiv").html(eventsDetailListTeacherHTML);
			function getURIParameter(param, asArray) {
				return document.location.search.substring(1).split('&').reduce(function(p,c) {
					var parts = c.split('=', 2).map(function(param) {
						return decodeURIComponent(param);
					});
					if(parts.length == 0 || parts[0] != param) 
						return (p instanceof Array) && !asArray ? null : p;
						return asArray ? p.concat(parts.concat(true)[1]) : parts.concat(true)[1];
					},
					[]);
			}
			getURIParameter("id")
			getURIParameter("id", true)
			},
			error: function(err) {
				console.log('error classes', err);
			}
	});


//////////////url decoder////////////////////////////


	
});	//documentready

