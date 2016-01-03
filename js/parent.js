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
  // var childModel = Backbone.Model.extend({
  //   initialize: function () {
  //   },
  //   defaults: {
  //     "id": null,
  //     "first_name": null,
  //     "last_name": null,
  //     "parent": null,
  //     "school_class": null,
  //     "classfeepayment_set": null,
  //     "studenthomework_set": null
  //   },
  //   idAttribute: "id",
  //   url: "https://murmuring-sands-9831.herokuapp.com/api/parents/" + $.cookie('UserId') + "/students"
  // });
  // var childCollection = Backbone.Collection.extend({
  //   Model: childModel,
  //   idAttribute: "id",
  //   url: "https://murmuring-sands-9831.herokuapp.com/api/parents/" + $.cookie('UserId') + "/students" 
  // });

  //   var child = new childModel();
  //     child.fetch({
  //       success: function (resp) {
  //         var childData = {
  //           "children": resp.toJSON().results
  //         };
  //         console.log('resp', resp.toJSON().results);
  //         var childTemplate = $("#childTemplate").text();
  //         var childHTML = Mustache.render(childTemplate, childData);
  //         $("#childList").html(childHTML);
  //         console.log(childHTML);
  //         }
  //     });


//**************ROUTES**************************//



	//////////////////***click functionality***///////////////////

	$("#addPhoto").click(function () {
		$(".uploadPic").trigger('click');
	});

});

