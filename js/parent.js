$(document).ready(function () {
	var namesModel = Backbone.Model.extend({
		initialize: function () {},
		defaults: {
			"first_name": null,
			"last_name": null,
			"description": null
		},
		Model: namesModel,
		url: "https://murmuring-sands-9831.herokuapp.com/api/parents/1/students"
	});
	var namesCollection = Backbone.Collection.extend({
		Model: namesModel,
		url: "https://murmuring-sands-9831.herokuapp.com/api/parents/1/students"
	});


	$("#addPhoto").click(function () {
		$(".uploadPic").trigger('click');
	});

	var ParentModel = Backbone.Model.extend({
		initialize: function () {},
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

});

var names = new namesModel();
names.fetch({
success: function (resp) {
	var namesInfo = {
		"names": resp.toJSON().results
	};
	var namesTemplate = $("#namesTemplate").text();
	var namesHTML = Mustache.render(namesTemplate, namesInfo);
	$("#name").html(namesHTML);
	console.log(resp);
},
error: function (err) {
	conole.log(error, err);
}
})

})