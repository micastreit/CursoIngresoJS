function mostrar() {
  let producto;
  let precio = 0;
  let cantidad = 0;
  let seguir;
  let acumCemento = 0;
  let acumCal = 0;
  let acumArena = 0;
  let acumBolsas;
  let maxtipo;
  let maxprecio;
  let tipomaxbolsas;
  let preciobruto = 0;
  let precioneto;
  let importe;
  let flag = 1;

  do {
    //Tipo validad("arena";"cal";"cemento")
    producto = prompt('ingrese un tipo de producto (cal,cemento, arena');
    while (producto != 'arena' && producto != 'cal' && producto != 'cemento') {
      producto = prompt('dato invalido. ingrese un tipo de producto (cal,cemento, arena');
    }
    //Cantidad de bolsas,
    cantidad = parseInt(prompt('ingrese la cantidad de bolsas para este producto'));
    while (cantidad <= 0 || isNaN(cantidad)) {
      cantidad = parseInt(prompt('dato invalido. ingrese la cantidad de bolsas para este producto'));
    }
    //Precio por bolsa (más de cero ),
    precio = parseFloat(prompt('ingrese el precio por bolsa'));
    while (precio <= 0 || isNaN(precio)) {
      precio = parseFloat(prompt('dato invalido. ingrese el precio por bolsa'));
    }

    //ir sumando los precios brutos
    importe = cantidad * precio;
    preciobruto = preciobruto + importe;

    //switch con tipo
    switch (producto) {
      //acumbolsas por tipo
      case 'arena':
        acumArena += cantidad;
        break;
      case 'cal':
        acumCal += cantidad;
        break;
      case 'cemento':
        acumCemento += cantidad;
        break;
    }

    //comparar el precio mas alto y anclar eltipo de producto
    if (flag || precio > maxprecio) {
      maxprecio = precio;
      maxtipo = producto;
      flag = 0;
    }



    //hasta que el cliente quiera:
    seguir = prompt('desea ingresar otro producto?');
  } while (seguir == 'si');

  //acumular cant de bolsas
  acumBolsas = acumCal + acumArena + acumCemento;

  if (acumArena > acumCal && acumArena > acumCemento) {
    tipomaxbolsas = 'arena';
  } else if (acumCal >= acumArena && acumCal > acumCemento) {
    tipomaxbolsas = 'cal';
  } else if (acumCemento > acumCal && acumCemento > acumArena) {
    tipomaxbolsas = 'cemento';
  }


  precioneto = preciobruto;
  //Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
  if (acumBolsas > 10 && acumBolsas < 30) {
    precioneto = preciobruto - preciobruto * 0.15;
    //Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
  } else if (acumBolsas >= 30) {
    precioneto = preciobruto - preciobruto * 0.25;
  }

  //a) El importe total a pagar , bruto sin descuento y...
  console.log('a) El importe total a pagar , bruto sin descuento: ' + preciobruto);
  //b) el importe total a pagar con descuento(solo si corresponde)
  if (precioneto != preciobruto) {
    console.log('b) el importe total a pagar con descuento(solo si corresponde)' + precioneto);
  }
  //d) Informar el tipo con mas cantidad de bolsas.
  console.log('d) Informar el tipo con mas cantidad de bolsas:' + tipomaxbolsas);
  //f) El tipo mas caro
  console.log('f) El tipo mas caro: ' + maxtipo + ' con un precio de $' + maxprecio);

}