
"use strict";
$(document).ready(function(){
    var isDate = function(date) {
        if ( ! /^[01]?\d\/[0-3]\d\/\d{4}$/.test(date) ) { return false; }

        var index1 = date.indexOf( "/" );
        var index2 = date.indexOf( "/", index1 + 1 );
        var month = parseInt( date.substring( 0, index1 ) );
        var day = parseInt( date.substring( index1 + 1, index2 ) );

        if ( month < 1 || month > 12 ) { return false; }
        if ( day > 31 ) { return false; }
        return true;
    };

    // Not really sure how to make this work...
    // var cardDate = function(cdate){
    //   if ( ! /^[01]?\d\/[0-3]\d\/\d{4}$/.test(date) ) { return false; }
    //   else{
    //     var index1 = date.indexOf("/");
    //     var month = parseInt(date.substring(0, index1));
    //     return true;
    //   }
    //   if ( month < 1 || month > 12 ) { return false; }
    //   return true;
    // }

    $( "#email_form" ).submit(function(event) {
        $("span").text("");   // clear any previous error messages
        var isValid = true;   // initialize isValid flag

        var email = $("#email").val();
        var phone = $("#phone").val();
        var zip = $("#zip").val();
        var dob = $("#dob").val();
        var card = $("#card").val();
        var cdate = $("#cc_date").val();

        if ( email === "" ||
                ! /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/.test(email) )
        {
            isValid = false;
            $( "#email" ).next().text("Please enter a valid email.");
        }

        if ( phone === "" || ! /^\d{3}-\d{3}-\d{4}$/.test(phone) ) {
            isValid = false;
            $( "#phone" ).next().text(
                "Phone no. format: NNN-NNN-NNNN.");
        }
        if ( zip === "" || ! /^\d{5}(-\d{4})?$/.test(zip) ) {
            isValid = false;
            $( "#zip" ).next().text("Please enter a valid zip code.");
        }
        if ( dob === "" || !isDate(dob) ) {
            isValid = false;
            $( "#dob" ).next().text(
                "Date format: MM/DD/YYYY.");
        }

        if ( card === "" ||  ! /^\d{4}-\d{4}-\d{4}-\d{4}$/.test(card)) {
            // code that saves profile info goes here
            isValid = false;
            $("#card").next().text("Card format: NNNN-NNNN-NNNN-NNNN.");
        }
        if(cdate === "" || !isDate(cdate)){
          isValid = false;
          $("#cc_date").next().text("Card date format: MM/YYYY")
        }
        else{
          var email_cookie = getCookieByName("email_cookie");
          email_cookie = email_cookie.concat(email, "\n");
          isValid = true;
        }
        if (isValid == false) {
          event.preventDefault();
        }
        $("#email").focus();
    });

    // set focus on initial load
    $("#email").focus();
});
