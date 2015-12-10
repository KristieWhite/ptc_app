$(document).ready(function($){

  $("#logInSubmit").on('submit', function(e){
    e.preventDefault();
    var username = $("#username").val();
    var password = $("#password").val();
    $.ajax({
      url: 'https://murmuring-sands-9831.herokuapp.com/api/api-token-auth/',
      data: {username: username, password: password},
      method: 'post'
    }).then(function(resp) {
      if($("#remember_me") === false) {

      }
    }
  }
});
