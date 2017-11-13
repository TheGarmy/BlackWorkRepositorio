var events = [
  {'Date': new Date(2016, 6, 7), 'Title': 'Doctor appointment at 3:25pm.'},
  {'Date': new Date(2016, 6, 18), 'Title': 'New Garfield movie comes out!', 'Link': 'https://garfield.com'},
  {'Date': new Date(2016, 6, 27), 'Title': '25 year anniversary', 'Link': 'https://www.google.com.au/#q=anniversary+gifts'},
];
var settings = {};
var element = document.getElementById('caleandar');
caleandar(element, events, settings);



$("li.cld-label ").click(function(){
	var dia = $(this).text();
	// alert(dia);
	 // div = $("<div />")
  //       div.attr({class: 'div-absolute'});
  //       // div.css({top: e.pageY, left: e.pageX})
  //       div.html("hola")
                $(this).append("<div class='col-md-4 div-absolute'><form class='form-inline'><div class='form-group'><label>De&nbsp;</label><input class='form-control' type='time' name='appt-time' value='13:30'></div><div class='form-group'><label>&nbsp;a&nbsp;</label><input class='form-control' type='time' name='appt-time' value='13:30'></div><button type='submit' class='mibtn'>Guardar Horario</button></form></div>");
                $('div.div-absolute').animate({opacity: 'show', height: 'show'}, 'slow');

	// var dia = (this).html();
	// alert(dia);

});
$("li.cld-label ").mouseleave(function(){

        $("div.div-absolute").animate({opacity: 'hide', height: 'hide'}, 'slow');
        $("div.div-absolute").remove();
    });

$(document).ready(function(){
	debugger
	alert(caleandar);
    $(".cld-day .currMonth").click(function(){
        $("p").slideToggle();
    });
});