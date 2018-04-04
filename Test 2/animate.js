$(document).ready(function() {
    // runs when the page is ready
    $("#animate h1").animate( { fontSize: "650%", opacity: 1, left: "+=375" }, 1000 )
		         .animate( { fontSize: "175%", left: "-=200" }, 1000 );

	// runs when the top-level heading is clicked
	$("#animate h1").click(function() {
		$(this).animate( { fontSize: "650%", opacity: 1, left: "+=375" }, 1000 )
			   .animate( { fontSize: "175%", left: "0" }, 1000);
	}); // end click


}); // end ready
