var $ = function(id)
{
  return document.getElementById(id);
};

var joinList = function()
{
  var email1 = $("email_address1").value;
  var email2 = $("email_address2").value;
  var valid = true;
  if(email1 === "")
  {
    $("email_address1_error").firstChild.nodeValue = "Please type in an email address.";
    valid = false;
  }
  else
  {
      $("email_address1_error").firstChild.nodeValue = "";
  }
  if(email1 !== email2)
  {
    $("email_address2_error").firstChild.nodeValue = "Email does not match."
    valid = false;
  }
  else
  {
    $("email_address2_error").firstChild.nodeValue = "";
  }
  if($("name").value === "")
  {
    $("name_error").firstChild.nodeValue = "Please type in name.";
    valid = false;
  }
  else
  {
    $("name_error").firstChild.nodeValue = "";
  }
  if(valid)
  {
    $("form").submit();
  }
};
window.onload = function()
{
  $("btnsubmit").onclick = joinList;
  $("email_address1").focus();
}
