"use strict"
var $ = function (id){
  return document.getElementById(id);
};

var imageCache = [];
var imageCounter = 0;
var timer;

var runSlideShow = function(){
  imageCounter = (imageCounter + 1) % imageCache.length;
  var image = imageCache[imageCounter];
  $("image").src = image.src;
  $("caption").firstChild.nodeValue = image.title;
};

var toggle = function(){
  var a = this;
  var div = a.parentNode.nextElementSibling;
  var h2 = a.parentNode;
  if (h2.hasAttribute("class")) {
        h2.className = "";
  } else {
        h2.className = "minus";
  }
  if (div.hasAttribute("class")) {
      div.removeAttribute("class");
  } else {
      div.setAttribute("class", "open");
  }
};

window.onload = function(){
  var listNode = $("image_list");
  var links = listNode.getElementsByTagName("a");
  var faqs = $("faqs");
  var aElements = faqs.getElementsByTagName("a");

  for (var i = 0; i < aElements.length; i++ ) {
    aElements[i].onclick = toggle;
  }
  aElements[0].focus();

  var i, link, image;
  for(i = 0; i < links.length; i++)
  {
    link = links[i];
    image = new Image();
    image.src = link.getAttribute("href");
    image.title = link.getAttribute("title");
    imageCache[imageCache.length] = image;
  }

  runSlideShow();
  timer = setInterval(runSlideShow, 3000);

};
