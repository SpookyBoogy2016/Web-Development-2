"use strict"
$(document).ready(function(){
  $("#email_1").focus();
  $("#email_form").submit(
    function(event) {
      var isValid = true;
      var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
      var email = $("#email_1").val().trim();
      if (email == "") {
        $("#email_1").next().text("This field is required.");
        isValid = false;
      } else if ( !emailPattern.test(email) ) {
        $("#email_1").next().text("Must be a valid email address.");
        isValid = false;
      } else {
        $("#email_1").next().text("");
      }
      $("#email_1").val(email);

      var email2 = $("#email_2").val().trim();
      if (email2 == "") {
        $("#email_2").next().text("This field is required.");
        isValid = false;
      } else if (email !== email2 ) {
        $("#email_2").next().text("Must equal first email entry.");
        isValid = false;
      } else {
        $("#email_2").next().text("");
      }
      $("#email_2").val(email2);

      var first_name = $("#first_name").val().trim();
      if (first_name == "") {
        $("#first_name").next().text("This field is required.");
        isValid = false;
      } else {
        $("#first_name").next().text("");
      }

      var lastName = $("#last_name").val().trim();
      if (lastName == "") {
        $("#last_name").next().text("This field is required.");
        isValid = false;
      } else {
        $("#last_name").next().text("");
      }
      $("#last_name").val(lastName);

      var state = $("#state").val().trim();
      if (state == "") {
        $("#state").next().text("This field is required.");
        isValid = false;
      } else if ( state.length != 2 ) {
        $("#state").next().text("Use 2-character code.");
        isValid = false;
      } else {
        $("#state").next().text("");
      }
      $("#state").val(state);

      if (isValid == false) {
        event.preventDefault();
      }
    }
  );
});
