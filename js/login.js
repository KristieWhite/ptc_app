//var Models = require('./models.js');
//var LogIn = require('logIn.js');
//var Underscore = require('underscore');
//var Backbone = require('backbone');

var tokenSetter = function() {
if ($.cookie('AuthToken')) {
	setToken($.cookie('AuthToken'));
	}
};

$("#logInForm").submit(function(e) {
	// alert("hello");
	e.preventDefault();
	var username = $("#username").val();
	var password = $("#password").val();
	console.log(username);
	console.log(password);
	$.ajax({
		method: 'POST',
		url: 'https://murmuring-sands-9831.herokuapp.com/api/api-token-auth/',
		data: {
			username: username,
			password: password
		}
		
	}).done(function(resp) {
		console.log("logged in, checking for cookie drop");
		if ($('#remember_me').clicked === true) {
			$.cookie('AuthToken', resp.token);
			console.log("dropped a cookie");
		}
		setToken(resp.token);
		User.set(resp.User);
	}).then(function() {
		window.location.href = "../parent.html";
	});
	console.log("logged in");
	console.log(resp.token);

});
// function setToken(token) {
// 	var _sync = Backbone.sync;
// 	Backbone.sync = function(post, model, options) {
// 		if ($.cookie('AuthToken')) {
// 			options.headers = {
// 				'Authorization': 'Token ' + token
// 			};
// 		}
// 		return _sync.call(this, post, model, options);
// 	};
// }

// var UserParent = Backbone.Model.extend({
	
// 	initialize: function() {
// 		console.log("userParent model initialized");
// 	},
// 	validate: function(attrs) {
// 		if(!attrs.username) {
// 			$("#usernameLogIn").html("username is required");
// 			}
// 			if (!attrs.password) {
// 			$("#passwordLogIn").html("password is required");
// 			}
// 		}
		
// 	}).then(function(){
// 		url: 'https://murmuring-sands-9831.herokuapp.com/api/api-token-auth/'
// 	});
	


// var logInParentModel = new UserParent();

// var userParentCollection = Backbone.Collection.extend({
// 	model: logInParentModel,
// 	url: 'https://murmuring-sands-9831.herokuapp.com/api/api-token-auth/'
// });

// logInParentModel.fetch({
// 	success: function(user) {
// 		return token;
// 		console.log(user.toJSON());
// 	}
// });
