$(document).ready(function () {
	var studentsModel = Backbone.Model.extend({
		initialize: function () {},
		defaults: {
			"name": null,
			"school_class": null,
			"description": null
		},
		Model: studentsModel,
		url: "https://murmuring-sands-9831.herokuapp.com/api/students/"
	});
	var studentsCollection = Backbone.Collection.extend({
		Model: studentsModel,
		url: "https://murmuring-sands-9831.herokuapp.com/api/students/"
	});

	var students = new studentsModel();
	students.fetch({
		success: function (resp) {
			var studentsInfo = {
				"students": resp.toJSON().results
			};
			var studentsTemplate = $("#studentsTemplate").text();
			var studentsHTML = Mustache.render(studentsTemplate, studentsInfo);
			$("#student").html(studentsHTML);
			console.log(resp);
		},
		error: function (err) {
			conole.log(error, err);
		}
	})


	////////////////////////////Student Events/////////////////////////////////
	var studentEventsModel = Backbone.Model.extend({
		url: "https://murmuring-sands-9831.herokuapp.com/api/class_events/"
	});

	var studentEventsCollection = Backbone.Collection.extend({
		Model: studentEventsModel,
		url: "https://murmuring-sands-9831.herokuapp.com/api/class_events/"
	});
	
	var Events = new studentEventsModel();
	Events.fetch({
		success:function(resp){
			var eventsInfo = {
				"events":resp.toJSON().results
			};
			
			var eventsTemplate = $("#eventsTemplate").text();
			var eventsHTML = Mustache.render(eventsTemplate, eventsInfo);
			$("#event").html(eventsHTML);
			console.log(resp);
		},
		
		error:function(err){
			console.log(error, err);
		}
	})

///////////////////////////////////classes for teachers/////////////////////////////////
	var teacherClassesModel = Backbone.Model.extend({
			initialize: function() {
				console.log("teacherClassesModel initialized");
			},
				success: function() {
					url: 'https://murmuring-sands-9831.herokuapp.com/api/teachers/' + $.cookie('UserId') + '/classes'
				}
		});

		var teacherClassesCollection = Backbone.Collection.extend({
				Model: teacherClassesModel,
				url: 'https://murmuring-sands-9831.herokuapp.com/api/teachers/' + $.cookie('UserId') + '/classes'
			});

		var teacherClassesTaught = new teacherClassesCollection();

			teacherClassesTaught.fetch({
				success: function(resp) {
					console.log('success' ,resp.toJSON());
					var teacherClassesObj = {
						"classes": resp.toJSON()[0].results
					};
					var teacherClassesTemplate = $("#teacherClassesTemplate").text();
					var teacherClassesHTML = Mustache.render(teacherClassesTemplate, teacherClassesObj);
					console.log("teacherClassesObj", teacherClassesObj);
					console.log("teacherClassesHTML", teacherClassesHTML);
					$("#teacherClassesApiDiv").html(teacherClassesHTML);
				},
				error: function(err) {
					console.log('error', err);
				}
			});



});//documentready
