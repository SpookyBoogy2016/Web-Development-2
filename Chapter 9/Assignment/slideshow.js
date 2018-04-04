 "use strict";
// var $ = function (id)
// {
//   return document.getElementById(id);
// };
//
// window.onload = function()
// {
//   var listNode = $("image_list");
//   var captionNode = $("caption");
//   var imageNode = $("image");
//   var links = listNode.getElementsByTagName("a");
//
//   var i, linkNode, image;
//   var imageCache = [];
//   for(i = 0; i < links.length; i++)
//   {
//     linkNode = links[i];
//     image = new Image();
//     image.src = linkNode.getAttribute("href");
//     image.title = linkNode.getAttribute("title");
//     imageCache[imageCache.length] = image;
//   }
//   var imageCounter = 0;
//   var timer = setInterval(
//     function(){
//       imageCounter = (imageCounter + 1) % imageCache.length;
//       image = imageCache[imageCounter];
//       imageNode.src = image.src;
//       captionNode.firstChild.nodeValue = image.title;
//   }, 3000);
// };

$(document).ready(function() {
	var nextSlide = $("#slides img:first-child");
	var nextCaption;
	var nextSlideSource;

	// start slide show
    timer1 = setInterval(
        function () {
        	$("#caption").hide(1000);
        	$("#slide").fadeOut(2000,
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
					$("#caption").text(nextCaption).show(1000);
				}
			);    // end callback
		},
		5000);
});    // end ready
