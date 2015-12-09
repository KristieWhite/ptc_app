$(document).ready(function(){

var Router = Backbone.Router.extend({
	initialize: function() {
		Backbone.history.start({
			pushState: true
		});
	},
	routes: {
		"eventsList": "eventsList",
		"eventsDetail": "eventsDetail"//fill in routers as pages are built
	}
});

var router = new Router();

router.navigate("/");

router.on('route:', function() {
	$("#eventsListDiv").show();
	$("#eventsDetailDiv").show();
});

var eventsModel = Backbone.Model.extend({
	initialize: function() {
		console.log("events model initialized");
		defaults: {
			event: null//place in proper names from api
		}
		Model: eventsModel,
		url: 'http://placeapiurlhere'//place api url here
	}
});

var eventsCollection = Backbone.Collection.extend({
	model: eventsModel,
	url: ''
});

var events = new eventsCollection();
events.fetch({
	success: function(resp) {
		console.log(resp);
		var eventsInfo = {
			'events': resp.toJSON()
		};
		error: function(err) {
			console.log("error", err);
		}
	}
});



});//closes document ready