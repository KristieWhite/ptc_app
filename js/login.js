function setToken(token) {
	var _sync = Backbone.sync;
	Backbone.sync = function(post, UserParent, options) {
		if ($.cookie('AuthToken')) {
			options.headers = {
				'Authorization': 'Token ' + token
			};
		}
		return _sync.call(this, post, model, options);
	};
}

if ($.cookie('AuthToken')) {
	setToken($.cookie('AuthToken'));
}


$("#logInForm").submit(function(e) {
	// alert("logInForm");
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
		if ($('#remember_me').is(":checked")) {
			$.cookie('AuthToken', resp.token);
			$.cookie('username', resp.username);
			console.log("created cookies for token and user");
		}
		setToken(resp.token);
		console.log("logged in");
		console.log(resp.token);
		//User.set(resp.User);
	}).then(function() {
		//window.location.href = "../Home.html";	
});



var UserParent = Backbone.Model.extend({
	
	initialize: function() {
		console.log("UserParent model initialized");
	},
	validate: function(attrs) {
		if(!attrs.username) {
			$("#usernameLogIn").html("username is required");
			}
			if (!attrs.password) {
			$("#passwordLogIn").html("password is required");
			}
		},
	success: function() {
		url: 'https://murmuring-sands-9831.herokuapp.com/api/api-token-auth/'	
		}
	});


var LogInParentModel = new UserParent();

var UserParentCollection = Backbone.Collection.extend({
	model: LogInParentModel,
	url: 'https://murmuring-sands-9831.herokuapp.com/api/api-token-auth/'
});
});
// UserParentCollection.fetch(token) {
// 	success: function(user) {
// 		return token;
// 		console.log(user.toJSON());
// 	}
 //});
