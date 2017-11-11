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
});