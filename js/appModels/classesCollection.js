
// Modules

// ES6, AMD, CommonJS

(function(window){

window.appModels = window.appModels || {};

var API_ROOT = 'https://murmuring-sands-9831.herokuapp.com/';

	function parseListResponse(response) {
		return response.results;
	};

	var ClassModel = Backbone.Model.extend({
		url: function(){
			return API_ROOT + 'api/classes/' + this.get('id');
		}
	});

	/////////////////////list of classes for teacher///////////////////////////////
	var ClassCollection = Backbone.Collection.extend({
		model: ClassModel,
		initialize: function (attributes, options) {
			console.log("classCollection initialized");
			this.teacherId = options.teacherId;
			//this.xyz = '123';
		},
		parse: parseListResponse,

		// defaults: {
		// 	name: null,
		// 	student: null,
		// 	title: null,
		// 	description: null,
		// 	image: null,
		// 	due_date: null,
		// 	points: "Not Graded Yet!"
		// },
		url: function () {
			console.log(this.xyz);
			//url: https://murmuring-sands-9831.herokuapp.com/api/classes/id/students
			return API_ROOT + 'api/classes/' + this.get('id');
		}
	});

	/////////////////////lists of students in each class///////////////////////////////
	var UniversalClassCollection = Backbone.Collection.extend({
		model: ClassModel,
		initialize: function (attributes, options) {
			this.ownerId = options.ownerId;
			this.ownerType = options.ownerType;
		},
		parse: parseListResponse,

		// defaults: {
		// 	name: null,
		// 	student: null,
		// 	title: null,
		// 	description: null,
		// 	image: null,
		// 	due_date: null,
		// 	points: "Not Graded Yet!"
		// },
		url: function () {

			var type = '';
			switch (this.ownerType){
				case 'teacher':
				type = 'teachers';
				break;

				case 'class':
				type = 'classes';
				break;
			}	

			return API_ROOT + 'api/' + type + '/' + this.ownerId + '/classes';
		}
	});
	window.appModels.ClassCollection = ClassCollection;
	window.appModels.UniversalClassCollection = UniversalClassCollection;


})(window);

