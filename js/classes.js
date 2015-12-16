$(document).ready(function(){
////////////////////////////////ALL classes///////////////////////////////////
	var classesModel = Backbone.Model.extend({
		initialize: function() {
			console.log("classesModel initialized");
		},
			success: function() {
				url: 'https://murmuring-sands-9831.herokuapp.com/api/classes/'
			}
	});

	var classesCollection = Backbone.Collection.extend({
			Model: classesModel,
			url: 'https://murmuring-sands-9831.herokuapp.com/api/classes/'
		});

	var classesTaught = new classesCollection();

		classesTaught.fetch({
			success: function(resp) {
				console.log('success' ,resp.toJSON());
				var classesObj = {
					"classes": resp.toJSON()[0].results
				};
				var classesTemplate = $("#classesTemplate").text();
				var classesHTML = Mustache.render(classesTemplate, classesObj);
				$(".classesApiDiv").html(classesHTML);
			},
			error: function(err) {
				console.log('error', err);
			}
		});

});