
$(document).ready(function($){
var UserParent = require('./models');

var model = new UserParent();	

$("#logInSubmit").on('submit', function(e) {
	e.preventDefault();
	var username = $("#username").val();
	var password = $("#password").val();
	$.ajax({
		url: 'https://murmuring-sands-9831.herokuapp.com/api/api-token-auth/',
		data: {username: username, password: password},
		method: 'post'
	}).then(function(resp) {
		if ($('#remember_me').clicked == true) {
			$.cookie('AuthToken', resp.token);
			setToken(token);
			User.set(resp.User)
		}
	})
});

var _sync = Backbone.sync;
Backbone.sync = function(method, model, options) {
	if (model && (method === 'create' || method === 'update' || method === 'patch')) {
		options.contentType = 'application/json';
		options.data = JSON.stringify(options.attrs || model.toJSON());
	}

	_.extend(options.data, {
		"access_token": "some-token"
	});
	return _sync.call(this, method, model, options);
}

model.fetch().fail(/*redirect*/);

$.ajaxSetup({
	headers: {
		"accept": "application/json",
		"token": Your_Token
	}
});

$.ajaxSend(function(event, request) {
	var token = App.getAuthToken();
	if (token) {
		request.setRequestHeader("token", token);
	}
});

});//closes document ready
