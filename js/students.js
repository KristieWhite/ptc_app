$(document).ready(function () {

	var studentId = window.location.search.match(/\d+/)[0];
    console.log(studentId);

	var studentInfoModel = Backbone.Model.extend({
		initialize: function () {
		},
		defaults: {
			"id": null,
			"first_name": null,
			"last_name": null,
			"parent": null,
			"school_class": null,
			"classfeepayment_set": null,
			"studenthomework_set":null
	},
		Model:studentInfoModel,
		idAttribute: "id",
		url: "https://murmuring-sands-9831.herokuapp.com/api/students/" + studentId
	});
	var studentInfoCollection = Backbone.Collection.extend({
		Model: studentInfoModel,
		idAttribute: "id",
		url: "https://murmuring-sands-9831.herokuapp.com/api/students/" + studentId
	}); 
		var student = new studentInfoModel();
		student.fetch({
			success: function (resp) {
				var studentInfo = {
					'students': resp.toJSON().results
				};
				console.log(resp.toJSON());
				var studentInfoTemplate = $("#studentInfoTemplate").text();
				var studentInfoHTML = Mustache.render(studentInfoTemplate, studentInfo);
				$("#studentInfo").html(studentInfoHTML);
				console.log(studentInfoHTML);
			},
			error: function (err) {
				console.log("error", err);
			}
		});

////////////////////////////////////// TEACHER VIEW /////////////////////////////////////////////////////


	}); // closes doc.ready




