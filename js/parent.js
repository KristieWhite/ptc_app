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

	var ChildModel = Backbone.Model.extend({
		initialize: function(){
		},
		Model: ChildModel,
		url: "https://murmuring-sands-9831.herokuapp.com/api/parents/" + $.cookie('UserId') + "/students"
	});

	var ChildCollection = Backbone.Collection.extend({
		url: "https://murmuring-sands-9831.herokuapp.com/api/parents/" + $.cookie('UserId') + "/students"
	});
	var child = new ChildModel();
	child.fetch({
		success: function(resp){
			var childObj = {
				"child": resp.toJSON().results
			};
			var childTemplate = $("#childTemplate").text();
			var childHTML = Mustache.render(childTemplate, childObj);
			$("#childList").html(childHTML);
			console.log(childHTML);
		}, error:function (err) {
			console.log('error ', err);
		}
	});


//////////////////////////** For Parent View to Waivers - waiverParent.html **//////////////////////////////


	var studentWaiver = new ChildModel();
		studentWaiver.fetch({
			success:function(resp){
				var studentWaiverData = {
					'waiverStudents': resp.toJSON().results
				};
				console.log(resp.toJSON().results);
				var studentWaiverTemplate = $("#studentWaiverTemplate").text();
				var studentWaiverHTML = Mustache.render(studentWaiverTemplate, studentWaiverData);
				$("#studentWaiver").html(studentWaiverHTML);
			},
			error:function(err){
				console.log('error ', err);
			}
		});

	
});
console.log("connected")

