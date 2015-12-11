$(document).ready(function ($) {
			var Router = Backbone.Router.extend({
				initialize: function () {
					Backbone.history.start({
						pushState: true
					});
				},
				routes: {
					//"": ""
					//"": ""
					//"": "index"
				}
			});
			var router = new Router();

			router.navigate("/");

			router.on(route. /**/ , function () {
				$("").hide();
				$("").hide();
				$("").hide();
			});
			router.on(route. /**/ , function () {
				$("").hide();
				$("").hide();
				$("").hide();
			});
			router.on(route. /**/ , function () {
				$("").hide();
				$("").hide();
				$("").hide();
			});

			var somethingModel = Backbone.Model.extend({
				initialize: function () {},
				defaults: {

					//"":null
					//"":null
					//"":null

				},
				Model: something,
				url: ''
			});
			var somethingCollection = Backbone.Collection.extend({
				model: somethingModel,
				url: ''
			});
			/////////////////////////////////////MUSTACHE//////////////////////////
			var Something = new somethingCollection();
			some.fetch({
				success:function(resp){
					var somethingInfo = {
						'something':resp
					}
				}
			})




		};