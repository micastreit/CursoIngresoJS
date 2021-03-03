/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {
	let numero;
	let seguir;
	let maximo;
	let minimo;
	let flag = 0;

	do {
		numero = parseInt(prompt('ingrese un numero.'));
		while (isNaN(numero)){
			numero=parseInt(prompt('Eso no es un numero. Ingrese un numero.'));
		}
		if (flag == 0) {
			maximo = numero;
			minimo = numero;
			flag = 1;
		}
		if (numero > maximo) {
			maximo = numero;
		} else if (numero < minimo) {
			minimo= numero;
		}
		seguir = prompt('quiere ingresar otro numero?');

	} while (seguir == 's');

	document.getElementById('txtIdMaximo').value = maximo;
	document.getElementById('txtIdMinimo').value = minimo;
}//FIN DE LA FUNCIÓN