$(document).ready(function () {
	/////////////////////lists of students homework///////////////////////////////
	var HwParentViewModel = Backbone.Model.extend({
		initialize: function () {
			console.log("hwParentViewModel initialized");
		},
		// defaults: {
		// 	name: null,
		// 	student: null,
		// 	title: null,
		// 	description: null,
		// 	image: null,
		// 	due_date: null,
		// 	points: "Not Graded Yet!"
		// },
		success: function () {
			url: 'https://murmuring-sands-9831.herokuapp.com/api/students/#{id}/homework'
		}
	});

	var HwParentViewCollection = Backbone.Collection.extend({
		Model: HwParentViewModel,
		url: 'https://murmuring-sands-9831.herokuapp.com/api/students/#{id}/homework'
	});

	var HomeworkAssigned = new HwParentViewCollection();

	HomeworkAssigned.fetch({
		data: $.param({ 
			id: 13
		}),
		success: function (resp) {
			console.log('success', resp.toJSON());
			var homeworkListObj = {
				"homework": resp.toJSON()[0].results
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
			url: 'https://murmuring-sands-9831.herokuapp.com/api/student_homework'
		}
	});

	var HwDetailParentCollection = Backbone.Collection.extend({
		Model: HwDetailParentModel,
		url: 'https://murmuring-sands-9831.herokuapp.com/api/student_homework/#{id}',
		parse: function(data) {
			return data.student_homework;
		}
	});

	var HomeworkDetailParent = new HwDetailParentCollection();

	HomeworkDetailParent.fetch({
		data: $.param({ 
			id: 13
		}),
		success: function(resp) {
			console.log('success', resp.toJSON());
			var homeworkDetailObj = {
				"student_homework": resp.toJSON()[0].results
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