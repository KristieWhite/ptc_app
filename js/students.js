$(document).ready(function () {

	var studentId = window.location.search.match(/\d+/)[0];
    console.log(studentId);

	var studentInfoModel = Backbone.Model.extend({
		initialize: function () {
		},
		Model:studentInfoModel,
		url: "https://murmuring-sands-9831.herokuapp.com/api/students/" + studentId
	});
	var studentInfoCollection = Backbone.Collection.extend({
		Model: studentInfoModel,
		url: "https://murmuring-sands-9831.herokuapp.com/api/students/" + studentId
	}); 



/////////////////////////////**** STUDENT PROFILE - PARENT VIEW ****/////////////////////////////////

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

/////////////////////////////**** For Teacher View Student Profile ****///////////////////////////////////

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

		var studentImage = new studentInfoModel();
		studentImage.fetch({
			success: function(resp){
				var studentImg = {
					'studentPic': resp.toJSON()
				};
				console.log(resp.toJSON());
				var studentPicTemplate = $("#studentPicTemplate").text();
				var studentPicHTML = Mustache.render(studentPicTemplate, studentImg);
				$("#studentPicture").html(studentPicHTML);
				console.log(studentPicHTML);
			}
		});

////////////////////////////////**** STUDENT ATTENDANCE ****////////////////////////////////////

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
			if (resp.absent == true) {
			console.log("Child was absent");
			return ("Child was absent")
			} else if (resp.tardy == true) {
			console.log("Child was tardy");
			return ("Child was tardy");
			}
		},
		error: function(err){
			console.log('error ', err);
		}
	});


//////////////////// TEACHER SUBMIT ATTENDANCE ////////////////////


	$("#attendBtn").on('click',function(e){
		e.preventDefault();
	var attendSave = new AttendanceModel();
	attendSave.set({
		id: $(".mainId").val(),
		date: $(".attendDate").val(),
		absent: $(".absent").val(),
		tardy: $(".tardy").val()
	})
	$(".attendDate").val(""),
	$(".absent").val(""),
	$(".tardy").val("");
		attendSave.save(null,{
			success:function(resp){
				AttendanceCollection.fetch({
					success: function(resp){
						alert("This has been submitted");
					}, error: function(err){	
					}
				})
			}, error: function(err){
				console.log("error ", err);
		}
	})
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
			if($(".badBehavior").is(":checked")){
				return ("Child was not on best behavior today");
			}
		},
		error: function(err){
			console.log('error ', err);
		}
	});



/////////////////////////////////// TEACHER SUBMIT BEHAVIOR /////////////////////////////


	$("#behaveBtn").on('click',function(e){
			e.preventDefault();
		var behaveSave = new BehaviorModel();
		behaveSave.set({
			id: $(".mainId").val(),
			date: $(".datePick").val(),
			description: $(".behaveDescrip").val()
		})
		$(".datePick").val(""),
		$(".behaveDescrip").val("");
			behaveSave.save(null,{
				success:function(resp){
					BehaviorCollection.fetch({
						success: function(resp){
							console.log('success ', resp);
						}, error: function(err){	
						}
					})
				}, error: function(err){
					console.log("error ", err);
			}
		})
			alert("This has been submitted");
		});

///////////////////////////////////**** STUDENT GRADES ****////////////////////////////////////////////

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

///////////////////////////////// TEACHER SUBMIT GRADES ////////////////////////


	var StudentGradeModel = Backbone.Model.extend({
		intialize: function(){
		},
		Model: StudentGradeModel,
		url: "https://murmuring-sands-9831.herokuapp.com/api/homework/" + studentId
	});

	var StudentGradeCollection = Backbone.Collection.extend({
		Model: StudentGradeModel,
		url: "https://murmuring-sands-9831.herokuapp.com/api/homework/" + studentId
	});

	$("#gradesBtn").on('click',function(e){
			e.preventDefault();
		var gradesSave = new StudentGradeModel();
		gradesSave.set({
			id: $(".mainId").val(),
			title: $(".hwTitle").val(),
			date: $(".dueDate").val(),
			points: $(".points").val(),
			total_points: $(".total_points").val()
		})
		$(".hwTitle").val(""),
		$(".dueDate").val(""),
		$(".points").val(""),
		$(".total_points").val("");
			gradesSave.save(null,{
				success:function(resp){
					GradeCollection.fetch({
						success: function(resp){
						}, error: function(err){	
						}
					})
				}, error: function(err){
					console.log("error ", err);
			}
		})
			alert("This has been submitted");
		});

}); // closes doc.ready




