function mostrar()
{
let precio;
let descuento;
let preciofinal;
precio=parseFloat(prompt('ingrese el precio del producto'));
descuento=parseFloat(prompt('ingrese el porcentaje de descuento'));
preciofinal=precio - precio * descuento / 100;
document.getElementById('elPrecioFinal').value=preciofinal;
}
