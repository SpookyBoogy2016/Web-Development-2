"use strict";
var $ = function(id) {
    return document.getElementById(id);
};

var calculateFV = function(investment, interest, years)
{
  for(var i = 1; i <= years; i++)
  {
    investment = investment + (investment * interest / 100);
  }
  var result = investment.toFixed(2);
  return result;
};

var processEntries = function()
{
  var investment = parseFloat($("investment").value);
  var interest = parseFloat($("rate").value);
  var years = parseFloat($("years").value);
  var errorMessage = "";


  if(investment < 0 || investment >= 100000 || isNaN(investment))
  {
    errorMessage = "Investment is a number that's greater than zero and less than or equal to 100,000"
    $("investment").focus;
  }
  else if(interest < 0 || interest >= 15 || isNaN(interest))
  {
    errorMessage = "Interest rate is a number that's greater than zero and less than or equal to 15"
    $("rate").focus;
  }
  else if(years < 0 || years >= 50 || isNaN(years))
  {
    errorMessage = "Years is a number that's greater than zero and less than or equal to 50"
    $("years").focus;
  }

  if(errorMessage == "")
  {
    $("future_value").value = calculateFV(investment, interest, years);
  }
  else
  {
    alert(errorMessage);
  }

};

window.onload = function()
{
  $("calculate").onclick = processEntries;
  $("investment").focus();
};
