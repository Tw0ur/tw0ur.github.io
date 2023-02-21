$(function(){
	$('#scroll_bottom').click(function(){
		$('html, body').animate({scrollTop: $(document).height() - $(window).height()}, 400);
		return false;
	});
});