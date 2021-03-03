
function mostrar() {
	let producto;
	let precio;
	let cantidad;
	let fabricante;
	let acumcantB = 0;
	let acumcantJ = 0;
	let acumcantA = 0;
	let acumprecioB = 0;
	let acumprecioJ = 0;
	let acumprecioA = 0;
	let precioMin;
	let fabricanteMin;
	let cantidadMin;
	let flagAlcohol = 1;
	let productomax;
	let promedioCantMax;


	//Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
	for (i = 0; i < 5; i++) {
		//el tipo (validar "barbijo" , "jabón" o "alcohol") ,
		producto = prompt('ingrese el tipo de producto (barbijo, jabon, alcohol).');
		while (producto != 'barbijo' && producto != 'jabon' && producto != 'alcohol') {
			producto = prompt('dato invalido. ingrese el tipo de producto (barbijo, jabon, alcohol).');
		}
		//el precio (validar entre 100 y 300),
		precio = parseInt(prompt('ingrese el precio del producto'));
		while (precio < 100 || precio > 300 || isNaN(precio)) {
			precio = parseInt(prompt('dato invalido. ingrese el precio del producto'));
		}
		//la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
		cantidad = parseInt(prompt('ingrese la cantidad solicitada'));
		while (cantidad < 0 || cantidad > 1000 || isNaN(cantidad)) {
			cantidad = parseInt(prompt('dato invalido. ingrese la cantidad solicitada'));
		}
		fabricante = prompt('ingrese el nombre del fabricante');



		if (producto == 'alcohol') {

			//alcohol mas barato anclar el fabricante y cantidades
			if (flagAlcohol || precio < precioMin) {
				precioMin = precio;
				fabricanteMin = fabricante;
				cantidadMin = cantidad;
				flagAlcohol = 0;
			}
		}

		//con swich contar tipo y acum cantidad
		switch (producto) {
			case 'alcohol':
				acumcantA += cantidad;
				acumprecioA += precio;
				break;
			case 'jabon':
				//acumular cant de jabon total
				acumcantJ += cantidad;
				acumprecioJ += precio;
				break;
			case 'barbijo':
				acumcantB += cantidad;
				acumprecioB += precio;
				break;
		}


	}

	//de la mayor cantidad anclar el tipo y sacar el promedio
	if (acumcantA > acumcantB && acumcantA > acumcantJ) {
		productomax = 'alcohol';
		promedioCantMax = acumprecioA / acumcantA;
	} else if (acumcantB > acumcantJ && acumcantB > acumcantA) {
		productomax = 'barbijo';
		promedioCantMax = acumprecioB / acumcantB;
	} else if (acumcantJ > acumcantB && acumcantJ > acumcantA) {
		productomax = 'jabon';
		promedioCantMax = acumprecioJ / acumcantJ;
	}

	//rtas
	//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
	console.log('a) Del más barato de los alcohol cuesta' + precioMin + ' la cantidad de unidades es de ' + cantidadMin + 'y el fabricante es ' + fabricanteMin);
	//b) Del tipo con mas unidades, el promedio por compra
	console.log('b) Del tipo con mas unidades es: ' + productomax + ', el promedio por compra es' + promedioCantMax);
	//c) Cuántas unidades de jabones hay en total
	console.log('c) Cuántas unidades de jabones hay en total' + acumcantJ);

}




/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:

*/