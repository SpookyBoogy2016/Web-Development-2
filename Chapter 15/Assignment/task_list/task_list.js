"use strict";

$(document).ready(function(){
	var displayTasks = function() {
        // $("#task_list").val( localStorage.E15tasks );

				// Checks whether the expiration date has been passed
				var expire_date = localStorage.expiration;
				var c_exp_date = new Date(expire_date);
				var new_date = new Date();
				if(c_exp_date.getTime() < new_date.getTime())
				{
					localStorage.removeItem( "E15tasks" );
					localStorage.removeItem("expiration");
				}
				else
				{
					$("#task_list").val( localStorage.E15tasks );
				}
        $("#task").focus();
    };

    $("#add_task").click(function() {
        var textbox = $("#task");
        var task = textbox.val();
        if (task === "") {
            alert("Please enter a task.");
            textbox.focus();
        } else {
            // add task to web storage
            var tasks = localStorage.E15tasks || "";  // default value of empty string
            localStorage.E15tasks = tasks.concat( task, "\n" );

						// Sets a date for cookie expiration
						var date = new Date();
						var exp_date = 21;
						date.setDate(date.getDate() + exp_date);
						var new_date = date.toDateString();
						localStorage.expiration = new_date;

            // clear task text box and re-display tasks
            textbox.val( "" );
            displayTasks();
        }
    });

    $("#clear_tasks").click(function() {
        localStorage.removeItem( "E15tasks" );
				localStorage.removeItem("expiration");
        $("#task_list").val( "" );
        $("#task").focus();
    });

    // display tasks on initial load
    displayTasks();
});
