"use strict";
$(document).ready(function(){
    $("#countdown").click( function() {
        var event = new Event($("#event").val(), $("#date").val());

        //make sure task and due date are entered
        if (name.length === 0 || dateString.length === 0) {
            $("#message").text( "Please enter both a name and a date." );
            return;
        }
        //make sure due date string has slashes and a 4-digit year
        if (dateString.indexOf("/") === -1) {
            $("#message").text( "Please enter the date in MM/DD/YYYY format." );
            return;
        }
        var year = dateString.substring(dateString.length - 4);
        if (isNaN(year)) {
            $("#message").text( "Please enter the date in MM/DD/YYYY format." );
            return;
        }
        //convert due date string to Date object and make sure date is valid
        var date = new Date(dt);
        if (date.toString() === "Invalid Date") {
            $("#message").text( "Please enter the date in MM/DD/YYYY format." );
            return;
        }

        // Calculate the days
        event.calculateDays();

        //create and display message
        if (days === 0) {
            $("#message").text( "Hooray! Today is ".concat(name.toLowerCase(),
                "!\n(", date.toDateString(), ")") );
        }
        if (days < 0) {
            //capitalize event
            name = name.substring(0,1).toUpperCase() + name.substring(1);
            $("#message").text( name.concat(" happened ", Math.abs(days),
                " day(s) ago. \n (", date.toDateString(), ")") );
        }
        if (days > 0) {
            $("#message").text( days.toString().concat(" day(s) until ",
                name.toLowerCase(), "!\n(", date.toDateString(), ")") );
        }
    });

    $("#event").focus();
});
