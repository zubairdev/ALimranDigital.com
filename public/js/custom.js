
    function technologyTabs (evt, cityName) {
		var tabLinks = document.querySelectorAll('.tablinks');
  		var tabContent = document.querySelectorAll('.tabcontent');

	for (var i=0; i<tabContent.length; i++) {
		tabContent[i].style.display = 'none';
	}

	for (var i=0; i<tabLinks.length; i++) {
		tabLinks[i].className = tabLinks[i].className.replace(' active', '');
	}

	document.getElementById(cityName).style.display = 'block';
	evt.currentTarget.className += ' active';

	// document.querySelector('#defaultOpen').click();

}

document.getElementById("defaultOpen").click();
  }
