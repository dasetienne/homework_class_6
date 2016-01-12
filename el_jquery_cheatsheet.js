// To activate jquery library
<script src="libraryname"</script>

// to ensure library loads after html file is fully loaded:

$(document).ready(function() {

});


// This can also make jquery load after a specific part is loaded

$document.ready(() {

});

// Generally you create shapes and other styles in your .css files as classes and IDs, then animate them via jquery

$(document).ready.(function() {
	$(".thisisaclass").fadein();
}

//  Basic jquery effects

$"body".hide();
$"title".show();
$(".class"). toggle();

// Custom jquery effects have to be customized with values

$(".allheaders").animate({width: 300},
	5000, function();
});

$(".columnleft").delay();
$(".columright").queue();
$(".columnmiddle").stop();

// Fading

$(".header").fadeIn();
$("h1").fadeOut();
$("li").fadeTo();
$("ul").fadeToggle();

// Sliding 

$("body").slideDown();
$(".alltext").slideUp();
$("h3").slideToggle();


// Jquery functions can be initiated by events (certain actions) 
$("h1").click(function)) {
	$("h1").css("color", "green");
});

