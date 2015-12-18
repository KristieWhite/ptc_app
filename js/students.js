$(document).ready(function () {

		var studentDetailModel = Backbone.Model.extend({
		initialize: function () {},
		defaults: {
			"first_name": null,
			"last_name": null,
			"parent": null,
			"school_class": null,
			"classfeepayment_set": null,
			"studenthomework_set":null,
			"id": null
	},
		Model:studentDetailModel,
		url: "https://murmuring-sands-9831.herokuapp.com/api/students/"
	});
	var studentDetailCollection = Backbone.Collection.extend({
		Model: studentDetailModel,
		url: "https://murmuring-sands-9831.herokuapp.com/api/students/"
	});

	var studentDetail = new studentDetailCollection();

	studentDetail.fetch({
		success: function (resp) {
			console.log(resp);
			var studentDetailInfo = {
				'studentDetail': resp.toJSON()
			};
			var studentDetailTemplate = $("#studentDetailTemplate").text();
			var studentDetailHTML = Mustache.render(studentDetailTemplate, studentDetailInfo)
			$("#studentDetail").html(studentDetailHTML);
		},

		error: function (err) {
			console.log("error", err);
		}
	});

});
