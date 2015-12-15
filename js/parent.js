$(document).ready(function () {
	var namesModel = Backbone.Model.extend({
		initialize: function () {},
		defaults: {
			"first_name": null,
			"last_name": null,
			"description": null
		},
		Model:namesModel,
		url: "https://murmuring-sands-9831.herokuapp.com/api/parents/1/students"
	});
	var namesCollection = Backbone.Collection.extend({
		Model: namesModel,
		url: "https://murmuring-sands-9831.herokuapp.com/api/parents/1/students"
	});

	var names = new namesModel();
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