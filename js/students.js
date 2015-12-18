$(document).ready(function () {



	var Router = Backbone.Router.extend({

		initialize: function () {
			Backbone.history.start({
				pushState: true
			});
		},

		routes: {
			"student/:id": "student"

		}
	});
	var router = new Router();


	router.on('route:student', function (id) {
		$("#studentContainer").show();
		$("#studentBehavior").show();
		$("#studentAttendance").show();
		$("#studentEvents").show();
		$("#studentContainers").show();
		$("#studentInfo").show();

	});




	var studentModel = Backbone.Model.extend({
		initialize: function () {},
		defaults: {
			"first_name": null,
			"last_name": null,
			"parent": null,
			"school_name": null,
			"classfeepayment_set": null,
			"id": null
		},
		Model: studentModel,
		url: "https://murmuring-sands-9831.herokuapp.com/api/parents/" + $.cookie('UserId') + "/students"
	});
	var studentCollection = Backbone.Collection.extend({
		Model: studentModel,
		url: "https://murmuring-sands-9831.herokuapp.com/api/parents/" + $.cookie('UserId') + "/students"
	});

	var students = new studentModel();
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
	});

	// $("#studentContainer").hide();
	// $("#studentBehavior").hide();
	// $("#studentAttendance").hide();
	// $("#studentEvents").hide
	// $("#studentContainer").hide();

	
		$("body").on('click', 'a', function (e) {
		e.preventDefault();
		var href = $(this).attr('href');
		href = href.substr(1);
		router.navigate(href, {
			trigger: true
		});
	});

});