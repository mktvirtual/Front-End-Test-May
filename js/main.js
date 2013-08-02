$(document).ready(function() {
	
	$('nav ul li').click(function(){
		$('nav ul li').removeClass('ativo');
		$(this).addClass('ativo');
	});
});