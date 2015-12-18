//$(document).ready(function(){
//
//  $("body").on('click', 'a', function (e) {
//      e.preventDefault();
//      var href = $(this).attr('href');
//      href = href.substr(1);
//      router.navigate(href, {
//          trigger: true
//      });
//    }); 
//
//
//    var Router = Backbone.Router.extend({
//        initialize: function () {
//        Backbone.history.start({
//          pushState: true,
//          root: "../index.html"
//        })
//        },
//        routes: {
//            "/student/:id/*path": "student",
//            "": "index"
//        },
//        student: function(){
//          window.location.href="../studentsParentView.html"
//        }
//    });
//    var router = new Router();
//
//
//
//});