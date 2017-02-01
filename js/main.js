$(document).ready(main);

function main () {

	// Mostramos y ocultamos submenus
	$('.submenu').click(function(){
		$(this).children('.compsubmenu').slideToggle();
	});
}