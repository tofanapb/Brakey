 $(document).ready(function () {

     //Menu
	$(".menu_toggle").click(function () {
		$(".menu_area").slideToggle(800);

	});

	jQuery(window).resize(function () {
		var screenwidth = jQuery(window).width();
		if (screenwidth > 991) {
			jQuery('.menu_area').removeAttr("style");
		}
	});

	$(".video-play-btn").magnificPopup({
		type: "video"
	});
     // slider
      $('.Homepage-sliders.owl-carousel').owlCarousel({
		loop:true,
		margin:50,
		 autoPlay: true,
		 nav: true,
		 navText:["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
		 dots: false,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true,
				dots: false,
			},
			600:{
				items:1,
				nav:true,
				dots: false,
			},
			1000:{
				items:1,
				nav:true,
				loop:false,
				dots: false,
			}
		}
	});

	//  scroll_top or Menu Stiky  
	$(window).scroll(function () {
		if ($(this).scrollTop()) {
			$('.top_up').fadeIn();
			$('.menu_fixed_area').addClass('menu_stiky_fixed');
		} else {
			$('.top_up').fadeOut();
			$('.menu_fixed_area').removeClass('menu_stiky_fixed');
		}
	});

	$(".top_up").click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, 1000);
	});
		//type writer

		var TxtType = function(el, toRotate, period) {
			this.toRotate = toRotate;
			this.el = el;
			this.loopNum = 0;
			this.period = parseInt(period, 10) || 2000;
			this.txt = '';
			this.tick();
			this.isDeleting = false;
		};
	
		TxtType.prototype.tick = function() {
			var i = this.loopNum % this.toRotate.length;
			var fullTxt = this.toRotate[i];
	
			if (this.isDeleting) {
			this.txt = fullTxt.substring(0, this.txt.length - 1);
			} else {
			this.txt = fullTxt.substring(0, this.txt.length + 1);
			}
	
			this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
	
			var that = this;
			var delta = 200 - Math.random() * 100;
	
			if (this.isDeleting) { delta /= 2; }
	
			if (!this.isDeleting && this.txt === fullTxt) {
			delta = this.period;
			this.isDeleting = true;
			} else if (this.isDeleting && this.txt === '') {
			this.isDeleting = false;
			this.loopNum++;
			delta = 500;
			}
	
			setTimeout(function() {
			that.tick();
			}, delta);
		};
	
		window.onload = function() {
			var elements = document.getElementsByClassName('typewrite');
			for (var i=0; i<elements.length; i++) {
				var toRotate = elements[i].getAttribute('data-type');
				var period = elements[i].getAttribute('data-period');
				if (toRotate) {
				  new TxtType(elements[i], JSON.parse(toRotate), period);
				}
			}
			// INJECT CSS
			var css = document.createElement("style");
			css.type = "text/css";
			css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #498096}";
			document.body.appendChild(css);
		};


 });
