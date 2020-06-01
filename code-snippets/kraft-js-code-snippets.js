//

(function() {
	var Nav;

	Nav = {
		init: function() {
			this.setup();
			return this.uiBind();
		},
		setup: function() {
			return $('#mainnav').find('li:not(:last-child)').toggleClass('invisible');
		},
		uiBind: function() {
			return $(document).on('click', '#mainnav', function(e) {
				e.preventDefault();
				return $(this).find('li:not(:last-child)').toggleClass('animate').toggleClass('invisible');
			});
		}
	};


	Nav.init();

}).call(this);

//

(function() {
	var Nav;

	Nav = {
		init: function() {
			this.setup();
			return this.uiBind();
		},
		setup: function() {
			return $('#menu').find('li:not(:last-child)').toggleClass('invisible');
		},
		uiBind: function() {
			return $(document).on('click', '#menu', function(e) {
				e.preventDefault();
				return $(this).find('li:not(:last-child)').toggleClass('animate').toggleClass('invisible');
			});
		}
	};


	Nav.init();

}).call(this);

///

[environment]::setenvironmentvariable('GIT_SSH', (resolve - path(scoop which ssh)), 'USER')

function(e) {
	e.preventDefault(),
		p.isProfileExpanded() ? p.collapseProfile() : p.expandProfile(),
		p.focusedLinkIndex = 0
}

//

$('li.dropdown.mega-dropdown a').on('click', function(event) {
	$(this).parent().toggleClass("open");
});

$('body').on('click', function(e) {
	if (!$('li.dropdown.mega-dropdown').is(e.target) && $('li.dropdown.mega-dropdown').has(e.target).length === 0 && $('.open').has(e.target).length === 0) {
		$('li.dropdown.mega-dropdown').removeClass('open');
	}
});

//



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
	modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}


///


//function closeMenu() {
//	var menu-toggle = document.getElementById("menu");
//	window.onclick = function(event) {
//	if (event.target == menu-toggle) {
//		menu-toggle.style.display = "";
//	}
//}


//<script>
function openNav() {
	document.getElementById("menu").style.display = "flex";
	document.getElementById("openbtn").style.display = "none";
	document.getElementById("closebtn").style.display = "inline-block";
}

function closeNav() {
	document.getElementById("menu").style.display = "";
	document.getElementById("closebtn").style.display = "none";
	document.getElementById("openbtn").style.display = "inline-block";
}

//Updated upstream
var menu = document.getElementById("menu");

window.onclick = function(event) {
		if (event.target == menu) {
			menu.style.display = "";
		}
	}

	function closeMenu() {
		document.getElementById("menu").style.display = "none";
	}

window.onclick = function(event) {
		if (event.target == document.getElementById("menu")) {
			closeMenu();
		}
	}

	// $(document).ready(function() {
	// 	$('#menu').click(function() {
	// 		if ($('#menu').css('display') === 'inline-block') {
	// 			$('#menu').css('display', 'none');
	// 	} else {
	// 		$('#menu').css('display', 'inline-block');
	// 	}
	// 	});
	// });
	
//</script>
//<script>
function myFunction() {
	var x = document.getElementById("menu");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}
//</script>


//<script src="jquery-3.4.1.js" type="text/javascript" charset="utf-8" async defer></script>
//<script>
$(document).click(function(event) {
	$target = $(event.target);
	if (!$target.closest('#menu').length &&
		$('#menu').is(":visible")) {
		$('#menu').hide();
	}
});
//</script>

//<script type="text/javascript">
$(window).click(function() {
	//Hide the menus if visible
});

$('#menu').click(function(event) {
	event.stopPropagation();
});
//</script>

//<!-- 	<script type="text/javascript"> 
function hideOnClickOutside(element) {
	const outsideClickListener = event => {
		if (!element.contains(event.target) && isVisible(element)) { // or use: event.target.closest(selector) === null
			element.style.display = 'none'
			removeClickListener()
		}
	}

	const removeClickListener = () => {
		document.removeEventListener('click', outsideClickListener)
	}

	document.addEventListener('click', outsideClickListener)
}

const isVisible = elem => !!elem && !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length)
//</script>

///

function openNav() {
	document.getElementById("menu").style.display = "flex";
	document.getElementById("openbtn").style.display = "none";
	document.getElementById("closebtn").style.display = "inline-block";
}

function closeNav() {
	document.getElementById("menu").style.display = "";
	document.getElementById("closebtn").style.display = "none";
	document.getElementById("openbtn").style.display = "inline-block";
}

window.onscroll = function() { scrollFunction() };

function scrollFunction() {

	let navbar = document.getElementById("nav");
	let logo = document.getElementById("logo");


	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		//navbar.style.margin = "0em";
		nav.className = 'nav_compact';
		//logo.style["margin-top"] = "0";
		//logo.className += " logo_scroll";
		//logo.classList.add(" logo_scroll");
		//element.classList.add(" logo_scroll");
		logo.className = 'logo_scroll';

	} else {
		//navbar.style.margin = "1em 0";
		nav.className = '';
		//logo.style["margin-top"] = "1.5rem";
		//logo.className -= " logo_scroll";
		//logo.className += " logo";
		//logo.classList.remove(" logo_scroll");
		//element.classList.remove(" logo_scroll");
		logo.className = 'logo';
	}
}
