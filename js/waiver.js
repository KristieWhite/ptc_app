$(document).ready(function($){

//   var hellosign = require('./hellosign.js')({key: '0540921e7b26de3d78ee59fcec5a8b4279f90e2b86bb7d815c7ab2cf6a1c3edc'});

//   var options = {
//     test_mode : 1,
//     clientId : 'YOUR_clientId',
//     subject : 'My First embedded signature request',
//     message : 'Awesome, right?',
//     signers : [
//         {
//             email_address : 'jaimariev@gmail.com',
//             name : 'Jaimarie Velasco'
//         }
//     ],
//     files : ['NDA.pdf']
// };

//   hellosign.signatureRequest.createEmbedded(options)
//     .then(function(response){
//         //parse response
//     })
//     .catch(function(err){
//         //catch error
//     });

  // var hellosign = require('./hellosign.js')({key: '0540921e7b26de3d78ee59fcec5a8b4279f90e2b86bb7d815c7ab2cf6a1c3edc'});
  // hellosign.signatureRequest.createEmbedded(options)
  //   .then(function(response){
  //       var signatureId = response.signature_request.signatures[0].signature_id;
  //       return hellosign.embedded.getSignUrl(signatureId);
  //   })
  //   .then(function(response){
  //       console.log('URL = ' + response.embedded.sign_url);
  //   });
  //   .catch(function(err){
  //       //catch error
  //   });



//    
//    var Router = Backbone.Router.extend({
//    	initialize: function() {
//    		Backbone.history.start({
//    			pushState: true
//    		});
//    	},
//    	routes: {
//    		"waiverLists": "waiverLists",
//    		"waiverDetail": "waiverDetail"
//    	}
//    });
//
//    var router = new Router();
//
//    router.navigate("/");
//
//    router.on('route:', function() {
//    	$("#waiverListDiv").show();
//    	$("#waiverDetail").show();
//    });
//
//    var waiverModel = Backbone.Model.extend({
//    	initialize: function() {
//    		console.log("waiver model initialized");
//    		defaults: {
//    			waiver: null//place in proper names from api
//    		}
//    		Model: waiverModel,
//    		url: ''//place api url here
//    	}
//    });
//
//    var waiverCollection = Backbone.Collection.extend({
//    	model: waiverModel,
//    	url:''
//    });
//
//    var waiverList = new waiverCollection();
//    waiverList.fetch({
//    	success: function(resp) {
//    		var waiverListInfo = {
//    			'waiverList': resp.toJSON()
//    		};
//    		var waiverListTemplate = $("waiverList").text();
//    		var waiverListHTML = Mustache.render(waiverListTemplate, waiverListInfo);
//    		$("#waiverListDiv").html(waiverListHTML);
//    	},
//    	error: function(err) {
//    		console.log("error", err);
//    	}
//    });
//
//});//closes document ready*/
