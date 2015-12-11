var Backbone = require ('backbone');

$(document).ready(function() {

//login model

var UserParent = Backbone.Model.extend ({
	initialize: function() {
		console.log("user parent model");
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