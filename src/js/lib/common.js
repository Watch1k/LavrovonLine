/* Common JS */
$(document).ready(function () {

	// Clear placeholder
	(function () {
		var el = $('input, textarea');
		el.focus(function () {
			$(this).data('placeholder', $(this).attr('placeholder'));
			$(this).attr('placeholder', '');
		});
		el.blur(function () {
			$(this).attr('placeholder', $(this).data('placeholder'));
		});
	})();

	(function () {
		var whySlider = $('.js-why-slider'),
			stepsSlider = $('.js-steps-slider'),
			rateSlider = $('.js-rate-slider'),
			rateSlider2 = $('.js-rate-slider-2');

		toggleSlider(768, whySlider);
		toggleSlider(768, stepsSlider);
		toggleSliderAdaptive(1200, rateSlider);
		toggleSliderAdaptive(1200, rateSlider2);
		$(window).resize(function () {
			toggleSlider(768, whySlider);
			toggleSlider(768, stepsSlider);
			toggleSliderAdaptive(1200, rateSlider);
			toggleSliderAdaptive(1200, rateSlider2);
		});

		function toggleSlider(breakpoint, slider) {
			if ($(window).width() < breakpoint) {
				if (!slider.hasClass('slick-initialized')) {
					initSlickSlider(slider);
				}
			} else {
				if (slider.hasClass('slick-initialized')) {
					slider.slick('unslick');
				}
			}
		}

		function toggleSliderAdaptive(breakpoint, slider) {
			if ($(window).width() < breakpoint) {
				if (!slider.hasClass('slick-initialized')) {
					initSlickSliderAdaptive(slider);
				}
			} else {
				if (slider.hasClass('slick-initialized')) {
					slider.slick('unslick');
				}
			}
		}

		function initSlickSlider(slider) {
			slider.slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
				nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>'
			});
		}

		function initSlickSliderAdaptive(slider) {
			slider.slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				adaptiveHeight: true,
				prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
				nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>'
			});
		}

		setTimeout(function () {
			var rateFor = $('.js-rate-for'),
				rateNav = $('.js-rate-nav'),
				rateNavBtn = rateNav.children(),
				rateForItem = rateFor.children();

			if (rateFor.length) {
				$(window).resize(function () {
					rateFor.css({height: 'auto'});
				});

				rateForItem.next().hide();

				rateNavBtn.on('click', function () {
					if (rateSlider.hasClass('slick-initialized')) {
						rateSlider[0].slick.refresh();
					}
					if (rateSlider2.hasClass('slick-initialized')) {
						rateSlider2[0].slick.refresh();
					}
					var index = $(this).index();
					rateNavBtn.removeClass('is-active');
					$(this).addClass('is-active');
					rateForItem.fadeOut().promise().done(function () {
						rateForItem.eq(index).fadeIn();
					});
				});
			}
		}, 100);
	})();

	(function () {
		var header = $('.js-header');

		$(document).scroll(function () {
			if ($(window).scrollTop() > 112) {
				header.addClass('is-fixed');
			} else {
				header.removeClass('is-fixed');
			}
		});
	})();

	(function () {
		var hamburger = $('.js-hamburger'),
			nav = $('.js-nav');

		hamburger.on('click', function () {
			$(this).toggleClass('is-active');
			nav.toggleClass('is-active');
		});

		$(window).resize(function () {
			if ($(window).width() < 768) {
				// code
			} else {
				nav.removeClass('is-active');
				hamburger.removeClass('is-active');
			}
		});

		$('.nav a[href^="#"]').click(function(){
			var el = $(this).attr('href');
			$('body').animate({
				scrollTop: $(el).offset().top - 60}, 1000);
			return false;
		});
	})();

});