$(document).ready(function(){
  /* Slider */
	$('.bgimage').cycle({ 
		after: function (curr, next, opts) {
			$('#goto0 img').attr("src", "images/slider/desmarcado.png");
			$('#goto1 img').attr("src", "images/slider/desmarcado.png");
			$('#goto2 img').attr("src", "images/slider/desmarcado.png");
			$('#goto3 img').attr("src", "images/slider/desmarcado.png");
		    $('#goto'+opts.currSlide+' img').attr("src", "images/slider/marcado.png");
		},
	    fx:      'turnDown', 
	    delay:   4000
	});


	$('.arrowright').click(function(){
		$('.bgimage').cycle('next');
	});
	$('.arrowleft').click(function(){
		$('.bgimage').cycle('prev');
	});
	$('#goto0').click(function() { 
	    $('.bgimage').cycle(0); 
	    return false; 
	});
	$('#goto1').click(function() { 
	    $('.bgimage').cycle(1); 
	    return false; 
	});
	$('#goto2').click(function() { 
	    $('.bgimage').cycle(2); 
	    return false; 
	});
	$('#goto3').click(function() { 
	    $('.bgimage').cycle(3); 
	    return false; 
	});

	/* Over buttom */
	var atual;
	$('#menu div').mouseover(function(){
		atual = $(this);
		atual.addClass('mouse-over');
	});
	$('#menu div').mouseout(function(){
		atual.removeClass('mouse-over');
	});

	var atualthumb;
	$('.mouse-out-thumb').mouseover(function(){
		atualthumb = $(this);
		atualthumb.addClass('mouse-over');
	});
	$('.mouse-out-thumb').mouseout(function(){
		atualthumb.removeClass('mouse-over');
	});

	$('input').click(function(){
		$(this).attr('value','');
	});

});
