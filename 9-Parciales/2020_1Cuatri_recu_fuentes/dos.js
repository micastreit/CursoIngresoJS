function mostrar() {
  //definir variables
  // producto precio cantidad precioneto preciobruto cantACC preciomayorcompa
  let producto;
  let precio = 0;
  let cantidad = 0;
  let preciobruto;
  let precioneto;
  let cantArena = 0;
  let cantCal = 0;
  let cantCemento = 0;
  let cantidadtotal;
  let preciomayorompra;
  let productomayorcompra;
  let productomayorcant;
  let precioCal = 0;
  let precioArena = 0;
  let precioCemento = 0;
  let seguir;
  let flagPrecio = 1;
  do {
    //pedir y validar variables
    //Tipo validad("arena";"cal";"cemento")
    producto = prompt('ingrese un producto (arena, cemento, cal)');
    while (producto != 'arena' && producto != 'cal' && producto != 'cemento') {
      producto = prompt('dato invalido. ingrese un producto (arena, cemento, cal)');
    }
    //Cantidad de bolsas,
    cantidad = parseInt(prompt('ingrese la cantidad de bolsas requeridas.'));
    while (cantidad <= 0 || isNaN(cantidad)) {
      cantidad = parseInt(prompt('dato invalido. ingrese la cantidad de bolsas requeridas.'));
    }
    //Precio por bolsa (más de cero ),
    precio = parseFloat(prompt('ingrese el precio por unidad de bolsa'));
    while (precio <= 0 || isNaN(precio)) {
      precio = parseFloat(prompt('dato invalido. ingrese el precio por unidad de bolsa'));
    }

    //acumular las cant de cada tipo
    switch (producto) {
      case 'arena':
        cantArena = cantArena + cantidad;
        precioArena = precioArena + precio * cantidad;
        break;
      case 'cal':
        cantCal = cantCal + cantidad;
        precioCal = precioCal + precio * cantidad;
        break;
      case 'cemento':
        cantCemento = cantCemento + cantidad;
        precioCemento = precioCemento + precio * cantidad;
        break;
    }

    //comparar el tipo mas caro
    if (flagPrecio) {
      preciomayorompra = precio;
      productomayorcompra = producto;
      flagPrecio = 0;
    }
    if (precio > preciomayorompra) {
      preciomayorompra = precio;
      productomayorcompra = producto;
    }

    //while para pedir mas productos
    seguir = prompt('desea agregar otro producto?');
  } while (seguir == 'si');

  //al terminar la compra el cliente accede a un descuento segun las bolsas en total
  //crear los descuentos despues del while
  cantidadtotal = cantCemento + cantCal + cantArena;
  preciobruto = precioArena + precioCal + precioCemento;

  //Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
  if (cantidadtotal > 10 && cantidadtotal < 30) {
    precioneto = preciobruto - preciobruto * 0,15;
    //Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
  } else if (cantidadtotal > 30) {
    precioneto = preciobruto - preciobruto * 0,25;
  }

  if (cantArena > cantCal && cantArena > cantCal) {
    productomayorcant = 'arena';
  } else if (cantCal > cantArena && cantCal > cantCemento) {
    productomayorcant = 'cal';
  } else if (cantCemento > cantCal && cantCemento > cantArena) {
    productomayorcant = 'cemento';
  }
  //rtas
  //a) El importe total a pagar , bruto sin descuento y...
  console.log('a) El importe total a pagar , bruto sin descuento' + preciobruto);
  //b) el importe total a pagar con descuento(solo si corresponde)
  console.log('b) el importe total a pagar con descuento(solo si corresponde)' + precioneto);
  //d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
  console.log('d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.' + productomayorcant);
  //f) El tipo mas caro
  console.log('f) El tipo mas caro' + productomayorcompra);

}
