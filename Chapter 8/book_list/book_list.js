"use strict"
$(document).ready(function(){
  $("#categories h2").click(function(){
    $(this).toggleClass("minus");
    if($(this).attr("class") != "minus")
    {
      $(this).next().hide();
    }
    else
    {
      $(this).next().show();
    }


    $("#web_images a, #java_images a, #net_images a, #database_images a").each(function(){
      if($("#categories h2").attr("class") == "minus")
      {
        var imageURL = $(this).attr("href");
        var book = new Image();
        book.src = imageURL;
        $(this).click(function(event){
          $("#image").attr("src", imageURL);
          // $("#image").attr("style", "style:float: right;, block;");
          event.preventDefault();
        });
      }
      else {
        $("#image").hide();
      }
    });
  });
});
