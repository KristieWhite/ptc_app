$(document).ready(function () {
	//list of students for teachers, api/students/id
	var StudentsTeacherDetailModel = Backbone.Model.extend({
		initialize: function () {},
		defaults: {
			"first_name": null,
			"last_name": null,
		},
			url: "https://murmuring-sands-9831.herokuapp.com/api/students/#{id}"
	});

	var StudentsTeacherDetail = new StudentsTeacherDetailModel();
	StudentsTeacherDetail.fetch({
		success: function (resp) {
			var studentsTeacherDetailObj = {
				"students": resp.toJSON().results
			};
			var studentsTeacherDetailTemplate = $("#studentsTeacherDetailTemplate").text();
			var studentsTeacherDetailHTML = Mustache.render(studentsTeacherDetailTemplate, studentsTeacherDetailObj);
			console.log("studentsTeacherDetailObj", studentsTeacherDetailObj);
			console.log("studentsTeacherDetailHTML", studentsTeacherDetailHTML);
			$("#studentsTeacherDetailDiv").html(studentsTeacherDetailHTML);
			console.log(resp);
			// function getURIParameter(param, asArray) {
			// 	return document.location.search.substring(1).split('&').reduce(function(p,c) {
			// 		var parts = c.split('=', 2).map(function(param) {
			// 			return decodeURIComponent(param);
			// 		});
			// 		if(parts.length == 0 || parts[0] != param) 
			// 			return (p instanceof Array) && !asArray ? null : p;
			// 			return asArray ? p.concat(parts.concat(true)[1]) : parts.concat(true)[1];
			// 		},
			// 		[]);
			// }
			// getURIParameter("id")
			// getURIParameter("id", true)
		},
		error: function (err) {
			conole.log(error, err);
		}
	});

	var StudentsTeacherDetailModel = Backbone.Model.extend({
		initialize: function () {},
		defaults: {
			"first_name": null,
			"last_name": null,
		},
			url: "https://murmuring-sands-9831.herokuapp.com/api/students/#{id}"
	});

	
});	//documentready

