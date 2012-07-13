$(document).ready(function()
{
	$('#slider').sliderNav();
	
	// First time, the indicator needs a character
	$("#nav-indicator-fixed").append("A");

	var curnav = $("#nav-indicator-fixed").offset().top;
	
	// When scrolling, this function checks if the indicator needs to be changed
	var curb = $("#b").offset().top - curnav;
	var curc = $("#c").offset().top - curnav;
	var curd = $("#d").offset().top - curnav;
	var cure = $("#e").offset().top - curnav;
	var curf = $("#f").offset().top - curnav;
	var curg = $("#g").offset().top - curnav;
	var curi = $("#i").offset().top - curnav;
	
	$("#searchInput").keyup(function(){	
		var jo = $('.slider-content', slider).find('li a');
		var dInput = this.value.toLowerCase();

		jo = jo.filter(function() {
			return $(this).text().toLowerCase().indexOf(dInput) == 0;
		});
		var firstEl = jo.first();
		var cOffset = $('.slider-content', slider).offset().top;
		var tOffset = $(firstEl).offset().top;
		var height = $('.slider-nav', slider).height();
		var pScroll = (tOffset - cOffset) - height/8;
		$('.slider-content', slider).stop().animate({scrollTop: '+=' + pScroll + 'px'});
	});
	
	var changeNavIndicator = function(value)
	{
		$("#nav-indicator-fixed").replaceWith("<div id=\"nav-indicator-fixed\">"+value+"</div>");
	}
	
	$(".slider-content").scroll(function()
	{ 
		var curnav = $("#nav-indicator-fixed").offset().top;
		var posa = $("#a").offset().top - curnav;
		var posb = $("#b").offset().top - curnav;
		var posc = $("#c").offset().top - curnav;
		var posd = $("#d").offset().top - curnav;
		var pose = $("#e").offset().top - curnav;
		var posf = $("#f").offset().top - curnav;
		var posg = $("#g").offset().top - curnav;
		var posi = $("#i").offset().top - curnav;
		
		if(posb < 20 && posb > -20)
		{
			if(curb < posb)
				changeNavIndicator("A");
			else
				changeNavIndicator("B");;
			curb = posb;
		} 
		if(posc < 20 && posc > -20)
		{
			if(curc < posc)
				changeNavIndicator("B");
			else
				changeNavIndicator("C");;
			curc = posc;
		}
		if(posd < 20 && posd > -20)
		{
			if(curd < posd)
				changeNavIndicator("C");
			else
				changeNavIndicator("D");
			curd = posd;
		}
		if(pose < 20 && pose > -20)
		{
			if(cure < pose)
				changeNavIndicator("D");
			else
				changeNavIndicator("E");
			cure = pose;
		}
		if(posf < 20 && posf > -20)
		{
			if(curf < posf)
				changeNavIndicator("E");
			else
				changeNavIndicator("F");
			curf = posf;
		}
		if(posg < 20 && posg > -20)
		{
			if(curg < posg)
				changeNavIndicator("F");
			else
				changeNavIndicator("G");
			curg = posg;
		}
		if(posi < 20 && posi > -20)
		{
			if(curi < posi)
				changeNavIndicator("G");
			else
				changeNavIndicator("I");
			curi = posi;
		}
	});
});