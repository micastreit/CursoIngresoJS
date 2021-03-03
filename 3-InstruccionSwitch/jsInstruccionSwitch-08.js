function mostrar() {
	let destino;
	destino = document.getElementById("txtIdDestino").value;

	switch (destino) {
		case "Ushuaia":
		case "Bariloche":
			alert("hace frio");
			break;
		case "Cataratas":
		case "Mar del plata":
			alert("hace calor");
			break;
	}
}//FIN DE LA FUNCIÓN