$(document).ready(function () {
	/////////////////////lists of students homework///////////////////////////////
	var HwParentViewModel = Backbone.Model.extend({
		initialize: function () {
			console.log("hwParentViewModel initialized");
		},
		success: function () {
			//url: https://murmuring-sands-9831.herokuapp.com/api/students/id/homework
			url: 'https://murmuring-sands-9831.herokuapp.com/api/students/#{id}/homework'
		},
		defaults: {
			"first_name": "first name",
			"last_name": "last name"
		}
	});

	var HomeworkParentViewModel = Backbone.Model.extend({
		model: HwParentViewModel,
		//url: https://murmuring-sands-9831.herokuapp.com/api/students/id/homework
		url: 'https://murmuring-sands-9831.herokuapp.com/api/students/#{id}/homework'
	});

	var HomeworkAssigned = new HomeworkParentViewModel();

	HomeworkAssigned.fetch({
		// data: $.param({ 
		// 	id: 13
		// }),
		success: function (resp) {
			console.log('success', resp.toJSON());
			var homeworkListObj = {
				"homework": resp.toJSON().results
			};
			var assignmentListTemplate = $("#assignmentListTemplate").text();
			var pHomeworkHTML = Mustache.render(assignmentListTemplate, homeworkListObj);
			console.log("homeworkListObj", homeworkListObj);
			//console.log("pHomeworkHTML", pHomeworkHTML);
			$("#hwApiDiv").html(pHomeworkHTML);
		},
		error: function (err) {
			console.log('error homeworkList', err);
		}
	});

	/////////////////////detail of students homework///////////////////////////////
	var HwDetailParentModel = Backbone.Model.extend({
		initialize: function() {
			console.log("hwDetailParentModel initialized");
		},
		success: function() {
			//url: 'https://murmuring-sands-9831.herokuapp.com/api/student_homework/id'
			url: 'https://murmuring-sands-9831.herokuapp.com/api/student_homework'
		}
	});

	var HomeworkDetailParentModel = Backbone.Model.extend({
		Model: HwDetailParentModel,
			urlRoot: 'https://murmuring-sands-9831.herokuapp.com/api/student_homework'
		});

	var HomeworkDetailParent = new HomeworkDetailParentModel();

	HomeworkDetailParent.fetch({
		// data: $.param({ 
		// 	student.id: 15
		// }),
		success: function(resp) {
			console.log('success', resp.toJSON());
			var homeworkDetailObj = {
				"student_homework": resp.toJSON().results
			};
			var assignmentDetailTemplate = $("#assignmentDetailTemplate").text();
			var pDetailHomeworkHTML = Mustache.render(assignmentDetailTemplate, homeworkDetailObj);
			console.log("homeworkDetailObj", homeworkDetailObj);
			console.log("pDetailHomeworkHTML", pDetailHomeworkHTML);
			$("#hwDetailParentDiv").html(pDetailHomeworkHTML);
		},
		error: function(err) {
			console.log('error homeworkDetail', err);
		}
	
	});

});//document ready