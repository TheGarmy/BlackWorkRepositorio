$(document).ready(function(){
	// Click boton pantalla login
	$("#btnIniSesion").click(function(){
		$("#miDescripcion").remove();
		$(".cont-bottom").remove();
		$(".cont-mid").empty();
		$.get("html/iniSesion.html", function(htmlexterno){
   			$(".cont-mid").html(htmlexterno);
    	});
    	$(".miform-cont").addClass("miform-cont-new");
    	$(".miform-cont").removeClass("miform-cont");
	});
	//////muestra opciones nav
	$('i.fa-cog').click(function(){
		/*Métoddo sencillo*/
                //$("#formContainer").slideToggle(600);
		if($('div.cont-opciones').is(':hidden'))
		{
			$('i.fa-cog').addClass("i-activo");
			$('div.cont-opciones').animate({opacity: 'show', height: 'show'}, 'slow');
		}
		else{
			$('i.fa-cog').removeClass("i-activo");
			$('div.cont-opciones').animate({opacity: 'hide', height: 'hide'}, 'slow');
		}
	});
	///Oculta div info tatuador
	$("#btnInfo-Tatuador").click(function(){
		$("div.div-absolute").fadeIn();
		$("div.div-absolute").slideDown(300);
	});
	$("#btnInfo-Tatuador").mouseleave(function(){
        $("div.div-absolute").fadeOut();
    });
	/////ir arriba
	$(".ir-arriba").click(function(){
			$('body, html').animate({
				scrollTop: '0px'
			}, 300);
		});
});