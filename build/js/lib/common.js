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
				rateForItem = rateFor.children(),
				currentHeight = 0;

			if (rateFor.length) {
				$(window).resize(function () {
					rateFor.css({height: 'auto'});
				});

				currentHeight = rateForItem.outerHeight();
				rateForItem.next().hide();
				rateFor.css({height: currentHeight});

				rateNavBtn.on('click', function () {
					if ($(this).index() == 1) {
						rateSlider2[0].slick.refresh();
					}
					var index = $(this).index(),
						tabsHeight = 0;
					rateNavBtn.removeClass('is-active');
					$(this).addClass('is-active');
					rateForItem.fadeOut().promise().done(function () {
						tabsHeight = rateForItem.eq(index).outerHeight();
						rateFor.css({height: tabsHeight});
						rateForItem.eq(index).fadeIn();
					});
				});
			}
		}, 100);
	})();

});