function mostrar() {
	let numero = 0;
	let acumpares = 0;
	numero = prompt('Ingrese un numero');
	while (isNaN(numero)) {
		numero = prompt('Ese no es un numero. Ingrese un numero');
	}
	for (let i = 1; i < numero; i++) {
		if (i % 2 == 0) {
			acumpares++;
			console.log(i);
		}
	}
	console.log('numeros pares: ' + acumpares);
} //FIN DE LA FUNCIÓN