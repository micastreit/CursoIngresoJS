/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let respuesta;
	let numero;
	contador=0;
	acumulador=0;

do {
	numero = parseInt(prompt('ingrese un numero'));
	acumulador = acumulador + numero;
	contador++;
	respuesta = prompt('quiere ingresar otro numero?');

} while (respuesta == 's');

	document.getElementById('txtIdSuma').value = acumulador;
	document.getElementById('txtIdPromedio').value = acumulador / contador;

}//FIN DE LA FUNCIÓN
/*let seguir;
seguir= 's'
while (seguir == 's') {
	alert('hola');
	seguir = prompt('quiere que lo siga saludando?');
	}
	alert ('entonces no lo saludo mas...'); */