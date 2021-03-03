/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	//declaro variables
	let numero;
	//pido dato
	numero = parseInt(prompt("inrese un numero entre 0 y 9 inclusive"));
	//me fijo si es valido
	while(numero < 0 || numero > 9 || isNaN(numero) ) {
		//si NO es valido informo y vuelvo a pedir
		numero = parseInt(prompt("numero fuera del rango. ingre otro numero"));
	}
	document.getElementById("txtIdNumero").value = numero;
//si es valido lo uso
numero= alert("correcto!!");

}
