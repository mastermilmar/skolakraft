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
		nav.className = 'nav_compact';
		logo.className = 'logo logo_bgi_m logo_bgi_2';
		}
	else {
		nav.className = '';
		logo.className = 'logo logo_bgi_m logo_bgi_1';
	}
}