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
		idAttribute: "id",
		url: "https://murmuring-sands-9831.herokuapp.com/api/students/"
	});
	var studentDetailCollection = Backbone.Collection.extend({
		Model: studentDetailModel,
		idAttribute: "id",
		url: "https://murmuring-sands-9831.herokuapp.com/api/students/"
	});
	
	var studentDetail = new studentDetailModel();
	studentDetail.fetch({
		success: function (resp) {
			var studentDetailInfo = {
				'students': resp.toJSON().results
			};
			console.log(resp.toJSON().results);
			var studentDetailTemplate = $("#studentParentTemplate").text();
			var studentDetailHTML = Mustache.render(studentDetailTemplate, studentDetailInfo);
			$("#studentInfo").html(studentDetailHTML);
		},

		error: function (err) {
			console.log("error", err);
		}
	});

});

	/*var students = new  studentDetailModel();
		students.fetch({
			success: function (resp) {
				var studentsInfo = {
				"students": resp.toJSON().results
			};
			var studentsTeacherViewTemplate = $("#studentsTeacherViewTemplate").text();
			var studentsHTML = Mustache.render(studentsTeacherViewTemplate, studentsInfo);
			$("#studentInfo").html(studentsHTML);
			console.log(resp);
		},
		error: function (err) {
			console.log("error", err);
		}
	});*/



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


	// $("#studentContainer").hide();
	// $("#studentBehavior").hide();
	// $("#studentAttendance").hide();
	// $("#studentEvents").hide
	// $("#studentContainer").hide();


	
	// 	$("body").on('click', 'a', function (e) {
	// 	e.preventDefault();
	// 	var href = $(this).attr('href');
	// 	href = href.substr(1);
	// 	router.navigate(href, {
	// 		trigger: true
	// 	});
	// });



