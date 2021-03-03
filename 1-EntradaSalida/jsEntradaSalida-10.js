/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
/* 
function mostrarAumento()
{let importe;
	let descuento;
	let resultado;
	importe = parseInt(document.getElementById("txtIdImporte").value);
	descuento = 25 * importe / 100
	resultado = importe - descuento
	document.getElementById("txtIdResultado").value = resultado ;

}
*/

function mostrarAumento()

/* Pedir al usuario nombre del producto importe y porcentaje de descuento
mostrar el msj Usted compro x producto con xx descuento quedando un precio final de xxx */
{
let producto;
let precio;
let preciofinal;
let descuento;

producto = prompt("Ingrese el nombre del producto");
precio = parseFloat(document.getElementById("txtIdPrecio").value);
descuento = parseFloat(document.getElementById("txtIdDescuento").value);
descuento = descuento * precio / 100;
preciofinal = precio - descuento;

alert("Usted compro " + producto + "con un descuento del "+ descuento + "%," + " quedando un precio final de "+ preciofinal)

}
