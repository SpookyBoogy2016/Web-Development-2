$(document).ready(function() {
	var nextSlide = $("#slides img:first-child");
	var nextCaption;
	var nextSlideSource;

	// start slide show
    timer1 = setInterval(
        function () {
        	$("#caption").hide(1000);
        	$("#slide").fadeOut(3000,
           		function () {
           	     	if (nextSlide.next().length == 0) {
						nextSlide = $("#slides img:first-child");
					}
					else {
						nextSlide = nextSlide.next();
					}
					nextSlideSource = nextSlide.attr("src");
					nextCaption = nextSlide.attr("alt");
					$("#slide").attr("src", nextSlideSource).fadeIn(1000);
					$("#caption").text(nextCaption).show(3000);
				}
			);    // end callback
		},
		5000);
});    // end ready
