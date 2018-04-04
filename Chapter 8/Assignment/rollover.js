"use strict";
$(document).ready(function() {
    $("#image_list img").each(function() {
        var oldURL = $(this).attr("src");      // gets the src attribute
        var newURL = $(this).attr("id");       // gets the id attribute

        // preload rollover image
        var rolloverImage = new Image();
        rolloverImage.src = newURL;

        $(this).mouseover(function(){
          $(this).attr("src", newURL);
        });
        $(this).mouseout(function(){
          $(this).attr("src",oldURL);
        });

    }); // end each
}); // end ready
