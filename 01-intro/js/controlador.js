

document.getElementById("boton").addEventListener("click", miFuncion);

let x = 0;

function miFuncion(){
	//console.log("Cool");
	let h1 = document.getElementById("titulo");

	x++;

	if( x%2 == 0 ){
		h1.style.background ="#9e9d24"
	}else{
		h1.style.background ="purple"
	}
}