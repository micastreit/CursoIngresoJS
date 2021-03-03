function mostrar()
{
	//tomo la edad  
	let edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);

	//diferenciar entre mayor de edad, adolescente y niño segun la edad declarada
{
	if(edad >= 18) {
		alert("Usted es mayor de edad.")
	}
	if (edad >= 13 && edad <= 17) {
		alert("Usted es un adolescente.")
	}
	else alert("Usted es un niño.")	
	}
}

//FIN DE LA FUNCIÓN