$(document).ready(function () {
	var studentModel = Backbone.Model.extend({
		initialize: function () {},
		defaults: {
			"first_name": null,
			"last_name": null,
			"parent": null,
			"school_name": null,
			"classfeepayment_set": null
		},
		Model: studentModel,
		url: "https://murmuring-sands-9831.herokuapp.com/api/students/13"
	});
	var studentCollection = Backbone.Collection.extend({
		Model: studentModel,
		url: "https://murmuring-sands-9831.herokuapp.com/api/students/13"
	});

	var students = new studentModel();
	students.fetch({
		success: function (resp) {
			var studentsInfo = {
				"students": resp.toJSON()
			};
			var studentsTemplate = $("#studentsTemplate").text();
			var studentsHTML = Mustache.render(studentsTemplate, studentsInfo);
			$("#student").html(studentsHTML);
			console.log(resp);
		},
		error: function (err) {
			console.log(error, err);
		}
	})

})