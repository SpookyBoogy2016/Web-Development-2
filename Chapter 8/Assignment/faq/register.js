"use strict";
var $ = function(id) {
  return document.getElementById(id);
};

var processEntries = function() {
  var isValid = true;
  var email = $("email_address").value;
  var phone = $("phone").value;
  var country = $("country").value;
  var comment = $("comment").value;
  var contact = "Text";
  if ($("email").checked) {
    contact = "Email";
  }
  if ($("m_phone").checked) {
    contact = "Mobile Phone";
  }
  if ($("none").checked) {
    contact = "None";
  }
  var terms = $("terms").checked;

  if (email == "") {
    $("email_address").nextElementSibling.firstChild.nodeValue = "This field is required";
    isValid = false;
  } else {
    $("email_address").nextElementSibling.firstChild.nodeValue = "";
  }
  if (phone == "") {
    $("phone").nextElementSibling.firstChild.nodeValue = "This field is required";
    isValid = false;
  } else {
    $("phone").nextElementSibling.firstChild.nodeValue = "";
  }
  if (country == "") {
    $("country").nextElementSibling.firstChild.nodeValue = "This field is required";
    isValid = false;
  } else {
    $("country").nextElementSibling.firstChild.nodeValue = "";
  }
  if (terms == false) {
    $("terms").nextElementSibling.firstChild.nodeValue = "This field is required";
    isValid = false;
  } else {
    $("terms").nextElementSibling.firstChild.nodeValue = "";
  }
  if (isValid == true) {
    $("registration_form").submit();
  }
};

var resetForm = function() {
  $("registration_form").reset();
  $("registration_header").firstChild.nodeValue = "";
  $("registration_info").innerHTML = "";
  $("email_address").focus();
};

window.onload = function() {
  $("register").onclick = processEntries;
  $("reset_form").onclick = resetForm;
  $("email_address").focus();
};
