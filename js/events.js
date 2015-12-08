$(document).ready(function(){

var Router = Backbone.Router.extend({
	initialize: function() {
		Backbone.history.start({
			pushState: true
		});
	},
	routes: {
		"eventsList": "eventsList",
		"eventsDetail": "eventsDetail"
	}
});

var router = new Router();

router.navigate("/");

router.on('route:', function() {
	$("eventsListDiv").show();
	$("eventsDetailDiv").show();
});

var eventsModel = Backbone.Model.extend({
	initialize: function() {
		defaults: {
			"": null
		},
		Model: eventsModel,
		url: ''
	}
});

var eventsCollection = Backbone.Collection.extend({
	model: eventsModel,
	url: ''
});

var events = new eventsCollection();
events.fetch({
	success: function(resp) {

		var eventsInfo = {
			'events': resp.toJSON()
		};
		error: function(err) {
			console.log("error", err);
		}
	}
});



});//closes document ready