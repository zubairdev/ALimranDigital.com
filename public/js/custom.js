
var tabLinks = document.querySelectorAll('.tablinks');
var tabContent = document.querySelectorAll('.tabcontent');

function showContent (evt, openContent) {

	for (var i=0; i<tabContent.length; i++) {
		tabContent[i].style.display = 'none';
	}

	for (var i=0; i<tabLinks.length; i++) {
		tabLinks[i].className = tabLinks[i].className.replace(' active', '');
	}

	document.getElementById(openContent).style.display = 'block';
	evt.currentTarget.className += ' active';
}

document.querySelector('#defaultOpen').click(); 
