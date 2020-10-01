// JavaScript Document

function swapStyleSheet(sheet){
	
	"use strict";
	
	document.getElementById('pagestyle').setAttribute('href', sheet);
}

$(window).scroll(function() {
	
	"use strict";
	
    if ($(this).scrollTop() >= 100) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(100);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(100);   // Else fade out the arrow
    }
});

$(document).ready(function(){
	
	"use strict";
	
	$('ul li a').click(function(){
		$('li a').removeClass("active");
		$(this).addClass("active");
	});
	
	$('#nav_icon').hover(function(){			// Navigation arrow
		$(this).toggleClass('open');
	});
	
	$('#return-to-top').click(function() {      // When arrow is clicked
		$('body,html').animate({
			scrollTop : 0                       // Scroll to top of body
		}, 700);
	});
	
	$('#nav_icon').click(function() {      // When arrow is clicked
		$('body,html').animate({
			scrollTop: $("#below").offset().top
    	}, 700);
	});
	
	$('.button_text').click(function(){
		$('.button_press').addClass('active_0');
		$('.button_press_2').addClass('active_2');
		$('.button_text').addClass('disappear');
		$('.button_text_2').addClass('appear');
		$('.blog_main').css('background', 'white');
		$('.name').css('color', 'black');
		$('.date').css('color', 'black');
		$('.form_adjust').css('background', 'white');
        $('.about_information_container').css('background', 'white');
		$('.individual_blog_container').css('background', 'white');
	});
	
	$('.button_text_2').click(function(){
		$('.button_press').removeClass('active_0');
		$('.button_press_2').removeClass('active_2');
		$('.button_text').removeClass('disappear');
		$('.button_text_2').removeClass('appear');
		$('.blog_descriptor_container').css('background', 'white');
		$('.blog_main').css('background', 'none');
		$('.form_adjust').css('background', 'none');
		$('.about_information_container').css('background', 'none');
		$('.individual_blog_container').css('background', 'none');
		$('.name').css('color', 'white');
		$('.date').css('color', 'white');
		$('.blog_title').css('color', 'black');
		$('.blog_descriptor').css('color', 'black');
		$('.contact_us_heading').css('color', 'black');
		$('.follow_up_text').css('color', 'black');
		$('input[type=text], textarea').css('border', '1px solid black');
		$('placeholder').css('color', 'black');
		$('.about_heading').css('color', 'black');
		$('.about_information').css('color', 'black');
		$('.individual_blog_title').css('color', 'black');
		$('.name_one').css('color', 'black');
		$('.date_one').css('color', 'black');
		$('.name').css('color', 'white');
		$('.date').css('color', 'white');
		$('.singular_information').css('color', 'black');
	});
	
	$('.beige').click(function(){
		$('.blog_descriptor_container').css('background', '#f5f5dc');
		$('.blog_main').css('background', '#f5f5dc');
		$('.form_adjust').css('background', '#f5f5dc');
		$('.about_information_container').css('background', '#f5f5dc');
		$('.individual_blog_container').css('background', '#f5f5dc');
	});
	
	$('.grey').click(function(){
		$('.blog_descriptor_container').css('background', '#CDCDCD');
		$('.blog_main').css('background', '#CDCDCD');
		$('.form_adjust').css('background', '#CDCDCD');
		$('.about_information_container').css('background', '#CDCDCD');
		$('.individual_blog_container').css('background', '#CDCDCD');
	});
	
	$('.sage_green').click(function(){
		$('.blog_descriptor_container').css('background', '#77815c');
		$('.blog_main').css('background', '#77815c');
		$('.form_adjust').css('background', '#77815c');
		$('.about_information_container').css('background', '#77815c');
		$('.individual_blog_container').css('background', '#77815c');
	});
	
	$('.peach').click(function(){
		$('.blog_descriptor_container').css('background', '#EDD1B0');
		$('.blog_main').css('background', '#EDD1B0');
		$('.form_adjust').css('background', '#EDD1B0');
		$('.about_information_container').css('background', '#EDD1B0');
		$('.individual_blog_container').css('background', '#EDD1B0');
	});
	
	$('.orange').click(function(){
		$('.blog_descriptor_container').css('background', '#EDDD6E');
		$('.blog_main').css('background', '#EDDD6E');
		$('.form_adjust').css('background', '#EDDD6E');
		$('.about_information_container').css('background', '#EDDD6E');
		$('.individual_blog_container').css('background', '#EDDD6E');
	});
	
	$('.yellow').click(function(){
		$('.blog_descriptor_container').css('background', '#F8FD89');
		$('.blog_main').css('background', '#F8FD89');
		$('.form_adjust').css('background', '#F8FD89');
		$('.about_information_container').css('background', '#F8FD89');
		$('.individual_blog_container').css('background', '#F8FD89');
	});
	
	$('.main_color_title').on( "click",function(){
		$('.color_box').toggleClass('remove');
	});
	
	$('.black').click(function(){
		$('.name').css('color', 'black');
		$('.date').css('color', 'black');
		$('.name_one').css('color', 'black');
		$('.date_one').css('color', 'black');
		$('.blog_title').css('color', 'black');
		$('.blog_descriptor').css('color', 'black');
		$('.contact_us_heading').css('color', 'black');
		$('.follow_up_text').css('color', 'black');
		$('input[type=text], textarea').css('border', '1px solid black');
		$('placeholder').css('color', 'black');
		$('.about_heading').css('color', 'black');
		$('.about_information').css('color', 'black');
		$('.individual_blog_title').css('color', 'black');
	});
	
	$('.white').click(function(){
		$('.name').css('color', 'white');
		$('.date').css('color', 'white');
		$('.name_one').css('color', 'white');
		$('.date_one').css('color', 'white');
		$('.blog_title').css('color', 'white');
		$('.blog_descriptor').css('color', 'white');
		$('.contact_us_heading').css('color', 'white');
		$('.follow_up_text').css('color', 'white');
		$('input[type=text], textarea').css('border', '1px solid white');
		$('placeholder').css('color', 'white');
		$('.about_heading').css('color', 'white');
		$('.about_information').css('color', 'white');
		$('.singular_information').css('color', 'white');
		$('.individual_blog_title').css('color', 'white');
	});
	
	$('.light_grey').click(function(){
		$('.name').css('color', 'rgba(175,175,175,1.00)');
		$('.date').css('color', 'rgba(175,175,175,1.00)');
		$('.name_one').css('color', 'rgba(175,175,175,1.00)');
		$('.date_one').css('color', 'rgba(175,175,175,1.00)');
		$('.blog_title').css('color', 'rgba(175,175,175,1.00)');
		$('.blog_descriptor').css('color', 'rgba(175,175,175,1.00)');
		$('.contact_us_heading').css('color', 'rgba(175,175,175,1.00)');
		$('.follow_up_text').css('color', 'rgba(175,175,175,1.00)');
		$('input[type=text], textarea').css('border', '1px solid rgba(175,175,175,1.00)');
		$('placeholder').css('color', 'rgba(175,175,175,1.00)');
		$('.about_heading').css('color', 'rgba(175,175,175,1.00)');
		$('.about_information').css('color', 'rgba(175,175,175,1.00)');
		$('.singular_information').css('color', 'rgba(175,175,175,1.00)');
		$('.individual_blog_title').css('color', 'rgba(175,175,175,1.00)');
	});
	
	$('.dark_grey').click(function(){
		$('.name').css('color', 'rgba(87,87,87,1.00)');
		$('.date').css('color', 'rgba(87,87,87,1.00)');
		$('.name_one').css('color', 'rgba(87,87,87,1.00)');
		$('.date_one').css('color', 'rgba(87,87,87,1.00)');
		$('.blog_title').css('color', 'rgba(87,87,87,1.00)');
		$('.blog_descriptor').css('color', 'rgba(87,87,87,1.00)');
		$('.contact_us_heading').css('color', 'rgba(87,87,87,1.00)');
		$('.follow_up_text').css('color', 'rgba(87,87,87,1.00)');
		$('input[type=text], textarea').css('border', '1px solid rgba(87,87,87,1.00)');
		$('placeholder').css('color', 'rgba(87,87,87,1.00)');
		$('.about_heading').css('color', 'rgba(87,87,87,1.00)');
		$('.about_information').css('color', 'rgba(87,87,87,1.00)');
		$('.singular_information').css('color', 'rgba(87,87,87,1.00)');
		$('.individual_blog_title').css('color', 'rgba(87,87,87,1.00)');
	});
	
	$('.main_color_title_2').on( "click",function(){
		$('.color_box_2').toggleClass('remove');
	});
	
});

