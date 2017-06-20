$(document).ready(function(){
	$('a[data-modal="modal"]').on("click", function(e){
		e.preventDefault();
		var  id = $(this).attr('href'),
		winW = $(window).width(),
		winH = $(window).height();
		$(id).css("left", winW/2-$(id).innerWidth()/2);
		$(id).css("top", winH/2-$(id).innerHeight()/2);
	$('body').append('<div class="mask"></div>');
		$(id).fadeIn();
	});
	 
	$('body').on("click", ".modal-close", function(e){
		e.preventDefault();
		$('.mask').remove();
		$('.modal-window').hide();
	});
	$('body').on("click", ".mask", function(){
		e.preventDefault();
	$('.mask').remove();
		$('.modal-window').hide();
	});
});
