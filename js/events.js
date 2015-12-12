/*$(document).ready(function(){

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
/////Routers/////
var router = new Router();

router.navigate("/");

router.on('route:', function() {
	$("#eventsListDiv").show();
	$("#eventsDetailDiv").show();
});

var eventsModel = Backbone.Model.extend({
	initialize: function() {
		
		defaults: {
			event: null//place in proper names from api
		},
		Model: eventsModel,
		url:'https://murmuring-sands-9831.herokuapp.com/api/classes/'//place api url here
	}
}),

var eventsCollection = Backbone.Collection.extend({
	model: eventsModel,
	url:'https://murmuring-sands-9831.herokuapp.com/api/classes/'//api url
});

	
/////Mustache////
var eventsList = new eventsCollection();
eventsList.fetch({
	success: function(resp) {
		console.log(resp);
		var eventsListInfo = {
			'eventsList': resp.toJSON()
		};
		var eventsListTemplate = $("eventsList").text();
		var eventsListHTML = Mustache.render(eventsListTemplate, eventsListInfo);
		$("#eventsListDiv").html(eventsListHTML);
		},
		error: function(err) {
			console.log("error", err);
		}
	});






});//closes document ready*/