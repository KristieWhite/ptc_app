$(document).ready(function () {


<<<<<<< HEAD
	///////////////****Parent Profile Model****///////////////////////////

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
		Model: ParentModel,
		url: "https://murmuring-sands-9831.herokuapp.com/api/parents/" + $.cookie('UserId')
=======
///////////////****Parent Profile Model****///////////////////////////

var ParentModel = Backbone.Model.extend({
  initialize: function(){
  },
  defaults: {
    "id": null,
    "first_name": null,
    "last_name": null,
    "student_set": null,
	  "picture_url":null
  },
  Model: ParentModel,
  url: "https://murmuring-sands-9831.herokuapp.com/api/parents/" + $.cookie('UserId') 
});

	var ParentsCollection = Backbone.Collection.extend({
		Model: ParentModel,
    url: "https://murmuring-sands-9831.herokuapp.com/api/parents/" + $.cookie('UserId')
>>>>>>> b692466982a39bbef02ab86423636313cbb6828a
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
		},
		error: function (err) {
			console.log('error', err);
		}
	});
	
	
	
	var image = new ParentModel();
	image.fetch({
		success: function (resp) {
			var imageObj = {
				"images": resp.toJSON()
			};
			var imageTemplate = $("#imageInfoTemplate").text();
			var imageHTML = Mustache.render(imageTemplate, imageObj);
			$("#imageInfo").html(imageHTML);
      console.log(imageHTML);
		}, error: function (err) {
			console.log('error', err);
		}
	});

<<<<<<< HEAD
	/////////////////**List of children Model**//////////////////////////////////

	var childModel = Backbone.Model.extend({
		initialize: function () {},
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
=======
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


    var child = new childModel();
      
      child.fetch({
        success: function (resp) {
          var id = $('.studentId').val();
          var childData = {
            "children": resp.toJSON().results
          };
          console.log('resp', resp.toJSON());
          var childTemplate = $("#childTemplate").text();
          var childHTML = Mustache.render(childTemplate, childData, id);
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



//*****Teacher Profile - Parent View*****//

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

>>>>>>> b692466982a39bbef02ab86423636313cbb6828a

	var childCollection = Backbone.Collection.extend({
		Model: childModel,
		idAttribute: "id",
		url: "https://murmuring-sands-9831.herokuapp.com/api/parents/" + $.cookie('UserId') + "/students"
	});


	var child = new childModel();

<<<<<<< HEAD
	child.fetch({
		success: function (resp) {
			var id = $('.studentId').val();
			var childData = {
				"children": resp.toJSON().results
			};
			console.log('resp', resp.toJSON());
			var childTemplate = $("#childTemplate").text();
			var childHTML = Mustache.render(childTemplate, childData, id);
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
	
//	var imageModel = Backbone.Model.extend({
//		initialize: function () {},
//		defaults: {
//			"first_name": null,
//			"last_name": null,
//			"parent": null,
//			"school_class": null,
//			"classfeepayment_set": null,
//			"studenthomework_set": null,
//			"picture_url": null
//		},
//		idAttribute: "id",
//		url:  "https://murmuring-sands-9831.herokuapp.com/api/parents/" + $.cookie('UserId')
//	});
//
//	var imageCollection = Backbone.Collection.extend({
//		Model: imageModel,
//		idAttribute: "id",
//		url:  "https://murmuring-sands-9831.herokuapp.com/api/parents/" + $.cookie('UserId')
//	});


//	var image = new ParentModel();
//	image.fetch({
//		success: function (resp) {
//			var imageData = {
//				"images": resp.toJSON()
//			};
//			console.log('resp', resp.toJSON());
//			var imageTemplate = $("#imageTemplate").text();
//			var imageHTML = Mustache.render(imageTemplate, imageData);
//			$("#imageList").html(imageHTML);
//			console.log(imageHTML);
//		}
//		});



	//*****Teacher Profile - Parent View*****//

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




	//***click functionality***//

	$("#homeParent").on('click', function () {
		window.location.replace("./homeParent.html");
	});
=======
  $("#homeParent").on('click', function(){
    window.location.replace("./homeParent.html");
  });

>>>>>>> b692466982a39bbef02ab86423636313cbb6828a


	$("#addPhoto").click(function () {
		$(".uploadPic").trigger('click');
	});
	$("#parentTView").hide();

});