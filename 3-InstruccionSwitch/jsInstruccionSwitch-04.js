function mostrar() {
	//tomo el mes
	/*al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.¨*/

	let mes;
	mes = document.getElementById("txtIdMes").value;

	switch (mes) {
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert("Este mes tiene 31 dias.");
			break;
		case "Febrero":
			alert("Este mes tiene 28 dias.");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Este mes tiene 30 dias.");
			break;
	}
}
	
//FIN DE LA FUNCIÓN