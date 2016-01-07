$(document).ready(function () {

	var studentId = window.location.search.match(/\d+/)[0];
    console.log(studentId);

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
		url: "https://murmuring-sands-9831.herokuapp.com/api/students/" + studentId
	});
	var studentInfoCollection = Backbone.Collection.extend({
		Model: studentInfoModel,
		url: "https://murmuring-sands-9831.herokuapp.com/api/students/" + studentId
	}); 
		var student = new studentInfoModel();
		student.fetch({
			success: function (resp) {
				var studentInfo = {
					'students': resp.toJSON()
				};
				console.log(resp.toJSON());
				var studentInfoTemplate = $("#studentInfoTemplate").text();
				var studentInfoHTML = Mustache.render(studentInfoTemplate, studentInfo);
				$("#studentInfo").html(studentInfoHTML);
				console.log(studentInfoHTML);
			},
			error: function (err) {
				console.log("error", err);
			}
		});

/////////////////////////////** For Teacher View Student Profile **//////////////////////////////////////

		var studentProfile = new studentInfoModel();
		studentProfile.fetch({
			success: function(resp){
				var studentData = {
					'teacherView': resp.toJSON()
				};
				console.log(resp.toJSON());
				var studentDataTemplate = $("#studentDataTemplate").text();
				var studentDataHTML = Mustache.render(studentDataTemplate, studentData);
				$("#studentData").html(studentDataHTML);
				console.log(studentDataHTML);
			}
		});

///////////////////////////////////**** STUDENT ATTENDANCE ****////////////////////////////////////////

	var AttendanceModel = Backbone.Model.extend({
		intialize: function(){
		},
		Model: AttendanceModel,
		url: "https://murmuring-sands-9831.herokuapp.com/api/students/" + studentId + "/attendance"
	});

	var AttendanceCollection = Backbone.Collection.extend({
		Model: AttendanceModel,
		url: "https://murmuring-sands-9831.herokuapp.com/api/students/" + studentId + "/attendance"
	});

	var attendance = new AttendanceModel();
	attendance.fetch({
		success: function(resp){
			var attendanceInfo = {
				'attendance': resp.toJSON().results
			};
			console.log(resp.toJSON().results);
			var attendanceTemplate = $("#attendanceTemplate").text();
			var attendanceHTML = Mustache.render(attendanceTemplate, attendanceInfo);
			$("#attendanceDiv").html(attendanceHTML);
		},
		error: function(err){
			console.log('error ', err);
		}
	});

///////////////////////////////**** STUDENT BEHAVIOR ****/////////////////////////////////////////////////

	var BehaviorModel = Backbone.Model.extend({
		intialize: function(){
		},
		Model: BehaviorModel,
		url: "https://murmuring-sands-9831.herokuapp.com/api/students/" + studentId + "/behavior"
	});

	var BehaviorCollection = Backbone.Collection.extend({
		Model: BehaviorModel,
		url: "https://murmuring-sands-9831.herokuapp.com/api/students/" + studentId + "/behavior"
	});

	var behavior = new BehaviorModel();
	behavior.fetch({
		success: function(resp){
			var behaviorInfo = {
				'behavior': resp.toJSON().results
			};
			console.log(resp.toJSON().results);
			var behaviorTemplate = $("#behaviorTemplate").text();
			var behaviorHTML = Mustache.render(behaviorTemplate, behaviorInfo);
			$("#behaviorDiv").html(behaviorHTML);
		},
		error: function(err){
			console.log('error ', err);
		}
	});

////////////////////////////////**** STUDENT GRADES ****////////////////////////////////////////////////

	var GradeModel = Backbone.Model.extend({
		intialize: function(){
		},
		Model: GradeModel,
		url: "https://murmuring-sands-9831.herokuapp.com/api/students/" + studentId + "/homework"
	});

	var GradeCollection = Backbone.Collection.extend({
		Model: GradeModel,
		url: "https://murmuring-sands-9831.herokuapp.com/api/students/" + studentId + "/homework"
	});

	var grade = new GradeModel();
	grade.fetch({
		success: function(resp){
			var gradeInfo = {
				'grades': resp.toJSON().results
			};
			console.log(resp.toJSON().results);
			var gradeTemplate = $("#gradesTemplate").text();
			var gradeHTML = Mustache.render(gradeTemplate, gradeInfo);
			$("#gradesDiv").html(gradeHTML);
		},
		error: function(err){
			console.log('error ', err);
		}
	});


}); // closes doc.ready




