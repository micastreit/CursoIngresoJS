/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	//declaro variables
	let clave;
	//pido dato
clave = prompt("ingrese clave: ");
//me fijo si es valido
while(clave != "utn750") {
	//si NO es valido informo y vuelvo a pedir
clave =prompt("clave incorrecta. ingrese clave nuevamente");
}
//si es valido lo uso
	clave= alert("clave correcta. puede ingresar.");
}
//FIN DE LA FUNCIÓN
