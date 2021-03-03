function mostrar() {
	let destino;
	destino = document.getElementById("txtIdDestino").value;

	switch (destino) {
		case "Ushuaia":
			alert("sur");
			break;
		case "Cataratas":
			alert("norte");
			break;
		case "Mar del plata":
			alert("oeste");
			break;
		case "Bariloche":
			alert("este");
			break;
	}

}//FIN DE LA FUNCIÓN
//Al selecionar un destino ,
//indicar el punto cardinal de nuestro pais en donde se encuentra
// Norte, Sur, Este u Oeste