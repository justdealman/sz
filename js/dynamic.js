$(document).ready(function() {
	$('.menu li a').hover(
		function() {
			$(this).stop(true, true).animate({'padding-top': '13px', 'padding-bottom': '16px', 'margin-top': '0'}, 100, 'easeInQuint');
		},
		function() {
			$(this).stop(true, true).animate({'padding-top': '9px', 'padding-bottom': '11px', 'margin-top': '9px'}, 100, 'easeOutQuint');
		}
	);
	$('.menu li a span').each(function() {
		var menumargin = (40-$(this).height())/2;
		$(this).css({'margin-top': menumargin+'px'});
	});
	$('.slider').slides({
		generatePagination: true,
		generateNextPrev: false,
		container: 'container',
		effect: 'slide',
		slideSpeed: 500,
		slideEasing: 'easeInOutQuint',
		play: 7500,
		pause: 2500
	});
	var maxservice = -1;
	$('.services > div').each(function() {
		var h = $(this).height(); 
		maxservice = h > maxservice ? h : maxservice;
	});
	var maxservice = maxservice-40;
	$('.services > div').height(maxservice);
	var maxcontacts = -1;
	$('.contacts > div > div').each(function() {
		var h = $(this).height(); 
		maxcontacts = h > maxcontacts ? h : maxcontacts;
	});
	var maxcontacts = maxcontacts;
	$('.contacts > div > div').height(maxcontacts);
	$('.header .favicon li').hover(
		function() {
			$(this).stop(true, true).animate({'opacity': '1'}, 500);
		},
		function() {
			$(this).stop(true, true).animate({'opacity': '0.5'}, 500);
		}
	);
	$('div.popup').append('<span class="close"></span>');
	$('.header .request button').click(function() {
		$('.popup, .fade').fadeIn(150);
		return false;
	})
	$('span.close').click(function() {
		$(this).parent().fadeOut(150);
		$('.fade').fadeOut(150);
		return false;
	})
	$('.fade').click(function() {
		$(this).fadeOut(150);
		$('.popup').fadeOut(150);
		return false;
	})
	$(this).keydown(function(eventObject){
		if (eventObject.which == 27)
		$('div.popup, .fade').fadeOut(150);
	});
	$('input, textarea').each(function () {
		$(this).data('holder',$(this).attr('placeholder'));
		$(this).focusin(function(){
			$(this).attr('placeholder','');
		});
		$(this).focusout(function(){
			$(this).attr('placeholder',$(this).data('holder'));
		});
	});
	$('.menu li:last-child, .slider .container > div > div > div ul li:last-child').css({'float': 'right'});
	$('.menu li:last-child a').css({'padding': '9px 33px 11px'});
	$('.menu li:last-child.active a').css({'padding': '13px 33px 16px !important'});
	$('.menu li:nth-child(4n+1) a').css({'background': '#a0c80a'});
	$('.menu li:nth-child(4n+2) a').css({'background': '#ffab00'});
	$('.menu li:nth-child(4n+3) a').css({'background': '#f43636'});
	$('.menu li:nth-child(4n+4) a').css({'background': '#48d8f7'});
	$('.menu li:last-child a').css({'background': '#3c60b1'});
	$('.slider .pagination li:nth-child(5n+1) a').css({'background': '#92b41d'});
	$('.slider .pagination li:nth-child(5n+2) a').css({'background': '#ff9a00'});
	$('.slider .pagination li:nth-child(5n+3) a').css({'background': '#f33333'});
	$('.slider .pagination li:nth-child(5n+4) a').css({'background': '#43d6f6'});
	$('.slider .pagination li:nth-child(5n+5) a').css({'background': '#3757ab'});
	$('ul.ol li:nth-child(4n+1) span').css({'color': '#3757ab'});
	$('ul.ol li:nth-child(4n+2) span').css({'color': '#ffab00'});
	$('ul.ol li:nth-child(4n+3) span').css({'color': '#f43636'});
	$('ul.ol li:nth-child(4n+4) span').css({'color': '#3c60b1'});
	$('.services > div:nth-child(3n+1)').css({'background': '#99ba1e url(./images/service1_bg.png) no-repeat 9px -20px'});
	$('.services > div:nth-child(3n+2)').css({'background': '#ffa100 url(./images/service2_bg.png) no-repeat 28px 9px'});
	$('.services > div:nth-child(3n+3)').css({'background': '#3c60b1 url(./images/service3_bg.png) no-repeat 19px -19px'});
	$('.services > div:nth-child(3n+1) button').css({'background': '#6c8606'});
	$('.services > div:nth-child(3n+1) button').hover(
		function() {
			$(this).css({'background': '#5e7504'});
		},
		function() {
			$(this).css({'background': '#6c8606'});
		}
	);
	$('.services > div:nth-child(3n+2) button').css({'background': '#ff6000'});
	$('.services > div:nth-child(3n+2) button').hover(
		function() {
			$(this).css({'background': '#cf4900'});
		},
		function() {
			$(this).css({'background': '#ff6000'});
		}
	);
	$('.services > div:nth-child(3n+3) button').css({'background': '#2f9af5'});
	$('.services > div:nth-child(3n+3) button').hover(
		function() {
			$(this).css({'background': '#2786de'});
		},
		function() {
			$(this).css({'background': '#2f9af5'});
		}
	);
	$('.about > div:nth-child(2n)').css({'padding': '42px 0 0 310px'});
	$('.about > div:nth-child(2n) > div').css({'float': 'left', 'margin': '-22px 0 0 -310px'});
});