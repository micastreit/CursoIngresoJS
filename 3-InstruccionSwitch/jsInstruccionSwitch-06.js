function mostrar() {
	let hora;
	hora = parseFloat(document.getElementById("txtIdHora").value);

	if (hora >= 7 && hora <= 11) {
		alert("Es de mañana");
	} else if (hora >= 12 && hora <= 19) {
		alert("Es de tarde.");
	} else if (hora >= 0 && hora <= 6 || hora >= 20 && hora <= 24) {
		alert("Es de noche");
	} else
		alert("La hora no existe.");
}
/*Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
si está entre las 12 y las 19 : "Es de tarde.".
si está entre las 20 y las 24 o entre las 0 y las 6 : "Es de noche.".
si NO está entre las 0 y las 24 : "la hora no existe." */
//FIN DE LA FUNCIÓN