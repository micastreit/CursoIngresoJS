/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
	let numero;
	let acumulador;
	let seguir;
	let neg;
	let flag = 0;
	neg = 1;
	acumulador = 0;
	do {
		numero = parseInt(prompt('ingrese un numero'));
		if (numero >= 0) {
			acumulador = acumulador + numero;

		} else {
			neg = numero * neg;
			flag = 1;
		}
		seguir = prompt('quiere ingresar otro numero?');
	} while (seguir == 's');
	if (flag == 0) {
		neg = 0;
	}
	document.getElementById('txtIdSuma').value = acumulador;
	document.getElementById('txtIdProducto').value = neg;

}//FIN DE LA FUNCIÓN
//pedir num. sumar pos. mult neg