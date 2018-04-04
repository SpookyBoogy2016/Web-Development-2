"use strict";
// $(document).ready(function() {
//     $("#image_list img").each(function() {
//         var oldURL = $(this).attr("src");      // gets the src attribute
//         var newURL = $(this).attr("id");       // gets the id attribute
//
//         // preload rollover image
//         var rolloverImage = new Image();
//         rolloverImage.src = newURL;
//
//         $(this).mouseover(function(){
//           $(this).attr("src", newURL);
//         });
//         $(this).mouseout(function(){
//           $(this).attr("src",oldURL);
//         });
//
//     }); // end each
// }); // end ready
$(document).ready(function() {

	var slider = $("#image_list");                     // slider = ul element
	var leftProperty;
	var newLeftProperty;

	// the click event handler for the right button
	$("#right_button").click(function() {
		// get value of current left property
		leftProperty = parseInt(slider.css("left"));
		// determine new value of left property
		if (leftProperty - 250 <= -1000) {
			newLeftProperty = -40; }
		else {
			newLeftProperty = leftProperty - 250; }
		// use the animate function to change the left property
		slider.animate( {left: newLeftProperty}, 1000);
	});  // end click

	// the click event handler for the left button
	$("#left_button").click(function() {
		// get value of current right property
		leftProperty = parseInt(slider.css("left"));

		// determine new value of left property
		if (leftProperty < 0) {
			newLeftProperty = leftProperty + 250;
		}
		else {
			newLeftProperty = leftProperty - 1000;
		}

		// use the animate function to change the left property
		slider.animate( {left: newLeftProperty}, 1000);
	});  // end click
}); // end ready
