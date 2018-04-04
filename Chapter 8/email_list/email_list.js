$(document).ready(function() {
    $("#join_list").click(
        function() {
            var emailAddress1 = $("#email_address1").val();
            var emailAddress2 = $("#email_address2").val();
            var isValid = true;

            // validate the first email address
            if (emailAddress1 === "") {
                $("#email_address1").next().text("This field is required.");
                isValid = false;
            } else {
                $("#email_address1").next().text("");
            }

            // validate the second email address
            if (emailAddress2 === "") {
                $("#email_address2").next().text("This field is required.");
                isValid = false;
            } else if (emailAddress1 !== emailAddress2) {
                $("#email_address2").next().text("This entry must equal first entry.");
                isValid = false;
            } else {
                $("#email_address2").next().text("");
            }

            // validate the first name entry
            if ($("#first_name").val() === "") {
                $("#first_name").next().text("This field is required.");
                isValid = false;
            }
            else {
                $("#first_name").next().text("");
            }

            // submit the form if all entries are valid
            if (isValid) {
                $("#email_form").submit();
            }
        } // end function
    );	// end click

    // This is the function for clearing with clear_entries button
    $("#clear_entries").click(function(){
      $(":text").val("");
      $(":text").next().text("*");
      $("#email_address1").focus();
    });

    // This is double click function to clear text box
    $(":text").dblclick(function(){
      $(this).val("");
    });

    $("#email_address1").focus();
}); // end ready
