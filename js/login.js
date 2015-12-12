$(document).ready(function($){
	
require('./models.js');

var tokenSetter = function(token) {
if ($.cookie('AuthToken')) {
	setToken($.cookie('AuthToken'));
	}
};

$("#logInSubmit").on('submit', function(e) {
	e.preventDefault();
	var username = $("#username").val();
	var password = $("#password").val();
	$.ajax({
		url: 'https://murmuring-sands-9831.herokuapp.com/api/api-token-auth/',
		data: {
			username: username, 
			password: password
		},
		method: 'post'
	}).then(function(resp) {
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
});

var userParentModel = Backbone.Collection.extend({
	model: userParentModel,
	url: 'https://murmuring-sands-9831.herokuapp.com/api/api-token-auth/'
});

function setToken(token) {
	var _sync = Backbone.sync;
	Backbone.sync = function(method, model, options) {
		if ($.cookie('AuthToken')) {
			options.headers = {
				'Authorization': 'Token ' + token
			};
		}
		return _sync.call(this, method, model, options);
	};
}
model.fetch().fail(/*redirect*/);

});//closes document ready

module.exports = userParentModel;
