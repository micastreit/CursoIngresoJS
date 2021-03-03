function mostrar()
{
	//tomo la edad y el estado civil
	let edad;
	let estCivil;
	edad = parseInt(document.getElementById("txtIdEdad").value);
	estCivil = document.getElementById("estadoCivil").value;

//hostigar al menor que no sea soltero

if(edad < 18 && estCivil != "Soltero") {
	alert("Es muy pequeño para no ser soltero.")
}

}//FIN DE LA FUNCIÓN