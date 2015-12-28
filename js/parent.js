$(document).ready(function () {


	/////////////////////***********Parent Profile Model**************/////////////////////////////

	var ParentModel = Backbone.Model.extend({
		initialize: function () {},
		defaults: {
			"id": null,
			"first_name": null,
			"last_name": null,
			"student_set": null,
			"picture_url": null
		},
		Model: ParentModel,
		url: "https://murmuring-sands-9831.herokuapp.com/api/parents/" + $.cookie('UserId')
	});

	var ParentsCollection = Backbone.Collection.extend({
    url: "https://murmuring-sands-9831.herokuapp.com/api/parents/" + $.cookie('UserId')
	});
	var parent = new ParentModel();
	parent.fetch({
		success: function (resp) {
			var parentObj = {
				"parents": resp.toJSON()
			};
			var parentTemplate = $("#parentInfoTemplate").text();
			var parentHTML = Mustache.render(parentTemplate, parentObj);
			$("#parentInfo").html(parentHTML);
      console.log(parentHTML);
		}, error: function (err) {
			console.log('error', err);
		}
	});

/////////////////**List of children Model**//////////////////////////////////
  var childModel = Backbone.Model.extend({
    initialize: function () {
    },
    defaults: {
      "id": null,
      "first_name": null,
      "last_name": null,
      "parent": null,
      "school_class": null,
      "classfeepayment_set": null,
      "studenthomework_set": null
    },
    idAttribute: "id",
    url: "https://murmuring-sands-9831.herokuapp.com/api/parents/" + $.cookie('UserId') + "/students"
  });
  var childCollection = Backbone.Collection.extend({
    Model: childModel,
    idAttribute: "id",
    url: "https://murmuring-sands-9831.herokuapp.com/api/parents/" + $.cookie('UserId') + "/students" 
  });

    var child = new childModel();
      child.fetch({
        success: function (resp) {
          var childData = {
            "children": resp.toJSON().results
          };
          console.log('resp', resp.toJSON().results);
          var childTemplate = $("#childTemplate").text();
          var childHTML = Mustache.render(childTemplate, childData);
          $("#childList").html(childHTML);
          console.log(childHTML);
          //   $('#idSave').click(function(e){
          //     e.target.value
          //     var id = $(e.currentTarget).data("id");
          //     window.location.replace("../studentsParentView.html");
          //     console.log(id);
          //     });
          //   }
          }
      });


////////////////////****************** Student Detail Info ***************************///////////////////////

  // var studentInfoModel = Backbone.Model.extend({
  //   initialize: function () {
  //   },
  //   defaults: {
  //     "id": null,
  //     "first_name": null,
  //     "last_name": null,
  //     "parent": null,
  //     "school_class": null,
  //     "classfeepayment_set": null,
  //     "studenthomework_set":null
  // },

  //   Model:studentInfoModel,
  //   idAttribute: "id",
  //   url: "https://murmuring-sands-9831.herokuapp.com/api/students/"
  // });
  // var studentInfoCollection = Backbone.Collection.extend({
  //   Model: studentInfoModel,
  //   idAttribute: "id",
  //   url: "https://murmuring-sands-9831.herokuapp.com/api/students/" 
  // });


  //   var student = new studentInfoModel({id: id});
  //   student.fetch({
  //     success: function (resp) {
  //       var studentInfo = {
  //         'students': resp.toJSON().results.id
  //       };
  //       console.log(resp.toJSON().results.id);
  //       var studentInfoTemplate = $("#studentInfoTemplate").text();
  //       var studentInfoHTML = Mustache.render(studentInfoTemplate, studentInfo);
  //       $("#studentInfo").html(studentInfoHTML);
  //       console.log(studentInfoTemplate);
  //     },
  //     error: function (err) {
  //       console.log("error", err);
  //     }
  //   });
  // var student = new studentInfoCollection();
  // student.fetch({
  //   success: function (resp) {
  //     var studentInfo = {
  //       'students': resp.toJSON()[0].results
  //     };
  //     console.log(resp.toJSON()[0].results);
  //     var studentInfoTemplate = $("#studentInfoTemplate").text();
  //     var studentInfoHTML = Mustache.render(studentInfoTemplate, studentInfo);
  //     $("#studentInfo").html(studentInfoHTML);
  //     console.log(studentInfoTemplate);
  //   },

  //   error: function (err) {
  //     console.log("error", err);
  //   }
  // });

  


////////////////////////***********Teacher Profile - Parent View**********/////////////////////////////////

// var TeacherModel = Backbone.Model.extend({
//   initialize: function(){
//   },
//   defaults: {
//     "id": null,
//     "user_type": null,
//     "first_name": null,
//     "last_name": null,
//     "studentParent_set": null
//   },
//   Model: TeacherModel,
//   url: "https://murmuring-sands-9831.herokuapp.com/api/teachers/" + $.cookie('UserId')
// });
//   var TeachersCollection = Backbone.Collection.extend({
//     Model: ParentModel,
//     url: "https://murmuring-sands-9831.herokuapp.com/api/teachers/" + $.cookie('UserId')
//   });
//   var teacher = new TeacherModel();
//   teacher.fetch ({
//     success: function(resp){
//     var teacherViewObj = {
//       "teachersView":resp.toJSON()
//     };
//     var teacherParentTemplate = $("#teacherParentTemplate").text();
//     var teacherViewHTML = Mustache.render(teacherParentTemplate, teacherViewObj);
//     $("#parentInfoTView").html(teacherViewHTML);
//   }, error: function(err) {
//     console.log('error', err);
//   }
// });

//**************ROUTES**************************//



	//////////////////***click functionality***///////////////////

	$("#addPhoto").click(function () {
		$(".uploadPic").trigger('click');
	});

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

  
  // $(".studentId").on('click', function(){
  //   var studentId = $(".studentId").val();
  //   $.cookie('studentId', studentId);
  //   alert(student_val);
  // });

});

