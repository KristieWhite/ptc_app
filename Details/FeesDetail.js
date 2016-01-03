$(document).ready(function () {


	//////////////***********Fees Detail**************//////////////////

	var ParentModel = Backbone.Model.extend({
		initialize: function () {},
		Model: ParentModel,
		url: 'https://murmuring-sands-9831.herokuapp.com/api/class_fees/25'
	});

	var ParentsCollection = Backbone.Collection.extend({
		url: 'https://murmuring-sands-9831.herokuapp.com/api/class_fees/25'
	});
	var parent = new ParentModel();
	parent.fetch({
		success: function (resp) {
			var parentObj = {
				"feeDetail": resp.toJSON()
			};
			var parentTemplate = $("#feesDetail").text();
			var parentHTML = Mustache.render(parentTemplate, parentObj);
			$("#FeesDetail").html(parentHTML);
			console.log(parentHTML);
		},
		error: function (err) {
			console.log('error', err);
		}
	});

});