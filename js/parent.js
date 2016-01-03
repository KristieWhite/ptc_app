$(document).ready(function () {

	/////////////////////****Parent Profile Model****/////////////////////////////

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

});
console.log("connected")

