$(document).ready(function () {

	// var studentsModel = Backbone.Model.extend({
	// 	initialize: function () {},
	// 	defaults: {
	// 		"name": null,
	// 		"school_class": null,
	// 		"description": null
	// 	},
	// 	Model: studentsModel,
	// 	url: "https://murmuring-sands-9831.herokuapp.com/api/students/"
	// });
	// var studentsCollection = Backbone.Collection.extend({
	// 	Model: studentsModel,
	// 	url: "https://murmuring-sands-9831.herokuapp.com/api/students/"
	// });

	// var students = new studentsModel();
	// students.fetch({
	// 	success: function (resp) {
	// 		var studentsInfo = {
	// 			"students": resp.toJSON().results
	// 		};
	// 		var studentsTemplate = $("#studentsTemplate").text();
	// 		var studentsHTML = Mustache.render(studentsTemplate, studentsInfo);
	// 		$("#student").html(studentsHTML);
	// 		console.log(resp);
	// 	},
	// 	error: function (err) {
	// 		conole.log(error, err);
	// 	}
	// });

	////////////////////////////Student Events/////////////////////////////////

	// var studentEventsModel = Backbone.Model.extend({
	// 	initialize: function () {},
	// 	defaults: {
	// 		"name": null,
	// 		"school_class": null,
	// 		"description": null,
	// 		"school_class": null,
	// 		"date": null,
	// 		"image": null,
	// 		"id": null
	// 	},
	// 	url: "https://murmuring-sands-9831.herokuapp.com/api/class_events/"
	// });

	// var studentEventsCollection = Backbone.Collection.extend({
	// 	Model: studentEventsModel,
	// 	url: "https://murmuring-sands-9831.herokuapp.com/api/class_events/"
	// });

	// var Events = new studentEventsModel();
	// Events.fetch({
	// 	success: function (resp) {
	// 		var eventsInfo = {
	// 			"events": resp.toJSON().results
	// 		};

	// 		var eventsTemplate = $("#eventsTemplate").text();
	// 		var eventsHTML = Mustache.render(eventsTemplate, eventsInfo);
	// 		$("#event").html(eventsHTML);
	// 		console.log(resp);


	// 	},

	// 	error: function (err) {
	// 		console.log(error, err);
	// 	}
	// });

	// $("#addEvent").on('click', function (e) {
	// 	e.preventDefault();
	// 	var eventSave = new studentEventsModel();
	// 	eventSave.set({
	// 		name: $("#name").val(),
	// 		date: $("#date").val(),
	// 		description: $("#description").val(),
	// 		school_class: $("#class").val(),
	// 		image: $("#image").val()
	// 	})
	// 	$("#name").val(""),
	// 		$("#date").val(""),
	// 		$("#description").val(""),
	// 		$("#class").val(""),
	// 		$("#image").val("");
	// 	eventSave.save(null, {
	// 		success: function (response) {
	// 			studentEventsCollection.fetch({
	// 				success: function () {
	// 					console.log("success");
	// 				}
	// 			})
	// 			console.log("success", response);
	// 		},
	// 		error: function (problem) {
	// 			console.log("error ", problem);
	// 		}
	// 	});
	// 	location.href = "./eventsTeacher.html";
	// });

//////////////////////////////////////**** TEACHER DETAIL DATA ****////////////////////////////////////////

	var TeacherModel = Backbone.Model.extend({
		initialize: function () {},
		defaults: {
			"first_name": null,
			"last_name": null,
			"picture_url": null
		},
		Model:TeacherModel,
		url: 'https://murmuring-sands-9831.herokuapp.com/api/teachers/' + $.cookie('UserId')
	});

	var TeacherCollection = Backbone.Collection.extend({
		Model: TeacherModel,
		url: 'https://murmuring-sands-9831.herokuapp.com/api/teachers/' + $.cookie('UserId')
	});

	var teacher = new TeacherModel();

	teacher.fetch({
		success: function (resp) {
			console.log('success', resp.toJSON());
			var teacherObj = {
				"teacher": resp.toJSON()
			};
			var teacherTemplate = $("#teacherTemplate").text();
			var teacherHTML = Mustache.render(teacherTemplate, teacherObj);
			$("#teachHome").html(teacherHTML);
		},
		error: function (err) {
			console.log('error', err);
		}
	});

////////////////////////////////////////**** TEACHER CLASS SET DATA ****/////////////////////////////////

	var ClassSetModel = Backbone.Model.extend({
		initialize: function () {
		},
		Model:ClassSetModel,
		url: 'https://murmuring-sands-9831.herokuapp.com/api/teachers/' + $.cookie('UserId') + '/classes'
	});

	var ClassSetCollection = Backbone.Collection.extend({
		Model: ClassSetModel,
		url: 'https://murmuring-sands-9831.herokuapp.com/api/teachers/' + $.cookie('UserId') + '/classes'
	});

	var classSet = new ClassSetModel();
		classSet.fetch({
			success: function(resp) {
				var classSetInfo = {
					'classes': resp.toJSON().results
				};
				console.log(resp.toJSON().results);
				var classSetTemplate = $("#classSetTemplate").text();
				var classSetHTML = Mustache.render(classSetTemplate, classSetInfo);
				$("#classSetDiv").html(classSetHTML);
			},
			error: function(err){
				console.log("error ", err);
			}
		});


///////////////////////////////////////*** TEACHER STUDENT SET DATA ***/////////////////////////////////////
	

	var StudentSetModel = Backbone.Model.extend({
		initialize: function () {
		},
		Model:StudentSetModel,
		url: 'https://murmuring-sands-9831.herokuapp.com/api/classes/' +  + '/students'
	});

	var StudentSetCollection = Backbone.Collection.extend({
		Model: StudentSetModel,
		url: 'https://murmuring-sands-9831.herokuapp.com/api/classes/' +  + '/students'
	});


	var studentSet = new StudentSetCollection();
		studentSet.fetch({
			success: function(resp) {
				var studentSetInfo = {
					'studentSet': resp.toJSON()
				};
				console.log(resp.toJSON().results);
				var studentSetTemplate = $("#studentSetTemplate").text();
				var studentSetHTML = Mustache.render(studentSetTemplate, studentSetInfo);
				$("#studentSetDiv").html(studentSetHTML);
			},
			error: function(err){
				console.log("error ", err);
			}
		});

}); //documentready