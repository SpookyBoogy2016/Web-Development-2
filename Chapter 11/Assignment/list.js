"use strict"
$(document).ready(function(){
  $("#book_list h2").click(function(){
    $(this).toggleClass("minus");
    if($(this).attr("class") != "minus")
    {
      $(this).next().hide();
    }
    else
    {
      $(this).next().show();
    }


    $("#magazines a").each(function(){
      if($("#book_list h2").attr("class") == "minus")
      {
        var imageURL = $(this).attr("href");
        var book = new Image();
        book.src = imageURL;
        $(this).click(function(event){
          $("#image").attr("src", imageURL);
          $("#image").attr("style", "style: width: 100px; height: 150px;");
          event.preventDefault();
        });
      }
      else {
        $("#image").hide();
      }
    });
  });
});
