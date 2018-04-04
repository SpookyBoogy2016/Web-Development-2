"use strict";

$(document).ready(function(){
    var getSortedTasksArray = function() {
        var tasks = [];
        var taskString = localStorage.E16tasks || "";

        if (taskString.length > 0) {
            // split string on first delimiter. Then, loop array, split
            // strings on second delimiter, and store array in tasks array
            var interim = taskString.split( "|" );
            for (var i = 0; i < interim.length - 1; i++) {
                tasks.push( interim[i].split( "~~" ));
            }

            // sort array of arrays by due date
            tasks.sort(function(arr1, arr2) {
                var a = new Date(arr1[1]); // 2nd element of first array
                var b = new Date(arr2[1]); // 2nd element of second array

                if ( a < b ) { return -1; }
                else if ( a > b ) { return 1; }
                else { return 0; }
            });
        }
        return tasks;
    };

    var displayTaskList = function(tasks) {
        if ( tasks === undefined ) {
            tasks = getSortedTasksArray();
        }
        var taskString = tasks.reduce( function( prev, current ) {
            return prev + current[1] + " - " + current[0] + "\n";
        }, ""); // pass initial value for prev parameter

        // display tasks string and set focus on task text box
        $("#task_list").val( taskString );
        $("#task").focus();
    };

    $("#add_task").click(function() {
        var task = $("#task").val();
        var dueDate = $("#due_date").val();

        if (task === "" || dueDate === "") {
            alert("Please enter a task and due date.");
            $("#task").focus();
        } else {
            // retrieve tasks and create array for new task
            var taskString = localStorage.E16tasks || "";
            var newTask = [task, dueDate];

            // add new task to end of task string in local storage
            localStorage.E16tasks = taskString + newTask.join( "~~" ) + "|";

            // clear task text boxes and re-display tasks
            $("#task").val("");
            $("#due_date").val("");
            displayTaskList();
        }
    });

    $("#filter").click(function() {
      var searchTerm = prompt("Enter text to search for");
      if(searchTerm === "")
      {
        alert("Nothing entered, showing every task list.");
        displayTaskList();
      }
      else
      {
        var tasks = getSortedTasksArray();
        //alert(tasks);
        searchTerm = searchTerm.toLowerCase();
        var task_search = function(current){
          var lower_date = current[0].toLowerCase();
          var lower_text = current[1].toLowerCase();
          return lower_date.indexOf(searchTerm) > -1 || lower_text.indexOf(searchTerm) > -1;
        };
        var filter = tasks.filter(task_search);
        displayTaskList(filter);
      }
    });

    $("#clear_tasks").click(function() {
        localStorage.removeItem("E16tasks");
        $("#task_list").val("");
        $("#task").focus();
    });

    $("#due_date").datepicker({

    });

    // display tasks on initial load
    displayTaskList();
});
