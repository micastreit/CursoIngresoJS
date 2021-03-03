
function mostrar() {
	//definir variables
	//producto precio cantidad marca fabricante preciomaxjabon cantidadjabonmax
	// fabricantejabonmax cantidadmaxma productocantmax promedio acumprecio contprecio cantbarbijos 
	let producto;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let precioJmax = 0;
	let cantJmax = 0;
	let fabricanteJmax = 0;
	let mayorcantidad;
	let mayorproducto;
	let promedio;
	let cantJ = 0;
	let cantA = 0;
	let cantB = 0;
	let acumprecioA = 0;
	let acumprecioB = 0;
	let acumprecioJ = 0;
	let flag = 1;

	//repetir 5 veces
	for (i = 0; i < 5; i++) {

		//pedir y validar variables
		//el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
		producto = prompt('ingrese un producto (alcohol, barbijo o jabon');
		while (producto != 'jabon' && producto != 'alcohol' && producto != 'barbijo') {
			producto = prompt('dato invalido. ingrese un producto (alcohol, barbijo o jabon');
		}
		//el precio (validar entre 100 y 300),
		precio = parseFloat(prompt('ingrese el precio del produto'));
		while (precio < 100 || precio > 300) {
			precio = parseFloat(prompt('dato invalido. ingrese el precio del produto'));
		}
		//la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
		cantidad = parseInt(prompt('ingrese la cantidad de inidades'));
		while (cantidad < 0 || isNaN(cantidad) || cantidad > 1000) {
			cantidad = parseInt(prompt('dato invalido. ingrese la cantidad de inidades'));
		}
		//la Marca y el fabricante.
		marca = prompt('ingrese la marca del producto');
		fabricante = prompt('ingrese el fabricante del producto');

		//switch de productos
		switch (producto) {
			//sacar la cant total a cada producto
			case 'jabon':
				cantJ = cantJ + cantidad;
				//pedir el jabon mas caro y anclar unidades y fabricante
				if (flag) {
					precioJmax = precio;
					cantJmax = cantidad;
					fabricanteJmax = fabricante;
					flag = 0;
				}
				if (precio > precioJmax) {
					precioJmax = precio;
					cantJmax = cantidad;
					fabricanteJmax = fabricante;
				}
				acumprecioJ = acumprecioJ + precio;
				break;
			case 'barbijo':
				//acumular barbijos totales
				cantB = cantB + cantidad;
				acumprecioB = acumprecioB + precio;
				break;
			case 'alcohol':
				cantA = cantA + cantidad;
				acumprecioA = acumprecioA + precio;
				break;

		}


	}

	// comparar el producto con mayor cantidad
	if (cantA >= cantB && cantA >= cantJ) {
		mayorproducto = acumprecioA;
		mayorcantidad = cantA;
	} else if (cantB >= cantA && cantB >= cantJ) {
		mayorproducto = acumprecioB;
		mayorcantidad = cantB;
	} else if (cantJ >= cantA && cantJ >= cantB) {
		mayorproducto = acumprecioJ;
		mayorcantidad = cantJ;
	}
	//promedio de la compra del producto con mayor cantidad
	promedio = mayorcantidad * mayorproducto;


	//a) Del más caro de los jabones, la cantidad de unidades y el fabricante
	console.log('a) Del más caro de los jabones es de: $' + precioJmax + ', la cantidad de unidades' + cantJmax + ' y el fabricante:' + fabricanteJmax);
	//b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
	console.log('b) Del tipo de producto con más unidades en total de la compra, el promedio por compra' + promedio);
	//c) Cuántas unidades de Barbijos se compraron en total
	console.log('c) Cuántas unidades de Barbijos se compraron en total' + cantB);


}
