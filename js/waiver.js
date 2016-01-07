$(document).ready(function($){

  var studentId = window.location.search.match(/\d+/)[0];
    console.log(studentId);

  var WaiverModel = Backbone.Model.extend({
    intialize: function(){
    },
    Model: WaiverModel,
    url: "https://murmuring-sands-9831.herokuapp.com/api/students/" + studentId + "/forms"
  });

  var WaiverCollection = Backbone.Collection.extend({
    Model: WaiverModel,
    url: "https://murmuring-sands-9831.herokuapp.com/api/students/" + studentId + "/forms"
  });

  var waiver = new WaiverModel();
  waiver.fetch({
    success: function(resp){
      var waiverInfo = {
        'waiver': resp.toJSON().results
      };
      console.log(resp.toJSON().results);
      var waiverTemplate = $("#waiverHomeTemplate").text();
      var waiverHTML = Mustache.render(waiverTemplate, waiverInfo);
      $("#waiverDiv").html(waiverHTML);
    },
    error: function(err){
      console.log('error ', err);
    }
  });


});//closes document ready*/
