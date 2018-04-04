"use strict";

$(document).ready(function(){
  $("#faqs h2").click(function(){
    $(this).toggleClass("minus");
    if ($(this).attr("class") != "minus") {
        $(this).next().slideUp(1000, "easeInOutCirc");
      }
      else {
        $(this).next().slideDown(1000,"easeOutBounce");
      }
  });
});
