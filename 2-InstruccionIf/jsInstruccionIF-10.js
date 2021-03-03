function mostrar()
{
	//Asignar una nota random al examen
	let numero;
	let min;
	let max;
min = 1;
max = 10;
numero = Math.floor ( Math.random() * (max - min + 1) + min);

	/*mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4 */

if(numero >= 9 && numero <= 10) {
alert("Nota: " + numero + " EXCELENTE.") } 
else if (numero >= 4 && numero < 9) {
alert("Nota: " + numero + " APROBO.") } 
else {
alert("Nota: " + numero + " Vamos, la proxima se puede.") }

}
//FIN DE LA FUNCIÓN