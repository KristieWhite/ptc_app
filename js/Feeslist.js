$(document).ready(function () {
	function close_accordion_section() {
		$('.accordion .accordion-section-title').removeClass('active');
		$('.accordion .accordion-section-content').slideUp(300).removeClass('open');
	}

	$('.accordion-section-title').click(function (e) {
		// Grab current anchor value
		var currentAttrValue = $(this).attr('href');

		if ($(e.target).is('.active')) {
			close_accordion_section();
		} else {
			close_accordion_section();

			// Add active class to section title
			$(this).addClass('active');
			// Open up the hidden content panel
			$('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
		}

		e.preventDefault();
	});



		var feeModel = Backbone.Model.extend({
			initialize: function () {},
			defaults: {
				"id": null,
				"first_name": null,
				"last_name": null,
				"student_set": null
			},
			Model: feeModel,
			url: "https://murmuring-sands-9831.herokuapp.com/api/" + $.cookie('StudentId') + "/class_fees/"
		});

		var feesCollection = Backbone.Collection.extend({
			Model: feeModel,
			url: "https://murmuring-sands-9831.herokuapp.com/api/" + $.cookie('StudentId') + "/class_fees/"
		});


		var fee = new feeModel();
		fee.fetch({
			success: function (resp) {
				var feeObj = {
					"fees": resp.toJSON().results
				};
				var feeTemplate = $("#feeInfoTemplate").text();
				var feeHTML = Mustache.render(feeTemplate, feeObj);
				$("#feeInfo").html(feeHTML);
				console.log('success ', resp);


			},
			error: function (err) {
				console.log('error', err);
			}
		});

	});



});