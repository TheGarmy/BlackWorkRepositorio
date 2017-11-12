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
	///Oculta divs
	$("a.active").click(function(){
			$("div.div-absolute").slideDown(300);
	        $("div.div-absolute").fadeIn();
	        // $("#div2").fadeIn("slow");
	        // $("#div3").fadeIn(3000);
	    });
	$("a.active").mouseleave(function(){
        $("div.div-absolute").fadeOut();
    });
	/////ir arriba
	$(".ir-arriba").click(function(){
			$('body, html').animate({
				scrollTop: '0px'
			}, 300);
		});
});