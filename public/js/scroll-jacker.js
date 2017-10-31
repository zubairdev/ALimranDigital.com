(function() {
	var $pageHead = $('.page-head.page-head--no-scroll-listen'),
			$callToAction = $pageHead.find('.call-to-action'),
			$cassettes = $('.scroll-jacker__cassette'),
			cassetteCount = $cassettes.length - 1;

	$('.scroll-jacker').pagepiling({
		menu: null,
    direction: 'vertical',
		scrollingSpeed: 700,
    easing: 'swing',
    loopBottom: false,
    loopTop: false,
		css3: true,
		navigation: false,
		normalScrollElements: null,
    normalScrollElementTouchThreshold: 5,
    touchSensitivity: 5,
    keyboardScrolling: true,
    sectionSelector: '.scroll-jacker__cassette',
    animateAnchor: false,
		onLeave: function (index, nextIndex, direction) {

			if(direction == 'down' && index == cassetteCount) {
				$pageHead.removeClass('page-head--no-start-bg');
				$callToAction.addClass('call-to-action--alt');
			} else if(direction == 'up' && index == cassetteCount + 1) {
				$pageHead.addClass('page-head--no-start-bg');
				$callToAction.removeClass('call-to-action--alt');
			}

			// $cassettes.eq(index - 1).addClass('scroll-jacker__cassette--inactive');
			// $cassettes.eq(nextIndex - 1).removeClass('scroll-jacker__cassette--inactive');
		},
		afterRender: function() {
			$('.hero__chevron-south').on(
				'click',
				function() {
					$.fn.pagepiling.moveSectionDown();
				}
			);

		}
	});
})();
