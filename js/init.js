$(window).load(function(){
	var effect = function(){
	return $('.loader').fadeIn( 350 ).delay( 350 ).fadeOut(600);};
 $.when( effect() ).done(function() {
 	 $('.fade').removeClass('out');
 	$('.loader').remove();});});
$(document).ready(function()
{
	
	$(".bg div").click(function () {
		var sidebar = $(".bg div");
		
		if ($(this).hasClass("opened")) {
			$(".upper__card").animate({
				left: 0
			}, 700, function () {
				sidebar.removeClass("opened");
			});
		} else {
			$(".upper__card").animate({
				left: "-150%"
			}, 700, function () {
				sidebar.addClass("opened");
			});
		}
		
	});
});