$(document).ready(function () {
	var namesModel = Backbone.Model.extend({
		initialize: function () {},
		defaults: {
			"name": null,
			"school_class": null,
			"description": null
		},
		Model:namesModel,
		//will show a classes events
		url: 'https://murmuring-sands-9831.herokuapp.com/api/classes/' + $.cookie('UserId') + 'events'
	});
	var namesCollection = Backbone.Collection.extend({
		Model: namesModel,
		url: 'https://murmuring-sands-9831.herokuapp.com/api/classes/' + $.cookie('UserId') + 'events'
	});

	var names = new namesCollection();
	names.fetch({
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
			conole.log(error, err);
		}
	})

})