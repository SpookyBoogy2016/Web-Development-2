"use strict"

var Event = function(name, dateString){
  this.name = name;
  this.dateString = dateString;
  this.date = new Date(dateString);
  this.days;

  // var date = new Date();
  // dateString = date;
};

Event.prototype.calculateDays = function(){
  //calculate days
  var today = new Date();
  var oneDay = 24*60*60*1000; // hours * minutes * seconds * milliseconds
  var days = ( date.getTime() - today.getTime() ) / oneDay;
  days = Math.ceil(days);
};
