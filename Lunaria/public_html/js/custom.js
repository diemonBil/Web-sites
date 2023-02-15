
jQuery(document).ready(function() {

	
	// cursor following
	$('.main').mousemove(function(e) {
		var x = e.pageX, y = e.pageY;
		if(x > 25 && x < $(window).width() - 25){
			$('.cursor-follow').css({
				left: x - 25 + 'px',
				top: y - 25 + 'px'
			});
		}
		$('.background-1').css('background-position', 'top ' + (-1050 + y * 0.02) + 'px '  + 'right ' + (-350 + x * 0.02) + 'px');
		$('.background-2').css('background-position', 'top ' + (-850 + y * 0.02) + 'px '  + 'right ' + (-676 + x * 0.02) + 'px');
	});

	/* Fixed menu */
	var mainH = $('.main').height();

	$(document).on("scroll", function(){
		if($(document).scrollTop() > mainH){
			$('.header').removeClass('d-none');
		}else{
			$('.header').addClass('d-none');
		}
	});
	$(document).trigger( "scroll" );

  var btn = $('#button');  
  $(document).scroll(function() {     
    if ($(document).scrollTop() > mainH) {
       btn.removeClass('d-none');
       btn.addClass('d-flex');
     } else {
       btn.addClass('d-none');
       btn.removeClass('d-flex');
     }
   });
   btn.on('click', function(e) {
     e.preventDefault();
     $('html, 	body').animate({scrollTop:0}, '500');
   });

	$(document).trigger( "scroll" );
	$('.slider-2').slick({
	  slidesToShow: 2,
	  slidesToScroll: 1,
	  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
	});
	$('.slider').slick({
		arrows: false,
		centerMode: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
		responsive: [
    {
      breakpoint: 1350,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
				variableWidth: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
	// Slider accordeon
	$(".toggle-click").on("click", function(e){
		e.preventDefault();
		$(this).find(".toogle-text").slideToggle(600);
		$(this).find(".fa-sharp").toggleClass("fa-plus").toggleClass("fa-minus");
		$(this).toggleClass("active");
	});
	// Navigation
	$(".js-navigation").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

  // Range
  var rangeS = $("#js-range"),
  		rangeV = $(".js-range-value");
  rangeS.rangeslider({
  	polyfill: false,
  	onInit: function(){
  		rangeV.text("$ " + rangeS.val());
  	},
  	onSlide: function(position, value){
  		rangeV.text("$ " + value);
  	}
  });
	if(window.outerWidth > 991){
		/* WOW JS */
		new WOW().init();
    }
});