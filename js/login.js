var tokenSetter = function () {
	if ($.cookie('AuthToken')) {
		setToken($.cookie('AuthToken'));
	}
};


$("#logInForm").submit(function (e) {
	// alert("hello");
	e.preventDefault();
	var username = $("#username").val();
	var password = $("#password").val();
	$.ajax({
		method: 'POST',
		url: 'https://murmuring-sands-9831.herokuapp.com/api/api-token-auth/',
		data: {
			username: username,
			password: password
		}

	}).done(function (resp) {
		if ($('#remember_me').clicked === true) {
			$.cookie('AuthToken', resp.token);
			console.log("dropped a cookie");
		}
		setToken(resp.token);
		console.log(resp.token);
		//User.set(resp.User);
	}).then(function () {
		window.location.href = "../Home.html";
	});


	function setToken(token) {
		var _sync = Backbone.sync;
		Backbone.sync = function (post, UserParent, options) {
			if ($.cookie('AuthToken')) {
				options.headers = {
					'Authorization': 'Token ' + token
				};
			}
			return _sync.call(this, post, model, options);
		};
	}

	var UserParent = Backbone.Model.extend({

		initialize: function () {
			console.log("UserParent model initialized");
		},
		validate: function (attrs) {
			if (!attrs.username) {
				$("#usernameLogIn").html("username is required");
			}
			if (!attrs.password) {
				$("#passwordLogIn").html("password is required");
			}
		},
		success: function () {
			url: 'https://murmuring-sands-9831.herokuapp.com/api/api-token-auth/'
		}
	});


	var LogInParentModel = new UserParent();

	var UserParentCollection = Backbone.Collection.extend({
		model: LogInParentModel,
		url: 'https://murmuring-sands-9831.herokuapp.com/api/api-token-auth/'
	});
});

//});