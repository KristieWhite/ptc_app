$(document).ready(function(){

	$("#attendBtn").on('click',function(e){
		e.preventDefault();
	animal.set({
		url: $("#url").val(),
		title: $("#title").val(),
		description: $("#d_page").val()
	})
	$("#url").val(""),
	$("#title").val(""),
	$("#d_page").val("");
		animal.save(null,{
			success:function(resp){
				PetsCollection.fetch({
					success: function(resp){
					}, error: function(err){	
					}
				})
			}, error: function(err){
				console.log("error ", err);
		}
	})
		location.href="/"
	});








}); //doc.ready