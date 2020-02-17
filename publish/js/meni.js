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
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		document.getElementById("nav").style.margin = "0em";
		document.getElementById("logo").style["margin-top"] = "0";
	} else {
		document.getElementById("nav").style.margin = "1em 0";
		document.getElementById("logo").style["margin-top"] = "1.5rem";
	}
}