$(document).ready(function(){
				$(".contactLink").click(function(){
					if ($("#contactForm").is(":hidden")){
						$("#contactForm").slideDown("slow");
					}
					else{
						$("#contactForm").slideUp("slow");
					}
				});
			});
			function closeForm(){
				$("#messageSent").show("slow");
				setTimeout('$("#messageSent").hide();$("#contactForm").slideUp("slow")', 2000);
		   }
$(document).ready(function() {
  function filterPath(string) {
	return string
	  .replace(/^\//,'')
	  .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
	  .replace(/\/$/,'');
  }
  $('a[href*=#]').each(function() {
	if ( filterPath(location.pathname) == filterPath(this.pathname)
	&& location.hostname == this.hostname
	&& this.hash.replace(/#/,'') ) {
	  var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
	  var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
	   if ($target) {
		 var targetOffset = $target.offset().top;
		 $(this).click(function() {
		   $('html, body').animate({scrollTop: targetOffset}, 1000);
		   var d = document.createElement("div");
		d.style.height = "101%";
		d.style.overflow = "hidden";
		document.body.appendChild(d);
		window.scrollTo(0,scrollToM);
		setTimeout(function() {
		d.parentNode.removeChild(d);
			}, 10);
		   return false;
		 });
	  }
	}
  });
});
/*! Smooth Scroll - v1.4.5 - 2012-07-22
* Copyright (c) 2012 Karl Swedberg; Licensed MIT, GPL */



// Function to add the fade effect to
$('.branding').hover(
	function () { $('.nameFull').removeClass('hidden'); },
	function () { $('.nameFull').addClass('hidden'); }
);


//Function to update BRASA section transition
var count = 0;
function updateTransition() {
  var el = document.querySelector(".feature.box");
  
  if (count < 2) {
	  if (el) {
	    el.className = "row feature box1";
		count++;
	  } else {
	    el = document.querySelector(".feature.box1");
	    el.className = "row feature box";
		count ++;
	  }
   }
  return el;
}

var count1 = 0;
function updateTransition2() {
  var el2 = document.querySelector(".headline.box");
  
  if (count1 < 2) {
	  if (el2) {
	    el2.className = "headline box1";
		count1++;
	  } else {
	    el2 = document.querySelector(".headline.box1");
	    el2.className = "headline box";
		count1++;
	  }
   }
  return el2;
}

var intervalID = window.setInterval(updateTransition, 1000);            
var intervalID = window.setInterval(updateTransition2, 1000);            

