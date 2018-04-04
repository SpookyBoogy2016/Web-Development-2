"use strict";
var $ = function(id) {
    return document.getElementById(id);
};

var calculateFV = function(magazines, price)
{
  var result = magazines * price;
  return result;
}

var processEntries = function()
{
  var magazines = parseInt($("magazines").value);
  var price = parseInt($("price").value);
  var errorMessage = "";
  if(magazines < 1 || isNaN(magazines))
  {
    errorMessage = "Magazine number should be greater than 0"
    $("magazines").focus;
  }
  else if(price < 1 || isNaN(price))
  {
    errorMessage = "Please input the correct price"
    $("price").focus;
  }
  if(errorMessage == "")
  {
    $("total").value = calculateFV(magazines, price);
  }
  else
  {
    alert(errorMessage);
  }
}

window.onload = function()
{
  $("calculate").onclick = processEntries;
  $("magazines").focus();
};
