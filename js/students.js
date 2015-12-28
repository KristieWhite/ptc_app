$(document).ready(function () {

	  function getTokens(){
    var tokens = [];
    var query = location.search;
    query = query.slice(1);
    query = query.split('&');
    $.each(query, function(i,value){    
        var token = value.split('=');   
        var key = decodeURIComponent(token[0]);     
        var data = decodeURIComponent(token[1]);
        tokens[key] = data;
    });
    return tokens;
}

	var tokens = getTokens();

	var studentInfoModel = Backbone.Model.extend({
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
		Model:studentInfoModel,
		idAttribute: "id",
		url: "https://murmuring-sands-9831.herokuapp.com/api/students/" + (tokens['id'])
	});
	var studentInfoCollection = Backbone.Collection.extend({
		Model: studentInfoModel,
		idAttribute: "id",
		url: "https://murmuring-sands-9831.herokuapp.com/api/students/" + (tokens['id'])
	});
		var student = new studentInfoModel();
		student.fetch({
			success: function (resp) {
				var studentInfo = {
					'students': resp.toJSON().results
				};
				console.log(resp.toJSON().results);
				var studentInfoTemplate = $("#studentInfoTemplate").text();
				var studentInfoHTML = Mustache.render(studentInfoTemplate, studentInfo);
				$("#studentInfo").html(studentInfoHTML);
				console.log(studentInfoHTML);
			},
			error: function (err) {
				console.log("error", err);
			}
		});

	});


	// var students = new studentModel();
	// 	students.fetch({
	// 		success: function (resp) {
	// 			var studentsInfo = {
	// 			"students": resp.toJSON().results
	// 		};
	// 		var studentsTeacherViewTemplate = $("#studentsTeacherViewTemplate").text();
	// 		var studentsHTML = Mustache.render(studentsTeacherViewTemplate, studentsInfo);
	// 		$("#studentInfo").html(studentsHTML);
	// 		console.log(resp);
	// 	},
	// 	error: function (err) {
	// 		console.log("error", err);
	// 	}
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



