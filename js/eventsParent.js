$(document).ready(function() {

	function parseEventListResponse(response) {
		return response.results;
	};

	var API_EVENT_ROOT = 'https://murmuring-sands-9831.herokuapp.com/';

	var EventModel = Backbone.Model.extend({
		url: function (argument) {
			return '';
		}
	});

	var EventListCollection = Backbone.Collection.extend({
		model: EventModel,
		initialize: function (attributes, options) {
			this.studentId = options.studentId;
		},
		parse: parseEventListResponse,
		url: function() {
			return API_EVENT_ROOT + 'api/events' + this.studentId + '/events';
		}
	})

	//view of events
	var EventView = Backbone.View.extend({
		tpl: $('#eventTpl').html(),

		initialize: function(options) {
			this.app = options.app;
		},
		events: {
			"click .eventListItemLink" : "clickOnEvent",
		},
		clickOnEvent: function(argument) {
			this.app.clickOnEvent(this.model);
		},
		render: function() {
			this.$el.html('').append(Mustache.render(this.tpl, this.model.attributes));
			console.log(this.model.attributes);
		}
	});

	//view for events for the parent
	var EventParentsView = Backbone.View.extend({
		initialize: function (options) {
			this.collection.on('sync', this.render, this);
			this.app = options.app;
			this.targetDivId = options.targetDivId || '#eventsDiv';
		},
		render: function() {
			var app = this.app;
			var divId = this.targetDivId;

			var views = this.collection.map(function(model){
				var view = new EventView({
					model: model,
					app: app
				});
				view.render();
				return view;
			});
			$(divId).html('');
			$(divId).append(_.map(views, function(view) {
				return view.$el;
			}));
		}
	});

});//document ready