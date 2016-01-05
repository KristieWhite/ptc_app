$(document).ready(function () {

	var studentId = window.location.search.match(/\d+/)[0];
  console.log(studentId);
	//////////////***********Fees Detail**************//////////////////

	var ChildFeeModel = Backbone.Model.extend({
		initialize: function () {},
		Model: ChildFeeModel,
		url: 'https://murmuring-sands-9831.herokuapp.com/api/class_fees/' + studentId
	});

	var ChildFeeCollection = Backbone.Collection.extend({
		url: 'https://murmuring-sands-9831.herokuapp.com/api/class_fees/' + studentId
	});
	var fees = new ChildFeeModel();
	fees.fetch({
		success: function (resp) {
			var feesObj = {
				"feeDetail": resp.toJSON()
			};
			var feesTemplate = $("#feesTemplate").text();
			var feesHTML = Mustache.render(feesTemplate, feesObj);
			$("#childFeeDetail").html(feesHTML);
			console.log(feesHTML);
		},
		error: function (err) {
			console.log('error', err);
		}
	});

});