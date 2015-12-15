function setToken(token) {
	var _sync = Backbone.sync;
	Backbone.sync = function(post, model, options) {
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
			password: password,
			user_type: ""
		}
		
	}).done(function(resp) {
		if ($('#remember_me').is(":checked")) {
			$.cookie('AuthToken', resp.token);
			//$.cookie('username', resp.username);
			console.log("created cookies for token and user");
		}
		setToken(resp.token);
		console.log("logged in");
		console.log(resp.token);
		//User.set(resp.User);
		console.log(resp);
		ptType();
	});
	var ptType = function(user_type) {
		if (user_type == parent) {
			console.log("redirect to the parents home page");
			window.location.href = "./homeParent.html";
		 }
		  if (user_type == teacher) {
		    	console.log("redirect to the teachers home page");
		     	window.location.href = "./homeTeacher.html";
		     }	else {
		     	alert("You are not a registed user. Please contact a administrative personnel.")
		     }
	};



///////////////////////////////////////////token//////////////////////////////////
var UserParent = Backbone.Model.extend({
	
	initialize: function() {
		console.log("UserParent model initialized");
	},
	defaults: {
		id: null,
		user_type: null,
		first_name: null,
		last_name: null,
		student_set: null
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

////////////////////////////parent teacher validate///////////////////////////////
/*var userWhoIs = Backbone.Model.extend({
	initial: function() {
		console.log("userWhoIs is initialized");
	},
	defaults: {
		user_type: null
	},
	success: function() {
		url: 'https://murmuring-sands-9831.herokuapp.com/api/my_info/'
	},
	validate: function() {
		if (user_type === "parent") {
			var parent = true;
		}
		else if (user_type === "teacher") {
			var teacher = true;
		}
		else {
			return false;
		}
	}
});

var userTypeIs = new userWhoIs();

var userTypeCollection = Backbone.Collection.extend({
	model: userWhoIs,
	url: 'https://murmuring-sands-9831.herokuapp.com/api/my_info/'
});*/

