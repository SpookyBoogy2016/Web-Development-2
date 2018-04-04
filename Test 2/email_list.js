$(document).ready(function() {
	// move focus to first text box
	$("#first_name").focus();
	// the handler for the click event of a submit button
	$("#email_form").submit(
		function(event) {
			var isValid = true;

			// validate the first name entry
			var first_name = $("#first_name").val().trim();
			if (first_name == "") {
				$("#first_name").next().text("This field is required.");
				isValid = false;
			} else {
				$("#first_name").next().text("");
			}

			// validate the last name entry
			var lastName = $("#last_name").val().trim();
			if (lastName == "") {
				$("#last_name").next().text("This field is required.");
				isValid = false;
			} else {
				$("#last_name").next().text("");
			}
			$("#last_name").val(lastName);

			// address
			var address = $("#address").val().trim();
			if (address == "") {
				$("#address").next().text("This field is required.");
				isValid = false;
			} else {
				$("#address").next().text("");
			}
			$("#address").val(address);

			// city
			var city = $("#city").val().trim();
			if (city == "") {
				$("#city").next().text("This field is required.");
				isValid = false;
			} else {
				$("#city").next().text("");
			}
			$("#city").val(city);

			// state
			var state = $("#state").val().trim();
			if (state == "") {
				$("#state").next().text("This field is required.");
				isValid = false;
			} else if(state.length != 2){
				$("#state").next().text("Use 2-character")
			} else {
				$("#state").next().text("");
			}
			$("#state").val(state);

			// validate the zip-code entry
			var zip = $("#zip").val().trim();
			if (zip == ""){
				$("#zip").next().text("This field is required.");
				isValid = false;
			} else if(zip.length != 5){
				$("#zip").next().text("Use 5-character code.");
			} else{
				$("#zip").next().text("");
			}
			$("#zip").val(zip);

			// prevent the default action of submitting the form if any entries are invalid
			if (isValid == false) {
				event.preventDefault();
			}
		} // end function
	);	// end submit
}); // end ready
