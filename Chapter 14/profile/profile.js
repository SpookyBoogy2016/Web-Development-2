"use strict";
$(document).ready(function(){
    var isDate = function(date) {
        if ( ! /^[01]?\d\/[0-3]\d\/\d{4}$/.test(date) ) { return false; }
        else{
          var index1 = date.indexOf( "/" );
          var index2 = date.indexOf( "/", index1 + 1 );
          var month = parseInt( date.substring( 0, index1 ) );
          var day = parseInt( date.substring( index1 + 1, index2 ) );
          return true;
        }
        if ( month < 1 || month > 12 ) { return false; }
        if ( day > 31 ) { return false; }
        return true;
    };

    // Not really sure how to make this work...
    var cardDate = function(cdate){
      if ( ! /^[01]?\d\/[0-3]\d\/\d{4}$/.test(date) ) { return false; }
      else{
        var index1 = date.indexOf("/");
        var month = parseInt(date.substring(0, index1));
        return true;
      }
      if ( month < 1 || month > 12 ) { return false; }
      return true;
    }

    $( "#save" ).click(function() {
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
                "Please enter a phone number in NNN-NNN-NNNN format.");
        }
        if ( zip === "" || ! /^\d{5}(-\d{4})?$/.test(zip) ) {
            isValid = false;
            $( "#zip" ).next().text("Please enter a valid zip code.");
        }
        if ( dob === "" || !isDate(dob) ) {
            isValid = false;
            $( "#dob" ).next().text(
                "Please enter a valid date in MM/DD/YYYY format.");
        }

        if ( card === "" ||  ! /^\d{4}-\d{4}-\d{4}-\d{4}$/.test(card)) {
            // code that saves profile info goes here
            isValid = false;
            $("#card").next().text("Please enter a credit card in NNNN-NNNN-NNNN-NNNN format");
        }
        if(cdate === "" || !cardDate(cdate)){
          isValid = false;
          $("#cc_date").next().text("Please enter a valid date in MM/YYYY format")
        }

        $("#email").focus();
    });

    // set focus on initial load
    $("#email").focus();
});
