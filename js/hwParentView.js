$(document).ready(function () {
	/////////////////////lists of students homework///////////////////////////////
	var HwParentViewModel = Backbone.Model.extend({
		initialize: function () {
			console.log("hwParentViewModel initialized");
		},
		defaults: {
			name: null,
			student: null,
			title: null,
			description: null,
			image: null,
			due_date: null,
			points: "Not Graded Yet!"
		},
		success: function () {
			url: 'https://murmuring-sands-9831.herokuapp.com/api/students/#{id}/homework'
		}
	});

	var HwParentViewCollection = Backbone.Model.extend({
		Model: HwParentViewModel,
		url: 'https://murmuring-sands-9831.herokuapp.com/api/students/#{id}homework'
	});

	var HomeworkAssigned = new HwParentViewCollection();

	HomeworkAssigned.fetch({
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
			function getURIParameter(param, asArray) {
				return document.location.search.substring(1).split('&').reduce(function(p,c) {
					var parts = c.split('=', 2).map(function(param) {
						return decodeURIComponent(param);
					});
					if(parts.length == 0 || parts[0] != param) 
						return (p instanceof Array) && !asArray ? null : p;
						return asArray ? p.concat(parts.concat(true)[1]) : parts.concat(true)[1];
					},
					[]);
			}
			getURIParameter("id")
			getURIParameter("id", true)
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
			url: 'https://murmuring-sands-9831.herokuapp.com/api/student_homework/#{id}'
		}
	});

	var HwDetailParentCollection = Backbone.Model.extend({
		Model: HwDetailParentModel,
		url: 'https://murmuring-sands-9831.herokuapp.com/api/student_homework/#{id}'
	});

	var HomeworkDetailParent = new HwDetailParentCollection();

	HomeworkDetailParent.fetch({
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