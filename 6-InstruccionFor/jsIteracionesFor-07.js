function mostrar()
{
	let numero = 0;
	let contadordivisores = 0;
	numero = parseInt(prompt('Ingrese un numero'));
	while (isNaN(numero)) {
		numero = prompt('Ese no es un numero. Ingrese un numero');
	}
	for (let i = 1; i <= numero; i++) {
		if (numero / i == 0) {
			contadordivisores++;
			console.log(i);
		}
	}
	console.log('divisores encontrados: ' + contadordivisores);

}//FIN DE LA FUNCIÓN