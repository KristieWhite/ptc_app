$(document).ready(function () {
<<<<<<< HEAD

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

    var child = new childCollection();
      child.fetch({
        success: function (resp) {
          var childData = {
            "children": resp.toJSON()[0].results
          };
        //   function createDocument(html, title) {
        //     var doc = document.implementation.createHTMLDocument(title)
        //     doc.documentElement.innerHTML = html
        //     return doc
        // }
          console.log('resp children', resp.toJSON());
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
  //   url: "https://murmuring-sands-9831.herokuapp.com/api/students/?_fields=id, first_name"
  // });
  // var studentInfoCollection = Backbone.Collection.extend({
  //   Model: studentInfoModel,
  //   idAttribute: "id",
  //   url: "https://murmuring-sands-9831.herokuapp.com/api/students/?_fields=id, first_name" 
  // });
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
//   url: "https://murmuring-sands-9831.herokuapp.com/api/teachers/" + $.cookie('UserId')+ "
// });
//   var TeachersCollection = Backbone.Collection.extend({
//     Model: ParentModel,
//     url: "https://murmuring-sands-9831.herokuapp.com/api/teachers/" + $.cookie('UserId')+"
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
//****ROUTES****//

  var Router = Backbone.Router.extend({
    initialize:function(){
      Backbone.history.start({pushState: true});
    },
    routes:{
      "students/:id/:first_name": "students",
      "": "index"
    }
  });

  var router = new Router();

  router.on("route:students", function(id){
    var student = new childCollection({id: id});
      student.fetch({
        success: function (resp) {
          var studentData = {
            "students": resp.toJSON()[0].results
          };
          console.log('resp', resp.toJSON());
          var studentTemplate = $("#studentInfoTemplate").text();
          var studentHTML = Mustache.render(studentTemplate, studentData);
          $("#studentInfo").html(studentHTML);
          console.log(studentHTML);
          $("#parentContainer").hide();
          $("#studentContainer").show();
        }
    });
    });





	//***click functionality***//

	$("#addPhoto").click(function () {
		$(".uploadPic").trigger('click');
	});
	$("#parentTView").hide();
  });



});

