

$(document).ready(function(){

	$('.sidebar-mobile').on('click',function(){
			$('.sidebar-all').toggleClass('sidebar-active');
	});

	

	$(".menu-button").click(function(){
		$(".toggle__menu").slideToggle(500);
	});
	
	$('.main-menu a[href^="#"]').click(function(){ 
		var $element = $('a[name=' + $(this).attr('href').substr(1) + ']');
		if($element.length == 1) { 
			$('html, body').animate({ scrollTop: $element.offset().top }, 500); 
		}     
		return false;
	});


	$(".menu-ico").click(function(){
		$('.main-menu').slideToggle(0);

	});
	$(".main-menu li a").click(function(){
        //$('.main-menu').slideToggle(0);
        
    });

	$('.js-phone').mask("+7(999)999-99-99?");

	$('a[data-name=modal]').click(function(e) {
		e.preventDefault();
		var id = $(this).attr('href');
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
		$('#mask').css({'width':maskWidth,'height':maskHeight});
		$('#mask').fadeTo("slow",0.8); 
		var winH = $(window).height();
		var winW = $(window).width();
		posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement ||document.body.parentNode || document.body).scrollTop;
		$(id).css('top',  posTop+50);
		$(id).css('left', winW/2-$(id).width()/2);
		$(id).fadeIn(500); 
	});
	$('.window .dd-close').click(function (e) {
		e.preventDefault();
		$('#mask, .window').hide();
		$('.window').hide();
	}); 

	$('#mask, .an-exit__krest').click(function () {
		$('#mask').hide();
		$('.window').hide();
	}); 

	



	/*MODAL SUBMIT*/
	$('.js-submit').submit(function(){
		var phone = $(this).find('input[name="phone"]');
		
		if(phone.val() == ""){
			phone.focus();
			return false;
		}

		else{
			var form_data = $(this).serialize(); 
			$.ajax({
				type: "POST", 
				url: "/sendmessage.php", 
				data: form_data,
				success: function(form) {
					$('.js-window').hide();
					$("input[type=text]").val("");
					$("input[type=tel]").val("");
					$("textarea").val("");
					$('a[href=#modal__thanks]').trigger('click');
				// location = "thanks.php";
			}
		});
		}
		return false;
	});


	function cleanTnanks(form){
		$('.js-window').hide();
		$("input[type=text]").val("");
		$("input[type=tel]").val("");
		$("textarea").val("");
		$('a[href=#modal__thanks]').trigger('click');
				// location = "thanks.php";
	};


		var owl2 = $(".examples__slider");
		owl2.owlCarousel({
			loop:true,
			nav:true, 
			autoplay:false,
			smartSpeed:1000,
			margin:0,
			mouseDrag:false,
			touchDrag: false,
			center:false,     //если нужны обрезаные края
			navText:['<span class="df-left"></span>','<span class="df-right"></span>'],
			responsive:
			{
				0:{
					items:1
				},      
				990:{
					items:1
				},  
				1248:{
					items:1
				}
			}
	});


	$('#reviewStars-input label').on('click', function(){
		var x = $(this).attr('for');		
		x = parseInt(x.match( /\d/g))+1;
		$('.rate_block__nums i').text(x);		
	});



	$('.menu-button').click(function(){
		if (!$(this).hasClass('menu-active')){
			$(this).addClass('menu-active');
			$('.main-menu').slideDown(300)
		} else {
			$(this).removeClass('menu-active');
			$('.main-menu').slideUp(300)
		}
	});

	$('.category-mobile').slideUp(0);
	$('.category-button').click(function(){
		if (!$(this).hasClass('category-button-active')){
			$(this).addClass('category-button-active');
			$('.category-mobile').slideDown(300)
		} else {
			$(this).removeClass('category-button-active');
			$('.category-mobile').slideUp(300)
		}
	});

	$('.sub-category').slideUp(0);
	$('.mobile-category > li').click(function(){
		if (!$(this).hasClass('category-active')){
			$('.mobile-category > li').removeClass('category-active');
			$('.sub-category').slideUp(300);
			$(this).addClass('category-active');
			$('.category-active > .sub-category').slideDown(300)
		} else {
			$(this).removeClass('category-active');
			$('.sub-category').slideUp(300)
		}
	});

	$(".category-fancybox").fancybox({
		fitToView	: false,
		closeClick	: false,
		openEffect	: 'true',
		closeEffect	: 'true'
	});

	$(".fancybox").fancybox({
		fitToView	: false,
		closeClick	: false,
		openEffect	: 'true',
		closeEffect	: 'true'
	});

	$("a[rel=group]").fancybox({
		'transitionIn' : 'none',
		'transitionOut' : 'none',
		'titlePosition' : 'over',
		'titleFormat' : function(title, currentArray, currentIndex, currentOpts) {
			return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
		}
	});

	$('.examples__look_more').on('click', function(){				
		if ($(this).text() == 'скрыть') {
			$(this).text('смотреть еще работы');
			$('.examples__height').css('max-height', '1950px');
		}else{
			$(this).text('скрыть');
			$('.examples__height').css('max-height', 'unset');
		}
	});



	//// ============ main menu script
	$('.js-main-menu').on('click', function() {		
		$('.main-menu_mobile').slideToggle();
		// $('html,body').toggleClass('overlay');
	});
	$('.menu-bouquet__accordeon__close').on('click', function() {
		$('.main-menu_mobile').slideUp();
		// $('html,body').removeClass('overlay');
	});	

	//// ============ main menu script end


	//// ============== buket menu 
	$('.js-bouquet').on('click', function() {
		$('.menu-bouquet').slideToggle();
	});
	$('.menu-bouquet__links a').on('click', function(e) {
		e.preventDefault();
		var thishref = $(this).attr('href');
		thishref = '.' + thishref;
		$('.menu-bouquet__links .linkactive').removeClass('linkactive');
		$(this).addClass('linkactive');        
		$('.bouquet_search').not(thishref).css({'display':'none'});
		$(thishref).css({'display':'inline-block'});
	});	
	$('.bouquet_search__flower').on('click', function() {
		var thischecked = $(this).find('.bouquet_search__checkbox');
		if (thischecked.is(':checked')) {		
			$(this).find('.bouquet_search__label').css('color' , '#0e8a5d');
		}else{
			$(this).find('.bouquet_search__label').css('color' , '#333');
		}	
	});
	$(".menu-bouquet__clear").on('click', function(e) {
		e.preventDefault();
		$('.bouquet_search__checkbox').prop('checked', $(this).is(':checked')); 
		$('.bouquet_search__label').css('color' , '#333');   
	});

// mobile 

	$('.js-bouquet-mob').on('click', function() {
		$('.menu-bouquet__accordeon').slideToggle();
		// $('html,body').toggleClass('overlay');
	});
	$('.menu-bouquet__accordeon__close').on('click', function() {
		$('.menu-bouquet__accordeon').slideUp();
		// $('html,body').removeClass('overlay');
	});
	$(".menu-bouquet__accordeon_link a").on('click', function(e){
		e.preventDefault();		
		var answerId = $(this).attr("href");
		answerId = '.' + answerId;	
		if( !$(this).hasClass("linkactivemob")){
			$(".bouquet_search_mob").slideUp();
			$(".menu-bouquet__accordeon_link a").removeClass("linkactivemob");
		}
		$(this).toggleClass("linkactivemob"); 
		$(answerId).slideToggle();
	});
	// $(".menu-bouquet__accordeon_link a:first").click();

	//// ============== buket menu end
});



$(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});
});

