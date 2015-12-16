$(document).ready(function ($) {
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
						"classes": resp.toJSON()[0].results[0]
					};
					var teacherClassesTemplate = $("#teacherClassesTemplate").text();
					var teacherClassesHTML = Mustache.render(teacherClassesTemplate, teacherClassesObj);
					$("#teacherClassesApiDiv").html(teacherClassesHTML);
				},
				error: function(err) {
					console.log('error', err);
				}
			});



});//documentready