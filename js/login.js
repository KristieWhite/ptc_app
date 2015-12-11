//require("models.js"); 

$(document).ready(function($){

//if ($.cookie('AuthToken')) {
//	setToken($.cookie('AuthToken'));
//}

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
		}
		setToken(resp.token);
		User.set(resp.User)
	})
});

function setToken(token) {
	var _sync = Backbone.sync;
	Backbone.sync = function(method, model, options) {
		if ($.cookie('AuthToken')) {
			options.headers = {
				'Authorization': 'Token ' + token
			}
		}
		return _sync.call(this, method, model, options);
	}
}
model.fetch().fail(/*redirect*/);
});//closes document ready
