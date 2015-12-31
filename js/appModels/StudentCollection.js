
// Modules

// ES6, AMD, CommonJS



(function(window){

window.appModels = window.appModels || {};

var API_ROOT = 'https://murmuring-sands-9831.herokuapp.com/';

	function parseListResponse(response) {
		return response.results;
	};

	var StudentModel = Backbone.Model.extend({
		url: function(){
			return API_ROOT + 'api/students/' + this.get('id');
		}
	});

	/////////////////////lists of students homework///////////////////////////////
	var StudentCollection = Backbone.Collection.extend({
		model: StudentModel,
		initialize: function (attributes, options) {
			console.log("hwParentViewModel initialized");
			this.parentId = options.parentId;
			this.xyz = '123';
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
			//url: https://murmuring-sands-9831.herokuapp.com/api/students/id/homework
			return API_ROOT + 'api/parents/' + this.parentId + '/students';
		}
	});

	/////////////////////lists of students homework///////////////////////////////
	var UniversalStudentCollection = Backbone.Collection.extend({
		model: StudentModel,
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
				case 'parent':
				type = 'parents';
				break;

				case 'class':
				type = 'classes';
				break;
			}
			
			return API_ROOT + 'api/' + type + '/' + this.ownerId + '/students';
		}
	});
	window.appModels.StudentCollection = StudentCollection;
	window.appModels.UniversalStudentCollection = UniversalStudentCollection;


})(window);

