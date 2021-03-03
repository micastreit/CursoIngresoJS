function mostrar()
{
	//tomo la edad  
let edad;
let estadoCivil;

edad= parseInt(document.getElementById("txtIdEdad").value);
estadoCivil= document.getElementById("estadoCivil").value;
	
//si es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'

if(edad >= 18 && estadoCivil == "Soltero") {
	alert("Es soltero y no es menor")
}

}//FIN DE LA FUNCIÓN