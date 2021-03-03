function mostrar() {
    let precio;
    let descuento;
    let preciofinal;
    precio = parseInt(prompt('ingrese el precio:'));
    descuento = parseInt(prompt('ingrese el porcentaje de descuento:'));
    preciofinal = precio - precio * descuento / 100;
    document.getElementById("elPrecioFinal").value = preciofinal;
}
/*Bienvenidos.
Pedir por prompt el precio y el porcentaje de descuento,
 mostrar el precio final con descuento por id. */