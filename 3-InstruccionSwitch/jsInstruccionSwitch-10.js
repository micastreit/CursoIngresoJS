function mostrar() {
	let destino;
	let estacion;
	destino = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;

	switch (estacion) {
		case "Invierno":
			if (destino == "Bariloche") {
				alert("Se viaja.");
			} else {
				alert("No se viaja");
			}
			break;
		case "Verano":
			if (destino == "Mar del plata" || destino == "Cataratas") {
				alert("se viaja");
			}
			else {
				alert("no se viaja");
			}
			break;
		case "Otoño":
			alert("se viaja");
			break;
		case "Primavera":
			if (destino == "Bariloche") {
				alert("no se viaja");
			} else
				alert("se viaja");
			break;
	}
}
/*en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"
en Verano: Se viaja a Mar del plata y Cataratas solamente
en Otoño: Se viaja a todos los destinos.
primavera: solo no se viaja a Bariloche*/
//FIN DE LA FUNCIÓN