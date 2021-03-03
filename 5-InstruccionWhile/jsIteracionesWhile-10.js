function mostrar() {
	let numero = 0;
	let sumapos = 0;
	let sumaneg = 0;
	let contadorpos = 0;
	let contadorneg = 0;
	let contadorcero = 0;
	let contadorpares = 0;
	let promediopos = 0;
	let promedioneg = 0;
	let diferencia;
	let seguir;
	numero = 0;
	let flag = 1;

	do {
		numero = parseInt(prompt('ingrese un numero.'));
		while (isNaN(numero)) {
			numero = parseInt(prompt('Ese no es un numero. Ingrese un numero.'));
		}
		if (flag || numero > 0) {
			sumapos += numero;
			contadorpos++;
		} else if (flag || numero < 0) {
			sumaneg += numero;
			contadorneg++;
		} else if (flag || numero == 0) {
			contadorcero++;
		}
		if (numero % 2 == 0) {
			contadorpares++;
		}
		seguir = prompt('desea ingresar otro numero?');
		flag = 0;
	}while (seguir == 's');
	if (contadorpos == 0) {
		promediopos = 0;
	}
	if (contadorneg == 0) {
		promedioneg = 0;
	}
	promediopos = sumapos / contadorpos;
	promedioneg = sumaneg / contadorneg;
	diferencia = sumapos + sumaneg;

	console.log('1-Suma de los negativos. ' + sumaneg);
	console.log('2-Suma de los positivos.' + sumapos);
	console.log('3-Cantidad de positivos.' + contadorpos);
	console.log('4-Cantidad de negativos.' + contadorneg);
	console.log('5-Cantidad de ceros.' + contadorcero);
	console.log('6-Cantidad de números pares.' + contadorpares);
	console.log('7-Promedio de positivos. ' + promediopos);
	console.log('8-Promedios de negativos.' + promedioneg);
	console.log('9-Diferencia entre positivos y negativos' + diferencia);
}