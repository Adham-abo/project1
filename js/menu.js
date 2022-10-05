$(function(){
	var link=$('.nav-mobile');
	var m=$('aside#right');
	link.click(function(){
		m.slideToggle();
		$(window).resize(function(){
		var w=$(window).width();
		
	});
	return false
	});
	});
jQuery(function($) {
/* =============== SHOW / HIDE FORM SEARCH =============== */
	$("a.nino-search, #nino-searchForm .nino-close").click(function(){
		$("#nino-searchForm").toggleClass("open");
	});
var n=$('.menu');
$("#menu-mobile .menu-close").click(function(){
	n.slideToggle();
	});
	});
function showSnackBar(btn) {
     /* Get the text field */
  var copyText =$( $(btn).parent('.input-group-btn').prev('.Imgurl'));
  /* Select the text field */
  copyText.select();
  /* Copy the text inside the text field */
   if(document.execCommand("copy")){
      var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
   }

}	
	