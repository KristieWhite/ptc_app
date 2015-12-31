$(document).ready(function () {

	function parseListResponse(response) {
		return response.results;
	};

	//var LOGGED_IN_ID = 36;

	var API_ROOT = 'https://murmuring-sands-9831.herokuapp.com/';

	var StudentModel = Backbone.Model.extend({
		url: function(){
			return API_ROOT + 'api/students/' + this.get('id');
		}
	});

	var HomeworkModel = Backbone.Model.extend({
		url: function  (argument) {
			return '';
		}
	});

	var StudentHomeworkCollection = Backbone.Collection.extend({
		model: HomeworkModel,
		initialize: function (attributes, options) {
			this.studentId = options.studentId;
		},
		parse: parseListResponse,
		url: function() {
			return API_ROOT + 'api/students/' + this.studentId + '/homework';
		}
	})

	/////////////////////lists of students homework///////////////////////////////
	var ParentStudentCollection = Backbone.Collection.extend({

		model: StudentModel,

		initialize: function (attributes, options) {
			console.log("hwParentViewModel initialized");
			this.parentId = options.parentId;
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
			//url: https://murmuring-sands-9831.herokuapp.com/api/students/id/homework
			return API_ROOT + 'api/parents/' + this.parentId + '/students';
		}
	});

	// View for the Student
	var StudentView = Backbone.View.extend({

		tpl: $('#studentTpl').html(),

		initialize:function (options) {
			this.app = options.app;
		},

		events: {
			"click .clickOnStudent" : "clickOnStudent"
    	},

    	clickOnStudent: function (argument) {
    		this.app.clickOnStudent(this.model);
    	},

    	render: function() {
    		this.$el.html('').append(Mustache.render(this.tpl, this.model.attributes));
    	}

	});

	// View for the Students who are accesible by the parent
	var ParentStudentsView = Backbone.View.extend({

		initialize: function (options) {
			this.collection.on('sync',  this.render, this);
			this.app = options.app;
		},

		render: function () {
			var app = this.app;
			// This is the same as
			// _.map( this.collection.models, ... fn);
			var views = this.collection.map(function(model){
				var view = new StudentView({
					model:model,
					app: app
				});
				view.render();
				return view;
			});
			$('#studentsDiv').html('');
			$('#studentsDiv').append(_.map(views, function(view){
				return view.$el;
			}));
		}
	});


	var HomeworkView = Backbone.View.extend({
		tpl: $('#homeworkTpl').html(),

		initialize: function(){
			this.collection.on('sync', this.render, this);
		},

		render: function() {
			var tpl =this.tpl;
			function makeSingleHtml (item){
				return Mustache.render(tpl, item.attributes);
			}

			var rendered = this.collection.map(makeSingleHtml);
			$('#homeworkDiv').html('').append(rendered);
		}
	});

	var App = Backbone.Model.extend({
		initialize: function(options) { 
			this.students = new ParentStudentCollection([], {parentId:options.id});
			
			var studentsView = new ParentStudentsView({
				collection: this.students,
				app: this
			});

			this.students.fetch();
		},

		clickOnStudent: function (studentModel) {
			var homeworkCollection = new StudentHomeworkCollection([], {
				studentId: studentModel.get('id')
			});
			var homeworkView = new HomeworkView({
				collection: homeworkCollection
			});
			homeworkCollection.fetch();
		}
	});

var app = new App({
	id: $.cookie('UserId')
});

});//document ready