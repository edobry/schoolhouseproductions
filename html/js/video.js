/*
 * Special video player JavaScript for lordkenthegreat.com
 * Available under the Creative Commons BY-NC-SA
 */

$f("player", "swf/flowplayer-3.1.1.swf",  {

	clip: {
		autoPlay: false
		}

});

// This is supposed to hide the comments, leaving an option to reveal them.  It doesn't work for some reason.

$(document).ready(function () {
   $("#comments").hide();
   $("#comments-preload").click(function () {
       $("#comments").slideDown("slow");
       $("#comments-preload").slideUp("slow");
   });
   alert("test!");
});
