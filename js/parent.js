$(document).ready(function () {

	$("#addPhoto").click(function () {
		$(".uploadPic").trigger('click');
	});

// parent view

var ParentModel = Backbone.Model.extend({
  initialize: function(){
  },
  defaults: {
    id: null,
    first_name: null,
    last_name: null,
    student_set: null
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
		},
		error: function (err) {
			console.log('error', err);
		}
	});


  var parentTeacherView = new ParentModel();
  parentTeacherView.fetch ({
    success: function(resp){
    var teacherViewObj = {
      "teachersView":resp.toJSON().results
    };
    var teacherViewTemplate = $("#parentProTeachTemplate").text();
    var teacherViewHTML = Mustache.render(teacherViewTemplate, teacherViewObj);
    $("#parentInfoTView").html(teacherViewHTML);
  }, error: function(err) {
    console.log('error', err);
  }
});

});

