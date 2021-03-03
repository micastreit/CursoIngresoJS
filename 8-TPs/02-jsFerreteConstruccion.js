/*2.	Para el departamento de Construcción: */

/*A.  mostrar la cantidad de alambre a comprar 
 si se ingresara el largo y el ancho de un terreno rectangular
 y se debe alambra con tres hilos de alambre. */
function Rectangulo() {
    let largo;
    let ancho;
    let resultado;
    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);
    resultado = (largo * 2 + ancho * 2) * 3;
    alert("Se necesitan " + resultado + "m. " + "de alambre")
}
/*B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular
 y se debe alambra con tres hilos de alambre. */
function Circulo() {
    let radio;
    let resultado;
    radio = parseFloat(document.getElementById("txtIdRadio").value);
    resultado = (2 * Math.PI * radio) * 3;
    alert("Se necesitan " + resultado + "m. " + "de alambre")

}
/*C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal,
 debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen. */
function Materiales() {
    let largo;
    let ancho;
    let area;
    let cemento;
    let cal;
    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);
    area = largo * ancho;
    cemento = area * 2;
    cal = area * 3;
    alert("Se necesitan " + cemento + " de cemento y " + cal + " de cal.")

}