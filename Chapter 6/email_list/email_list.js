"use strict";

var $ = function(id) {
  return document.getElementById(id);
};

var joinList = function() {
  var isValid = true;
  var emailAddress1 = $("email_address1").value;
  var emailAddress2 = $("email_address2").value;
  var firstName = $("first_name").value;
  var errorMessage = "";

  // validate the entries
  if (emailAddress1 == "") {
    $("email_address1").nextElementSibling.firstChild.nodeValue = "1st email address entry required";
    isValid = false;
  } else {
    $("email_address1").nextElementSibling.firstChild.nodeValue = "";
  }
  if (emailAddress2 == "") {
    $("email_address2").nextElementSibling.firstChild.nodeValue = "2nd email address entry required";
    isValid = false;
  } else if (emailAddress2 != emailAddress1) {
    $("email_address2").nextElementSibling.firstChild.nodeValue = "Emails must match";
    isValid = false;
  } else {
    $("email_address2").nextElementSibling.firstChild.nodeValue = "";
  }
  if (firstName == "") {
    $("first_name").nextElementSibling.firstChild.nodeValue = "Name is required";
    isValid = false;
  } else {
    $("first_name").nextElementSibling.firstChild.nodeValue = "";
  }
  if (isValid == true) {
    $("email_form").submit();
  }

};

window.onload = function() {
  $("join_list").onclick = joinList;
  $("email_address1").focus();
};
