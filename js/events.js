$(document).ready(function () {

	/////////////////////Challenges//////////////////////////////////////////////

	 $.ajax({
	 	url: 'https://murmuring-sands-9831.herokuapp.com/api/my_info/'
	 }).then(function (resp) {
	 	console.log(resp);
	 });
});