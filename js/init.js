$(window).load(function(){
	var effect = function(){
	return $('.loader').fadeIn( 350 ).delay( 350 ).fadeOut(600);};
 $.when( effect() ).done(function() {
 	 $('.fade').removeClass('out');
 	$('.loader').remove();});});
$(document).ready(function()
{

});