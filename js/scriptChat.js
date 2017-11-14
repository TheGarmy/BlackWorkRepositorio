$(document).ready(function(){
	$("a[href='#seccion1']").click(function(){
		$("div.cont-chat div#cont-lado-izq").removeClass("tipo2");
		$("div.cont-chat div#cont-lado-izq").empty();
	});
	$("div.media.activas").click(function(){
		var nombre = $(this).find("h3").text();
		var fotoTatuador = $(this).find("img").attr('src');
		var fotoMia = $("ul.miIcono li").find("img").attr('src');

		$("div.cont-chat div#cont-lado-izq").removeClass("tipo2");
		$("div.media").removeClass("media-activado");
		$("button").remove();
		$("div.cont-chat div#cont-lado-izq").empty();
		$("div.cont-chat div#cont-lado-izq").html("<div class='row fondoNegro'>"+
													"<h2>"+nombre+"</h2>"+
													"</div>");
		$("div.cont-chat div#cont-lado-izq").append("<div class='col-md-12 cont-mensajes'>"+
														"<div class='col-md-12 frame'>"+
															"<ul><ul>");
		$("div#cont-lado-izq .frame").append("<div>"+
												"<div class='msj-rta macro'>"+
													"<div class='text text-r'>"+
														"<input class='mytext' placeholder='Typea a message'>"+
													"</div></div></div></div>"
											);
		$(this).addClass("media-activado");
		// debugger;
		$(this).find('div.media-body').append("<button class='mibtn'>Ir a páginal del artista</button>");

		///////arrrrrreeee
		var me = {};
		me.avatar = fotoMia;
		// "https://lh6.googleusercontent.com/-lr2nyjhhjXw/AAAAAAAAAAI/AAAAAAAARmE/MdtfUmC0M4s/photo.jpg?sz=48";

		var you = {};
		you.avatar = fotoTatuador
		// "https://a11.t26.net/taringa/avatares/9/1/2/F/7/8/Demon_King1/48x48_5C5.jpg";
		function formatAMPM(date) {
		    var hours = date.getHours();
		    var minutes = date.getMinutes();
		    var ampm = hours >= 12 ? 'PM' : 'AM';
		    hours = hours % 12;
		    hours = hours ? hours : 12; // the hour '0' should be '12'
		    minutes = minutes < 10 ? '0'+minutes : minutes;
		    var strTime = hours + ':' + minutes + ' ' + ampm;
		    return strTime;
		}

		//-- No use time. It is a javaScript effect.
		function insertChat(who, text, time = 0){
		    var control = "";
		    var date = formatAMPM(new Date());

		    if (who == "me"){

		        control = '<li style="width:100%">' +
		                        '<div class="msj macro">' +
		                        '<div class="avatar"><img class="img-circle" style="width:100%;" src="'+ me.avatar +'" /></div>' +
		                            '<div class="text text-l">' +
		                                '<p>'+ text +'</p>' +
		                                '<p><small>'+date+'</small></p>' +
		                            '</div>' +
		                        '</div>' +
		                    '</li>';
		    }else{
		        control = '<li style="width:100%;">' +
		                        '<div class="msj-rta macro">' +
		                            '<div class="text text-r">' +
		                                '<p>'+text+'</p>' +
		                                '<p><small>'+date+'</small></p>' +
		                            '</div>' +
		                        '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:100%;" src="'+you.avatar+'" /></div>' +
		                  '</li>';
		    }
		    setTimeout(
		        function(){
		            $(".frame ul").append(control);

		        }, time);

		}

		function resetChat(){
		    $(".frame ul").empty();
		}

		$(".mytext").on("keyup", function(e){
		    if (e.which == 13){
		        var text = $(this).val();
		        if (text !== ""){
		            insertChat("me", text);
		            $(this).val('');
		        }
		    }
		});

		//-- Clear Chat
		resetChat();

		//-- Print Messages
		insertChat("me", "Hello Tom...", 0);
		insertChat("you", "Hi, Pablo", 1500);
		insertChat("me", "What would you like to talk about today?", 3500);
		insertChat("you", "Tell me a joke",7000);
		insertChat("me", "Spaceman: Computer! Computer! Do we bring battery?!", 9500);
		insertChat("you", "LOL", 12000);


		//-- NOTE: No use time on insertChat.
	});

	//////////////citaspendientes/////////
	$("div.media.pendientes").click(function(){
		$("cont-mensajes").empty();
		$("div.media").removeClass("media-activado");
		$("button").remove();
		$(this).addClass("media-activado");
		// debugger;
		$(this).find('div.media-body').append("<button class='mibtn'>Ir a páginal del artista</button>");
	});

	$("a[href='#seccion2']").click(function(){
		$("div.cont-chat div#cont-lado-izq").empty();
		$("#cont-lado-izq").addClass("tipo2");

		$("media").addClass("pendientes");
	});
	$(".media.pendientes").click(function(){
		var nombre = $(this).find("h3").text();
		var fotoTatuador = $(this).find("img").attr('src');

		$("div.cont-chat div#cont-lado-izq").empty();
		$("div.cont-chat div#cont-lado-izq").append(
				'<div class="col-md-12">'+
					'<div class="col-md-8 col-md-offset-2 cont-borde">'+
						'<div class="col-md-8 col-md-offset-2">'+
							'<img src='+fotoTatuador+'>'+
						'</div>'+
						'<div class="col-md-12">'+
							'<h3>'+nombre+'</h3>'+
						'</div>'+
					'</div>'+
					'<div class="col-md-12">'+
						'<h3>Solicitud enviada para</h3>'+
						'<h2>Sábado 28 de oct.</h2>'+
						'<button class="mibtn">Cancelar</button>'+
					'</div>'+
				'</div>'
			);
	});
});