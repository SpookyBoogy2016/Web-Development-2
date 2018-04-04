$(document).ready(function() {

	var getRandomNumber = function(max) {
    	var random;
    	if (!isNaN(max)) {
        	random = Math.random(); // value >= 0.0 and < 1.0
        	random = Math.floor(random * max); // value is an integer between 0 and max - 1
        	random = random + 1; // value is an integer between 1 and max
    	}
    	return random;
	};

	var calculateFV = function(investment,rate,years) {
		var futureValue = investment;
  	for (var i = 1; i <= years; i++ )
		{
			futureValue += futureValue * rate / 100;
			if(futureValue == Infinity)
			{
				alert("Future Value = Infinity \n i = 4995");
				i = years;
			}
  	}
		// alert("Maximum value is " + Number.MAX_VALUE);
    futureValue = futureValue.toFixed(2);
		return futureValue;
	};

	var formatFV = function(futureValue)
	{
		futureValue = "$" + futureValue;
		return futureValue;
	};

	function getDate() {
		var d = new Date(),
    minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
    hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
    ampm = d.getHours() >= 12 ? 'pm' : 'am',
    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
		return "Today is "+ d.getMonth()+'/'+d.getDate()+'/'+d.getFullYear()+' at '+hours+':'+minutes+ampm;
	}

	$("#calculate").click( function() {
    	// var investment = parseFloat( $("#investment").val() );
    	// var rate = parseFloat( $("#annual_rate").val() );
    	// var years = parseInt( $("#years").val() );
			var investment = getRandomNumber(50000);
			$("#investment").val(investment);
			var rate = getRandomNumber(15);
			$("#annual_rate").val(rate);
			var years = getRandomNumber(50);
			$("#years").val(years);
		if (isNaN(investment) || investment <= 0) {
			alert("Must be > 0");
		}
		else if (isNaN(rate) || rate <= 0) {
		alert("Must be > 0");
		}
		else if (isNaN(years) || years <= 0) {
			alert("Must be > 0");
			allValid = false;
		}
		else {
			$("#future_value").val(formatFV(calculateFV(investment,rate,years)));
		}
	});
		document.getElementById("date").innerHTML = getDate();
    $("#investment").focus();
});
