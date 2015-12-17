$(document).ready(function () {
		var hwParentViewModel = Backbone.Model.extend({
			initialize: function() {
				console.log("hwParentViewModel initialized");
			},
			success: function() {
				url: 'https://murmuring-sands-9831.herokuapp.com/api/students/' + $.cookie('UserId') + '/homework'
			}
		});

		var hwParentViewCollection = Backbone.Model.extend({
			Model: hwParentViewModel,
			url: 'https://murmuring-sands-9831.herokuapp.com/api/students/' + $.cookie('UserId') + '/homework'
		});

	var homeworkAssigned = new hwParentViewCollection();	

		homeworkAssigned.fetch({
			success: function(resp) {
				console.log('success' ,resp.toJSON());
				var homeworkObj = {
					"homework": resp.toJSON().results
				};
				var PViewHomeworkTemplate = $("#PViewHomeworkTemplate").text();
				var pHomeworkHTML = Mustache.render(PViewHomeworkTemplate, homeworkObj);
				console.log("homeworkObj", homeworkObj);
				console.log("pHomeworkHTML", pHomeworkHTML);
				$("#hwApiDiv").html(pHomeworkHTML);
			},
			error: function(err) {
				console.log('error', err);
			}
		});

});//documentready