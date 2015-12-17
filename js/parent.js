$(document).ready(function () {
//****Parent Profile - Parent View****//
	
var counter = 0;
var ParentModel = Backbone.Model.extend({
  initialize: function(){
  },
  defaults: {
    "id": null,
    "first_name": null,
    "last_name": null,
    "student_set": null
  },
  Model: ParentModel,
  url: "https://murmuring-sands-9831.herokuapp.com/api/my_info/"
});

	var ParentsCollection = Backbone.Collection.extend({
		Model: ParentModel,
    url: "https://murmuring-sands-9831.herokuapp.com/api/my_info/"
	});


	var parent = new ParentModel();
	parent.fetch({
		success: function (resp) {
			var parentObj = {
				"parents": resp.toJSON().results
			};
			var parentTemplate = $("#parentInfoTemplate").text();
			var parentHTML = Mustache.render(parentTemplate, parentObj);
			$("#parentInfo").html(parentHTML);
      console.log(parentHTML);
		}, error: function (err) {
			console.log('error', err);
		}
	});

//**List of their children**//

  var studentModel = Backbone.Model.extend({
    initialize: function () {
    },
    defaults: {
      "id": null,
      "first_name": null,
      "last_name": null,
      "parent": null,
      "school_name": null,
      "classfeepayment_set": null
    },
    Model: studentModel,
    url: "https://murmuring-sands-9831.herokuapp.com/api/parents/" + $.cookie('UserId') + "/students"
  });

  var studentCollection = Backbone.Collection.extend({
    Model: studentModel,
    url: "https://murmuring-sands-9831.herokuapp.com/api/parents/" + $.cookie('UserId') + "/students"
  });

  var child = new studentModel();
  child.fetch({
    success: function (resp) {
      var childData = {
        "children": resp.toJSON().results
      };
      console.log('resp', resp.toJSON());
      var childTemplate = $("#childTemplate").text();
      var childHTML = Mustache.render(childTemplate, childData);
      $("#childList").html(childHTML);
      console.log(childHTML);
    },
    error: function (err) {
      console.log('error ', err);
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
//     "student_set": null
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



//****ROUTES****//

  // $("body").on('click', 'a', function (e) {
  //     e.preventDefault();
  //     var href = $(this).attr('href');
  //     href = href.substr(1);
  //     router.navigate(href, {
  //         trigger: true
  //     });
  //   });
    
    // var Router = Backbone.Router.extend({

    //     initialize: function () {
    //         Backbone.history.start({
    //             pushState: true
    //         });
    //     },
    //     routes: {
    //         "student/:id": "student"

    //     }
    // });
    // var router = new Router();


    // router.on('route:student', function (id) {
    //     $("#studentContainer").hide();
    // });



//***click functionality***//


  $("#addPhoto").click(function () {
    $(".uploadPic").trigger('click');
  });
  $("#parentTView").hide();

});

