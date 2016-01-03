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

	var InfoModel = Backbone.Model.extend({
		url: function  (argument) {
			return '';
		}
	});

	var StudentInfoCollection = Backbone.Collection.extend({
		model: InfoModel,
		initialize: function (attributes, options) {
			this.studentId = options.studentId;
		},
		parse: parseListResponse,
		url: function() {
			return API_ROOT + 'api/students/' + this.studentId;
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
	var StudentListView = Backbone.View.extend({
		tpl: $('#childTemplate').html(),

		initialize: function (options) {
			this.app = options.app;
			//this.model.on('change', this.render, this);
		},
		events: {
			// This adds an event listener to the click event, on anything matching '.StudentListItem-homeworkLink'
			// on the this.$el(). It will run this.clickOnStudent().
			"click .studentName" : "clickOnStudent",
			// "click p": "alertMe",
			// 'keyup input': 'onInput'
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
    	render: function() {
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

	// var ButtonView = Backbone.View.extend({

	// 	render: function(){
	// 		this.$el.html('<button></button>');
	// 	}
	// });

// Two 'buttons'
	// var button1 = new ButtonView();
	// var button2 = new ButtonView();

// Let's put it in the dom
// var myDomRecepticle = $('<div></div>');
// myDomRecepticle
// 	.append(button1.$el)
// 	.append(button2.$el);

// 	$('body').append(myDomRecepticle);


	// View for the Students who are accesible by the parent
	var ParentStudentsView = Backbone.View.extend({
		initialize: function (options) {
			this.collection.on('sync', this.render, this);
			this.app = options.app;
			this.targetDivId = options.targetDivId || '#studentContainer';
		},
		render: function () {
			var app = this.app;
			var divId = this.targetDivId;
			// This is the same as
			// _.map( this.collection.models, ... fn);
			var views = this.collection.map(function(model){
				var view = new StudentListView({
					model:model,
					app: app
				});
				view.render();
				return view;
			});
			$(divId).html('');
			$(divId).append(_.map(views, function(view){
				return view.$el;
			}));
		}
	});


	var DetailView = Backbone.View.extend({
		tpl: $('#studentInfoTemplate').html(),
		initialize: function(){
			this.collection.on('sync', this.render, this);
		},
		render: function() {
			var tpl =this.tpl;
			function makeSingleHtml (item){
				return Mustache.render(tpl, item.attributes);
			}
			var rendered = this.collection.map(makeSingleHtml);
			$('#studentInfo').html('').append(rendered);
		}
	});
			console.log(DetailView);

// Make a new one of these for every single page.
// 
	var App = Backbone.Model.extend({
		initialize: function(options) { 
			this.students = new appModels.UniversalStudentCollection([], {
				ownerId: options.id,
				ownerType: 'parent'
			});
			var studentsView = new ParentStudentsView({
				collection: this.students,
				app: this,
				targetDivId: '#childList'
			});
			this.students.fetch();
		},
		clickOnStudent: function (studentModel) {
			var infoCollection = new StudentInfoCollection([], {
				studentId: studentModel.get('id')
			});
			var detailView = new DetailView({
				collection: infoCollection
			});
			infoCollection.fetch();
		}
	});

var app = new App({
	id: $.cookie('UserId')
});


});//document ready

	// var studentInfoModel = Backbone.Model.extend({
	// 	initialize: function () {
	// 	},
	// 	defaults: {
	// 		"id": null,
	// 		"first_name": null,
	// 		"last_name": null,
	// 		"parent": null,
	// 		"school_class": null,
	// 		"classfeepayment_set": null,
	// 		"studenthomework_set":null
	// },
	// 	Model:studentInfoModel,
	// 	idAttribute: "id",
	// 	url: "https://murmuring-sands-9831.herokuapp.com/api/students/" + studentId
	// });
	// var studentInfoCollection = Backbone.Collection.extend({
	// 	Model: studentInfoModel,
	// 	idAttribute: "id",
	// 	url: "https://murmuring-sands-9831.herokuapp.com/api/students/" + studentId
	// });
	// 	var student = new studentInfoModel();
	// 	student.fetch({
	// 		success: function (resp) {
	// 			var studentInfo = {
	// 				'students': resp.toJSON().results
	// 			};
	// 			console.log(resp.toJSON().results);
	// 			var studentInfoTemplate = $("#studentInfoTemplate").text();
	// 			var studentInfoHTML = Mustache.render(studentInfoTemplate, studentInfo);
	// 			$("#studentInfo").html(studentInfoHTML);
	// 			console.log(studentInfoHTML);
	// 		},
	// 		error: function (err) {
	// 			console.log("error", err);
	// 		}
	// 	});

	// });




