$(document).ready(function(){

	var classesModel = Backbone.Model.extend({
		initialize: function() {
			defaults: {
				id: null,
				name: null,
				teacher: null,
				school: null,
				classevent_set: null,
				classfee_set: null,
				student_set: null
			},
			success: function() {
				url: 'https://murmuring-sands-9831.herokuapp.com/api/classes/'
			}
		};
	});

	var classesTaught = new classesModel();
		
	var classesCollection = Backbone.Collection.extend({
		classesCollection.fetch({
			success: function(resp) {
				var classesObj = {
				"classes": resp.toJSON().results
			};
			var classesTemplate = $("classesTemplate").text();
			var classesHTML = Mustache.render(classesTemplate, classesObj):
			$("#classesAPI").html(classesHTML);
		},
			error: function(err) {
				console.log('error', err);
		}
	});
});

});//documentready


// Model: classesTaught,
// 		url: 'https://murmuring-sands-9831.herokuapp.com/api/classes/'