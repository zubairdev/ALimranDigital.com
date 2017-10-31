(function() {

	var mobileMql = window.matchMedia('(min-width: 1200px)'),
			parallaxSpeedDefault = 0.15,
			timer = 0,
			scrollListeningInterval = 15,
			scrolledDown = 0,
			documentHeight = Math.max(
        window.innerHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight
	    ),
			parallaxes = document.querySelectorAll('.parallax'),
			generalScrollHandler = function generalScrollHandler() {

				scrolledDown = document.body.scrollTop;

				for(var i = 0; i < parallaxes.length; i++) {
					handleParallaxScroll(parallaxes[i]);
				}
			},
			handleParallaxScroll = function handleParallaxScroll(parallax) {

				var diff = parallax.getBoundingClientRect().top + document.body.scrollTop - scrolledDown;

				if(Math.abs(diff) < documentHeight) {

					if(!parallax.horizontal) {
						// parallax.layers[1].style.top = (diff * .15) + 'px';
						parallax.layers[1].style.top = (diff * parallax.speed) + 'px';

						if(parallax.layers[2]) {
							// parallax.layers[2].style.top = (diff * .25) + 'px';
							parallax.layers[2].style.top = (diff * parseFloat(parallax.speed + 0.10)) + 'px';
						}
					} else {
						// parallax.layers[1].style.top = (diff * .15) + 'px';
						parallax.layers[1].style.left = (diff * parallax.speed) + 'px';

						if(parallax.layers[2]) {
							// parallax.layers[2].style.left = (-diff * .05) + 'px';
							parallax.layers[2].style.left = (-diff * parseFloat(parallax.speed - .10)) + 'px';
						}
					}
				} else if(Math.abs(diff) < documentHeight / 3) {

					if(!parallax.horizontal) {
						// parallax.layers[1].style.top = (diff * .25) + 'px';
						parallax.layers[1].style.top = (diff * parseFloat(parallax.speed + 0.10)) + 'px';

						if(parallax.layers[2]) {
							// parallax.layers[2].style.top = (diff * .45) + 'px';
							parallax.layers[2].style.top = (diff * parseFloat(parallax.speed + 0.30)) + 'px';
						}
					}	else {
						// parallax.layers[1].style.left = (diff * .25) + 'px';
						parallax.layers[1].style.left = (diff * parseFloat(parallax.speed + 0.10)) + 'px';

						if(parallax.layers[2]) {
							// parallax.layers[2].style.left = (-diff * .05) + 'px';
							parallax.layers[2].style.left = (-diff * parseFloat(parallax.speed - .10)) + 'px';
						}
					}
				}
			};


	if(mobileMql.matches) {

		// pre-fetch parallaxed layers and other data so we won't have to redo this on every scroll event trigger
		for(var i = 0; i < parallaxes.length; i++) {
			var layers = parallaxes[i].querySelectorAll('.parallax__layer'),
					index = 0;

			parallaxes[i].layers = [];
			parallaxes[i].horizontal = parallaxes[i].classList.contains('parallax--horizontal');

			if(parallaxes[i].dataset.parallaxSpeed !== undefined) {
				parallaxes[i].speed = Number.parseFloat(parallaxes[i].dataset.parallaxSpeed);
			} else {
				parallaxes[i].speed = parallaxSpeedDefault;
			}

			for(var j = 0; j < layers.length; j++) {
				index = layers[j].className.match(/(parallax__layer)--(\d)/)[2];

				if(index !== null) {
					parallaxes[i].layers[index] = layers[j];
				}
			}
		}

		window.addEventListener(
			'scroll',
			function() {
				if(timer) {
					window.clearTimeout(timer);
				}
				timer = window.setTimeout(generalScrollHandler, scrollListeningInterval);
			}
		);
	}
})();
