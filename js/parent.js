$(document).ready(function () {
	

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
      console.log('success ', resp);
			console.log(resp.attributes.results[0].student_set);
		
		}, error: function (err) {
			console.log('error', err);
		}
	});

  $("#addPhoto").click(function () {
    $(".uploadPic").trigger('click');
  });

});

