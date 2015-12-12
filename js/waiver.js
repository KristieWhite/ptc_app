/*$(document).ready(function($){

//api key for hello sign
//7456ca56e56b02148aa11e4a100bfc6c1c271682f2bdb277e3893a736dea65c9

    HelloSign.init("{CLIENT_ID}");
    HelloSign.open({
        url: "SIGN_URL",     
        allowCancel: true,
        messageListener: function(eventData) {
            console.log("HelloSign event received");
        }    
    });
    
    var Router = Backbone.Router.extend({
    	initialize: function() {
    		Backbone.history.start({
    			pushState: true
    		});
    	},
    	routes: {
    		"waiverLists": "waiverLists",
    		"waiverDetail": "waiverDetail"
    	}
    });

    var router = new Router();

    router.navigate("/");

    router.on('route:', function() {
    	$("#waiverListDiv").show();
    	$("#waiverDetail").show();
    });

    var waiverModel = Backbone.Model.extend({
    	initialize: function() {
    		console.log("waiver model initialized");
    		defaults: {
    			waiver: null//place in proper names from api
    		}
    		Model: waiverModel,
    		url: ''//place api url here
    	}
    });

    var waiverCollection = Backbone.Collection.extend({
    	model: waiverModel,
    	url:''
    });

    var waiverList = new waiverCollection();
    waiverList.fetch({
    	success: function(resp) {
    		var waiverListInfo = {
    			'waiverList': resp.toJSON()
    		};
    		var waiverListTemplate = $("waiverList").text();
    		var waiverListHTML = Mustache.render(waiverListTemplate, waiverListInfo);
    		$("#waiverListDiv").html(waiverListHTML);
    	},
    	error: function(err) {
    		console.log("error", err);
    	}
    });

});//closes document ready*/
