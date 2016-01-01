(function(window){
	
	window.appModelsEvent = window.appModelsEvent || {};

	var API_EVENT_ROOT = 'https://murmuring-sands-9831.herokuapp.com/';

		function parseListResponse(response) {
			return parseEventListResponse.results;
		};

		var EventModel = Backbone.Model.extend({
			url: function() {
				return API_EVENT_ROOT + 'api/events/' + this.get('id');
			}
		});

		//list of events
		var EventCollection = Backbone.Collection.extend({
			model: EventModel,
			initialize: function (attributes, options) {
				console.log("EventCollection initialized");
				this.parentId = options.parentId;
			},
			parse: parseEventListResponse,

			url: function() {
				return API_EVENT_ROOT + 'api/events/' + this.parentId + '/class_events';
			}
		});

		//lists of students events
		var UniversalEventsCollection = Backbone.Collection.extend({
			model: EventModel,
			initialize: function (attributes, options) {
				this.ownerID = options.ownerId;
				this.ownerType = options.ownerType;
			},
			parse: parseEventListResponse,

			url: function() {
				var type = '';
				switch (this.ownerType) {
					case 'parent':
					type = 'parents';
					break;

					case 'event':
					type = 'events';
					break;
				}
			return API_EVENT_ROOT + 'api/' + type + '/' + this.ownerId + '/class_events';
		}
	});
		window.appModelsEvent.EventCollection = EventCollection;
		window.appModelsEvent.UniversalEventsCollection = UniversalEventsCollection;
})(window);