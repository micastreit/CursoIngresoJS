function mostrar() {
	let estacion;
	let destino;
	let tarifabase;
	let preciofinal;
	tarifabase = 15000;
	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch (estacion) {
		case "Invierno":
			if (destino == "Bariloche") {
				preciofinal = tarifabase * 1.2;
				alert(preciofinal);
			} else if (destino == "Cataratas" || destino == "Cordoba") {
				preciofinal = tarifabase - (tarifabase * 0.1);
				alert(preciofinal);

			} else {
				preciofinal = tarifabase - (tarifabase * 0.2);
				alert(preciofinal);
			}
			break;
		case "Verano":
			if (destino == "Bariloche") {
				preciofinal = tarifabase - (tarifabase * 0.2);
				alert(preciofinal);
			} else if (destino == "Cataratas" || destino == "Cordoba") {
				preciofinal = tarifabase * 1.1;
				alert(preciofinal);

			} else {
				preciofinal = tarifabase * 1.2;
				alert(preciofinal);
			}
			break;
	case "Otoño":
	case "Primavera":
	if (destino == "Cordoba") {
		preciofinal = tarifabase;
		alert(preciofinal);
	} else {
		preciofinal = tarifabase * 1.1;
		alert(preciofinal);
	}
	break;
}
}
//FIN DE LA FUNCIÓN
/*una agencia de viajes debe sacar las tarifas de los viajes ,
 se cobra $15.000 por cada estadia como base,
 se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas
y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas
y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10%
 Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento*/