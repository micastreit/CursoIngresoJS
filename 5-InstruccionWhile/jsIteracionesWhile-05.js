/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar() {
	let sexo = prompt("ingrese su sexo. Usando F para femenino o M para masculino.");
	while (sexo != "f" || sexo != "F" || sexo != "m" || sexo != "M" ) {
		sexo = prompt("Dato invalido.ingrese su sexo.Usando F para femenino o M para masculino.");
	if (sexo == "f" || sexo == "F" || sexo == "m" || sexo == "M") {
		break;
	}
}
	document.getElementById("txtIdSexo").value = sexo;


	sexo = alert("Dato valido.");

}//FIN DE LA FUNCIÓN