$(document).ready(function () {


		var studentDetailModel = Backbone.Model.extend({
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
		Model:studentDetailModel,
		url: "https://murmuring-sands-9831.herokuapp.com/api/students/"
	});
	var studentDetailCollection = Backbone.Collection.extend({
		Model: studentDetailModel,
		url: "https://murmuring-sands-9831.herokuapp.com/api/students/"
	});

	var studentDetail = new studentDetailCollection();

	studentDetail.fetch({
		success: function (resp) {
			console.log(resp);
			var studentDetailInfo = {
				'studentDetail': resp.toJSON()
			};
			var studentDetailTemplate = $("#studentDetailTemplate").text();
			var studentDetailHTML = Mustache.render(studentDetailTemplate, studentDetailInfo)
			$("#studentDetail").html(studentDetailHTML);
		},

		error: function (err) {
			console.log("error", err);
		}
	});

});

	var studentModel = Backbone.Model.extend({
		initialize: function () {
		},
		defaults: {
			"id": null,
			"first_name": null,
			"last_name": null,
			"parent": null,
			"school_name": null,
			"classfeepayment_set": null
		},
		Model: studentModel,	
		url: "https://murmuring-sands-9831.herokuapp.com/api/students/",
		idAttribute: "id"
	});

	var studentCollection = Backbone.Collection.extend({
		Model: studentModel,
		url: "https://murmuring-sands-9831.herokuapp.com/api/students/" 
	});


	var students = new studentModel();
		students.fetch({
			success: function (resp) {
				var studentsInfo = {
				"students": resp.toJSON().results
				};
				console.log(resp.toJSON().results);
				var studentsTemplate = $("#studentsTemplate").text();
				var studentsHTML = Mustache.render(studentsTemplate, studentsInfo);
				$("#studentInfo").html(studentsHTML);
				console.log(studentsHTML);
			}
		});


	// var studentIdModel = Backbone.Model.extend({
	// 	initialize: function () {
	// 	},
	// 	defaults: {
	// 		"id": null,
	// 		"first_name": null,
	// 		"last_name": null,
	// 		"parent": null,
	// 		"school_name": null,
	// 		"classfeepayment_set": null
	// 	},
	// 	idAttribute: "id",
	// 	url: "https://murmuring-sands-9831.herokuapp.com/api/students/" + id
	// });

	// var studentIdCollection = Backbone.Collection.extend({
	// 	Model: studentModel,
	// 	idAttribute: "id",
	// 	url: "https://murmuring-sands-9831.herokuapp.com/api/students/" + id
	// });

});

	
	// 	$("body").on('click', 'a', function (e) {
	// 	e.preventDefault();
	// 	var href = $(this).attr('href');
	// 	href = href.substr(1);
	// 	router.navigate(href, {
	// 		trigger: true
	// 	});
	// });



