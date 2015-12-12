$(document).ready(function() {

//////////////parent login model//////////////////////////////////////////////
var UserParent = Backbone.Model.extend ({
	initialize: function() {
		console.log("userParent model initialized");
	},
	validate: function(attrs) {
		if(!attrs.username) {
			$("#usernameLogIn").html("username is required");
			}
			if (!attrs.password) {
			$("#passwordLogIn").html("password is required");
			};
		}
	});

var model = new UserParent();

var userParentModel = Backbone.Model.extend({
	url: 'https://murmuring-sands-9831.herokuapp.com/api/api-token-auth/'
});




});//closes document ready

module.exports = UserParent;