
$(document).ready(function(){

$('.upload').click(function(){
	$('.file').trigger('click');
});
$('.studentAssign').on('click', function(){
	$('#checkBoxContainer').show();
});
$('.turnedIn').on('click', function(){
	$('#checkBoxContainer').hide();
});

});