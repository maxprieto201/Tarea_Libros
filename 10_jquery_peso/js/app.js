// Jquery puede seleccionar los elementos
// mediante su id, clase o nombre de etiqueta

// selección por nombre de etiqueta
// .text sirve para recuperar o asignar
// texto a una etiqueta
 $("h1").text("Jinton: Genkai Hakuri no Jutsu");

//seleccion por clase ( .=class )
$(".subtitulo").text("Chou Endo: Odama Rasen Shuriken");

//seleccion por id ( # = id)
$("#p1").css("font-size","2em");

//seleccion por nombre de etiqueta
// asignación de evento al botón
//función anonimas que se dispara cuando ocurre el evento
$("button").click( function(){ 

	let masa = $("input").val();

	const gMar = 3.7;
	const gJup = 24.7;

	let pj = masa * gJup;
	let pm = masa * gMar;

	console.log( pj, pm );

	$("#p1").html( "Tu peso en Martes es:"+pm+ "<br> Tu peso en jupiter es: "+pj );

 } )