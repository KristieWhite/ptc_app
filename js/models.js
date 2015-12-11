$(document).ready(function() {

//login model

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
			}
		}
	});

var model = new UserParent();


});//closes document ready

module.exports = UserParent;