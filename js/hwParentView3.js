$(document).ready(function () {

	function parseListResponse(response) {
		return response.results;
	};

	//var LOGGED_IN_ID = 36;

	var API_ROOT = 'https://murmuring-sands-9831.herokuapp.com/';

	// var StudentModel = Backbone.Model.extend({
	// 	url: function(){
	// 		return API_ROOT + 'api/students/' + this.get('id');
	// 	}
	// });

	var HomeworkModel = Backbone.Model.extend({
		url: function (argument) {
			return '';
		}
	});

	var StudentHomeworkCollection = Backbone.Collection.extend({
		model: HomeworkModel,
		initialize: function (attributes, options) {
			this.studentId = options.studentId;
		},
		parse: parseListResponse,
		url: function () {
			return API_ROOT + 'api/students/' + this.studentId + '/homework';
		}
	})

	/////////////////////lists of students homework///////////////////////////////
	// var ParentStudentCollection = Backbone.Collection.extend({
	// 	model: StudentModel,
	// 	initialize: function (attributes, options) {
	// 		console.log("hwParentViewModel initialized");
	// 		this.parentId = options.parentId;
	// 	},
	// 	parse: parseListResponse,

	// 	// defaults: {
	// 	// 	name: null,
	// 	// 	student: null,
	// 	// 	title: null,
	// 	// 	description: null,
	// 	// 	image: null,
	// 	// 	due_date: null,
	// 	// 	points: "Not Graded Yet!"
	// 	// },
	// 	url: function () {
	// 		//url: https://murmuring-sands-9831.herokuapp.com/api/students/id/homework
	// 		return API_ROOT + 'api/parents/' + this.parentId + '/students';
	// 	}
	// });

	// View for the Student
	var StudentView = Backbone.View.extend({
		tpl: $('#studentTpl').html(),

		initialize: function (options) {
			this.app = options.app;
			//this.model.on('change', this.render, this);
		},
		events: {
			// This adds an event listener to the click event, on anything matching '.StudentListItem-homeworkLink'
			// on the this.$el(). It will run this.clickOnStudent().
			"click .StudentListItem-homeworkLink": "clickOnStudent",
			"click p": "alertMe",
			'keyup input': 'onInput'
		},
		clickOnStudent: function (argument) {
			this.app.clickOnStudent(this.model);
		},
		// onInput:function (event) {
		// 	this.model.set('first_name', this.$el.find('input').val());
		// }
		// alertMe:function(){
		// 	window.alert('me');
		// },
		render: function () {
			this.$el.html('').append(Mustache.render(this.tpl, this.model.attributes));
			//this.$el.find('input').val(this.model.get('first_name'));
			// Model attributes
			// {id, etc, first_name}
			// Model
			// {attributes, some, backbone, thing}
		}
	});

	// binding a view to a model
	/*
	var studentViewInst = new StudentView({
	model: theModelYouAreBindingTo
	});

	*/

	var ButtonView = Backbone.View.extend({

		render: function () {
			this.$el.html('<button></button>');
		}
	});

	// Two 'buttons'
	var button1 = new ButtonView();
	var button2 = new ButtonView();

	// Let's put it in the dom
	var myDomRecepticle = $('<div></div>');
	myDomRecepticle
		.append(button1.$el)
		.append(button2.$el);

	$('body').append(myDomRecepticle);


	// View for the Students who are accesible by the parent
	var ParentStudentsView = Backbone.View.extend({
		initialize: function (options) {
			this.collection.on('sync', this.render, this);
			this.app = options.app;
			this.targetDivId = options.targetDivId || '#studentsDiv';
		},
		render: function () {
			var app = this.app;
			var divId = this.targetDivId;
			// This is the same as
			// _.map( this.collection.models, ... fn);
			var views = this.collection.map(function (model) {
				var view = new StudentView({
					model: model,
					app: app
				});
				view.render();
				return view;
			});
			$(divId).html('');
			$(divId).append(_.map(views, function (view) {
				return view.$el;
			}));
		}
	});


	var HomeworkView = Backbone.View.extend({
		tpl: $('#homeworkTpl').html(),
		initialize: function () {
			this.collection.on('sync', this.render, this);
		},
		render: function () {
			var tpl = this.tpl;

			function makeSingleHtml(item) {
				return Mustache.render(tpl, item.attributes);
			}
			var rendered = this.collection.map(makeSingleHtml);
			$('#homeworkDiv').html('').append(rendered);
		}
	});

	// Make a new one of these for every single page.
	// 
	var App = Backbone.Model.extend({
		initialize: function (options) {
			this.students = new appModels.UniversalStudentCollection([], {
				ownerId: options.id,
				ownerType: 'parent'
			});
			var studentsView = new ParentStudentsView({
				collection: this.students,
				app: this,
				targetDivId: '#studentsDiv2'
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


}); //document ready