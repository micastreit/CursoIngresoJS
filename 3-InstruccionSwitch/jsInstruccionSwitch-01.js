function mostrar() {
	//tomo el mes
	let mes;
	mes = document.getElementById("txtIdMes").value;

	/* 	al seleccionar un mes informar.
	si es Enero: "que comiences bien el año!!!."
	si es Marzo: "a clases!!!."
	si es Julio: "se vienen las vacaciones!!!."
	si es Diciembre: "Felices fiesta!!!. */

	if(mes == "Enero") {
		alert("que comiences bien el año!!!.");
	} else if(mes == "Marzo") {
		alert("a clases!!!.");
	} else if (mes == "Julio") {
		alert("se vienen las vacaciones!!!.");
	} else if(mes == "Diciembre") {
		alert("Felices fiesta!!!.");
	}else {

	alert(mes);
	}


}//FIN DE LA FUNCIÓN