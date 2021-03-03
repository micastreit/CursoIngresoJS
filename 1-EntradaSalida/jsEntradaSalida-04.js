/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
/*
function mostrar()


{
	let nombre;
	nombre = prompt("Ingrese su nombre");
	document.getElementById("txtIdNombre").value = nombre;

}
*/

/* Ingresar descripcion por PROMPT y precio por ID 
Mostrar un alert con la descripcion y precio del producto aumentado en un 30%  */

function mostrar()

{
let descripcion;
let precio;
let incremento;
let preciofinal;

precio = parseInt(document.getElementById("txtIdPrecio").value);
descripcion = prompt("Ingrese una descripcion del producto.");
incremento = 30 * precio / 100;
preciofinal = precio + incremento;

alert("El producto seleccionado es: " + descripcion + " y tiene un valor final de " + preciofinal)

}